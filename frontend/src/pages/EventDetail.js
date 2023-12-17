import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useLoaderData();

  console.log(data);

  return <EventItem event={data.event} />;
};

export default EventDetail;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  console.log("event detail", id);
  const response = await fetch("http://localhost:8080/events/" + id);
  console.log(response);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    
    return response;
  }
};

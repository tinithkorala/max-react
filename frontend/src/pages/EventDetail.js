import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetail</h1>
      <p>Event Id: {params.eventId}</p>
    </>
  );
};

export default EventDetail;

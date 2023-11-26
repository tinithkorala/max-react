import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if(!response.ok) {
    throw new Error(res.message || 'Something went wrong, failed to send request');
  }
  return resData;
}

const useHttp = (url, config, initialData) => {

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async function sendRequest() {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if(config && config.method === 'GET' || !config.method) {
      sendRequest();
    }
  }, [sendRequest, config])

  return {
    data,
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp
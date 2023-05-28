import { useState, useEffect } from "react";
export default function Task1() {
  const apiUrl = "https://api.quotable.io/random";
  const [data, setData] = useState({});
  useEffect(() => {
    function apiCall() {
      fetch(apiUrl)
        .then((result) => result.json())
        .then((result) => setData(result));
    }
    apiCall();
    const interval = setInterval(() => apiCall(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

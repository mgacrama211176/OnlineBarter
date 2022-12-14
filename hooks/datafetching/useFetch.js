import { useEffect } from "react";

const useFetch = (url, method, body = {}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        return result;
      } catch (error) {
        throw new Error("Jarren Betlog");
      }
    };
    fetchData();
  }, [url, method, body]);
};

export default useFetch;

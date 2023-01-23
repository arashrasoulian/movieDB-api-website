import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [Details, setDetails] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch");
          }
          return res.json();
        })

        .then((data) => {
          setDetails(data);
          setIsloading(false);
          setError(null);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return [Details, isloading, error];
}

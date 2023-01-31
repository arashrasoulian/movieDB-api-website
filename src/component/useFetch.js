import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [Details, setDetails] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0,left:0 });
  }, []);
  useEffect(() => {
    
    if (url) {
      setIsloading(true)
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
      }, 500);
    } else {
      setDetails(null);
      setIsloading(true);
      setError(null);
    }
  }, [url]);
  return [Details, isloading, error];
}

 
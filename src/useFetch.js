import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [ data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
         fetch(url)
         .then(res => {
             if(!res.ok) {
                 throw Error('could not fetch any data for the resources!');
             }
          return res.json();
     })
     .then(data => {
         setData(data);
         setisPending(false);
         setError();
     })
     .catch(err => {
         setisPending(false);
         setError(err.message);
     });
        }, 1000);
     },[url]); //([] is called dependencies which helps not to run everytime)
     return {data, isPending, error};
}

export default useFetch;
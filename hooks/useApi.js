import { useState } from "react";
export default  useApi=(apiFunc)=>
{
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);   

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    if (Array.isArray(response.data)) {
      setListing(response.data);
    }
  };
  return {data,error,loading,request};
}
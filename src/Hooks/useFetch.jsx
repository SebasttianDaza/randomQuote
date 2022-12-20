import { useCallback, useState } from "react";
import { sendRequest } from "@Services";

const useFetch = () => {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async ({ url, method, body }) => {
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: null,
        error: null,
      });

      const result = await sendRequest({ url, method, body });

      setFetchState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
        data: result,
      });

      return result;
    } catch (error) {
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: null,
        error,
      });
    }
  }, []);

  return [fetchState, fetchData];
};

export default useFetch;

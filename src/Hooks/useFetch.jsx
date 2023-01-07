import { useCallback, useState } from "react";
import { sendRequest } from "@Services";

const useFetch = () => {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    isData: null,
    error: null,
  });

  const fetchData = useCallback(async ({ url, method, body }) => {
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isError: false,
        isData: null,
        error: null,
      });

      const result = await sendRequest({ url, method, body });

      setFetchState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
        isData: result,
      });

      return result;
    } catch (error) {
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        isData: null,
        error,
      });
    }
  }, []);

  return [fetchState, fetchData, setFetchState];
};

export default useFetch;

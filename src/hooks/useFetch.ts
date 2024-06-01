import { useState } from 'react';

const useFetch = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fetchFunction: (...args: Parameters<T>) => ReturnType<T>,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = async (...args: Parameters<T>) => {
    try {
      setLoading(true);
      setError(false);

      const result = await fetchFunction(...args);
      return result;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetch,
    loading,
    error,
  };
};

export default useFetch;

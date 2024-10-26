import { useEffect, useState } from "react";
import { CATEGORIES_LIST } from "../data";
import { ICategory } from "../types";

export default function useGetCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ICategory[] | undefined>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setData(CATEGORIES_LIST);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return {
    data,
    isLoading,
  };
}

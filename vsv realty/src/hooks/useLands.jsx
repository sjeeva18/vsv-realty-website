import React from "react";
import { getAllLands } from "../utils/api";
import { useQuery } from "react-query";

const useLands = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allLands",
    getAllLands,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useLands;

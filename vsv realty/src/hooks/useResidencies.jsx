import React from "react";
import { getAllResidencies } from "../utils/api";
import { useQuery } from "react-query";

const useResidencies = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allResidencies",
    getAllResidencies,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useResidencies;

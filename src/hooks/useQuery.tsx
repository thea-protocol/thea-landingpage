import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const location = useLocation();
  const search = location.search;
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;

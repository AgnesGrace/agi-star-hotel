import { useSearchParams } from "react-router";

import Input from "./Input";
export default function SearchInput({ fieldName }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(searchVal) {
    searchParams.set(fieldName, searchVal);
    setSearchParams(searchParams);
  }
  return (
    <Input
      placeholder="Filter by Type/Number"
      onChange={(e) => handleClick(e.target.value)}
    />
  );
}

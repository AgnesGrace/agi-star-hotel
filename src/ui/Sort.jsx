import { useSearchParams } from "react-router";
import Select from "./Select";

export default function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortVal = searchParams.get("sort") || "";

  function handleSelected(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      onChange={handleSelected}
      value={sortVal}
    />
  );
}

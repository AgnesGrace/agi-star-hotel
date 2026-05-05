import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import SearchInput from "../../ui/SearchInput";

export default function RoomsOperations() {
  return (
    <TableOperations>
      <SearchInput fieldName="searchVal" />
      <Filter filterField="searchVal" />
      <Sort
        options={[
          { label: "Sort by room type (↑)", value: "roomType-Asc" },
          { label: "Sort by room type (↓)", value: "roomType-Dsc" },
          { label: "Room Number (↑)", value: "roomNumber-Asc" },
          { label: "Room Number (↓)", value: "roomNumber-Dsc" },
          { label: "Price (↑)", value: "regularPrice-Asc" },
          { label: "Price (↓)", value: "regularPrice-Dsc" },
        ]}
      />
    </TableOperations>
  );
}

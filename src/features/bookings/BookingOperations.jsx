import Sort from "../../ui/Sort";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SearchInput from "../../ui/SearchInput";

export default function BookingOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "unconfirmed", label: "Unconfirmed" },
          { value: "confirmed", label: "Confirmed" },
          { value: "checked-out", label: "Checked out" },
        ]}
      />
    </TableOperations>
  );
}

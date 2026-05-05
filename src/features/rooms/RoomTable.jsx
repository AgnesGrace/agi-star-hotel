import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";
import useRooms from "./hooks/useRooms";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

export default function RoomTable() {
  const { isLoading, roomsData } = useRooms();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchVal = searchParams.get("searchVal") || "all";
  let filteredRoomData;

  switch (searchVal) {
    case "all":
      filteredRoomData = roomsData;
      break;
    case "discount":
      filteredRoomData = roomsData.filter((room) => room.discount);
      break;
    case "no-discount":
      filteredRoomData = roomsData.filter((room) => !room.discount);
      break;

    default:
      filteredRoomData = roomsData.filter(
        (room) =>
          room.roomType.toLowerCase().includes(searchVal.toLowerCase()) ||
          String(room.roomNumber).includes(searchVal),
      );
  }

  const sort = searchParams.get("sort") || "roomNumber-Asc";
  const [field, direction] = sort.split("-");
  const sortDir = direction.toLowerCase() === "asc" ? 1 : -1;
  const sortedRooms = filteredRoomData?.sort((a, b) => {
    if (typeof a[field] === "string") {
      return a[field].localeCompare(b[field]) * sortDir;
    } else {
      return (a[field] - b[field]) * sortDir;
    }
  });

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1.2fr 1fr 1fr 1fr 2fr 0.4fr">
        <Table.Header role="row">
          <div>Room Number</div>
          <div>Room Type</div>
          <div>Floor</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Description</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedRooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
}

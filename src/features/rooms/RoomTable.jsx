import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";
import useRooms from "./hooks/useRooms";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 1fr 2fr 0.4fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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
  console.log("searchVal", searchVal);
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1.2fr 1fr 1fr 1fr 1fr 2fr 0.4fr">
        <Table.Header role="row">
          <div>Room Number</div>
          <div>Room Type</div>
          <div>Floor</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Description</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredRoomData}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
}

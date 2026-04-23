import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";
import useRooms from "./hooks/useRooms";

const Table = styled.div`
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);

  margin-top: 2.8rem;

  border: 1px solid var(--color-grey-200);
  border-radius: 7px;
  overflow: hidden;
`;

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

  if (isLoading) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Room Number</div>
        <div>Room Type</div>
        <div>Floor</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div>Description</div>
        <div></div>
      </TableHeader>
      {roomsData.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </Table>
  );
}

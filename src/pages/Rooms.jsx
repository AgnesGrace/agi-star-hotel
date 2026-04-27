import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTable from "../features/rooms/RoomTable";
import AddNewRoom from "../features/rooms/AddNewRoom";
import RoomsOperations from "../features/rooms/RoomsOperations";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Rooms</Heading>
        <RoomsOperations />
        <AddNewRoom />
      </Row>
      <Row type="vertical">
        <RoomTable />
      </Row>
    </>
  );
}

export default Rooms;

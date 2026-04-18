import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTable from "../features/rooms/RoomTable";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Rooms</Heading>
        <p>handle sorting and filtering later</p>
      </Row>
      <Row type="horizontal">
        <RoomTable />
      </Row>
    </>
  );
}

export default Rooms;

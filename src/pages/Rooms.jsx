import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTable from "../features/rooms/RoomTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  const [showRoomForm, setShowRoomForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Rooms</Heading>
        <p>handle sorting and filtering later</p>
        <Button
          size="medium"
          variation="primary"
          onClick={() => setShowRoomForm((prev) => !prev)}
        >
          {!showRoomForm ? "Add Room" : "Close"}
        </Button>
      </Row>
      <Row type="vertical">
        <RoomTable />

        {showRoomForm && <CreateRoomForm />}
      </Row>
    </>
  );
}

export default Rooms;

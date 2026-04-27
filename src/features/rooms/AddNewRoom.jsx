import { useState } from "react";
import styled from "styled-components";

import CreateRoomForm from "./CreateRoomForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import RoomTable from "./RoomTable";

const StyledAddNewRoom = styled.div`
  margin-bottom: 1rem;
`;

/*export default function AddNewRoom() {
  const { isAddingRoom } = useAddRoom();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <StyledAddNewRoom>
        <Button
          size="medium"
          variation="primary"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          {!isModalOpen ? "Add Room" : "Close"}
        </Button>
        {isModalOpen && (
          <Modal onCloseModal={handleCloseModal}>
            <FormWrapper>
              <CreateRoomForm onCloseModal={handleCloseModal} />
            </FormWrapper>
          </Modal>
        )}
      </StyledAddNewRoom>
      {isAddingRoom && <Spinner fullScreen />}
    </>
  );
}
*/
export default function AddNewRoom() {
  return (
    <Modal>
      <Modal.Open windowToOpen="room-forms">
        <Button size="small" variation="primary">
          Add Room
        </Button>
      </Modal.Open>
      <Modal.Window name="room-forms">
        <CreateRoomForm />
      </Modal.Window>
    </Modal>
  );
}

import styled from "styled-components";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoDuplicate } from "react-icons/io5";
import Table from "../../ui/Table";
import { formatCurrency, stringSlicer } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoom } from "../../services/apirooms";
import toast from "react-hot-toast";
import CreateRoomForm from "./CreateRoomForm";
import Spinner from "../../ui/Spinner";
import useAddRoom from "./hooks/useAddRoom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-primary-900);
`;

const StyledIconContainer = styled.div`
  width: fit-content;
  background: inherit;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  outline: none;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-red-700);
    transition: all 0.3s;
  }

  &:hover svg {
    color: var(--color-red-900);
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.div`
  position: absolute;
  bottom: 125%;
  left: 0;
  background-color: var(--color-primary-900);
  color: #fff;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1.2rem;
  width: max-content;
  max-width: 30rem;
  transition: opacity 0.3s;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
`;
const FormWrapper = styled.div`
  height: 50rem;
`;

export default function RoomRow({ room }) {
  const queryClient = useQueryClient();
  const { addRoomMutate, isAddingRoom } = useAddRoom();
  const {
    id,
    roomNumber,
    roomType,
    floor,
    maxcapacity: capacity,
    regularPrice,
    discount,
    description,
    image,
  } = room;

  const handleDeleteRoom = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(["rooms"]);
      toast.success(`Room ${id} deleted successfully`);
    },
    onError: (err) => toast.error(err.message),
  });

  function handleDuplicateRoom() {
    addRoomMutate({
      roomType: `${roomType} Copied ${roomNumber}`,
      roomNumber,
      floor,
      maxcapacity: capacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }
  return (
    <>
      <Table.Row>
        <Room>{String(roomNumber).padStart(3, "0")}</Room>
        <div>{roomType}</div>
        <div>{floor}</div>

        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? formatCurrency(discount) : "---"}</Discount>
        <TooltipWrapper>
          {stringSlicer(description, 15)}
          <TooltipText>{description}</TooltipText>
        </TooltipWrapper>
        <StyledIconContainer>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Modal.Open windowToOpen="edit">
                  <Menus.Button
                    icon={
                      <MdEdit style={{ color: "var(--color-primary-900)" }} />
                    }
                  >
                    Edit
                  </Menus.Button>
                </Modal.Open>
                <Menus.Button
                  icon={
                    <IoDuplicate
                      style={{ color: "var(--color-primary-900)" }}
                    />
                  }
                  onClick={handleDuplicateRoom}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open windowToOpen="delete">
                  <Menus.Button
                    icon={
                      <MdDelete style={{ color: "var(--color-red-900)" }} />
                    }
                  >
                    Delete
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="Room"
                  disabled={handleDeleteRoom.isPending}
                  onConfirm={() => handleDeleteRoom.mutate(id)}
                />
              </Modal.Window>
              <Modal.Window name="edit">
                <CreateRoomForm clickedRoom={room} />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </StyledIconContainer>
      </Table.Row>
    </>
  );
}

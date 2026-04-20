import styled from "styled-components";
import { MdDelete, MdEdit } from "react-icons/md";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 1fr 2fr 0.4fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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

import { formatCurrency, stringSlicer } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoom } from "../../services/apirooms";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateRoomForm from "./CreateRoomForm";

export default function RoomRow({ room }) {
  const queryClient = useQueryClient();

  const [showForm, setShowForm] = useState(false);

  const {
    id,
    roomNumber,
    roomType,
    floor,
    maxcapacity: capacity,
    regularPrice,
    discount,
    description,
  } = room;

  const handleDeleteRoom = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(["rooms"]);
      toast.success(`Room ${id} deleted successfully`);
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      {" "}
      <TableRow role="row">
        <Room>{String(roomNumber).padStart(3, "0")}</Room>
        <div>{roomType}</div>
        <div>{floor}</div>
        <div>{capacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <TooltipWrapper>
          {stringSlicer(description, 25)}
          <TooltipText>{description}</TooltipText>
        </TooltipWrapper>
        <StyledIconContainer>
          <MdDelete onClick={() => handleDeleteRoom.mutate(id)} />
          <MdEdit onClick={() => setShowForm((prev) => !prev)} />
        </StyledIconContainer>
      </TableRow>
      {showForm && <CreateRoomForm />}
    </>
  );
}

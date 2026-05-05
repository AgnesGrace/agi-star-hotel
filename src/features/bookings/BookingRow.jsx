import styled from "styled-components";
import { format } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";

const StyledBookingRow = styled.div`
  cursor: pointer;

  &:hover {
    background: var(--color-grey-200);
  }
`;
const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    totalPrice,
    status,
    rooms: { roomType, roomNumber },
    guests: { surname, firstName, middleName, email },
  },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "red",
    confirmed: "primary",
    "checked-out": "silver",
  };

  return (
    <StyledBookingRow onClick={() => navigate(`/bookings/${bookingId}`)}>
      <Table.Row>
        <Room>{String(roomNumber).padStart(3, "0")}</Room>

        <Stacked>
          <span>
            {surname} {firstName} {middleName}
          </span>
          <span>{email}</span>
        </Stacked>

        <Stacked>
          <span>from &mdash; to</span>
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>
        <Amount>{formatCurrency(totalPrice)}</Amount>
        <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>

        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button icon={<MdDelete />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </Table.Row>
    </StyledBookingRow>
  );
}

export default BookingRow;

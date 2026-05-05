import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./hooks/useBooking";
import Spinner from "../../ui/Spinner";
import { fromatDateWithSuffix } from "../../utils/helpers";
import { useNavigate } from "react-router";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  height: 24rem;
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.6rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);

  h2 {
    color: white;
    margin: 0;
    font-size: 1.8rem;
  }

  p {
    color: #ddd;
    font-size: 1.2rem;
  }
`;
const StyledBookingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  padding: 2.4rem;
  border-radius: 12px;
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;

  span {
    color: var(--color-grey-500);
  }

  strong {
    font-weight: 500;
  }
`;

const StyledPriceBox = styled.div`
  margin-top: 2.4rem;
  padding: 2rem;
  border-radius: 10px;
  background: var(--color-grey-50);
`;

const TotalRow = styled(DetailRow)`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Divider = styled.hr`
  margin: 1.2rem 0;
  border: none;
  border-top: 1px solid var(--color-grey-200);
`;

const StyledNotes = styled.div`
  margin-top: 2.4rem;
  padding: 2rem;
  border-radius: 10px;
  background: var(--color-grey-50);

  p {
    color: var(--color-grey-600);
    font-size: 1.4rem;
  }
`;

function BookingDetail() {
  const { bookingData, isLoading, error } = useBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numGuests,
    hasBreakfast,
    isPaid,
    roomPrice,
    totalPrice,
    paymentMethod,
    checkInTime,
    checkoutTime,
    observation,
    roomId,
    guestId,
    status,
    bookingExtrasPrice,
    numNights,
    rooms: {
      floor,
      image,
      bedType,
      discount,
      roomSize,
      roomType,
      amenities,
      roomNumber,
      description,
      isAvailable,
      maxcapacity,
      regularPrice,
    },
    guests: {
      vip,
      email,
      phone,
      gender,
      address,
      surname,
      firstName,

      middleName,
      nationalID,
      nationality,
      emergencyContact,
      preferredRoomType,
    },
  } = bookingData;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{"000123"}</Heading>
          <Tag type={statusToTagName[status]}>
            {status?.replace("-", " ") || "confirmed"}
          </Tag>
        </HeadingGroup>

        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <StyledImageWrapper>
        <RoomImage
          src={
            image ||
            "https://danezqbffwlyabajidfk.supabase.co/storage/v1/object/public/rooms_images/0.06479350194564448-deluxe_1.jpg"
          }
          alt={roomType || "Room"}
        />
        <ImageOverlay>
          <h2>{roomType || "Deluxe Room"}</h2>
          <p>Room #{roomNumber || "101"}</p>
        </ImageOverlay>
      </StyledImageWrapper>
      <StyledBookingCard>
        <Section>
          <SectionTitle>Guest</SectionTitle>

          <DetailRow>
            <span>Name</span>
            <strong>
              {surname || "John Doe"} {firstName} {middleName}
            </strong>
          </DetailRow>

          <DetailRow>
            <span>Email</span>
            <strong>{email || "johndoe@email.com"}</strong>
          </DetailRow>

          <DetailRow>
            <span>Payment</span>
            <strong>{paymentMethod || "Card"}</strong>
          </DetailRow>

          <DetailRow>
            <span>Status</span>
            <strong>{isPaid ? "Paid" : "Unpaid"}</strong>
          </DetailRow>
        </Section>

        <Section>
          <SectionTitle>Stay details</SectionTitle>

          <DetailRow>
            <span>Room</span>
            <strong>
              {roomType || "Deluxe Room"} • #{roomNumber || "101"}
            </strong>
          </DetailRow>

          <DetailRow>
            <span>Check-in</span>
            <strong>
              {fromatDateWithSuffix(startDate) || "12 Aug 2026"}{" "}
              <span> • </span>
              {checkInTime || "14:00"}
            </strong>
          </DetailRow>

          <DetailRow>
            <span>Check-out</span>
            <strong>
              {fromatDateWithSuffix(endDate) || "16 Aug 2026"} <span> • </span>
              {checkoutTime || "11:00"}
            </strong>
          </DetailRow>

          <DetailRow>
            <span>Nights</span>
            <strong>{numNights || 4}</strong>
          </DetailRow>

          <DetailRow>
            <span>Guests</span>
            <strong>{numGuests || 2}</strong>
          </DetailRow>
        </Section>
      </StyledBookingCard>

      <StyledPriceBox>
        <SectionTitle>Price summary</SectionTitle>

        <DetailRow>
          <span>Room price</span>
          <strong>${regularPrice || 200}</strong>
        </DetailRow>

        <DetailRow>
          <span>Extras</span>
          <strong>${bookingExtrasPrice || 50}</strong>
        </DetailRow>

        <Divider />

        <TotalRow>
          <span>Total</span>
          <strong>${totalPrice || 250}</strong>
        </TotalRow>
      </StyledPriceBox>

      <StyledNotes>
        <SectionTitle>Notes</SectionTitle>
        <p>{observation || "No special requests."}</p>
      </StyledNotes>

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button size="small" variation="primary">
            Check in
          </Button>
        )}
        {status === "confirmed" && (
          <Button size="small" variation="secondary">
            Check out
          </Button>
        )}
        <Button variation="danger" size="small">
          Delete booking
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;

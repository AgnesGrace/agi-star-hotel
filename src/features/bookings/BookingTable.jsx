import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import useBookings from "./hooks/useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookingsData, isLoading, error, count } = useBookings();
  if (isLoading) return <Spinner />;
  if (!bookingsData?.length) return <Empty resource="bookings" />;

  return (
    <Menus>
      <Table columns="0.5fr 2.1fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Room Number</div>
          <div>Name</div>
          <div>Dates</div>
          <div>Amount</div>
          <div>Status</div>

          <div></div>
        </Table.Header>

        <Table.Body
          data={bookingsData}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination numResults={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;

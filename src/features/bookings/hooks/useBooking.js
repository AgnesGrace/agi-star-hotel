import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../../services/apiBookings";
import { useParams } from "react-router";

export default function useBooking() {
  const { bookingId } = useParams();
  const {
    data: bookingData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(Number(bookingId)),
    retry: false,
  });

  return { bookingData, isLoading, error };
}

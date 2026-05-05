import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router";
import { getBookingsAfterDate } from "../../../services/apiBookings";

export default function useRecentBookings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const numDays = !searchParams.get("numDays")
    ? 30
    : Number(searchParams.get("numDays"));

  const paramDate = subDays(new Date(), numDays).toISOString();

  const { data: recentBookings, isLoading } = useQuery({
    queryKey: ["recentBooking", numDays],
    queryFn: () => getBookingsAfterDate(paramDate),
  });

  return { recentBookings, isLoading, numDays };
}

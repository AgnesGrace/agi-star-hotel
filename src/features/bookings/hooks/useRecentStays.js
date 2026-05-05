import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router";
import { getStaysAfterDate } from "../../../services/apiBookings";

export default function useRecentStays() {
  const [searchParams, setSearchParams] = useSearchParams();

  const numDays = !searchParams.get("numDays")
    ? 30
    : Number(searchParams.get("numDays"));

  const paramDate = subDays(new Date(), numDays).toISOString();

  const { data: recentStays, isLoading } = useQuery({
    queryKey: ["recentBookingStays", numDays],
    queryFn: () => getStaysAfterDate(paramDate),
  });
  const confirmedBookings = recentStays?.filter(
    (stays) => stays.status === "confirmed" || stays.status === "checked-out",
  );
  return { recentStays, confirmedBookings, isLoading };
}

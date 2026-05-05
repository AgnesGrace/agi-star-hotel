import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router";

export default function useBookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = searchParams.get("page");
  const currentPage = !page ? 1 : Number(page);

  const status = searchParams.get("status");
  const filter =
    !status || status === "all" ? null : { field: "status", value: status };
  const {
    data: { data: bookingsData, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, currentPage],
    queryFn: () => getBookings({ filter, currentPage }),
  });

  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, currentPage + 1],
    queryFn: () => getBookings({ filter, currentPage: currentPage + 1 }),
  });

  return { bookingsData, count, isLoading, error };
}

import { useQuery } from "@tanstack/react-query";

import { getRooms } from "../../../services/apirooms";

export default function useRooms() {
  const {
    isLoading,
    data: roomsData,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { isLoading, roomsData, error };
}

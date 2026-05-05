import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addAndEditRoom } from "../../../services/apirooms";

export default function useAddRoom() {
  const queryClient = useQueryClient();

  const { mutate: addRoomMutate, isPending: isAddingRoom } = useMutation({
    mutationFn: (newRoomData) => addAndEditRoom(newRoomData),
    onSuccess: () => {
      toast.success("Room added successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addRoomMutate, isAddingRoom };
}

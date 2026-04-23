import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting } from "../../../services/apiSettings";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettingsMutate, isPending } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      (queryClient.invalidateQueries({
        queryKey: ["settings"],
      }),
        toast.success("Settings info updated successfully"));
    },
    onError: () => toast.error("Ooops! something went wrong!"),
  });
  return { updateSettingsMutate, isPending };
}

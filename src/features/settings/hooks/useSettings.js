import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../../services/apiSettings";

export default function useSettings() {
  const { data: settingsData, isLoading: isLoadingSettigs } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settingsData, isLoadingSettigs };
}

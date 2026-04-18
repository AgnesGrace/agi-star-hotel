import supabase from "./supabase";

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log(error);
    throw new Error("Failed to load romms data");
  }

  return rooms;
}

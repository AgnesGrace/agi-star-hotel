import supabase, { SUPABASEURL } from "./supabase";

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    throw new Error("Failed to load romms data");
  }

  return rooms;
}

export async function deleteRoom(roomId) {
  const { error } = await supabase.from("rooms").delete().eq("id", roomId);

  if (error) {
    throw new Error("Oops, failed to delete room, please try again!!");
  }
}

export async function addRoom(newRoom) {
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    "",
  );

  const roomImagePath = `${SUPABASEURL}/storage/v1/object/public/rooms_images/${imageName}`;
  const { data, error } = await supabase
    .from("rooms")
    .insert([{ ...newRoom, image: roomImagePath }])
    .select();
  if (error) {
    throw new Error("Oops, something went wrong while adding room");
  }

  const { error: bucketError } = await supabase.storage
    .from("rooms_images")
    .upload(imageName, newRoom.image);

  if (bucketError) {
    await supabase.from("rooms").delete().eq("id", data.id);
  }
  return data;
}

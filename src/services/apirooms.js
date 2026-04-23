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

export async function addAndEditRoom(newRoom, id = null) {
  console.log(id, "id");
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    "",
  );
  const hasSupabaseImgPath = newRoom.image?.startsWith?.(SUPABASEURL);

  const roomImagePath = hasSupabaseImgPath
    ? newRoom.image
    : `${SUPABASEURL}/storage/v1/object/public/rooms_images/${imageName}`;

  let query = supabase.from("rooms");

  if (!id) {
    console.log("whattttt");
    query = query
      .insert([{ ...newRoom, image: roomImagePath }])
      .select()
      .single();
  }

  if (id) {
    console.log("upds");

    query = query
      .update({ ...newRoom, image: roomImagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Oops, something went wrong while adding room");
  }

  if (!hasSupabaseImgPath) {
    const { error: bucketError } = await supabase.storage
      .from("rooms_images")
      .upload(imageName, newRoom.image);

    if (bucketError) {
      await supabase.from("rooms").delete().eq("id", data.id);
    }
  }
  return data;
}

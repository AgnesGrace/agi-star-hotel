import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGESIZE } from "../utils/constants";

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, rooms(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Ooops! Booking not found");
  }

  return data;
}

export async function getBookings({ filter, currentPage }) {
  let query = supabase
    .from("bookings")
    .select(
      "*, rooms(roomType, roomNumber ), guests(surname, firstName, middleName, email)",
      { count: "exact" },
    );
  if (filter !== null) query = query.eq(filter.field, filter.value);

  if (currentPage) {
    const start = (currentPage - 1) * PAGESIZE;
    const end = start + PAGESIZE - 1;
    query = query.range(start, end);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Ooops! Bookings not found");
  }
  return { data, count };
}

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, bookingExtrasPrice, status")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(lastName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.confirmed,endDate.eq.${getToday()})`,
    )
    .order("created_at");

  if (error) {
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    throw new Error("Booking could not be deleted");
  }
  return data;
}

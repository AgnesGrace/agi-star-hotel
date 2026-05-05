import { add } from "date-fns";

function fromBookingDay(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // ...your existing 8

  {
    created_at: fromBookingDay(0, true),
    startDate: fromBookingDay(-2),
    endDate: fromBookingDay(0),
    roomId: 3,
    guestId: 10,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observation: "Early check-in requested",

    status: "checked-out",
    roomPrice: 220,
    bookingExtrasPrice: 80,
    totalPrice: 300,

    paymentMethod: "card",
    checkInTime: "12:00",
    checkoutTime: "11:00",
    roomType: "Deluxe",
  },

  {
    created_at: fromBookingDay(-2, true),
    startDate: fromBookingDay(3),
    endDate: fromBookingDay(7),
    roomId: 2,
    guestId: 11,
    hasBreakfast: false,
    isPaid: false,
    numGuests: 1,
    observation: "",

    status: "unconfirmed",
    roomPrice: 180,
    bookingExtrasPrice: 20,
    totalPrice: 200,

    paymentMethod: "transfer",
    checkInTime: "14:00",
    checkoutTime: "11:00",
    roomType: "Standard",
  },

  {
    created_at: fromBookingDay(-7, true),
    startDate: fromBookingDay(1),
    endDate: fromBookingDay(5),
    roomId: 4,
    guestId: 12,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 3,
    observation: "Group booking",

    status: "confirmed",
    roomPrice: 350,
    bookingExtrasPrice: 120,
    totalPrice: 470,

    paymentMethod: "card",
    checkInTime: "14:00",
    checkoutTime: "12:00",
    roomType: "Family Suite",
  },

  {
    created_at: fromBookingDay(-30, true),
    startDate: fromBookingDay(-28),
    endDate: fromBookingDay(-25),
    roomId: 1,
    guestId: 13,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 1,
    observation: "",

    status: "checked-out",
    roomPrice: 140,
    bookingExtrasPrice: 0,
    totalPrice: 140,

    paymentMethod: "cash",
    checkInTime: "15:00",
    checkoutTime: "11:00",
    roomType: "Standard",
  },

  {
    created_at: fromBookingDay(-4, true),
    startDate: fromBookingDay(6),
    endDate: fromBookingDay(9),
    roomId: 5,
    guestId: 14,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 2,
    observation: "Honeymoon stay",

    status: "confirmed",
    roomPrice: 520,
    bookingExtrasPrice: 180,
    totalPrice: 700,

    paymentMethod: "card",
    checkInTime: "14:00",
    checkoutTime: "11:00",
    roomType: "Luxury",
  },

  {
    created_at: fromBookingDay(-11, true),
    startDate: fromBookingDay(-6),
    endDate: fromBookingDay(-2),
    roomId: 6,
    guestId: 15,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observation: "Conference stay",

    status: "checked-out",
    roomPrice: 320,
    bookingExtrasPrice: 90,
    totalPrice: 410,

    paymentMethod: "transfer",
    checkInTime: "13:00",
    checkoutTime: "11:00",
    roomType: "Business",
  },

  {
    created_at: fromBookingDay(-1, true),
    startDate: fromBookingDay(2),
    endDate: fromBookingDay(4),
    roomId: 3,
    guestId: 16,
    hasBreakfast: false,
    isPaid: false,
    numGuests: 1,
    observation: "Late arrival",

    status: "unconfirmed",
    roomPrice: 160,
    bookingExtrasPrice: 30,
    totalPrice: 190,

    paymentMethod: "card",
    checkInTime: "15:00",
    checkoutTime: "11:00",
    roomType: "Standard",
  },

  {
    created_at: fromBookingDay(-16, true),
    startDate: fromBookingDay(-12),
    endDate: fromBookingDay(-8),
    roomId: 4,
    guestId: 17,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    observation: "Vacation",

    status: "checked-out",
    roomPrice: 400,
    bookingExtrasPrice: 140,
    totalPrice: 540,

    paymentMethod: "card",
    checkInTime: "14:00",
    checkoutTime: "12:00",
    roomType: "Family Suite",
  },

  {
    created_at: fromBookingDay(-5, true),
    startDate: fromBookingDay(0),
    endDate: fromBookingDay(2),
    roomId: 2,
    guestId: 18,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observation: "",

    status: "confirmed",
    roomPrice: 280,
    bookingExtrasPrice: 100,
    totalPrice: 380,

    paymentMethod: "card",
    checkInTime: "14:00",
    checkoutTime: "11:00",
    roomType: "Executive",
  },

  {
    created_at: fromBookingDay(-22, true),
    startDate: fromBookingDay(-20),
    endDate: fromBookingDay(-16),
    roomId: 5,
    guestId: 19,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 2,
    observation: "",

    status: "checked-out",
    roomPrice: 480,
    bookingExtrasPrice: 0,
    totalPrice: 480,

    paymentMethod: "cash",
    checkInTime: "15:00",
    checkoutTime: "11:00",
    roomType: "Luxury",
  },

  {
    created_at: fromBookingDay(-3, true),
    startDate: fromBookingDay(8),
    endDate: fromBookingDay(12),
    roomId: 6,
    guestId: 20,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 3,
    observation: "Needs extra bed",

    status: "unconfirmed",
    roomPrice: 350,
    bookingExtrasPrice: 150,
    totalPrice: 500,

    paymentMethod: "transfer",
    checkInTime: "14:00",
    checkoutTime: "11:00",
    roomType: "Business",
  },

  {
    created_at: fromBookingDay(-8, true),
    startDate: fromBookingDay(4),
    endDate: fromBookingDay(6),
    roomId: 1,
    guestId: 21,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observation: "Weekend stay",

    status: "confirmed",
    roomPrice: 210,
    bookingExtrasPrice: 70,
    totalPrice: 280,

    paymentMethod: "card",
    checkInTime: "14:00",
    checkoutTime: "11:00",
    roomType: "Deluxe",
  },
];

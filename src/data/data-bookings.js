import { add } from "date-fns";

function fromBookingDay(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // ROOM 001
  {
    created_at: fromBookingDay(-12, true),
    startDate: fromBookingDay(2),
    endDate: fromBookingDay(6),
    roomId: 1,
    guestId: 2,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observations: "Late arrival expected around 10PM",

    status: "confirmed",
    totalPrice: 320,
    paymentMethod: "card",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomType: "Deluxe",
    source: "website",
    extras: ["wifi", "parking"],
  },
  {
    created_at: fromBookingDay(-25, true),
    startDate: fromBookingDay(-10),
    endDate: fromBookingDay(-5),
    roomId: 1,
    guestId: 3,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 1,
    observations: "",

    status: "checked-out",
    totalPrice: 150,
    paymentMethod: "cash",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomType: "Standard",
    source: "walk-in",
    extras: [],
  },

  // ROOM 002
  {
    created_at: fromBookingDay(-3, true),
    startDate: fromBookingDay(5),
    endDate: fromBookingDay(10),
    roomId: 2,
    guestId: 4,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 3,
    observations: "Needs airport pickup",

    status: "pending",
    totalPrice: 540,
    paymentMethod: "transfer",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomType: "Suite",
    source: "mobile-app",
    extras: ["airport-pickup", "breakfast"],
  },
  {
    created_at: fromBookingDay(-18, true),
    startDate: fromBookingDay(-15),
    endDate: fromBookingDay(-10),
    roomId: 2,
    guestId: 5,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 2,
    observations: "Anniversary stay",

    status: "checked-out",
    totalPrice: 400,
    paymentMethod: "card",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomType: "Executive",
    source: "booking.com",
    extras: ["decorations", "wine"],
  },

  // ROOM 003
  {
    created_at: fromBookingDay(-1, true),
    startDate: fromBookingDay(1),
    endDate: fromBookingDay(4),
    roomId: 3,
    guestId: 6,
    hasBreakfast: false,
    isPaid: false,
    numGuests: 1,
    observations: "Quiet room preferred",

    status: "confirmed",
    totalPrice: 180,
    paymentMethod: "card",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomType: "Standard",
    source: "website",
    extras: ["wifi"],
  },

  // ROOM 004
  {
    created_at: fromBookingDay(-6, true),
    startDate: fromBookingDay(0),
    endDate: fromBookingDay(3),
    roomId: 4,
    guestId: 7,
    hasBreakfast: true,
    isPaid: true,
    numGuests: 4,
    observations: "Family with kids",

    status: "checked-in",
    totalPrice: 600,
    paymentMethod: "card",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomType: "Family Suite",
    source: "expedia",
    extras: ["extra-bed", "breakfast", "tv"],
  },

  // ROOM 005
  {
    created_at: fromBookingDay(-9, true),
    startDate: fromBookingDay(7),
    endDate: fromBookingDay(14),
    roomId: 5,
    guestId: 8,
    hasBreakfast: true,
    isPaid: false,
    numGuests: 2,
    observations: "",

    status: "pending",
    totalPrice: 700,
    paymentMethod: "card",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomType: "Luxury",
    source: "website",
    extras: ["spa", "breakfast"],
  },

  // ROOM 006
  {
    created_at: fromBookingDay(-14, true),
    startDate: fromBookingDay(-3),
    endDate: fromBookingDay(2),
    roomId: 6,
    guestId: 9,
    hasBreakfast: false,
    isPaid: true,
    numGuests: 2,
    observations: "Business trip",

    status: "checked-in",
    totalPrice: 350,
    paymentMethod: "transfer",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomType: "Business",
    source: "corporate",
    extras: ["wifi", "workspace"],
  },
];

import { SUPABASEURL } from "../services/supabase";

const imageUrl = `${SUPABASEURL}/storage/v1/object/public/rooms_images/`;

export const rooms = [
  {
    roomNumber: 101,
    maxcapacity: 2,
    regularPrice: 120,
    discount: 0,
    image: imageUrl + "group_2.jpg",
    description:
      "A cozy deluxe room perfect for couples, featuring a king-size bed and modern comfort.",

    roomType: "Deluxe",
    bedType: "King",
    roomSize: 28,
    floor: 1,
    amenities: "wifi,tv,air-conditioning,mini-bar",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 102,
    maxcapacity: 2,
    regularPrice: 150,
    discount: 20,
    image: imageUrl + "deluxe_2.jpg",
    description:
      "Elegant executive room with premium furnishings and workspace.",

    roomType: "Executive",
    bedType: "Queen",
    roomSize: 32,
    floor: 1,
    amenities: "wifi,workspace,tv,coffee-maker",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 201,
    maxcapacity: 4,
    regularPrice: 200,
    discount: 0,
    image: imageUrl + "deluxe_1.jpg",
    description: "Spacious family room with multiple beds and seating area.",

    roomType: "Family",
    bedType: "Double",
    roomSize: 45,
    floor: 2,
    amenities: "wifi,tv,air-conditioning,extra-bed",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 202,
    maxcapacity: 4,
    regularPrice: 280,
    discount: 30,
    image: imageUrl + "deluxe_2.jpg",
    description: "Premium suite with a living area and balcony.",

    roomType: "Suite",
    bedType: "King",
    roomSize: 55,
    floor: 2,
    amenities: "wifi,tv,balcony,mini-bar,bathtub",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 301,
    maxcapacity: 6,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "deluxe_3.jpg",
    description: "Large group room with multiple beds and lounge area.",

    roomType: "Group",
    bedType: "Mixed",
    roomSize: 65,
    floor: 3,
    amenities: "wifi,tv,air-conditioning,wardrobe",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 302,
    maxcapacity: 6,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "group_1.jpg",
    description: "Luxury suite with private lounge and premium services.",

    roomType: "Luxury Suite",
    bedType: "King",
    roomSize: 80,
    floor: 3,
    amenities: "wifi,tv,jacuzzi,mini-bar,room-service",
    isAvailable: false,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 401,
    maxcapacity: 8,
    regularPrice: 450,
    discount: 70,
    image: imageUrl + "group_3.jpg",
    description: "Expansive suite suitable for large groups.",

    roomType: "Group Suite",
    bedType: "Mixed",
    roomSize: 100,
    floor: 4,
    amenities: "wifi,tv,kitchenette,balcony",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },

  {
    roomNumber: 501,
    maxcapacity: 10,
    regularPrice: 900,
    discount: 0,
    image: imageUrl + "group_2.jpg",
    description: "Presidential suite with ultimate luxury experience.",

    roomType: "Presidential Suite",
    bedType: "King",
    roomSize: 150,
    floor: 5,
    amenities: "wifi,tv,private-dining,butler-service,jacuzzi,balcony",
    isAvailable: true,
    created_at: new Date().toISOString(),
  },
];

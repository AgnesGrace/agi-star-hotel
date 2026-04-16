import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/room-images/`;

export const rooms = [
  {
    name: "001",
    roomNumber: "101",
    maxCapacity: 2,
    regularPrice: 120,
    discount: 0,
    image: imageUrl + "room-001.jpg",
    description:
      "A cozy deluxe room perfect for couples, featuring a king-size bed, modern bathroom, smart TV, and a relaxing ambiance ideal for short stays.",

    roomType: "Deluxe",
    bedType: "King",
    size: 28,
    floor: 1,
    amenities: ["wifi", "tv", "air-conditioning", "mini-bar"],
    isAvailable: true,
    rating: 4.5,
    numberOfReviews: 120,
  },

  {
    name: "002",
    roomNumber: "102",
    maxCapacity: 2,
    regularPrice: 150,
    discount: 20,
    image: imageUrl + "room-002.jpg",
    description:
      "Elegant executive room with premium furnishings, work desk, high-speed internet, and a spacious bathroom designed for comfort and productivity.",

    roomType: "Executive",
    bedType: "Queen",
    size: 32,
    floor: 1,
    amenities: ["wifi", "workspace", "tv", "coffee-maker"],
    isAvailable: true,
    rating: 4.7,
    numberOfReviews: 98,
  },

  {
    name: "003",
    roomNumber: "201",
    maxCapacity: 4,
    regularPrice: 200,
    discount: 0,
    image: imageUrl + "room-003.jpg",
    description:
      "Spacious family room with two beds, a seating area, and kid-friendly amenities, perfect for small families seeking comfort and convenience.",

    roomType: "Family",
    bedType: "Double",
    size: 45,
    floor: 2,
    amenities: ["wifi", "tv", "air-conditioning", "extra-bed"],
    isAvailable: true,
    rating: 4.6,
    numberOfReviews: 140,
  },

  {
    name: "004",
    roomNumber: "202",
    maxCapacity: 4,
    regularPrice: 280,
    discount: 30,
    image: imageUrl + "room-004.jpg",
    description:
      "Premium suite offering a luxurious stay with a separate living area, elegant furnishings, and a balcony with city views.",

    roomType: "Suite",
    bedType: "King",
    size: 55,
    floor: 2,
    amenities: ["wifi", "tv", "balcony", "mini-bar", "bathtub"],
    isAvailable: true,
    rating: 4.8,
    numberOfReviews: 200,
  },

  {
    name: "005",
    roomNumber: "301",
    maxCapacity: 6,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "room-005.jpg",
    description:
      "Large group room designed for comfort, featuring multiple beds, a lounge area, and ample space for families or friends traveling together.",

    roomType: "Group",
    bedType: "Mixed",
    size: 65,
    floor: 3,
    amenities: ["wifi", "tv", "air-conditioning", "wardrobe"],
    isAvailable: true,
    rating: 4.4,
    numberOfReviews: 75,
  },

  {
    name: "006",
    roomNumber: "302",
    maxCapacity: 6,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "room-006.jpg",
    description:
      "Luxury suite with high-end finishes, private lounge, king-size beds, and premium services tailored for an exclusive experience.",

    roomType: "Luxury Suite",
    bedType: "King",
    size: 80,
    floor: 3,
    amenities: ["wifi", "tv", "jacuzzi", "mini-bar", "room-service"],
    isAvailable: false,
    rating: 4.9,
    numberOfReviews: 60,
  },

  {
    name: "007",
    roomNumber: "401",
    maxCapacity: 8,
    regularPrice: 450,
    discount: 70,
    image: imageUrl + "room-007.jpg",
    description:
      "Expansive multi-room suite suitable for large groups, featuring multiple bedrooms, a living space, and premium comfort amenities.",

    roomType: "Group Suite",
    bedType: "Mixed",
    size: 100,
    floor: 4,
    amenities: ["wifi", "tv", "kitchenette", "balcony"],
    isAvailable: true,
    rating: 4.7,
    numberOfReviews: 50,
  },

  {
    name: "008",
    roomNumber: "501",
    maxCapacity: 10,
    regularPrice: 900,
    discount: 0,
    image: imageUrl + "room-008.jpg",
    description:
      "Presidential suite offering the ultimate luxury experience with multiple bedrooms, private dining, premium interiors, and exclusive services.",

    roomType: "Presidential Suite",
    bedType: "King",
    size: 150,
    floor: 5,
    amenities: [
      "wifi",
      "tv",
      "private-dining",
      "butler-service",
      "jacuzzi",
      "balcony",
    ],
    isAvailable: true,
    rating: 5.0,
    numberOfReviews: 25,
  },
];

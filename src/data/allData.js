import * as Houses from "../assets/houses";
import * as Locations from "../assets/locations";
import * as Interiors from "../assets/interiors";

export const locations = [
  {
    id: 1,
    name: "Evergreen Heights",
    img: Locations.Location01,
  },
  {
    id: 2,
    name: "Willowbrook Estates",
    img: Locations.Location02,
  },
  {
    id: 3,
    name: "Maplewood Grove",
    img: Locations.Location03,
  },
  {
    id: 4,
    name: "Cedarview Harbor",
    img: Locations.Location04,
  },
  {
    id: 5,
    name: "Silverleaf Meadows",
    img: Locations.Location05,
  },
  {
    id: 6,
    name: "Magnolia Bay",
    img: Locations.Location06,
  },
];

export const houses = [
  {
    id: 1,
    location: "Evergreen Heights",
    price: "732 000€",
    img: Houses.House01,
    category: "New",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [Interiors.Interior01, Interiors.Interior02],
    desc: "Nestled in a serene neighborhood, this charming Craftsman-style home boasts a picturesque exterior with inviting warm tones and classic architectural details. The spacious front porch welcomes you into a well-maintained interior featuring modern amenities and cozy living spaces. Large windows flood the home with natural light, highlighting the beautiful craftsmanship. Surrounded by lush greenery, the property offers a perfect blend of comfort and elegance, making it an ideal retreat for those seeking a tranquil lifestyle.",
  },
  {
    id: 2,
    location: "Evergreen Heights",
    price: "845 000€",
    img: Houses.House02,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "4",
    bathrooms: "3",
    interiors: [Interiors.Interior03, Interiors.Interior04],
    desc: "Stunning two-story brick home set on a spacious lot surrounded by nature. This 4-bedroom, 3-bathroom property features a charming covered porch and a stylish mix of brick and siding exterior. Inside, enjoy an open floor plan with ample natural light, a modern kitchen with modern appliances, and a cozy living room. The master suite offers a luxurious retreat with a spa-like bathroom. Perfect for families, this home combines elegance with the tranquility of a wooded setting.",
  },
  {
    id: 3,
    location: "Silverleaf Meadows",
    price: "1 005 000€",
    img: Houses.House03,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "4",
    bathrooms: "2",
    interiors: [Interiors.Interior19, Interiors.Interior24],
    desc: "This charming craftsman-style home offers a perfect blend of rustic elegance and modern comfort. With its inviting front porch, large windows, and beautiful wooden accents, this two-story residence is ideal for families seeking a cozy yet spacious living environment. Nestled in a serene, green landscape, it promises tranquility and comfort. The spacious interior is designed with a contemporary touch, making it an ideal retreat from the hustle and bustle of everyday life.",
  },
  {
    id: 4,
    location: "Willowbrook Estates",
    price: "689 000€",
    img: Houses.House04,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [Interiors.Interior60, Interiors.Interior15],
    desc: "Discover this unique architectural gem, a multi-level tropical retreat surrounded by lush greenery and vibrant flora. The organic, flowing design of the building seamlessly integrates with the natural landscape, offering a tranquil and luxurious living experience. Each level features spacious terraces perfect for relaxation and enjoying the serene environment. Ideal for those seeking an exotic, nature-immersed lifestyle with all the comforts of modern living.",
  },
  {
    id: 5,
    location: "Maplewood Grove",
    price: "1 295 000€",
    img: Houses.House05,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [Interiors.Interior07, Interiors.Interior44],
    desc: "Experience the charm of this cozy A-frame cottage, perfect for those who appreciate unique architecture and a peaceful setting. The inviting front patio and expansive lawn create a warm and welcoming atmosphere. Inside, the home features an open floor plan with plenty of natural light, making it an ideal space for relaxation and entertaining. The combination of rustic charm and modern amenities ensures a comfortable and stylish living environment.",
  },
  {
    id: 6,
    location: "Silverleaf Meadows",
    price: "1 210 000€",
    img: Houses.House06,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "4",
    bathrooms: "2",
    interiors: [Interiors.Interior05, Interiors.Interior34],
    desc: "Embrace contemporary luxury in this stunning modern home, characterized by its sleek lines, expansive windows, and minimalist design. The open-plan living spaces are flooded with natural light, creating a bright and airy atmosphere. Outdoor balconies provide breathtaking views and are perfect for enjoying the fresh air. This property combines cutting-edge architecture with elegant finishes, making it a perfect choice for those seeking a sophisticated and stylish lifestyle.",
  },
  {
    id: 7,
    location: "Maplewood Grove",
    price: "730 000€",
    img: Houses.House07,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 8,
    location: "Willowbrook Estates",
    price: "478 000€",
    img: Houses.House08,
    category: "New",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [
      Interiors.Interior30,
      Interiors.Interior11,
      Interiors.Interior12,
    ],
    desc: "Charming single-story home featuring a beautiful stone facade and well-maintained landscaping. This 3-bedroom, 2-bathroom residence offers an inviting entrance with a covered porch, leading to a spacious living area. Enjoy the convenience of an attached two-car garage and a private, fenced backyard. Located in a quiet neighborhood, this home provides the perfect blend of comfort and style for families or individuals seeking suburban tranquility.",
  },
  {
    id: 9,
    location: "Silverleaf Meadows",
    price: "687 000€",
    img: Houses.House09,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 10,
    location: "Evergreen Heights",
    price: "3 650€/mo",
    img: Houses.House10,
    category: "New",
    listingType: "Rental",
    bedrooms: "2",
    bathrooms: "1",
    interiors: [Interiors.Interior31, Interiors.Interior57],
    desc: "Quaint countryside cottage featuring rustic charm and picturesque surroundings. This 2-bedroom, 1-bathroom home boasts a classic wooden exterior with a cozy front porch perfect for relaxing. The property includes a delightful garden enclosed by a white picket fence, adding to its storybook appeal. Ideal for those seeking a peaceful retreat, this charming home offers a perfect blend of simplicity and natural beauty, nestled in a serene rural setting.",
  },
  {
    id: 11,
    location: "Evergreen Heights",
    price: "975 000€",
    img: Houses.House11,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "4",
    bathrooms: "2",
    interiors: [Interiors.Interior17, Interiors.Interior16],
    desc: "This charming single-story home showcases a traditional design with a welcoming front entrance. The exterior is freshly painted and features elegant arched windows that provide plenty of natural light. A well-maintained front lawn and thoughtfully landscaped garden beds add to its curb appeal. Located in a peaceful neighborhood, this house is perfect for families looking for comfort and convenience. With its spacious interior and serene surroundings, it offers a wonderful place to call home.",
  },
  {
    id: 12,
    location: "Cedarview Harbor",
    price: "5 500€/mo",
    img: Houses.House12,
    category: "New",
    listingType: "Rental",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [Interiors.Interior46, Interiors.Interior47],
    desc: "A modern and luxurious stone-clad house situated at the end of a cul-de-sac. The home boasts an expansive front yard with lush green lawns, a curved driveway, and a charming front porch. This house is ideal for families seeking a blend of elegance and comfort in a quiet, upscale neighborhood.",
  },
  {
    id: 13,
    location: "Willowbrook Estates",
    price: "625 000€",
    img: Houses.House13,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 14,
    location: "Magnolia Bay",
    price: "720 000€",
    img: Houses.House14,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 15,
    location: "Silverleaf Meadows",
    price: "810 000€",
    img: Houses.House15,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 16,
    location: "Evergreen Heights",
    price: "780 000€",
    img: Houses.House16,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 17,
    location: "Maplewood Grove",
    price: "920 000€",
    img: Houses.House17,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 18,
    location: "Silverleaf Meadows",
    price: "700 000€",
    img: Houses.House18,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 19,
    location: "Evergreen Heights",
    price: "870 000€",
    img: Houses.House19,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 20,
    location: "Cedarview Harbor",
    price: "780 000€",
    img: Houses.House20,
    category: "New",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "1",
    interiors: [Interiors.Interior62, Interiors.Interior63],
    desc: "Charming two-story home nestled amidst mature trees, featuring a welcoming red front door and picturesque white picket fence. This 3-bedroom, 1-bathroom property exudes classic appeal with its vintage architectural details and cozy atmosphere. The exterior is complemented by a beautifully maintained yard, perfect for enjoying the changing seasons. Ideal for those seeking a blend of nostalgia and comfort, this delightful home offers a serene escape in a friendly neighborhood setting.",
  },
  {
    id: 21,
    location: "Maplewood Grove",
    price: "740 000€",
    img: Houses.House21,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 22,
    location: "Magnolia Bay",
    price: "39 000€",
    img: Houses.House22,
    category: "New",
    listingType: "For sale",
    bedrooms: "2",
    bathrooms: "1",
    interiors: [Interiors.Interior59],
    desc: "Rustic two-bedroom cabin set in a secluded, desert landscape. This charming wooden structure offers a glimpse into the past with its weathered exterior and vintage windows. The cabin is surrounded by natural desert flora, providing a serene and private retreat for those seeking simplicity and solitude. Ideal for adventurers or history enthusiasts, this unique property offers an opportunity to own a piece of rustic charm in a tranquil and picturesque setting.",
  },
  {
    id: 23,
    location: "Maplewood Grove",
    price: "810 500€",
    img: Houses.House23,
    category: "None",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
  },
  {
    id: 24,
    location: "Evergreen Heights",
    price: "920 000€",
    img: Houses.House24,
    category: "Collection",
    listingType: "For sale",
    bedrooms: "3",
    bathrooms: "2",
    interiors: [Interiors.Interior48, Interiors.Interior45],
    desc: "This stunning two-story home features a modern exterior with a blend of brick and siding, complemented by a beautifully landscaped front yard. It boasts large windows for ample natural light, a spacious driveway leading to a two-car garage, and a welcoming front porch. The meticulously maintained lawn and garden beds enhance its curb appeal. Inside, expect a seamless blend of comfort and style, perfect for family living. An ideal choice for those seeking a luxurious yet cozy abode.",
  },
];

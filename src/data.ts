export const restaurantData = {
  brand: {
    name: "Heritage Kitchens",
    tagline: "The Soul of Lagos, Elevated.",
    story: "Nestled in the heart of Lekki, Heritage Kitchens is a culinary sanctuary where authentic Nigerian traditions meet modern gastronomy. We curate the finest local ingredients to craft dishes that tell the story of our rich cultural tapestry, offering an unparalleled dining experience that honors our roots while embracing the future."
  },
  services: [
    {
      id: "dineIn",
      title: "Premium Dine-In",
      description: "Experience our elegant ambiance in Lekki, perfect for intimate dinners and celebrations.",
      icon: "Utensils"
    },
    {
      id: "delivery",
      title: "Island Delivery",
      description: "Enjoy our signature dishes from the comfort of your home, delivered swiftly across Victoria Island and Lekki.",
      icon: "Truck"
    },
    {
      id: "catering",
      title: "Bespoke Catering",
      description: "Elevate your events with our curated menus and impeccable service.",
      icon: "ChefHat"
    },
    {
      id: "reservations",
      title: "Private Dining",
      description: "Book our exclusive private dining rooms for your special occasions and corporate meetings.",
      icon: "Calendar"
    }
  ],
  testimonials: [
    {
      name: "Chika O.",
      text: "The best Seafood Okra I've had in Lagos. The ambiance is unmatched, and the service is truly world-class.",
      role: "Food Critic"
    },
    {
      name: "Tunde A.",
      text: "Heritage Kitchens took our corporate dinner to the next level. The fusion dishes are incredibly innovative.",
      role: "Tech Executive"
    },
    {
      name: "Aisha M.",
      text: "A true taste of home but with a luxurious twist. The Asun and cocktails are a must-try!",
      role: "Lifestyle Blogger"
    }
  ],
  featured: [
    {
      id: "signature-jollof",
      name: "Heritage Smoky Jollof",
      description: "Our award-winning party jollof rice, slow-cooked over firewood, served with grilled jumbo prawns and fried plantain.",
      price: 18500,
      tags: ["popular", "chef-special", "spicy"],
      image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "seafood-okra",
      name: "Fisherman's Seafood Okra",
      description: "Rich, viscous okra soup brimming with fresh crab, tiger prawns, calamari, and croaker fish. Served with your choice of swallow.",
      price: 22000,
      tags: ["premium", "seafood"],
      image: "https://images.unsplash.com/photo-1579783411194-f697db862dcd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "suya-spiced-lamb",
      name: "Suya-Crusted Lamb Chops",
      description: "Tender lamb chops coated in our house-made Yaji spice blend, grilled to perfection, served with sweet potato puree.",
      price: 25000,
      tags: ["fusion", "chef-special"],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
    }
  ],
  menu: {
    categories: [
      {
        name: "Small Chops & Starters",
        items: [
          { id: "peppered-snails", name: "Spicy Peppered Snails", description: "Jumbo snails sautéed in a rich habanero and bell pepper sauce.", price: 12000, tags: ["spicy"] },
          { id: "asun-tacos", name: "Asun Tacos", description: "Spicy grilled goat meat served in soft tortillas with kachumbari salsa.", price: 8500, tags: ["fusion", "spicy"] },
          { id: "heritage-platter", name: "Heritage Chops Platter", description: "A premium assortment of spring rolls, samosas, puff-puff, and peppered gizzard.", price: 15000, tags: ["popular"] }
        ]
      },
      {
        name: "Soups & Swallows",
        items: [
          { id: "egusi-special", name: "Royal Egusi Soup", description: "Melon seed soup cooked with assorted meats, stockfish, and bitterleaf.", price: 14000, tags: ["traditional"] },
          { id: "edikaikong", name: "Edikaikong", description: "Rich vegetable soup from Calabar, packed with seafood and assorted meats.", price: 16000, tags: ["premium"] },
          { id: "afang", name: "Afang Soup", description: "Traditional Efik soup made with wild spinach and okazi leaves.", price: 15000, tags: ["traditional"] }
        ]
      },
      {
        name: "Rice Specials",
        items: [
          { id: "native-rice", name: "Village Native Rice", description: "Palm oil rice infused with locust beans, smoked fish, and scent leaves.", price: 13500, tags: ["traditional"] },
          { id: "fried-rice", name: "Special Fried Rice", description: "Nigerian-style fried rice with diced liver, prawns, and mixed vegetables.", price: 12000, tags: [] }
        ]
      },
      {
        name: "Grills & Street Food",
        items: [
          { id: "whole-croaker", name: "Grilled Croaker Fish", description: "Whole croaker fish marinated in our signature spices, served with roasted plantain (Boli).", price: 18000, tags: ["popular"] },
          { id: "chicken-suya", name: "Chicken Suya", description: "Tender chicken fillets coated in spicy peanut rub, grilled over open flames.", price: 9000, tags: ["spicy"] }
        ]
      },
      {
        name: "Drinks",
        items: [
          { id: "zobo-sangria", name: "Zobo Sangria", description: "Hibiscus tea infused with fresh fruits, spices, and a splash of red wine.", price: 6500, tags: ["fusion"] },
          { id: "palm-wine-cocktail", name: "Palm Wine Mojito", description: "Fresh palm wine blended with mint, lime, and white rum.", price: 7000, tags: ["signature"] },
          { id: "chapman", name: "Classic Chapman", description: "The iconic Nigerian mocktail with a blend of fruity flavors and bitters.", price: 4500, tags: ["non-alcoholic"] }
        ]
      }
    ]
  }
};

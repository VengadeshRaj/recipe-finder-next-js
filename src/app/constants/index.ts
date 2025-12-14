import {
  IdlyImage,
  DosaImage,
  UpmaImage,
  ChappatiImage,
  Chicken65Image,
  ChickenBiriyaniImage,
  ChickenCurryImage,
  CurdRiceImage,
  FishFryImage,
  PizzaImage,
  PongalImage,
  ParottaImage,
  SambarSathamImage,
  VegBiriyaniImage,
  vegManchurianImage,
  PooriImage,
  PesarattuImage,
  LemonRiceImage,
  PaneerButterMasalaImage,
  MasalaDosaImage,
  VegKothuParottaImage,
  VegPulaoImage,
  AlooGobiImage,
  EggCurryImage,
  MuttonCurryImage,
  PavBhajiImage,
  CholeImage,
  VegNoodlesImage,
  SpringRollImage,
  SchezwanRiceImage,
  ArrabbiataImage,
  GarlicPizzaImage,
  WhiteSaucePastaImage,
  GarlicBreadImage,
  RavaDosaImage,
  VadaImage,
  ChickenFriedRiceImage,
  EggFriedRiceImage,
  FishCurryImage,
  Gobi65Image,
  JeeraRiceImage,
  LasagnaImage,
  MasalaVadaImage,
  MushroomRisottoImage,
  PalakPaneerImage,
  PaneerTikkaImage,
  PepperChickenImage,
  PrawnFryImage,
  RajmaRiceImage,
  VegKurmaImage
} from "@/app/images/meals";

export const categories = {
  mealType: [
    { code: "bf", displayValue: "Breakfast" },
    { code: "ln", displayValue: "Lunch" },
    { code: "dn", displayValue: "Dinner" },
  ],
  foodType: [
    { code: "veg", displayValue: "Vegetarian" },
    { code: "nonVeg", displayValue: "Non-Vegetarian" },
  ],
  cuisine: [
    { code: "ind", displayValue: "Indian" },
    { code: "chi", displayValue: "Chinese" },
    { code: "ita", displayValue: "Italian" },
  ],
};

export const meals = [
  {
    code: "bf",
    foods: [
      {
        name: "Dosa",
        prepTime: "20 mins",
        imageSrc: DosaImage,
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        imageSrc: IdlyImage,
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Upma",
        prepTime: "18 mins",
        imageSrc: UpmaImage,
        ingredients: [
          "Rava/Sooji",
          "Onion",
          "Green chili",
          "Mustard seeds",
          "Water",
          "Oil",
          "Salt",
        ],
        instructions:
          "Roast rava lightly and keep aside. Heat oil, splutter mustard seeds, then sauté onion and chili. Add water and salt to boil. Add rava slowly while stirring to avoid lumps. Cook until soft and serve hot.",
      },
      {
        name: "Poori Masala",
        prepTime: "30 mins",
        imageSrc: PooriImage,
        ingredients: [
          "Wheat flour",
          "Oil",
          "Potatoes",
          "Onion",
          "Green chili",
          "Turmeric",
          "Salt",
        ],
        instructions:
          "Knead wheat flour into a stiff dough. Roll small circles and deep fry until puffed. Prepare masala by sautéing onion, chili, and turmeric, then add boiled potatoes. Serve hot with pooris.",
      },
      {
        name: "Pesarattu",
        prepTime: "25 mins",
        imageSrc: PesarattuImage,
        ingredients: [
          "Green gram",
          "Ginger",
          "Green chili",
          "Cumin",
          "Oil",
          "Salt",
        ],
        instructions:
          "Blend soaked green gram with spices to make batter. Pour on a hot pan, spread like dosa, drizzle oil, and cook until crisp. Serve with ginger chutney.",
      },
      {
        name: "Rava Dosa",
        prepTime: "20 mins",
        imageSrc: RavaDosaImage,
        ingredients: [
          "Rava",
          "Rice flour",
          "Cumin",
          "Green chili",
          "Salt",
          "Oil",
        ],
        instructions:
          "Prepare thin batter with rava and rice flour. Pour on hot tawa, drizzle oil, cook until crisp. Serve hot with chutney.",
      },
      {
        name: "Vada",
        prepTime: "25 mins",
        imageSrc: VadaImage,
        ingredients: [
          "Urad dal",
          "Onion",
          "Green chili",
          "Curry leaves",
          "Oil",
          "Salt",
        ],
        instructions:
          "Grind soaked urad dal to thick batter, mix spices, shape vadas and deep fry until golden. Serve hot with chutney.",
      },
    ],
  },

  {
    code: "ln",
    foods: [
      {
        name: "Rajma Rice",
        prepTime: "45 mins",
        imageSrc: RajmaRiceImage,
        ingredients: [
          "Rajma",
          "Rice",
          "Onion",
          "Tomato",
          "Spices",
          "Oil",
          "Salt",
        ],
        instructions:
          "Cook rajma until soft. Prepare onion-tomato gravy, add rajma and simmer. Serve hot with steamed rice.",
      },
      {
        name: "Fish Curry",
        prepTime: "35 mins",
        imageSrc: FishCurryImage,
        ingredients: [
          "Fish",
          "Tamarind",
          "Onion",
          "Tomato",
          "Spices",
          "Oil",
          "Salt",
        ],
        instructions:
          "Prepare tamarind-based gravy, add fish pieces and cook gently until done. Serve with rice.",
      },
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
        imageSrc: VegBiriyaniImage,
        ingredients: [
          "Basmati rice",
          "Mixed vegetables",
          "Biryani masala",
          "Curd",
          "Oil or ghee",
        ],
        instructions:
          "Soak rice for 20 minutes and cook till 70% done. Sauté vegetables with biryani masala and curd. Layer rice and vegetables in a heavy-bottomed pan, cover tightly, and dum cook on low flame for 20 minutes. Serve hot with raita.",
      },
      {
        name: "Sambar Rice",
        prepTime: "35 mins",
        imageSrc: SambarSathamImage,
        ingredients: [
          "Rice",
          "Toor dal",
          "Tamarind",
          "Sambar powder",
          "Mixed vegetables",
          "Oil",
          "Salt",
        ],
        instructions:
          "Cook rice and toor dal together until soft. Prepare sambar using tamarind, sambar powder, and vegetables. Mix sambar into the rice-dal mixture, simmer for a few minutes, and serve hot with papad or pickle.",
      },
      {
        name: "Curd Rice",
        prepTime: "10 mins",
        imageSrc: CurdRiceImage,
        ingredients: [
          "Cooked rice",
          "Curd",
          "Salt",
          "Mustard seeds",
          "Curry leaves",
          "Oil",
        ],
        instructions:
          "Cool cooked rice completely. Add curd and salt and mix well. Temper mustard seeds and curry leaves in hot oil, pour over the rice, mix, and serve chilled with pickle.",
      },
      {
        name: "Chicken Biryani",
        prepTime: "60 mins",
        imageSrc: ChickenBiriyaniImage,
        ingredients: [
          "Chicken",
          "Basmati rice",
          "Biryani masala",
          "Onion",
          "Tomato",
          "Curd",
          "Oil or ghee",
          "Salt",
        ],
        instructions:
          "Marinate chicken with curd, biryani masala, and salt. Fry onions until golden, add tomato and cook to a masala, then add marinated chicken and cook partially. Layer partly cooked rice over chicken, drizzle ghee, cover tightly, and dum cook on low flame for 20–25 minutes. Serve hot with raita.",
      },
      {
        name: "Lemon Rice",
        prepTime: "15 mins",
        imageSrc: LemonRiceImage,
        ingredients: [
          "Cooked rice",
          "Lemon juice",
          "Turmeric",
          "Mustard seeds",
          "Peanuts",
          "Oil",
          "Salt",
        ],
        instructions:
          "Heat oil, sauté mustard seeds, peanuts, and turmeric. Mix with cooked rice, add lemon juice and salt. Toss well and serve.",
      },
      {
        name: "Paneer Butter Masala",
        prepTime: "35 mins",
        imageSrc: PaneerButterMasalaImage,
        ingredients: [
          "Paneer",
          "Tomatoes",
          "Cashews",
          "Cream",
          "Butter",
          "Spices",
          "Salt",
        ],
        instructions:
          "Blend cooked tomatoes and cashews into a puree. Sauté spices in butter, add puree, cream, and paneer cubes. Cook until thick and serve with rice or roti.",
      },
    ],
  },

  {
    code: "dn",
    foods: [
      {
        name: "Egg Fried Rice",
        prepTime: "25 mins",
        imageSrc: EggFriedRiceImage,
        ingredients: ["Rice", "Eggs", "Garlic", "Soy sauce", "Oil", "Salt"],
        instructions:
          "Scramble eggs, add garlic and rice, season with soy sauce, toss on high flame and serve hot.",
      },
      {
        name: "Paneer Tikka",
        prepTime: "30 mins",
        imageSrc: PaneerTikkaImage,
        ingredients: ["Paneer", "Curd", "Spices", "Capsicum", "Onion"],
        instructions:
          "Marinate paneer and veggies, grill or pan-fry until charred. Serve with mint chutney.",
      },

      {
        name: "Chapati",
        prepTime: "25 mins",
        imageSrc: ChappatiImage,
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Pongal",
        prepTime: "35 mins",
        imageSrc: PongalImage,
        ingredients: ["Rice", "Moong dal", "Pepper", "Cumin", "Ghee", "Salt"],
        instructions:
          "Cook rice and moong dal together with enough water until very soft. Heat ghee in a pan, add pepper and cumin and let them splutter. Pour this over the cooked mixture, add salt, mix well, and serve hot with chutney or sambar.",
      },
      {
        name: "Parotta",
        prepTime: "40 mins",
        imageSrc: ParottaImage,
        ingredients: ["Maida", "Oil", "Water", "Salt"],
        instructions:
          "Prepare a soft dough using maida, salt, water, and oil. Rest for 20 minutes. Roll into thin sheets, fold and coil to form layers, then roll again and cook on a hot tawa with a little oil until flaky and golden. Serve with salna.",
      },
      {
        name: "Chicken 65",
        prepTime: "30 mins",
        imageSrc: Chicken65Image,
        ingredients: [
          "Boneless chicken",
          "Yogurt",
          "Ginger-garlic paste",
          "Red chili powder",
          "Cornflour",
          "Oil",
          "Salt",
        ],
        instructions:
          "Marinate chicken with yogurt, spices, cornflour, and salt for at least 30 minutes. Deep fry in hot oil until crispy and cooked through. Serve hot with onion and lemon wedges.",
      },
      {
        name: "Masala Dosa",
        prepTime: "30 mins",
        imageSrc: MasalaDosaImage,
        ingredients: ["Dosa batter", "Potato masala", "Oil"],
        instructions:
          "Make a thin dosa, place potato masala inside, fold and serve hot with chutney and sambar.",
      },
      {
        name: "Veg Kothu Parotta",
        prepTime: "35 mins",
        imageSrc: VegKothuParottaImage,
        ingredients: [
          "Parotta",
          "Vegetables",
          "Egg (optional)",
          "Salna",
          "Oil",
          "Salt",
        ],
        instructions:
          "Shred parottas, sauté vegetables with spices, mix in salna, add shredded parotta and toss on high heat. Serve hot.",
      },
    ],
  },

  {
    code: "veg",
    foods: [
      {
        name: "Vegetable Kurma",
        prepTime: "30 mins",
        imageSrc: VegKurmaImage,
        ingredients: ["Mixed vegetables", "Coconut", "Spices", "Oil", "Salt"],
        instructions:
          "Prepare coconut masala, add vegetables and cook until soft. Serve with roti or parotta.",
      },
      {
        name: "Palak Paneer",
        prepTime: "30 mins",
        imageSrc: PalakPaneerImage,
        ingredients: ["Spinach", "Paneer", "Garlic", "Cream", "Spices"],
        instructions:
          "Blend cooked spinach, sauté with spices, add paneer cubes and simmer. Serve hot.",
      },

      {
        name: "Dosa",
        prepTime: "20 mins",
        imageSrc: DosaImage,
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        imageSrc: IdlyImage,
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
        imageSrc: VegBiriyaniImage,
        ingredients: [
          "Basmati rice",
          "Mixed vegetables",
          "Biryani masala",
          "Curd",
          "Oil or ghee",
        ],
        instructions:
          "Soak rice for 20 minutes and cook till 70% done. Sauté vegetables with biryani masala and curd. Layer rice and vegetables in a heavy-bottomed pan, cover tightly, and dum cook on low flame for 20 minutes. Serve hot with raita.",
      },
      {
        name: "Chapati",
        prepTime: "25 mins",
        imageSrc: ChappatiImage,
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Margherita Pizza",
        prepTime: "35 mins",
        imageSrc: PizzaImage,
        ingredients: [
          "Pizza base",
          "Tomato sauce",
          "Mozzarella cheese",
          "Basil leaves",
          "Olive oil",
          "Salt",
        ],
        instructions:
          "Spread tomato sauce on the pizza base, top with mozzarella and basil leaves. Drizzle olive oil, bake in a preheated oven at high temperature until the crust is golden and cheese is melted. Slice and serve hot.",
      },
      {
        name: "Veg Pulao",
        prepTime: "30 mins",
        imageSrc: VegPulaoImage,
        ingredients: [
          "Basmati rice",
          "Vegetables",
          "Whole spices",
          "Oil or ghee",
          "Salt",
        ],
        instructions:
          "Sauté whole spices and vegetables, add rice and water, cook until fluffy. Serve with raita.",
      },
      {
        name: "Aloo Gobi",
        prepTime: "25 mins",
        imageSrc: AlooGobiImage,
        ingredients: ["Potato", "Cauliflower", "Spices", "Oil", "Salt"],
        instructions:
          "Sauté potatoes and cauliflower with spices. Cover and cook until tender. Serve with roti or rice.",
      },
    ],
  },

  {
    code: "nonVeg",
    foods: [
      {
        name: "Pepper Chicken",
        prepTime: "35 mins",
        imageSrc: PepperChickenImage,
        ingredients: [
          "Chicken",
          "Pepper",
          "Garlic",
          "Curry leaves",
          "Oil",
          "Salt",
        ],
        instructions:
          "Sauté garlic and curry leaves, add chicken and pepper. Cook until dry and well coated.",
      },
      {
        name: "Prawn Fry",
        prepTime: "20 mins",
        imageSrc: PrawnFryImage,
        ingredients: ["Prawns", "Chili powder", "Turmeric", "Oil", "Salt"],
        instructions:
          "Marinate prawns with spices and shallow fry until crisp. Serve hot.",
      },

      {
        name: "Chicken Biryani",
        prepTime: "60 mins",
        imageSrc: ChickenBiriyaniImage,
        ingredients: [
          "Chicken",
          "Basmati rice",
          "Biryani masala",
          "Onion",
          "Tomato",
          "Curd",
          "Oil or ghee",
          "Salt",
        ],
        instructions:
          "Marinate chicken with curd, biryani masala, and salt. Fry onions until golden, add tomato and cook to a masala, then add marinated chicken and cook partially. Layer partly cooked rice over chicken, drizzle ghee, cover tightly, and dum cook on low flame for 20–25 minutes. Serve hot with raita.",
      },
      {
        name: "Chicken Curry",
        prepTime: "40 mins",
        imageSrc: ChickenCurryImage,
        ingredients: [
          "Chicken",
          "Onion",
          "Tomato",
          "Ginger-garlic paste",
          "Spice powders",
          "Oil",
          "Salt",
        ],
        instructions:
          "Sauté onions until golden, add ginger-garlic paste and cook. Add tomatoes and spices and cook to a thick masala. Add chicken pieces, coat well, add water as needed, cover, and cook until the chicken is tender and gravy thickens. Serve hot with rice or chapati.",
      },
      {
        name: "Chicken 65",
        prepTime: "30 mins",
        imageSrc: Chicken65Image,
        ingredients: [
          "Boneless chicken",
          "Yogurt",
          "Ginger-garlic paste",
          "Red chili powder",
          "Cornflour",
          "Oil",
          "Salt",
        ],
        instructions:
          "Marinate chicken with yogurt, spices, cornflour, and salt. Rest for at least 30 minutes. Deep fry in hot oil until crispy and cooked through. Serve hot with onion and lemon wedges.",
      },
      {
        name: "Fish Fry",
        prepTime: "25 mins",
        imageSrc: FishFryImage,
        ingredients: [
          "Fish pieces",
          "Red chili powder",
          "Turmeric",
          "Lemon juice",
          "Salt",
          "Oil",
        ],
        instructions:
          "Marinate fish pieces with chili powder, turmeric, lemon juice, and salt for 15–20 minutes. Heat oil in a pan and shallow fry the fish on both sides until golden and cooked through. Serve hot with onion slices and lemon.",
      },
      {
        name: "Egg Curry",
        prepTime: "25 mins",
        imageSrc: EggCurryImage,
        ingredients: [
          "Boiled eggs",
          "Onion",
          "Tomato",
          "Spices",
          "Oil",
          "Salt",
        ],
        instructions:
          "Prepare onion-tomato masala with spices, add boiled eggs, simmer for a few minutes, and serve with rice or roti.",
      },
      {
        name: "Mutton Curry",
        prepTime: "70 mins",
        imageSrc: MuttonCurryImage,
        ingredients: [
          "Mutton",
          "Onion",
          "Tomato",
          "Ginger-garlic paste",
          "Spices",
          "Oil",
          "Salt",
        ],
        instructions:
          "Pressure cook mutton with spices, prepare masala, combine and simmer until thick. Serve hot.",
      },
    ],
  },

  {
    code: "ind",
    foods: [
      {
        name: "Masala Vada",
        prepTime: "25 mins",
        imageSrc: MasalaVadaImage,
        ingredients: ["Chana dal", "Onion", "Chili", "Fennel seeds", "Oil"],
        instructions:
          "Grind dal coarsely, mix spices, shape vadas and deep fry until crispy.",
      },
      {
        name: "Jeera Rice",
        prepTime: "20 mins",
        imageSrc: JeeraRiceImage,
        ingredients: ["Rice", "Cumin seeds", "Ghee", "Salt"],
        instructions:
          "Temper cumin in ghee, add cooked rice and salt, mix gently and serve.",
      },

      {
        name: "Dosa",
        prepTime: "20 mins",
        imageSrc: DosaImage,
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        imageSrc: IdlyImage,
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
        imageSrc: VegBiriyaniImage,
        ingredients: [
          "Basmati rice",
          "Mixed vegetables",
          "Biryani masala",
          "Curd",
          "Oil or ghee",
        ],
        instructions:
          "Soak rice for 20 minutes and cook till 70% done. Sauté vegetables with biryani masala and curd. Layer rice and vegetables in a heavy-bottomed pan, cover tightly, and dum cook on low flame for 20 minutes. Serve hot with raita.",
      },
      {
        name: "Sambar Rice",
        prepTime: "35 mins",
        imageSrc: SambarSathamImage,
        ingredients: [
          "Rice",
          "Toor dal",
          "Tamarind",
          "Sambar powder",
          "Mixed vegetables",
          "Oil",
          "Salt",
        ],
        instructions:
          "Cook rice and toor dal together until soft. Prepare sambar using tamarind, sambar powder, and vegetables. Mix sambar into the rice-dal mixture, simmer for a few minutes, and serve hot with papad or pickle.",
      },
      {
        name: "Chapati",
        prepTime: "25 mins",
        imageSrc: ChappatiImage,
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Chicken Biryani",
        prepTime: "60 mins",
        imageSrc: ChickenBiriyaniImage,
        ingredients: [
          "Chicken",
          "Basmati rice",
          "Biryani masala",
          "Onion",
          "Tomato",
          "Curd",
          "Oil or ghee",
          "Salt",
        ],
        instructions:
          "Marinate chicken with curd, biryani masala, and salt. Fry onions until golden, add tomato and cook to a masala, then add marinated chicken and cook partially. Layer partly cooked rice over chicken, drizzle ghee, cover tightly, and dum cook on low flame for 20–25 minutes. Serve hot with raita.",
      },
      {
        name: "Pav Bhaji",
        prepTime: "35 mins",
        imageSrc: PavBhajiImage,
        ingredients: [
          "Mixed vegetables",
          "Pav buns",
          "Butter",
          "Pav bhaji masala",
          "Onion",
          "Tomato",
        ],
        instructions:
          "Cook vegetables and mash well. Sauté spices in butter, add mashed veggies, simmer. Toast pav in butter and serve.",
      },
      {
        name: "Chole",
        prepTime: "40 mins",
        imageSrc: CholeImage,
        ingredients: ["Chickpeas", "Onion", "Tomato", "Spices", "Oil", "Salt"],
        instructions:
          "Cook chickpeas, prepare onion-tomato masala with spices, add chickpeas and simmer. Serve with puri or rice.",
      },
    ],
  },

  {
    code: "chi",
    foods: [
      {
        name: "Gobi 65",
        prepTime: "30 mins",
        imageSrc: Gobi65Image,
        ingredients: ["Cauliflower", "Cornflour", "Spices", "Oil", "Salt"],
        instructions:
          "Fry battered cauliflower and toss with spices. Serve hot.",
      },
      {
        name: "Chicken Fried Rice",
        prepTime: "30 mins",
        imageSrc: ChickenFriedRiceImage,
        ingredients: ["Rice", "Chicken", "Garlic", "Soy sauce", "Oil", "Salt"],
        instructions:
          "Stir fry chicken, add rice and sauces, toss on high flame and serve.",
      },

      {
        name: "Veg Fried Noodles",
        prepTime: "25 mins",
        imageSrc: VegNoodlesImage,
        ingredients: [
          "Noodles",
          "Carrot",
          "Cabbage",
          "Capsicum",
          "Soy sauce",
          "Vinegar",
          "Oil",
          "Salt",
        ],
        instructions:
          "Boil noodles until just cooked and drain. Stir fry chopped vegetables on high flame, add soy sauce, vinegar, and salt, then toss in the noodles and stir fry for a few minutes. Serve hot.",
      },
      {
        name: "Veg Manchurian",
        imageSrc: vegManchurianImage,
        prepTime: "35 mins",
        ingredients: [
          "Mixed grated vegetables",
          "Cornflour",
          "All-purpose flour",
          "Soy sauce",
          "Garlic",
          "Onion",
          "Chili sauce",
          "Oil",
          "Salt",
        ],
        instructions:
          "Mix grated vegetables with flour and salt, shape into balls, and deep fry until golden. In another pan, sauté garlic and onion, add sauces and water to make a gravy, then add fried balls and simmer for a few minutes. Serve hot.",
      },
      {
        name: "Chili Chicken",
        prepTime: "40 mins",
        imageSrc: Chicken65Image,
        ingredients: [
          "Boneless chicken",
          "Cornflour",
          "Soy sauce",
          "Onion",
          "Capsicum",
          "Garlic",
          "Chili sauce",
          "Oil",
          "Salt",
        ],
        instructions:
          "Marinate chicken with cornflour, soy sauce, and salt, then deep fry until crisp. Sauté garlic, onion, and capsicum, add sauces and a little water, then toss in fried chicken pieces and cook for a few minutes. Serve hot.",
      },
      {
        name: "Schezwan Fried Rice",
        prepTime: "25 mins",
        imageSrc: SchezwanRiceImage,
        ingredients: [
          "Rice",
          "Vegetables",
          "Schezwan sauce",
          "Soy sauce",
          "Oil",
          "Salt",
        ],
        instructions:
          "Stir fry vegetables, add sauces and cooked rice, toss on high flame. Serve hot.",
      },
      {
        name: "Spring Rolls",
        prepTime: "30 mins",
        imageSrc: SpringRollImage,
        ingredients: [
          "Spring roll sheets",
          "Vegetables",
          "Soy sauce",
          "Oil",
          "Salt",
        ],
        instructions:
          "Stuff rolls with stir-fried veggies, roll tightly, deep fry until golden, serve hot.",
      },
    ],
  },

  {
    code: "ita",
    foods: [
      {
        name: "Lasagna",
        prepTime: "45 mins",
        imageSrc: LasagnaImage,
        ingredients: ["Lasagna sheets", "Tomato sauce", "Cheese", "Veggies"],
        instructions:
          "Layer sheets with sauce and cheese, bake until bubbly and golden.",
      },
      {
        name: "Mushroom Risotto",
        prepTime: "35 mins",
        imageSrc: MushroomRisottoImage,
        ingredients: ["Rice", "Mushrooms", "Butter", "Stock", "Cheese"],
        instructions:
          "Slow cook rice with stock and mushrooms, finish with butter and cheese.",
      },

      {
        name: "Margherita Pizza",
        prepTime: "35 mins",
        imageSrc: PizzaImage,
        ingredients: [
          "Pizza base",
          "Tomato sauce",
          "Mozzarella cheese",
          "Basil leaves",
          "Olive oil",
          "Salt",
        ],
        instructions:
          "Spread tomato sauce on the pizza base, top with mozzarella and basil leaves. Drizzle olive oil, bake in a preheated oven at high temperature until the crust is golden and cheese is melted. Slice and serve hot.",
      },
      {
        name: "Pasta in White Sauce",
        prepTime: "30 mins",
        imageSrc: WhiteSaucePastaImage,
        ingredients: [
          "Pasta",
          "Butter",
          "Maida",
          "Milk",
          "Cheese",
          "Pepper",
          "Salt",
        ],
        instructions:
          "Boil pasta until al dente and drain. In another pan, melt butter, add maida and cook briefly, then slowly add milk while whisking to make a smooth sauce. Add cheese, salt, and pepper, then mix in the pasta and cook for a couple of minutes. Serve hot.",
      },
      {
        name: "Garlic Bread",
        prepTime: "20 mins",
        imageSrc: GarlicBreadImage,
        ingredients: ["Bread", "Butter", "Garlic", "Mixed herbs", "Salt"],
        instructions:
          "Mix softened butter with minced garlic, herbs, and salt. Spread on bread slices and toast in an oven or pan until crisp and lightly golden. Serve warm.",
      },
      {
        name: "Penne Arrabbiata",
        prepTime: "25 mins",
        imageSrc: ArrabbiataImage,
        ingredients: [
          "Penne",
          "Tomato sauce",
          "Garlic",
          "Chili flakes",
          "Olive oil",
          "Salt",
        ],
        instructions:
          "Cook penne, prepare spicy tomato garlic sauce, mix together and simmer for a minute. Serve hot.",
      },
      {
        name: "Cheese Garlic Pizza",
        prepTime: "30 mins",
        imageSrc: GarlicPizzaImage,
        ingredients: ["Pizza base", "Cheese", "Garlic butter", "Herbs"],
        instructions:
          "Spread garlic butter and cheese on base, bake until golden and bubbly. Serve hot.",
      },
    ],
  },
];

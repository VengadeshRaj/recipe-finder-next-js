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
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Upma",
        prepTime: "18 mins",
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
    ],
  },

  {
    code: "ln",
    foods: [
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
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
    ],
  },

  {
    code: "dn",
    foods: [
      {
        name: "Chapati",
        prepTime: "25 mins",
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Pongal",
        prepTime: "35 mins",
        ingredients: ["Rice", "Moong dal", "Pepper", "Cumin", "Ghee", "Salt"],
        instructions:
          "Cook rice and moong dal together with enough water until very soft. Heat ghee in a pan, add pepper and cumin and let them splutter. Pour this over the cooked mixture, add salt, mix well, and serve hot with chutney or sambar.",
      },
      {
        name: "Parotta",
        prepTime: "40 mins",
        ingredients: ["Maida", "Oil", "Water", "Salt"],
        instructions:
          "Prepare a soft dough using maida, salt, water, and oil. Rest for 20 minutes. Roll into thin sheets, fold and coil to form layers, then roll again and cook on a hot tawa with a little oil until flaky and golden. Serve with salna.",
      },
      {
        name: "Chicken 65",
        prepTime: "30 mins",
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
    ],
  },

  {
    code: "veg",
    foods: [
      {
        name: "Dosa",
        prepTime: "20 mins",
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
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
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Margherita Pizza",
        prepTime: "35 mins",
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
    ],
  },

  {
    code: "nonVeg",
    foods: [
      {
        name: "Chicken Biryani",
        prepTime: "60 mins",
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
        ingredients: ["Fish pieces", "Red chili powder", "Turmeric", "Lemon juice", "Salt", "Oil"],
        instructions:
          "Marinate fish pieces with chili powder, turmeric, lemon juice, and salt for 15–20 minutes. Heat oil in a pan and shallow fry the fish on both sides until golden and cooked through. Serve hot with onion slices and lemon.",
      },
    ],
  },

  {
    code: "ind",
    foods: [
      {
        name: "Dosa",
        prepTime: "20 mins",
        ingredients: ["Rice batter", "Urad dal", "Salt", "Oil"],
        instructions:
          "Heat a non-stick pan on medium flame. Pour a ladle of batter and spread it thin in a circular motion. Drizzle oil around the edges and cook until crispy and golden. Fold and serve hot with chutney or sambar.",
      },
      {
        name: "Idli",
        prepTime: "15 mins",
        ingredients: ["Idli batter", "Oil"],
        instructions:
          "Grease idli molds with oil and pour batter. Steam for 10–12 minutes until soft and fluffy. Cool slightly, demold, and serve with chutney or sambar.",
      },
      {
        name: "Veg Biryani",
        prepTime: "45 mins",
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
        ingredients: ["Wheat flour", "Water", "Salt", "Oil (optional)"],
        instructions:
          "Knead wheat flour, salt, and water into a soft dough. Rest for 10 minutes. Roll into thin circles and cook on a hot tawa until brown spots appear on both sides. Serve hot with curry.",
      },
      {
        name: "Chicken Biryani",
        prepTime: "60 mins",
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
    ],
  },

  {
    code: "chi",
    foods: [
      {
        name: "Veg Fried Noodles",
        prepTime: "25 mins",
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
    ],
  },

  {
    code: "ita",
    foods: [
      {
        name: "Margherita Pizza",
        prepTime: "35 mins",
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
        ingredients: ["Bread", "Butter", "Garlic", "Mixed herbs", "Salt"],
        instructions:
          "Mix softened butter with minced garlic, herbs, and salt. Spread on bread slices and toast in an oven or pan until crisp and lightly golden. Serve warm.",
      },
    ],
  },
];

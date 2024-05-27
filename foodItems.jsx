const foodItems = [
    {
      CategoryName: "Biryani/Rice",
      name: "Chicken Fried Rice",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      options: [
        {
          half: "130",
          full: "220",
        },
      ],
      description:
        "Savor the irresistible blend of tender chicken, crisp vegetables, and perfectly seasoned rice in our Chicken Fried Rice. Expertly stir-fried to perfection, each bite delivers a symphony of flavors that will leave you craving for more. A delightful harmony of savory and satisfying, our Chicken Fried Rice is a culinary experience you won't want to miss.",
    },
    {
      CategoryName: "Biryani/Rice",
      name: "Veg Fried Rice",
      img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      options: [
        {
          half: "110",
          full: "200",
        },
      ],
      description:
        "Indulge in the delightful flavors of our Veg Fried Rice, a tantalizing fusion of aromatic jasmine rice and a colorful assortment of fresh, crunchy vegetables. Wok-tossed to perfection, this dish is a symphony of tastes and textures that will leave your taste buds dancing with joy. A vegetarian delight that's both satisfying and full of vibrant goodness.",
    },
    {
      CategoryName: "Biryani/Rice",
      name: "Fish Biryani",
      img: "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
      options: [
        {
          half: "200",
          full: "320",
        },
      ],
      description:
        "Dive into the exquisite taste of our Fish Biryani, where succulent pieces of perfectly spiced fish are layered with fragrant long-grain basmati rice. Every spoonful is a delightful blend of flavors, with the fish's natural freshness complementing the rich and aromatic spices. An elegant and flavorful choice that brings the ocean's finest to your plate.",
    },
    {
      CategoryName: "Biryani/Rice",
      name: "Chicken Biryani",
      img: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
      options: [
        {
          half: "170",
          full: "300",
        },
      ],
      description:
        "Experience culinary bliss with our Chicken Biryani. Fragrant basmati rice and tender chicken pieces are meticulously layered with aromatic spices, creating a symphony of flavors in every bite. A classic dish that's both comforting and indulgent, our Chicken Biryani is a true celebration of taste and tradition.",
    },
    {
      CategoryName: "Biryani/Rice",
      name: "Veg Biryani",
      img: "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
      options: [
        {
          half: "150",
          full: "260",
        },
      ],
      description:
        "Veg Biryani in restaurant style is a sumptuous and indulgent Indian rice delicacy that elevates the experience of traditional Veg Biryani. Crafted with premium basmati rice, an assortment of hand-picked garden-fresh vegetables, and a medley of aromatic spices, this culinary masterpiece exudes a rich and tantalizing flavor profile. The rice is skillfully layered with sautéed vegetables, caramelized onions, and an intricate blend of spices, imparting a captivating aroma and a harmonious symphony of tastes. Served with an array of accompaniments such as fragrant mint-coriander chutney, cooling raita, and perhaps a garnish of golden-fried onions or toasted nuts, restaurant-style Veg Biryani promises a luxurious and unforgettable dining experience that captures the essence of Indian culinary artistry.",
    },
    {
      CategoryName: "Biryani/Rice",
      name: "Prawns Fried Rice",
      img: "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
      options: [
        {
          half: "120",
          full: "220",
        },
      ],
      description:
        "Prawns Fried Rice in restaurant style is a delectable fusion of succulent prawns and perfectly cooked, aromatic basmati rice. This dish showcases the mastery of the chef, who skillfully stir-fries tender prawns with an assortment of crisp vegetables, creating a harmonious balance of textures and flavors. The rice is infused with a medley of savory sauces, fragrant spices, and perhaps a hint of garlic and ginger, resulting in a tantalizing symphony of tastes that dance on the palate. Garnished with finely chopped spring onions and a sprinkle of sesame seeds, this dish not only delights the senses but also embodies the essence of a gourmet dining experience, bringing the vibrant essence of Asian cuisine to your plate.",
    },
    {
      CategoryName: "Starter",
      name: "Chilli Paneer",
      img: "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
      options: [
        {
          half: "120",
          full: "200",
        },
      ],
      description:
        "Chilli Paneer in restaurant style is a culinary masterpiece that marries the creaminess of paneer (Indian cottage cheese) with the bold flavors of Chinese-inspired cuisine. Tender cubes of paneer are delicately coated and stir-fried in a luscious blend of tangy sauces, aromatic spices, and vibrant vegetables. The result is a harmonious symphony of textures, with the paneer achieving a delicate balance between softness and slight crispness. The dish is often adorned with colorful bell peppers, onions, and green chilies, adding both visual appeal and a delightful kick of heat. Served sizzling hot and garnished with a scattering of fresh spring onions, Chilli Paneer exudes an irresistible aroma and taste that embodies the fusion of two rich culinary traditions.",
    },
    {
      CategoryName: "Starter",
      name: "Paneer 65",
      img: "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
      options: [
        {
          half: "150",
          full: "260",
        },
      ],
      description:
        "Paneer 65 in restaurant style is an exquisite Indian appetizer that showcases the artful fusion of textures and flavors. Delicate cubes of paneer, bathed in a harmonious blend of spices and yogurt-based marinade, are meticulously deep-fried to a crisp and golden perfection. The resulting paneer bites boast a tantalizing crunch on the outside while remaining irresistibly creamy on the inside.",
    },
    {
      CategoryName: "Starter",
      name: "Chicken Tikka",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      options: [
        {
          half: "170",
          full: "300",
        },
      ],
      description:
        "Chicken Tikka in restaurant style is a tantalizing Indian dish that epitomizes the art of grilling and marination. Tender pieces of succulent chicken are meticulously marinated in a flavorful blend of yogurt, aromatic spices, and herbs, allowing the flavors to infuse and create a rich and complex taste profile.",
    },
    {
      CategoryName: "Starter",
      name: "Paneer Tikka",
      img: "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
      options: [
        {
          half: "170",
          full: "250",
        },
      ],
      description:
        "Paneer Tikka in restaurant style is a delectable vegetarian appetizer that showcases the exquisite art of marination and grilling. Luscious cubes of paneer (Indian cottage cheese) are meticulously coated in a luxurious blend of yogurt, aromatic spices, and fragrant herbs, creating a harmonious infusion of flavors.",
    },
    {
      CategoryName: "Pizza",
      name: "Chicken Cheese Pizza",
      img: "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
      options: [
        {
          regular: "120",
          medium: "230",
          large: "350",
        },
      ],
      description:
        "Indulge in the irresistible Chicken Cheese Pizza, a culinary masterpiece that brings together the rich flavors of succulent chicken and velvety melted cheese atop a perfectly baked crust. Every bite is a harmonious blend of tender chicken pieces, gooey cheese, and a touch of aromatic herbs and spices, creating a savory sensation that satisfies even the most discerning palates. With its delightful combination of protein-packed goodness and cheesy indulgence, our Chicken Cheese Pizza is a true delight for pizza enthusiasts seeking a taste of pure indulgence.",
    },
    {
      CategoryName: "Pizza",
      name: "Mix Veg Pizza",
      img: "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
      options: [
        {
          regular: "100",
          medium: "200",
          large: "300",
        },
      ],
      description:
        "Enjoy the delightful flavors of our Mix Veg Pizza, a delectable fusion of colorful vegetables, savory tomato sauce, and melted cheese, all nestled on a perfectly baked crust. Each bite bursts with the freshness of garden-fresh veggies, making it a wholesome and satisfying choice for pizza enthusiasts seeking a balance between taste and nutrition. Whether you're a veggie lover or just craving a burst of flavors, our Mix Veg Pizza is a true treat for your taste buds"
    },

    {
      CategoryName: "Sandwich",
      name: "Grilled Peanut Butter and Banana Sandwich",
      img: "https://media.istockphoto.com/id/1262783498/photo/grilled-peanut-butter-and-banana-sandwich.jpg?s=2048x2048&w=is&k=20&c=qzihk1Ri9Z_5DS4pM4v4m69lGyeuSf0g2JmZZty0HBo=",
      options: [
        {
          half: "150",
          full: "260",
        },
      ],
      description:
        "Grilled Peanut Butter and Banana Sandwich"
    },

    {
      CategoryName: "Sandwich",
      name: "Paneer Sandwich",
      img: "https://media.istockphoto.com/id/1084808528/photo/paneer-sandwich-using-indian-cottage-cheese-and-vegetables-and-chutney.jpg?s=612x612&w=is&k=20&c=lR7t1wRQKwKObm0ZNc_kGvSgg3DQqPxhwvf9TwnTSxs=",
      options: [
        {
          half: "170",
          full: "280",
        },
      ],
      description:
        "Paneer Sandwich - using Indian cottage cheese and vegetables and chutney"
    },




  ];
  
  export default foodItems;
  
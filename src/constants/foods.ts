export type Food = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

export const foods: Food[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
    rating: 4.5,
    image:
      "https://t3.ftcdn.net/jpg/03/91/00/40/360_F_391004082_7scfP9H7fPdkE5itZodwjN577WLu9uz6.webp",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 160,
    rating: 4.3,
    image:
      "https://t3.ftcdn.net/jpg/17/92/70/70/240_F_1792707076_fu4BwG0cRmKzmEPbenQevjRUnt63kKbE.jpg",
  },
  {
    id: 3,
    name: "Masala Dosa",
    price: 80,
    rating: 4.6,
    image:
      "https://t4.ftcdn.net/jpg/19/06/68/61/240_F_1906686115_jrmbI57g1C7P4cYs2kNwklEa5EqXxNjb.jpg",
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    price: 120,
    rating: 4.2,
    image:
      "https://t4.ftcdn.net/jpg/07/17/44/91/240_F_717449146_SSz4cFevaC1qLGAu10qxjFKuHSzf661c.jpg",
  },
  {
    id: 5,
    name: "Chicken Fried Rice",
    price: 150,
    rating: 4.4,
    image:
      "https://t4.ftcdn.net/jpg/06/76/08/39/240_F_676083915_5qrwqdzitRqDlc3X7PM9bxH7VggFEIVU.jpg",
  },
  {
    id: 6,
    name: "Veg Noodles",
    price: 110,
    rating: 4.1,
    image:
      "https://t4.ftcdn.net/jpg/08/87/52/31/240_F_887523127_BTxiaGjDi0fvCzpsP4f36ovUFJTLbYNq.jpg",
  },
  {
    id: 7,
    name: "Chicken Noodles",
    price: 140,
    rating: 4.3,
    image:
      "https://t4.ftcdn.net/jpg/08/94/14/81/240_F_894148102_e1deETvTIFRk8U5c92efvXrOkkZMdcoC.jpg",
  },
  {
    id: 8,
    name: "Ghee Roast Dosa",
    price: 95,
    rating: 4.5,
    image:
      "https://t3.ftcdn.net/jpg/08/69/38/88/240_F_869388837_sg71kzxbG9rqUlwadk4ylD0rEh9rKJ5v.jpg",
  },
  {
    id: 9,
    name: "Plain Dosa",
    price: 60,
    rating: 4.0,
    image:
      "https://t4.ftcdn.net/jpg/08/52/30/21/240_F_852302108_0QNsp1eGpvvqC4OvTt3WaO5eZcLqemYn.jpg",
  },
  {
    id: 10,
    name: "Idli Sambar",
    price: 50,
    rating: 4.2,
    image:
      "https://t4.ftcdn.net/jpg/04/95/58/09/240_F_495580942_c2nOO7qVOOOaiOSo4toGwDSiYkQ7tgeb.jpg",
  },
  {
    id: 11,
    name: "Poori Masala",
    price: 70,
    rating: 4.1,
    image:
      "https://t3.ftcdn.net/jpg/18/49/05/88/240_F_1849058816_wLLnBsOjB9NwXtLGpASVevNpzWHteD7K.jpg",
  },
  {
    id: 12,
    name: "Chicken Curry",
    price: 170,
    rating: 4.4,
    image:
      "https://t3.ftcdn.net/jpg/02/35/39/28/240_F_235392807_jcg9sQMQvPom0uBCYWT5tFnfwD1HSls1.jpg",
  },
  {
    id: 13,
    name: "Butter Chicken",
    price: 190,
    rating: 4.6,
    image:
      "https://t4.ftcdn.net/jpg/16/80/30/63/240_F_1680306383_EiOYI8IlykZ6Jr2nbgTe6fGdcxZfYdVi.jpg",
  },
  {
    id: 14,
    name: "Veg Meals",
    price: 130,
    rating: 4.3,
    image:
      "https://t3.ftcdn.net/jpg/16/74/28/64/240_F_1674286403_FiGrJ5QDsfOKHXTSVfW7f78JWDa5tpEi.jpg",
  },
  {
    id: 15,
    name: "Chicken Burger",
    price: 180,
    rating: 4.5,
    image:
      "https://t3.ftcdn.net/jpg/00/94/81/06/240_F_94810657_WMdtIvyGfWuCdzWM75tQ11eB2EYTtYoF.jpg",
  },
  {
    id: 16,
    name: "Veg Burger",
    price: 90,
    rating: 4.0,
    image:
      "https://t3.ftcdn.net/jpg/15/94/83/06/240_F_1594830667_BdrUYD1zLp7CHLWjXqv5JlJ9juDnGEYq.jpg",
  },
  {
    id: 17,
    name: "Pizza",
    price: 120,
    rating: 4.3,
    image:
      "https://t3.ftcdn.net/jpg/02/10/80/40/240_F_210804077_nQ8XWe2fBvrCfDP8t1GumjuhHZneikRM.jpg",
  },
  {
    id: 18,
    name: "French Fries",
    price: 70,
    rating: 4.1,
    image:
      "https://t3.ftcdn.net/jpg/05/89/15/26/240_F_589152619_Ffj66wWOMqlkSyuMG4nhUyAgLcEEDyth.jpg",
  },
  {
    id: 19,
    name: "Chicken Shawarma",
    price: 150,
    rating: 4.4,
    image:
      "https://t3.ftcdn.net/jpg/06/11/33/00/240_F_611330056_9Ri3HwaXHxLlAoh2xJ5gKKQbaYB5haDf.jpg",
  },
  {
    id: 20,
    name: "Ice Cream",
    price: 60,
    rating: 4.5,
    image:
      "https://t3.ftcdn.net/jpg/08/02/34/58/240_F_802345857_KYKgqDv8vUsreaLDZbsmjRu8K0CuYVdb.jpg",
  },
];

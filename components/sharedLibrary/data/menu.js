const items = [
  {
    id: 1,
    type: "burger",
    shortname: "Korma",
    title: "Chicken Korma Naan Burger",
    description:
      "Strips of chicken breast pan fried in traditional Indian spices which compliment the coconut Korma flavour. Topped with a creamy Korma sauce and fresh slices of cucumber. All wrapped in a freshly handmade naan bread.",
    spicy: "no",
    tasty: "no doubt",
    image: "/burger.jpeg",
    price: 319,
  },
  {
    id: 2,
    type: "burger",
    shortname: "Tikka",
    title: "Chicken Tikka Naan Burger",
    description:
      "Strips of chicken breast pan fried in traditional Indian tikka spice. Topped with a beautiful homemade tikka sauce and fresh slices of cucumber. All wrapped in a freshly handmade naan bread.",
    spicy: "a little",
    tasty: "absolutely",
    image: "/burger.jpeg",
    price: 319,
  },
  {
    id: 3,
    type: "side",
    shortname: "Bites",
    title: "Bhaji Bites",
    image: "/bhaji.jpg",
    description:
      "Handmade, beautifly crisp mini onion bhajis dusted with traditional indian spices.",
    spicy: "very little",
    tasty: "very moreish",
    price: 119,
  },
  {
    id: 4,
    type: "side",
    shortname: "Samosas",
    image: "samosas.jpg",
    title: "Two Samosas",
    description: "Tasty fried veggie somosas.",
    spicy: "very little",
    tasty: "absolutely",
    price: 119,
  },
  {
    id: 5,
    type: "drink",
    image: "lassi.jpg",
    shortname: "Lassi",
    title: "Mango Lassi",
    description:
      "A new mango lassi recipe! Think thick, sweet, cold, yogurt mango milkshake, and you should get the idea. A perfect compliment to a curry burger.",
    spicy: "Only sweet",
    tasty: "If you love milkshake",
    price: 169,
  },

  {
    id: 6,
    type: "drink",
    image: "coke.jpg",
    shortname: "Coke",
    title: "Coke",
    description:
      "The one and only coca cola, red can, fizzy, do not shake and open!",
    spicy: "Only if you add chillies!",
    tasty: "It hits the spot",
    price: 99,
  },
]

const priceToPounds = (price) => (price / 100).toFixed(2)

const getItem = (id) => {
  const item = items.filter((i) => i.id === id)
  return item.length === 1 ? item[0] : false
}

const deliveryPrice = 199

const getItemsTotal = (items) => {
  return items.reduce((prev, curr) => prev + curr.price, 0)
}

const getTotal = (order) => {
  return getItemsTotal(order) + deliveryPrice
}

export default {
  items,
  getItem,
  deliveryPrice,
  getTotal,
  getItemsTotal,
  priceToPounds,
}

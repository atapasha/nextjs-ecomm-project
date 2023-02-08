const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "men's clothing",
    image: "images/11.png",
    date: "2015/03/05",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "  clothing",
    image: "images/12.png",
    date: "2015/03/05",
    isFeatured: true,
  },
];

export function getAllEvents() {
  return DUMMY_EVENTS;
}

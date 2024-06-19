const data = [{
    id: "1",
    title: "Tiramisu",
    description: "The best Tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00"
},
{
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50"
},
{
    id: "3",
    title: "Chocolate Mouse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00"
}
];

//Using map method to transform list

const topDesserts = data.map(desserts => {
    return {
        Contents: `${desserts.title} - ${desserts.description}`,
        Price: desserts.price
    }
});

console.log(topDesserts)

export default data;
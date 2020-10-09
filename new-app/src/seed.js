const products=[
    {
        id:1,
        title:"Omo",
        description:"Most widly used detergent",
        votes:41,
        productImageUrl:"image.jpg"
    },
    {
        id:2,
        title:"Ariel",
        description:"Most widly used detergent",
        votes:24,
        productImageUrl:"image.jpg"
    },
    {
        id:3,
        title:"Dettol",
        description:"Most widly used detergent",
        votes:100,
        productImageUrl:"image.jpg"
    },
    {
        id:4,
        title:"Duru",
        description:"Most widly used detergent",
        votes:65,
        productImageUrl:"image.jpg"
    },
    {
        id:5,
        title:"Geisha",
        description:"Most widly used detergent",
        votes:92,
        productImageUrl:"image.jpg"
    },
    {
        id:6,
        title:"Protex",
        description:"Most widly used detergent",
        votes:7,
        productImageUrl:"image.jpg"
    },

]

let sorted_products=products.sort((a,b)=>(
    b.votes -a.votes
));

export default sorted_products;
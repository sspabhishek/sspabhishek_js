const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumwithInitial = array1.reduce(
    (accumulator, currVal) => accumulator + currVal, 0
)

// console.log(sumwithInitial);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "Python",
        price : 999
    },
    {
        itemName : "Mobile Course",
        price : 5999
    },
    {
        itemName : "Data Science",
        price : 12999
    },
    {
        itemName : "CPP",
        price : 3999
    }
]


const bill =  shoppingCart.reduce( (acc, curr) => acc + curr.price, 0)

console.log(bill);

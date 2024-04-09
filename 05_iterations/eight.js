const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumOfMyNums = myNums.reduce((acc,nums) => (acc+nums),0)
console.log(`Sum of ${myNums} is : ${sumOfMyNums}`);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 12000
    },
]

const sumOfCourses = shoppingCart.reduce( (acc,item) => (acc+item.price),0)
console.log(sumOfCourses);


// const coding = ["js", "ruby", "java", "python", "cpp"]

// const valCoding = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// } )

// console.log(valCoding);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numsFiltered = myNums.filter( function (nums) {
//     if(nums>4) return nums
// } )

// const numsFiltered = myNums.filter((nums)=> nums>6 && nums<10 ? nums:null)
const numsFiltered = myNums.filter((nums) => nums>4 && nums<10)

// console.log(numsFiltered);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const preferredBooks = books.filter((book) => book.genre==='Fiction')
  console.log(preferredBooks);

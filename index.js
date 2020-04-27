const R = require('ramda')

R.map(x => x * 2, [1, 2, 3])

const add = (accum, value) => accum + value
R.reduce(add, 5, [1, 2, 3, 4])

const wasBornInCountry = person => person.birthCountry === 'Guyana'
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = R.either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = R.both(isOver18, isCitizen)

let person = {
    birthCounty: 'Guyana',
    naturalizationDate: '1970',
    age: '50'
}


const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

const operate = R.pipe(
    multiply,
    addOne,
    square
)

console.log(operate(3,4))

/*
function publishedInYear(year) {
    return function(book) {
        return book.year == year
    }
}*/

/*
const publishedInYear = year => book => book.year === year
 
const titlesForYear = (books, year) => {
  const selected = R.filter(publishedInYear(year), books)
 
  return R.map(book => book.title, selected)
}

let books = [
    {
        year: '1989',
        title: 'C++'
    },
    {   year: '2000',
        title: 'Java'
    },
    {   year: '2000',
        title: 'Unix'
    }        
];
   
console.log(titlesForYear(books, '2000'))
*/

let books = [
    {
        year: '1989',
        title: 'C++'
    },
    {   year: '2000',
        title: 'Java'
    },
    {   year: '2000',
        title: 'Unix'
    }        
];
   
const publishedInYear = R.curry((year, book) => book.year === year)
 
const titlesForYear = (books, year) =>
  R.pipe(
    R.filter(publishedInYear(year)),
    R.map(book => book.title)
  )(books)

console.log(titlesForYear)

const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

console.log(R.pick(['id', 'email'], user))
console.log(R.has('personalInfo', user))
console.log(R.path(['personalInfo', 'address', 'city'], user))
//console.log(R.keys(user))
//console.log(R.values(user))

//Lenses
const obj = {
    name: 'Randy',
    socialMedia: {
      github: 'randycoulman',
      twitter: '@randycoulman'
    }
  }

  const nameLens = R.lensProp('name')
  const twitterLens = R.lensPath(['socialMedia', 'twitter'])

console.log(R.view(nameLens, obj))
console.log(R.set(twitterLens, '@randy', obj))
console.log(R.over(nameLens, R.toUpper, obj))
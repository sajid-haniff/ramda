
const props = {
    user: {
        posts: [
            { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
            { title: 'Bar', comments: ['Ok'] },
            { title: 'Baz', comments: [] },
        ]
    }
}

const get = p => o =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o)

const getUserComments = get(['user', 'posts', 0, 'comments'])

//console.log(getUserComments(props))
// [ 'Good one!', 'Interesting...' ]
//console.log(getUserComments({ user: { posts: [] } }))
// null

const reverseString2 = str =>
    str.split("").reduceRight((x, y) => x + y, "");

console.log(reverseString2("OEDIVETNOM"));  // MONTEVIDEO


//dispatch table
const dispatchTable = {
    CREATE: (state, action) => {
        // update state, generating newState,
        // depending on the action data
        // to create a new item
        return newState;
    },

    DELETE: (state, action) => {
        // update state, generating newState,
        // after deleting an item
        return newState;
    },

    UPDATE: (state, action) => {
        // update an item,
        // and generate an updated state
        return newState;
    }
};

/*
if action.type matches an attribute in the dispatching object, 
we execute the corresponding function taken from the object where it was stored. 
If there isn't a match, we just return the current state as Redux requires. 
*/

function doAction(state = initialState, action) {
    return dispatchTable[action.type]
        ? dispatchTable[action.type](state, action)
        : state;
}

const markers = [
    { name: "AR", lat: -34.6, lon: -58.4 },
    { name: "BO", lat: -16.5, lon: -68.1 },
    { name: "BR", lat: -15.8, lon: -47.9 },
    { name: "CL", lat: -33.4, lon: -70.7 },
    { name: "CO", lat: 4.6, lon: -74.0 },
    { name: "EC", lat: -0.3, lon: -78.6 },
    { name: "PE", lat: -12.0, lon: -77.0 },
    { name: "PY", lat: -25.2, lon: -57.5 },
    { name: "UY", lat: -34.9, lon: -56.2 },
    { name: "VE", lat: 10.5, lon: -66.9 },
];

const average = arr => arr.reduce((x, y) => x + y, 0)
let averageLat = average(markers.map(x => x.lat)); // -15.76
let averageLon = average(markers.map(x => x.lon)); // -65.53


const range = (start, stop) => new Array(stop - start).fill(0).map((v, i) => start + i)
let from2To6 = range(2, 7); // [2, 3, 4, 5, 6]
console.log(from2To6)

const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1);
factorialByRange(5); // 120
factorialByRange(3); // 6

const ALPHABET = range("A".charCodeAt(), "Z".charCodeAt() + 1).map(x =>
    String.fromCharCode(x)
);
// ["A", "B", "C", ... "X", "Y", "Z"]

const myMap = (arr, fn) => arr.reduce((x, y) => x.concat(fn(y)), []);

const a = [[1, 2], [3, 4, [5, 6, 7]], 8, [[[9, 10]]]];
console.log(a.flat())
console.log(a.flat(2))

const distances = [
    [0, 20, 35, 40],
    [20, 0, 10, 50],
    [35, 10, 0, 30],
    [40, 50, 30, 0],
];

const maxDist1 = Math.max(...distances.flat());
const maxDist2 = distances.flat().reduce((p, d) => Math.max(p, d), 0);

const apiAnswer = [
    {
        country: "AR",
        name: "Argentine",
        states: [
            {
                state: "1",
                name: "Buenos Aires",
                cities: [{ city: 3846864, name: "Lincoln" }],
            },
        ],
    },
    {
        country: "GB",
        name: "Great Britain",
        states: [
            {
                state: "ENG",
                name: "England",
                cities: [{ city: 2644487, name: "Lincoln" }],
            },
        ],
    }
];

console.log(
    apiAnswer
        .map(x => x.states)
        .flat()
        .map(y => y.cities)
        .flat()
);

const names = [
    "Winston Spencer Churchill",
    "Plato",
    "Abraham Lincoln",
    "Socrates",
    "Charles Darwin",
];

const lastNames = names.flatMap(x => {
    const s = x.split(" ");
    return s.length === 1 ? [] : s.splice(1);
}); // [ 'Spencer', 'Churchill', 'Lincoln', 'Darwin' ]

const flatAll = arr =>
    arr.reduce((f, v) => f.concat(Array.isArray(v) ? flatAll(v) : v), []);

const flatOne1 = arr => [].concat(...arr);
const flatOne2 = arr => arr.reduce((f, v) => f.concat(v), []);


const flat2 = (arr, n = 1) =>
    n === Infinity
        ? flatAll(arr)
        : n === 1
            ? flatOne1(arr)
            : flat2(flatOne1(arr), n - 1);

let aa = [1, 2, [3, 4], [[5, 7, 8]]]

console.log(flatOne1(aa))
console.log(flat2(aa, 2))

//shallow copy
const myObj = { fk: 22, st: 12, desc: "couple" };
myCopy = { ...myObj }
console.log(myCopy)

/* Filtering */

const serviceResult = {
    accountsData: [
        {
            id: "F220960K",
            balance: 1024,
        },
        {
            id: "S120456T",
            balance: 2260,
        },
        {
            id: "J140793A",
            balance: -38,
        },
        {
            id: "M120396V",
            balance: -114,
        },
        {
            id: "A120289L",
            balance: 55000,
        },
    ],
};

const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
console.log(delinquent); // two objects, with id's J140793A and M120396V

const delinquentIds2 = serviceResult.accountsData
    .filter(v => v.balance < 0)
    .map(v => v.id);

// emulate filter using reduce
const myFilter = (arr, fn) => 
    arr.reduce((x, y) => (fn(y) ? x.concat(y) : x, []))

/* Searching find, findIndex, includes, indexOf */
marks = [
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    {name: "BO", lat: -16.5, lon: -68.1}
  ];

  let brazilIndex = marks.findIndex(v => v.name === "BR"); // 2

/* Emulating find and findIndex using reduce */

const myFind = (arr, fn) =>
    arr.reduce((x, y) => (x === undefined && fn(y) ? y : x), undefined);

console.log(myFind(marks, v => v.name === "BR"))

const myFindIndex = (arr, fn) =>
    arr.reduce((x, y, i) => (x == -1 && fn(y) ? i : x), -1);

//marks.every(v => v.lat < 0 && v.lon < 0); // false
//marks.some(v => v.lat < 0 && v.lon < 0);  // true
//arr.every(fn);
// arr.reduce((x, y) => x && fn(y), true);
//arr.some(fn);
// arr.reduce((x, y) => x || fn(y), false);
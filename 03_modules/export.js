const people = {
    name: "John",
    age: 25,
};

function fn(num) {
    return num * 2;
}

console.log(people);

//  we require this onorder to import the module in another file
// module.exports = people ;

// this is to imoprt multiple methids or objects or anything
module.exports = { people, fn };

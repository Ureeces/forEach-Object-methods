//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

let objEntries = Object.entries(obj);

objEntries.forEach((user) => {
  console.log(`${user[0]} is called ${user[1].name} and is ${user[1].age} years old.`);
});

// Use Object Methods
//Create an alphabetical list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

const folders = Object.keys(documents).sort();

const fileArrays = Object.values(documents);
const files = fileArrays.reduce((newArr, fileArr) => {
  fileArr.forEach(file => {
    newArr.push(file);
  })

  return newArr;
}, []);


console.log(folders)
console.log(files)


//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};

const compareBooks = function(book1, book2) {
  const book1Values = Object.values(book1);
  const book2Values = Object.values(book2);

  return book1Values.reduce((isSame, book1property, index) => {
    if(book1property !== book2Values[index]) {
      isSame = false;
    }

    return isSame;
  }, true);

}

console.log(compareBooks(book1, book2));

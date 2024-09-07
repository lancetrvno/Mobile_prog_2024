// 1. DECLARING AND ASSIGNMENT OF VARIABLES

const studentInfo = {
    fullName: "Lance Cedrick D. TriviÃ±o",
    age: 19,
    hasFavoriteFoods: true,
    favoriteColor: "Blue and black",
    hobbies: ["Watching series and anime", "Baking", "Playing video games"]
  };
  
  // * CONDITIONAL STATEMENTS
  if (studentInfo.hasFavoriteFoods) { 
    console.log("I have favorite foods.");
  }
  
  switch (true) {
    case studentInfo.age > 18:
      console.log("You are older than 18.");
      break;
    case studentInfo.age < 18:
      console.log("You are younger than 18.");
      break;
    default:
      console.log("You are 18 years old.");
  }
  
  // 2. PRINTING TO THE CONSOLE
  
  console.log(`My name is ${studentInfo.fullName} and I am ${studentInfo.age} years old.`);
  console.log(`My favorite color is ${studentInfo.favoriteColor}`);
  
  // 3. ARRAY DECLARATION
  
  const hobbiesArray = studentInfo.hobbies;
  
  // Printing the array
  console.log(hobbiesArray); 
  // Accessing an element in the array
  console.log(hobbiesArray[0]); 
  
  hobbiesArray.forEach(hobby => console.log(hobby));
  
  // MAPPING AN ARRAY
  const modifiedHobbiesArray = hobbiesArray.map(hobby => hobby + " is fun");
  console.log(modifiedHobbiesArray); 
  
  // 4. OBJECT DECLARATION
  
  const studentProfile = {
    ...studentInfo,
    greet() { 
      console.log(`Hello, I am ${this.fullName}`); 
    }
  };
  
  // Accessing object properties
  console.log(studentProfile.fullName); 
  console.log(studentProfile.age); 
  console.log(studentProfile.hasFavoriteFoods); 
  console.log(studentProfile.hobbies); 
  
  
  studentProfile.greet(); 
  
  // 5. FUNCTION DECLARATION
  
  // Regular function declaration
  function describeStudent() {
    console.log(`This person is ${studentProfile.fullName} and is ${studentProfile.age} years old`);
  }
  
  // Calling the function
  describeStudent(); 
  
  // Arrow function declaration
  const describeStudentArrow = () => {
    return `This person is ${studentProfile.fullName} and is ${studentProfile.age} years old`;
  };
  
  console.log(describeStudentArrow()); 
  
  // Another way to write a function using an arrow function
  const favoriteFoodsList = () => "Sisig, Pizza";
  
  console.log(`Favorite foods: ${favoriteFoodsList()}`);
  
  // 6. ADDING NEW PROPERTIES TO THE OBJECT
  
  studentProfile.favoriteFoods = favoriteFoodsList();
  console.log(studentProfile);
  
  // 7. CREATING A NEW OBJECT WITH THE SAME PROPERTIES
  
  const newStudentProfile = { ...studentProfile };
  console.log(newStudentProfile);
  
  // 8. CHANGING THE VALUE OF A PROPERTY
  
  newStudentProfile.age = 20;
  console.log(newStudentProfile);
  
  // 9. DELETING A PROPERTY
  
  delete newStudentProfile.hasFavoriteFoods;
  console.log(newStudentProfile);
  
  // 10. CHECKING IF A PROPERTY EXISTS
  
  console.log("hasFavoriteFoods" in newStudentProfile);
  
  // 11. PRINTING HOBBIES
  
  console.log("Hobbies:");
  studentProfile.hobbies.forEach(hobby => console.log(hobby));
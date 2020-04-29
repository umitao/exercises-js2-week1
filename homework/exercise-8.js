/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to ad skills from it

4. Create a method to add a skill to all memebrs in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a method to remove a skill to all memebrs in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function that returns the name of the mentor with more number of skills

7. Create the method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
}
*/

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS", "React", "Node"],
    class: "Mar1",
    studentLikes: 0,
    job: {
      company: "Google",
      position: "Senior developer",
      city: "Barcelona",
    },
    addSkill: function () {
      this.skills.push();
    },
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job: {
      company: "FC Barcelona",
      position: "Player",
      city: "Barcelona",
    },
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React", "Angular", "Python", "Node"],
    class: "Mar4",
    studentLikes: 0,
    job: {
      company: "Facebook",
      position: "Software Manager",
      city: "Chicago",
    },
  },
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML", "JS", "React"],
    class: "Mar2",
    studentLikes: 0,
    job: {
      company: "Amazon",
      position: "Senior developer",
      city: "Barcelona",
    },
  },
];

//YOUR CODE HERE

mentors[0].addSkill("Vue");
console.log(mentors[0].skills);

// 1. Filtering Barcelona location and React skill
function filterReactBcn() {
  for (var i = 0; i < mentors.length; i++) {
    var check =
      mentors[i].skills.indexOf("React") >= 0 &&
      mentors[i].job.city === "Barcelona";
    if (check) {
      console.log(
        "Hi, my name is " +
          mentors[i].firstName +
          " " +
          mentors[i].lastName +
          ". I work in Barcelona and I know React."
      );
    }
  }
}

filterReactBcn(mentors);

// 2. Adding Jun1 to class, and SQL to skills
function addClass() {
  for (var i = 0; i < mentors.length; i++) {
    if (mentors[i].job.city === "Barcelona") {
      mentors[i].class = "Jun1";
      mentors[i].skills.push("SQL");
    }
    console.log(mentors[i].class + " " + mentors[i].skills);
  }
}

addClass(mentors);

//

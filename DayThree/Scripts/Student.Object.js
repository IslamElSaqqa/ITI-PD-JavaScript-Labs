// 1. Create array of objects
let students = [
  { Name: "Islam", Degree: 95 },
  { Name: "Mohamed", Degree: 45 },
  { Name: "Omar", Degree: 80 },
  { Name: "Mona", Degree: 55 },
  { Name: "Kareem", Degree: 100 }
];

// 2. Find student with degree between 90 and 100 (use find)
let topStudent = students.find(stu => stu.Degree >= 90 && stu.Degree <= 100);
console.log("Student with degree between 90 and 100:", topStudent);

// 3. Print students with degree < 60 (use filter)
let weakStudents = students.filter(stu => stu.Degree < 60);
console.log("Students with degree < 60:", weakStudents);

// 4. Add a new student (push), then print using for...in
students.push({ Name: "Hima", Degree: 88 });

console.log("After adding new student (using for...in):");
for (let index in students) {
  console.log(students[index]);
}

// 5. Remove last student (pop), then print using for...of
students.pop();

console.log("After removing last student (using for...of):");
for (let stu of students) {
  console.log(stu);
}

// 6. Sort array alphabetically by student name
students.sort((a, b) => a.Name.localeCompare(b.Name));
console.log("Sorted students by name:", students);

// 7. BONUS: Add 2 new students after second element (splice)
students.splice(2, 0,
  { Name: "Shoak", Degree: 77 },
  { Name: "Lina", Degree: 90 }
);

console.log("After adding 2 students after second element:", students);

// 8. BONUS: Remove 1 student after third element (splice)
students.splice(3, 1);

console.log("After removing 1 student after third element:", students);

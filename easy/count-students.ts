function countStudents(students: number[], sandwiches: number[]): number {
  let sandwich = sandwiches.shift();
  for (let i = 0; i < students.length; i++) {
    if (students[0] === sandwich) {
      sandwich = sandwiches.shift();
      students.shift();
      i = -1;
    } else {
      let student = students.shift();
      students.push(student);
    }
  }
  return students.length;
}

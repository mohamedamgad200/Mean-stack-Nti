class Student {
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  getStudentData() {
    return `Student Info : name:${this.name} age: ${this.age} grade: ${this.grade}`;
  }
}
// module.exports = Student;
export default Student;

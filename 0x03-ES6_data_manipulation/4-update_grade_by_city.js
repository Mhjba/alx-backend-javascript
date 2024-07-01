export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const CityStu = student;
    CityStu.grade = 'N/A';
    for (const grade of newGrades) {
      if (CityStu.id === grade.studentId) {
        CityStu.grade = grade.grade;
      }
    }
    return CityStu;
  });
}

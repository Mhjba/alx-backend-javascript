export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((fun) => fun.location === city);
}

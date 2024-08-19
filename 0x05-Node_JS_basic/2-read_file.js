const fs = require('fs');

const countStudents = (data) => {
  if (!fs.existsSync(data)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(data).isFile()) {
    throw new Error('Cannot load the database');
  }
  const file = fs
    .readFileSync(data, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const Names = file[0].split(',');
  const studentPropNames = Names.slice(0, Names.length - 1);

  for (const line of file.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, i) => [propName, studentPropValues[i]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroups)
    .reduce((k, v) => (k || []).length + v.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;

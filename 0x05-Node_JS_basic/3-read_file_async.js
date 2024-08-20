const fs = require('fs');

const countStudents = (data) => new Promise((resolve, reject) => {
  fs.readFile(data, 'utf-8', (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = content.trim().split('\n');
    if (fileLines.length <= 1) {
      reject(new Error('The database file is empty or only contains headers'));
      return;
    }

    const studentG = {};
    const headers = fileLines[0].split(',');
    const studentPN = headers.slice(0, headers.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentR = line.split(',');
      if (studentR.length < headers.length) continue;
      const studentPV = studentR.slice(0, studentR.length - 1);
      const field = studentR[studentR.length - 1];

      if (!studentG[field]) {
        studentG[field] = [];
      }

      const studentE = studentPN.map((propName, idx) => [propName, studentPV[idx]]);
      studentG[field].push(Object.fromEntries(studentE));
    }

    const totalStudents = Object.values(studentG).reduce((sum, group) => sum + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentG)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }

    resolve(true);
  });
});

module.exports = countStudents;

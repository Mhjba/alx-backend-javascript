const fs = require('fs');


const countStudents = (data) => new Promise((resolve, reject) => {
  fs.readFile(data, 'utf-8', (err, path) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (path) {
      const fileLines = path
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentG = {};
      const Names = file[0].split(',');
      const studentPN = Names
        .slice(0, Names.length - 1);

      for (const line of file.slice(1)) {
        const studentR = line.split(',');
        const studentPV = studentR
          .slice(0, studentR.length - 1);
        const field = studentR[studentR.length - 1];
        if (!Object.keys(studentG).includes(field)) {
          studentG[field] = [];
        }
        const studentE = studentPN
          .map((propName, idx) => [propName, studentPV[idx]]);
        studentG[field].push(Object.fromEntries(studentE));
      }

      const totalStudents = Object
        .values(studentG)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentG)) {
        const studentN = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;

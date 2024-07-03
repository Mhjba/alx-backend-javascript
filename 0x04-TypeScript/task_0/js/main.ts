interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Mahjouba",
    lastName: "Ait Alla",
    age: 31,
    location: "Morocco",
  };
  
  const student2: Student = {
    firstName: "Sarah",
    lastName: "Elahti",
    age: 29,
    location: "Morocco",
  };
  
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement("table");
  
  const headRow = table.insertRow();
  const headCell1 = headRow.insertCell(0);
  const headCell2 = headRow.insertCell(1);
  headCell1.textContent = "First Name";
  headCell2.textContent = "Location";
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  document.body.appendChild(table);

const getStudentIdsSum = (studentId) => {
  const id = studentId.reduce(
    (students, value) => students + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;

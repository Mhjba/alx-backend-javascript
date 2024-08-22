function calculateNumber(type, a, b) {
  const rnda = Math.round(a);
  const rndb = Math.round(b);

  if (type === 'SUM') {
      return rnda + rndb;
  } else if (type === 'SUBTRACT') {
      return rnda - rndb;
  } else if (type === 'DIVIDE') {
      if (rndb === 0) {
          return 'Error';
      }
      return rnda / rndb;
  } else {
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;

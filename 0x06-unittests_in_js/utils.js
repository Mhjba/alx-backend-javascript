const Utils = {
  calculateNumber(type, a, b) {
    const rndA = Math.round(a);
    const rndB = Math.round(b);

    if (type === 'SUM') {
      return rndA + rndB;
    } else if (type === 'SUBTRACT') {
      return rndA - rndB;
    } else if (type === 'DIVIDE') {
      if (rndB === 0) {
        return 'Error';
      }
      return rndA / rndB;
    }
  }
};

module.exports = Utils;

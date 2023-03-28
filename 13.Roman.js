function romanToInt(s) {
    const symbolValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let sum = 0;
    let prevValue = 0;
  
    for (let i = 0; i < s.length; i++) {
      const currValue = symbolValues[s[i]];
      if (currValue > prevValue) {
        sum -= prevValue;
      } else {
        sum += prevValue;
      }
      prevValue = currValue;
    }
  
    sum += prevValue;
  
    return sum;
  }
  console.log(romanToInt("III")); // 3
  console.log(romanToInt("IV")); // 4
  console.log(romanToInt("IX")); // 9
  console.log(romanToInt("LVIII")); // 58
  console.log(romanToInt("MCMXCIV")); // 1994
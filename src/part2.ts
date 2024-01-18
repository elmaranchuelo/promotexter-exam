function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const digitMap: Record<string, string> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result: string[] = [];

  function generateCombinations(index: number, currentCombination: string) {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = digitMap[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      generateCombinations(index + 1, currentCombination + letters[i]);
    }
  }

  generateCombinations(0, '');

  return result;
}


//change input here
console.log(letterCombinations("23")); 
console.log(letterCombinations(""));   
console.log(letterCombinations("2"));

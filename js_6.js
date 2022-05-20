// Слово задачи
// У меня есть кошка и собака.

// Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.

// Теперь верните их соответствующие возрасты как [ humanYears, catYears, dogYears]

let humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    if (humanYears === 1) {return [1, 15, 15];}
    if (humanYears === 2) {return [2, 24, 24];}
    
    return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)];
  }
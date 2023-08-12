/**
 * Roman Numeral Converter
 *
 * Convert the given number into a roman numeral.
 *
 * Roman numerals 	Arabic numerals
 *        M         	1000
 *        CM         	900
 *        D         	500
 *        CD         	400
 *        C         	100
 *        XC         	90
 *        L         	50
 *        XL         	40
 *        X         	10
 *        IX         	9
 *        V         	5
 *        IV         	4
 *        I         	1
 *
 * input = number
 * output = ""
 */

function romanNumeral(number) {
  numerals = new Map();
  const keyValuePairs = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  for (const [key, value] of keyValuePairs) {
    numerals.set(key, value);
  }
  console.log(numerals);

  for (const [roman, figure] of numerals) {
    if (figure === number) {
      return roman;
    }
  }
}

romanNumeral(4);

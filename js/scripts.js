function numberConverter(num){
  const numbers = [1, 4, 5];
  const romanNumbers = ["I", "IV", "V"];
  let convertedNumber = "";

  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]){
      convertedNumber = romanNumbers[i];
      return convertedNumber;
  } else if (num < numbers[i]){
    const convertedNumber = romanNumbers[i-1] * 3;
    return convertedNumber;
  } 
}

}

      arrays
    number  romanNumbers
i =   0       I


else if (num > numbers[i]) {
  convertedNumber = numbers[i] + 
}
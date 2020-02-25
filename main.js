// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/* fucntion checks if array passed through it is a valid credit card number, returns true or false*/
const validateCred = arrayInput => {
  let newArray = [...arrayInput];
  
  for (let i = arrayInput.length; i > 1 ; i -= 2) {
    
    checkStop = newArray[i - 2] * 2;
    
    if (checkStop > 9) {
    checkStop -= 9;
    };

    newArray[i - 2] = checkStop;
  
  };
  
 
  
  let sum = newArray.reduce(add);
 
  
   
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  };
  
  
  
    
}

// fucntion is used with .reduce method to return sum of array
const add = (a, b) => {
      return a + b;
    }

//empty array for dumping invalide card numbers to
const invalidCards = [];

// function to send nested array through valideCred function to seperate invalid card number arrays
const findInvalidCards = arrayNest => {
  
  for (let i = 0; i < arrayNest.length; i++) {
      let check = validateCred(arrayNest[i]);
    
      if (check === false) {
         invalidCards.push(arrayNest[i]);
         
        
         
      };
    
  };
}

// calling function and logging invalid arrays to the console
findInvalidCards(batch);
console.log(invalidCards);

// function to identify an invalid card number to their respective company's name.
const idInvalidCardCompanies = arrayNest1 => {
  
  //switch case for the first number of the array
  for (let i = 0; i < arrayNest1.length; i++) {
    let firstNumber = arrayNest1[i][0]
    switch (firstNumber) {
      case  3 :
        //if statement checks to skip duplicate entry
        if (invalidCardCompanies.includes('Amex (American Express)')) {
          break;
        }
        invalidCardCompanies.push('Amex (American Express)');
        break;
      case  4 :
        if (invalidCardCompanies.includes('Visa')) {
          break;
        }
        invalidCardCompanies.push('Visa');
        break;
      case  5 :
        if (invalidCardCompanies.includes('Mastercard')) {
          break;
        }
        invalidCardCompanies.push('Mastercard');
        break;
      case 6 :
        if (invalidCardCompanies.includes('Discover')) {
          break;
        }
        invalidCardCompanies.push('Discover');
        break;
      default :
        console.log('Company not found');
        break;
    }
  }
}

//empty array to dump card companies to 
const invalidCardCompanies = [];

//passing invalid card number array through function to ID respective company that issued card and logging array to console.
idInvalidCardCompanies(invalidCards);
console.log(invalidCardCompanies);








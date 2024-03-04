const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

function decimalToBinary(input) {
    return "1010"; // Number 10
};

function checkUserInput() {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert('Please provide a decimal number');
        return;
    }

    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = '';
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    }
});

/*
    NOTES:

    - Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system we use every day that uses 10 digits (0-9) to form numbers, the binary number system only has two digits, 0 and 1. 
    In computer science, these binary digits are called bits, and are the smallest unit of data computers can process. 
    For computers, 0 represents false or "off", and 1 represents true or "on".

    - In the base-2 number system, the rightmost digit represents the ones place, the next digit to the left represents the twos place, then the fours place, then the eights place, and so on. 
    In this system, each digit's place value is two times greater than the digit to its right.

    | Base-10 | Base-2 |
    | ------- | ------ |
    |    0    |  0     |
    |    1    |  1     |
    |    2    |  10    |
    |    3    |  11    |
    |    4    |  100   |
    |    5    |  101   |
    |    6    |  110   |
    |    7    |  111   |
    |    8    |  1000  |
    |    9    |  1001  |

    - Notice that binary numbers are formed from left to right, from the digit with the greatest place value on the left, to the least significant on the right. 
    For example, the number 3 in binary is 11, or 1 in the twos place and 1 in the ones place. 
    Then for the number 4, a digit to represent the fours place is included on the left and set to 1, the twos place is 0, and the ones place is 0.
*/
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay: 20000,
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay: 15000,
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay: 10000,
    },
];

const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

const showAnimation = () => {
    result.innerText = 'Call Stack Animation';

    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
                <p id="${obj.inputVal}" class="animation-frame" style="margin-top: ${obj.marginTop}px;">
                    decimalToBinary(${obj.inputVal})
                </p>
            `;
        } , obj.addElDelay); 

        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;;
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(() => {
        result.textContent = decimalToBinary(5);
    }, 20000);
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    
    if (!numberInput.value || isNaN(inputInt)) {
        alert('Please provide a decimal number');
        return;
    }

    if (inputInt === 5) {
        showAnimation();
        return; 
    }

    result.textContent = decimalToBinary(inputInt);
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

    - Bits are often grouped into an octet, which is an 8-bit set known as a byte. 
    A byte can represent any number between 0 and 255. 
    Here are the placement values for each bit in a byte: 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1

    - Because bits are often grouped into bytes, it's common to see binary numbers represented in groups of eight, sometimes with leading zeros. 
    For example, the number 52 can be represented as 110100, or 00110100 with leading zeros. 
    Here's how that breaks down with the placement values:
    128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
      0 |  0 |  1 |  1 | 0 | 1 | 0 | 0

    - In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. 
    If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. 
    Or an array where you can only .push() and .pop() elements.
    The call stack is a collection of function calls stored in a stack structure. 
    When you call a function, it is added to the top or of the stack, and when it returns, it is removed from the top / end of the stack.

    - A recursive function is a function that calls itself over and over. 
    But you have to be careful because you can easily create an infinite loop. 
    That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.
    Recursive functions also have a recursive case, which is where the function calls itself.
*/
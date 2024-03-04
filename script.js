const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

function decimalToBinary(input) {
    return '1';
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
*/
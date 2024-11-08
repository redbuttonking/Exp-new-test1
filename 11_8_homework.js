// 미션 2
var A = 10;
console.log('A : ', A);
A = 20;
console.log('변경후 A : ', A);

let B = 'hello';
console.log('B : ', B);
B = 'Bye';
console.log('변경후 B : ', B);

// 미션 3
const Add = (a, b) => {
  return a + b;
};
const Minus = (a, b) => {
  return a - b;
};

const Multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const remainder = (a, b) => {
  return a % b;
};

const calculator = (a, b, x) => {
  switch (x) {
    case '+':
      return Add(a, b);

    case '-':
      return Minus(a, b);

    case '*':
      return Multiplication(a, b);

    case '/':
      return division(a, b);

    case '%':
      return remainder(a, b);

    default:
      break;
  }
};

console.log(calculator(1, 2, '+'));
console.log(calculator(4, 2, '-'));
console.log(calculator(5, 2, '*'));

// 미션 4
console.log('1번 1 == 1 :', 1 == 1);
console.log('2번 1 == "1" :', 1 == '1');
console.log('3번 1 === "1" :', 1 === '1');
console.log('4번 1 != 1 :', 1 != 1);
console.log('5번 1 !== "1" :', 1 !== '1');
console.log('6번 1 > 4 :', 1 > 4);
console.log('7번 1 < 4 :', 1 < 4);
console.log('8번 3 >= 8 :', 3 >= 8);
console.log('9번 8 <= 8 :', 8 <= 8);

//미션 5

let h3_tag = document.querySelector('h3');

const change = () => {
  h3_tag.innerHTML = 'Java Script';
};

setTimeout(change, 3000);

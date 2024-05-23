var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var submitButton = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', function () {
    console.log("the sum is ".concat(add(+input1.value, +input2.value)));
});

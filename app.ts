const input1 = document.querySelector('#input1') as HTMLInputElement
const input2 = document.querySelector('#input2') as HTMLInputElement
const submitButton = document.querySelector('button')

function add(num1: number, num2: number)  {
    return num1 + num2
}

submitButton?.addEventListener('click', () => {
    console.log(`the sum is ${add(+input1.value, +input2.value)}`)
})

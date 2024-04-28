let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let sum = document.getElementById('sum')
let total = document.getElementById('total')

function addition() {
    let a = Number(n1.value)
    let b = Number(n2.value)

    let res = a + b

    sum.value = res
}

total.addEventListener("click", addition)
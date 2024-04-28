let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let multiple = document.getElementById('multiple')
let total = document.getElementById('total')

function multiplication() {
    let a = Number(n1.value)
    let b = Number(n2.value)

    let res = a * b

    multiple.value = res
}

total.addEventListener("click", multiplication)
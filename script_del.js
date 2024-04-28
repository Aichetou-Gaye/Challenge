let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let soustrait = document.getElementById('soustrait')
let total = document.getElementById('total')

function soustraction() {
    let a = Number(n1.value)
    let b = Number(n2.value)

    let res = a - b

    soustrait.value = res
}

total.addEventListener("click", soustraction)

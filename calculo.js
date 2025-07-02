let m1 = document.getElementById("matriz1");
let m2 = document.getElementById("matriz2");

let resp = document.getElementById("resp");
let resp2 = document.getElementById("resp2");

resp.style.display = 'none';
resp2.style.display = 'none';

m1.style.display = 'none';
m2.style.display = 'none';

let resultado = document.getElementById("res");
const resultado2 = document.getElementById("res2");

function addm1() {
    resp.style.display = '';
    resp2.style.display = 'none';
    m1.style.display = '';
    m2.style.display = 'none';
    resultado2.innerHTML = '';
}

function addm2() {
    resultado.innerHTML = '';
    resp.style.display = 'none';
    resp2.style.display = '';
    m1.style.display = 'none';
    m2.style.display = '';
}

function res() {
    let a11 = document.getElementById("a11").value;
    let a12 = document.getElementById("a12").value;
    let a21 = document.getElementById("a21").value;
    let a22 = document.getElementById("a22").value;

    let det = parseFloat(a11) * parseFloat(a22) - parseFloat(a12) * parseFloat(a21);

    resultado.innerHTML = det;
}

function resposta2() {
    let b11 = document.getElementById("b11").value;
    let b12 = document.getElementById("b12").value;
    let b13 = document.getElementById("b13").value;

    let b21 = document.getElementById("b21").value;
    let b22 = document.getElementById("b22").value;
    let b23 = document.getElementById("b23").value;

    let b31 = document.getElementById("b31").value;
    let b32 = document.getElementById("b32").value;
    let b33 = document.getElementById("b33").value;

    let det2 = parseFloat(b11) * parseFloat(b22) * parseFloat(b33) + parseFloat(b12) * parseFloat(b23) * parseFloat(b31) + parseFloat(b13) * parseFloat(b21) * parseFloat(b32) - parseFloat(b13) * parseFloat(b22) * parseFloat(b31) - parseFloat(b12) * parseFloat(b21) * parseFloat(b33) - parseFloat(b11) * parseFloat(b23) * parseFloat(b32);
    resultado2.innerHTML = det2;
}
const h1 = document.querySelector('h1');
const form = document.querySelector('from');
const btn = document.querySelector('#btnCalcular');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');
const body = document.querySelector('body');
btn.addEventListener('click', (event) => {const sumaInputs = input1.value + input2.value;

    pResult.innerText = "Result:  " + sumaInputs;
},false);
alert('hola');

const passive = {
    passive: false
}
window.addEventListener('scroll', () => {
    body.classList.add('rojo')
    alert('dentro de eventos');
});
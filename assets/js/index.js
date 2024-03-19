// Obtener las clases, documentos y/o APIs que usaremos
import { Aguila } from './aguila.js';
import { Leon } from './leon.js';
import { Lobo } from './lobo.js';
import { Oso } from './oso.js';
import { Serpiente } from './serpiente.js';

//obtener json usando IIFE
let animales = [];
(async () => {
    try {
        const response = await fetch('../animales.json')
        const data = await response.json()
        animales = data
    } catch (error) {
        console.log(error)
    }
})();




const preview = document.querySelector('#preview')
const listAnimal = document.querySelector('#animal')
listAnimal.addEventListener('change', () => {
    const animal = document.querySelector('#animal').value.toLowerCase()
    const animalEncontrado = animales.animales.find((item) => item.name.toLowerCase() === animal)
    switch (animal) {
        case 'lobo':
            preview.innerHTML = `<img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height:210px">`
            break
        case 'leon':
            preview.innerHTML = `<img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height:210px">`
            break
        case 'serpiente':
            preview.innerHTML = `<img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height:210px">`
            break
        case 'aguila':
            preview.innerHTML = `<img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height:210px">`
            break
        case 'oso':
            preview.innerHTML = `<img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height:210px">`
            break

    }
})

const contenidoAnimales = document.querySelector('#ContenidoAnimales')
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const animal = document.querySelector('#animal').value.toLowerCase()
    const animalEncontrado = animales.animales.find((item) => item.name.toLowerCase() === animal)
    switch (animal) {
        case 'lobo':
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="...">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>`
            console.log('aqui llenar lobo')
            break
        case 'leon':
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="...">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>`
            console.log('aqui llenar leon')
            break
        case 'serpiente':
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="...">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>`
            console.log('aqui llenar serpiente')
            break
        case 'aguila':
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="...">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>`
            console.log('aqui llenar aguila')
            break
        case 'oso':
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="...">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>`
            console.log('aqui llenar oso')
            break

    }
    console.log('presionaste el boton')
})
console.log(animales)
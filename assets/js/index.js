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

let animalesGuardados = [];
let cont = 0

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
    const edad = document.querySelector('#edad').value
    const comentarios = document.querySelector('#comentarios').value
    const animalEncontrado = animales.animales.find((item) => item.name.toLowerCase() === animal)
    switch (animal) {
        case 'lobo':
            const lobo = new Lobo(animalEncontrado.name, edad, animalEncontrado.imagen, comentarios, animalEncontrado.sonido)
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="..." data-bs-toggle="modal"
              data-bs-target="#${cont}">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>
          <div class="modal fade" id="${cont}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height: 500px;max-width:300px">
                  <p id="edadModal">${edad}</p>
                  <h5>Comentarios</h5>
                  <p id="comentariosModal">${comentarios}</p>
                </div>
              </div>
            </div>
          </div>`
            animalesGuardados.push(lobo)
            cont++
            console.log(lobo)
            break
        case 'leon':
            const leon = new Leon(animalEncontrado.name, edad, animalEncontrado.imagen, comentarios, animalEncontrado.sonido)
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="..." data-bs-toggle="modal"
              data-bs-target="#${cont}">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>
          <div class="modal fade" id="${cont}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height: 500px;max-width:300px">
                  <p id="edadModal">${edad}</p>
                  <h5>Comentarios</h5>
                  <p id="comentariosModal">${comentarios}</p>
                </div>
              </div>
            </div>
          </div>`
            animalesGuardados.push(leon)
            cont++
            console.log(leon)
            break
        case 'serpiente':
            const serpiente = new Serpiente(animalEncontrado.name, edad, animalEncontrado.imagen, comentarios, animalEncontrado.sonido)
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="..." data-bs-toggle="modal"
              data-bs-target="#${cont}">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>
          <div class="modal fade" id="${cont}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height: 500px;max-width:300px">
                  <p id="edadModal">${edad}</p>
                  <h5>Comentarios</h5>
                  <p id="comentariosModal">${comentarios}</p>
                </div>
              </div>
            </div>
          </div>`
            animalesGuardados.push(serpiente)
            cont++
            console.log(serpiente)
            break
        case 'aguila':
            const aguila = new Aguila(animalEncontrado.name, edad, animalEncontrado.imagen, comentarios, animalEncontrado.sonido)
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="..." data-bs-toggle="modal"
              data-bs-target="#${cont}">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>
          <div class="modal fade" id="${cont}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height: 500px;max-width:300px">
                  <p id="edadModal">${edad}</p>
                  <h5>Comentarios</h5>
                  <p id="comentariosModal">${comentarios}</p>
                </div>
              </div>
            </div>
          </div>`
            animalesGuardados.push(aguila)
            cont++
            console.log(aguila)
            break
        case 'oso':
            const oso = new Oso(animalEncontrado.name, edad, animalEncontrado.imagen, comentarios, animalEncontrado.sonido)
            contenidoAnimales.innerHTML += `<div class="card" style="width: 150px;margin-left: 5px;margin-right: 3px;">
            <img src="./assets/imgs/${animalEncontrado.imagen}" class="card-img-top" alt="..." data-bs-toggle="modal"
              data-bs-target="#${cont}">
            <audio src="./assets/sounds/${animalEncontrado.sonido}" controls></audio>
          </div>
          <div class="modal fade" id="${cont}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="./assets/imgs/${animalEncontrado.imagen}" alt="" style="height: 500px;max-width:300px">
                  <p id="edadModal">${edad}</p>
                  <h5>Comentarios</h5>
                  <p id="comentariosModal">${comentarios}</p>
                </div>
              </div>
            </div>
          </div>`
            animalesGuardados.push(oso)
            cont++
            console.log(oso)
            break

    }
    console.log(animalesGuardados)
    console.log('presionaste el boton')
})
console.log(animales)
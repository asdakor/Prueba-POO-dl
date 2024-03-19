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

/// preview dinamica
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

///Formulario + almacenar animales
let animalesGuardados = [];
let cont = 0
const contenidoAnimales = document.querySelector('#ContenidoAnimales')
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const animal = document.querySelector('#animal').value.toLowerCase()
    const edad = document.querySelector('#edad').value
    const comentarios = document.querySelector('#comentarios').value
    const animalEncontrado = animales.animales.find((item) => item.name.toLowerCase() === animal)
    ///VALIDAR CAMPOS LLENOS DEL FORMULARIO
    let validado = true
    if(comentarios.trim() === ""){
        console.log('este campo no puede ir vacio')
        document.querySelector('#errorComent').innerText = 'Este campo no puede ir vacio'
        if(validado === true){
            validado = !validado
        }
        return
    }else{document.querySelector('#errorComent').innerText = ''}
    if(animal.trim() === "" || animal === null || animal === 'seleccione un animal'){
        console.log('este campo no puede ir vacio')
        document.querySelector('#errorNombre').innerText = 'Por favor, selecciona una opcion'
        if(validado === true){
            validado = !validado
        }
        return
    }else{
        document.querySelector('#errorNombre').innerText = ''
    }
    if(edad.trim() === "" || edad === null || edad === 'Seleccione un rango de años'){
        console.log('este campo no puede ir vacio')
        document.querySelector('#errorEdad').innerText = 'Por favor, selecciona una opcion'
        if(validado === true){
            validado = !validado
        }
        return
    }else{
        document.querySelector('#errorEdad').innerText = ''
    }






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
            break
    }
})
console.log(animales)
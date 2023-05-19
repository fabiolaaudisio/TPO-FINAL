const nombreIngresado= document.getElementById("nombre")
const mensajedatosguardados=document.getElementById("datosguardados")
const boton=document.getElementById("boton")

boton.addEventListener("click", ()=> {

const nombre=nombreIngresado.value

for(let i=0; i<nombre.lenght; i++){
    let codigo = nombre.charCodeat(i)
    if(nombre!="" && ((codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122))){
        mensajedatosguardados.textContent= `Su datos y mensaje se han guardado satisfactoriamente. Haz click en enviar ${nombre}`

    }else if(nombre=="" || ((codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122))) {
        mensajedatosguardados.textContent=""
        alert("Ingrese un nombre sin números y sin carácteres especiales")
    }}})

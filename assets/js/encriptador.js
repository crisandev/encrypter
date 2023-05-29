const mensajeContenedor = document.querySelector(".mensaje-contenedor");

//ENCRIPTAR
function encriptarTexto(mensaje) {
   let newText = "";
   const letras = mensaje.split("");
   letras.forEach((letra) => {
      switch (letra) {
         case "a":
            newText += "ai";
            break;

         case "e":
            newText += "enter";
            break;

         case "i":
            newText += "imes";
            break;

         case "o":
            newText += "ober";
            break;

         case "u":
            newText += "ufat";
            break;
         default:
            newText += letra;
            break;
      }
   });

   return newText;
}

function desencriptarTexto(mensaje) {
   let newText = "";
   const palabras = mensaje.split(" ");

   palabras.forEach((palabra) => {
      let replaced = false;

      if (palabra.includes("ai")) {
         palabra = `${palabra.replaceAll(/ai/g, "a")}`;
         replaced = true;
      }
      if (palabra.includes("enter")) {
         palabra = `${palabra.replaceAll(/enter/g, "e")}`;
         replaced = true;
      }
      if (palabra.includes("imes")) {
         palabra = `${palabra.replaceAll(/imes/g, "i")}`;
         replaced = true;
      }
      if (palabra.includes("ober")) {
         palabra = `${palabra.replaceAll(/ober/g, "o")}`;
         replaced = true;
      }
      if (palabra.includes("ufat")) {
         palabra = `${palabra.replaceAll(/ufat/g, "u")}`;
         replaced = true;
      }

      newText += `${palabra} `
      
   });

   return newText;
}

function llamarEncriptar() {
   const element = document.querySelector(".escribirMensaje");
   const text = encriptarTexto(document.querySelector("#mensaje").value);
   element.innerHTML = text;
   mensajeContenedor.appendChild(element);
}

function llamarDesencriptar() {
   const element = document.querySelector(".escribirMensaje");
   const text = desencriptarTexto(document.querySelector("#mensaje").value);
   element.innerHTML = text;
   mensajeContenedor.appendChild(element);
}

const encriptar = document.querySelector(".encriptar");
const desencriptar = document.querySelector(".desencriptar");
encriptar.onclick = llamarEncriptar;
desencriptar.onclick = llamarDesencriptar;

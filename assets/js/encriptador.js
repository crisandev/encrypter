const messageContainer = document.querySelector(".new-text-container");
let copyMessage = false;

const btnCopy = document.querySelector(".copy");

btnCopy.onclick = async () => {
  const messageCopy = document.querySelector(".text");

  if (copyMessage) {
    navigator.clipboard.writeText(messageCopy.textContent);
  }
};

btnCopy.addEventListener("click", () => {
  btnCopy.classList.add("active");
  setTimeout(() => {
    btnCopy.classList.remove("active");
  }, 2000);
});

//ENCRIPTAR
function encryptText(message) {
  let newText = "";
  const letters = message.split("");
  letters.forEach((letter) => {
    switch (letter) {
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
        newText += letter;
        break;
    }
  });
  return newText;
}

function decryptText(message) {
  let newText = "";
  const words = message.split(" ");

  words.forEach((word) => {
    let replaced = false;

    if (word.includes("ai")) {
      word = `${word.replaceAll(/ai/g, "a")}`;
      replaced = true;
    }
    if (word.includes("enter")) {
      word = `${word.replaceAll(/enter/g, "e")}`;
      replaced = true;
    }
    if (word.includes("imes")) {
      word = `${word.replaceAll(/imes/g, "i")}`;
      replaced = true;
    }
    if (word.includes("ober")) {
      word = `${word.replaceAll(/ober/g, "o")}`;
      replaced = true;
    }
    if (word.includes("ufat")) {
      word = `${word.replaceAll(/ufat/g, "u")}`;
      replaced = true;
    }

    newText += `${word}`;
  });

  return newText;
}

function notTextToEncrypt() {
  const container = document.querySelector(".new-text-container");
  container.removeChild(document.querySelector(".text"));
  container.insertAdjacentHTML(
    "beforeend",
    `
    <p class="text">
    <span> Opss!</span>We don't find text <br />
    Write a message and press one of the button below to encrypt or decrypt your message.
    <img src="../images/buscar.gif" class="img-searching" alt="Searching..." />
    </p>
    `
  );
}

function execEncrypt() {
  const text = encryptText(document.querySelector("#message").value);
  if (text === undefined || !text.replace(/\s/g, "").length > 0) {
    notTextToEncrypt();
    copyMessage = false;
  } else {
    copyMessage = true;
    const element = document.querySelector(".text");
    element.classList.add("text");
    element.innerHTML = text;
    messageContainer.appendChild(element);
  }
}

function execDecrypt() {
  const text = decryptText(document.querySelector("#message").value);
  if (text === undefined || !text.replace(/\s/g, "").length > 0) {
    notTextToEncrypt();
    copyMessage = false;
  } else {
    copyMessage = true;
    const element = document.querySelector(".text");
    element.classList.add("text");
    element.innerHTML = text;
    messageContainer.appendChild(element);
  }
}

const encrypt = document.querySelector(".encrypt");
const decrypt = document.querySelector(".decrypt");
encrypt.onclick = execEncrypt;
decrypt.onclick = execDecrypt;

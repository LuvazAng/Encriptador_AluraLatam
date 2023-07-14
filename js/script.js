var textoIngresado;
var textoEncriptador;
var textoDesencriptador;
var copiar;

function funcEncriptador() {
  textoIngresado = document.getElementById("textoEntrada").value;
  var LowerCase = textoIngresado.toLowerCase();
  const sinAcentos = LowerCase.normalize("NFD").replace(/[\u0300-\u0362]/g, "");
  LowerCase = sinAcentos;

  textoEncriptador = LowerCase.replace(/e/gi, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("textoEncrip").value = textoEncriptador;
  document.getElementById("textoEncrip").value;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("textoEncrip").style.display = "show";
  document.getElementById("textoEncrip").style.display = "inherit";
  document.getElementById("cajaImg").style.display = "none";

  textoIngresado = document.getElementById("textoEntrada").value = "";
}

function funcDesencriptador() {
  textoIngresado = document.getElementById("textoEntrada").value;
  var LowerCase = textoIngresado.toLowerCase();
  textoDesencriptador = LowerCase.replace(/enter/gi, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("textoEncrip").value = textoDesencriptador;
  document.getElementById("textoEncrip").value;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("textoEncrip").style.display = "show";
  document.getElementById("textoEncrip").style.display = "inherit";
  document.getElementById("cajaImg").style.display = "none";

  textoIngresado = document.getElementById("textoEntrada").value = "";
}

function copiarTexto() {
  if (copiar != "") {
    var copiar = document.getElementById("textoEncrip");
    copiar.select();
    document.execCommand("copy");
  }
  document.getElementById("textoEncrip").value = "";
  document.getElementById("textoEntrada").focus();
  document.getElementById("copiar").style.display = "none";
  document.getElementById("cajaImg").style.display = "show";
  document.getElementById("cajaImg").style.display = "inherit";
  document.getElementById("textoEncrip").style.display = "none";
}

//FUNCIÓN QUE HACE ADAPTABLE EL TEXTAREA

function autoDimensionar() {
  var x = this;
  setTimeout(function () {
    x.style.cssText = "height:auto; padding:0";
    x.style.cssText = "height:" + x.scrollHeight + "px";
  }, 0);
}
var textarea = document.getElementById("textoEntrada");
textarea.addEventListener("keydown", autoDimensionar);

//---------------------------------------------------------------






function encriptar(p_llave){
    const btnEncriptar = document.getElementById("encrypt");
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const texto = textarea.value;
    var dataDef = document.querySelector("#default");
    var dataResult = document.querySelector("#result");
    var opText = document.querySelector("#output-text");
    

    if (texto != ""){
        var salida = ""
        /*console.log(texto);*/
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                dataDef.classList.remove("ocultar");
                dataResult.classList.add("ocultar");
                return;
            }
            if(texto[i] == 'a'){
                salida += p_llave["a"] ;
            }
            else if(texto[i] == 'e'){
                salida += p_llave["e"];
            }
            else if(texto[i] == 'i'){
                salida += p_llave["i"]; 
            }
            else if(texto[i] == 'o'){
                salida += p_llave["o"]; 
            }
            else if(texto[i] == 'u'){
                salida += p_llave["u"]; 
            }
            else{
                salida += texto[i];
            }

        }

        
        dataDef.classList.add("ocultar");
        dataResult.classList.remove("ocultar");
        opText.innerHTML = salida;
        btnEncriptar.innerText="Encriptación Exitosa!";
    }
    /*return;*/

}

function desencriptar(p_llave){
    const btnDesencriptar = document.querySelector("#descrypt");
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var dataDef = document.querySelector("#default");
    var dataResult = document.querySelector("#result");
    var opText = document.querySelector("#output-text");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                dataDef.classList.remove("ocultar");
                dataResult.classList.add("ocultar");
                return;
            }
        }
        dataDef.classList.add("ocultar");
        dataResult.classList.remove("ocultar");
        texto = texto.replace(new RegExp(p_llave["a"], "g"), "a");
        texto = texto.replace(new RegExp(p_llave["e"], "g"), "e");
        texto = texto.replace(new RegExp(p_llave["i"], "g"), "i");
        texto = texto.replace(new RegExp(p_llave["o"], "g"), "o");
        texto = texto.replace(new RegExp(p_llave["u"], "g"), "u");
        opText.innerHTML = texto;
    }
    return;
}

function copiar(){
    const btnCopiar = document.querySelector("#copiar");
    const opText = document.querySelector("#output-text");
    navigator.clipboard.writeText(opText.value);
    btnCopiar.innerText="Texto Copiado";
    textarea.innerText = opText;
}

function comprobarTextoInvalido(p_texto){

    const textoInvalido = /[^a-z ,.ñ\n]/gi; 
  
    if (textoInvalido.test(p_texto.value)){

        p_texto.value = p_texto.value.replace(textoInvalido, "");

    }
}

const enc = document.querySelector('#encrypt');
const des = document.querySelector('#descrypt');
const copy = document.querySelector('#copiar');

var p_llave = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(p_llave);} );
des.addEventListener( 'click', function() {desencriptar(p_llave);} );
copy.addEventListener( 'click', function() {copiar();} );
let btnCapturar="";
let btnImprime = "";
let btnCopiar;
let Caracter;
let Lector;
let minuscula = false;



function capturaEncriptar(){
	btnCapturar = document.querySelector("#idCaptura").value;
	if (minuscula) {Encriptar();}
	else{alert("introdujo un caracter o mayuscula");}	
		}
function capturaDesencriptar(){
	btnCapturar = document.querySelector("#idCaptura").value;
	if (minuscula) {Desencriptar();}
	else{alert("introdujo un caracter o mayuscula");}	
	}
function copiarTexto(idElemento) {
	btnCopiar = document.createElement("input");
	btnCopiar.setAttribute("value", document.getElementById(idElemento).value);
	document.body.appendChild(btnCopiar);
	btnCopiar.select();
	document.execCommand("copy");
	document.body.removeChild(btnCopiar);
	//btnCopiar = document.querySelector("#idImpresion").value;
	alert("se a copiado en el porta papeles")
	}
function Encriptar(){	
	Lector=btnCapturar[Symbol.iterator]();
	Caracter=Lector.next();
	for (var iCaracteres = 0; iCaracteres < btnCapturar.length; iCaracteres++) {
		switch (Caracter.value){
			case "a":
				btnImprime = btnImprime + "ai";
				Caracter=Lector.next();
				break;
			case "e":
				btnImprime = btnImprime + "enter";
				Caracter=Lector.next();
				break;
			case "i":
				btnImprime = btnImprime + "imes";
				Caracter=Lector.next();
				break;
			case "o":
				btnImprime = btnImprime + "ober";
				Caracter=Lector.next();
				break;
			case "u":
				btnImprime = btnImprime + "ufat";
				Caracter=Lector.next();
				break;
			default:
				btnImprime = btnImprime + Caracter.value;
				Caracter=Lector.next();
				break;				
			}
		}		
		document.querySelector("#idImpresion").value=btnImprime;
		btnImprime="";
	}
function Desencriptar(){
	
	Lector=btnCapturar[Symbol.iterator]();
	Caracter=Lector.next();
	for (var iCaracteres = 0; iCaracteres < btnCapturar.length; iCaracteres++) {
		
		if (Caracter.value == "a"||
			Caracter.value == "e"||
			Caracter.value == "i"||
			Caracter.value == "o"||
			Caracter.value == "u") {
			if (Caracter.value== "a"||
				Caracter.value== "e") {
				if (Caracter.value == "a") {
					btnImprime = btnImprime + "a";
					Caracter=Lector.next();
					Caracter=Lector.next();
					iCaracteres++;
				}
				else{
					btnImprime = btnImprime + "e";
					Caracter=Lector.next();
					Caracter=Lector.next();
					Caracter=Lector.next();
					Caracter=Lector.next();
					Caracter=Lector.next();
					iCaracteres= iCaracteres+4;
				}
			}
			else{
				btnImprime = btnImprime + Caracter.value;	
				Caracter=Lector.next();
				Caracter=Lector.next();
				Caracter=Lector.next();
				Caracter=Lector.next();
				iCaracteres= iCaracteres+3;

			}
		}
		else{
			btnImprime = btnImprime + Caracter.value;
			Caracter=Lector.next();
			}
		}		
		document.querySelector("#idImpresion").value=btnImprime;
		btnImprime ="";}
function validaCaractaer(pEvent){
	console.log(pEvent.charCode);
	if (pEvent.charCode ==32 || pEvent.charCode >= 97 && pEvent.charCode <= 122 || pEvent.charCode == 164 || pEvent.charCode==241) //esta es la letra ñ
	{
		minuscula=true;
		console.clear();
	}
	else{
		minuscula=false;
		console.clear();
	}
}
/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
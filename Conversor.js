var conversor = (function (){

	return {
		inicioConversor:inicioConversor
	}
	
	function inicioConversor () {
		
		opcao = document.getElementById('Select').value
		
		switch (opcao){
			case "decimal":
				console.log("case 0")
				Decimal();
				break;
			case "binario":
				console.log("case 1")
				Binario();
				break;
			case "hexadecimal":
				console.log("case 2")
				break;
			case "octal":
				console.log("case 3")
				break;
			default:
				console.log("default???")
		}
		
	}
	
	function verificaHexadecimal(valor) {
		
		valor = valor - 9;
		switch (valor) {
			case 1:
				return "A";
				break;
			case 2:
				return "B";
				break;
			case 3:
				return "C";
				break;
			case 4:
				return "D";
				break;
			case 5:
				return "E";
				break;
			case 6:
				return "F";
				break;
		}
		
	}
	
	function Decimal() {
			
		valor = document.getElementById('Input0').value
		
		document.getElementById('Label1').innerHTML = "Binario";
		document.getElementById('Label2').innerHTML = "Hexadecimal";
		document.getElementById('Label3').innerHTML = "Octal";
		document.getElementById('Input1').value = Decimal_Binario(valor);
		document.getElementById('Input2').value = Decimal_Hexadecimal(valor);
		document.getElementById('Input3').value = Decimal_Octal(valor);
			
	}
	
	function Binario() {
		
		valor = document.getElementById('Input0').value
		
		document.getElementById('Label1').innerHTML = "Decimal";
		document.getElementById('Label2').innerHTML = "Hexadecimal";
		document.getElementById('Label3').innerHTML = "Octal";
		document.getElementById('Input1').value = Binario_Decimal(valor);
		var valorTemp = Binario_Decimal(valor);
		document.getElementById('Input2').value = Decimal_Hexadecimal(valorTemp);
		document.getElementById('Input3').value = Decimal_Octal(valorTemp);

		
	}
	
	function Octal() {
		
	}
	
	function Binario_Decimal (valor) {
		var numerosDecimal = [];
		var quatidadeDecimal = valor + "";
		var totalDecimal = 0;
		
		for (var i = 0; i < quatidadeDecimal.length; i++){
			if (quatidadeDecimal.charAt(i) != 0 && quatidadeDecimal.charAt(i) != 1){
				return "Valor digitado não é binario"
			}
			numerosDecimal.push(quatidadeDecimal.charAt(i));
		}
		
		numerosDecimal = numerosDecimal.reverse();
		
		for (var i = 0; i < numerosDecimal.length; i++){
			totalDecimal += Math.pow(2,i) * numerosDecimal[i]
		}
		
		return totalDecimal;
	}
	
	function Binario_Hexadecimal(valor) {
		var numerosHexadecimal = [];
		var stringHexadecimal = valor+"";
		var totalHexadecimal = 0;
		
		for (var i = 0; i < stringHexadecimal.length; i++){
			if ()
		}
	}
	
	function Decimal_Binario(valor){
		var numerosBinario = [];
		var resultadoBinario = valor;
		
		do {
			numerosBinario.push(resultadoBinario%2);
			resultadoBinario = Math.trunc(resultadoBinario / 2);
			
		} while (resultadoBinario > 0)
		
		numerosBinario = numerosBinario.reverse();
		
		resultadoBinario = "";
		
		for (var i = 0; i < numerosBinario.length; i++){
			resultadoBinario = resultadoBinario + numerosBinario[i]
		}
		
		return resultadoBinario;
	}
	
	function Decimal_Hexadecimal(valor) {
		var numerosHexadecimal = []
		var resultadoHexadecimal = valor
		var contHexadecimal = 0;
		
		do {
			numerosHexadecimal.push(resultadoHexadecimal%16)
			if (numerosHexadecimal[contHexadecimal] > 9){
				numerosHexadecimal[contHexadecimal] = verificaHexadecimal(numerosHexadecimal[contHexadecimal]);
			}
			numerosHexadecimal[contHexadecimal]
			resultadoHexadecimal = Math.trunc(resultadoHexadecimal / 16);
			contHexadecimal++;
		} while (resultadoHexadecimal > 0)
			
		numerosHexadecimal = numerosHexadecimal.reverse();
		
		resultadoHexadecimal = "";
		
		for (var i = 0; i < numerosHexadecimal.length; i++){
			resultadoHexadecimal = resultadoHexadecimal + numerosHexadecimal[i]
		}
		
		return resultadoHexadecimal;
	}
	
	function Decimal_Octal(valor) {
		var numerosOctal = [];
		var resultadoOctal = valor;
		
		do {
			numerosOctal.push(resultadoOctal%8);
			resultadoOctal = Math.trunc(resultadoOctal / 8);
			
		} while (resultadoOctal > 0)
		
		numerosOctal = numerosOctal.reverse();
		
		resultadoOctal = "";
		
		for (var i = 0; i < numerosOctal.length; i++){
			resultadoOctal = resultadoOctal + numerosOctal[i]
		}
		
		return resultadoOctal;
	}

	/*
	
	function Decimal_Binario () {
		
		valor = document.getElementById('Valor').value
		
		var numeros = [];
		var resultado = valor;
		
		do {
			numeros.push(resultado%2);
			resultado = Math.trunc(resultado / 2);
			
		} while (resultado > 0)
		
		numeros = numeros.reverse();
		
		resultado = "";
		
		for (var i = 0; i < numeros.length; i++){
			resultado = resultado + numeros[i]
		}
		
		document.getElementById('Binario').value = resultado;
		
	}
	
	function Decimal_Hexadecimal() {
		
		
		
	}
	
	function Decimal_Octal() {
		
		valor = document.getElementById('Valor').value
		
		var numeros = [];
		
	}
	
	function Binario_Decimal () {
		
		valor = document.getElementById('Binario').value
		
		var numeros = [];
		var quatidade = valor + "";
		var total = 0;
		
		for (var i = 0; i < quatidade.length; i++){
			if (quatidade.charAt(i) != 0 && quatidade.charAt(i) != 1){
				document.getElementById('Valor').value = "Valor digitado não é binario";
				return
			}
			numeros.push(quatidade.charAt(i));
		}
		
		numeros = numeros.reverse();
		
		for (var i = 0; i < numeros.length; i++){
			total += Math.pow(2,i) * numeros[i]
		}
		
		document.getElementById('Decimal').value = total;
		
	}
	
	*/
	
})();
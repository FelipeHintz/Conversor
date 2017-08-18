var conversor = (function (){

	return {
		inicioConversor:inicioConversor
	}
	
	function inicioConversor (comando) {
		
		opcao = document.getElementById('Select').value
		
		if (!comando){
			valor = document.getElementById('Input0').value = "";
			document.getElementById('Input1').value = "";
			document.getElementById('Input2').value = "";
			document.getElementById('Input3').value = "";
		}
		
		switch (opcao){
			case "decimal":
				Decimal();
				break;
			case "binario":
				Binario();
				break;
			case "hexadecimal":
				Hexadecimal();
				break;
			case "octal":
				Octal();
				break;
			default:
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
		document.getElementById('Input2').value = Binario_Hexadecimal(valor);
		document.getElementById('Input3').value = Binario_Octal(valor);

		
	}
	
	function Hexadecimal() {
		
		valor = document.getElementById('Input0').value
		
		document.getElementById('Label1').innerHTML = "Decimal";
		document.getElementById('Label2').innerHTML = "Octal";
		document.getElementById('Label3').innerHTML = "Binario";
		document.getElementById('Input1').value = Hexadecimal_Decimal(valor);
		document.getElementById('Input2').value = Hexadecimal_Octal(valor);
		document.getElementById('Input3').value = Hexadecimal_Binario(valor);
		
	}
	
	function Octal() {
		
		valor = document.getElementById('Input0').value
		
		document.getElementById('Label1').innerHTML = "Decimal";
		document.getElementById('Label2').innerHTML = "Hexadecimal";
		document.getElementById('Label3').innerHTML = "Binario";
		document.getElementById('Input1').value = Octal_Decimal(valor);
		document.getElementById('Input2').value = Octal_Hexadecimal(valor);
		document.getElementById('Input3').value = Octal_Binario(valor);
		
	}
	
	function Hexadecimal_Decimal() {
		
		var numerosHexadecimal = [];
		var quatidadeHexadecimal = valor + "";
		var totalDecimal = 0;
		
		for (var i = 0; i < quatidadeHexadecimal.length; i++){
			var temp = 0;
			switch (quatidadeHexadecimal[i].toUpperCase()) {
				case "A":
					temp = 10;
					break;
				case "B":
					temp = 11;
					break;
				case "C":
					temp = 12;
					break;
				case "D":
					temp = 13;
					break;
				case "E":
					temp = 14;
					break;
				case "F":
					temp = 15;
					break;
				default:
					temp = quatidadeHexadecimal[i];
			}
			numerosHexadecimal.push(temp);
		}
		
		numerosHexadecimal = numerosHexadecimal.reverse();
		
		for (var i = 0; i < numerosHexadecimal.length; i++){
			totalDecimal += Math.pow(16,i) * numerosHexadecimal[i]
		}
		
		return totalDecimal;
		
	}
	
	function Hexadecimal_Binario () {
		var stringHexadecimal = valor+"";
		var numerosHexadecimal = [];
		var numerosBinario = []
		var resultado = "";
		var resultadoBinario;
		
		for (var i = 0; i < stringHexadecimal.length; i++)
			numerosHexadecimal.push(stringHexadecimal.charAt(i))
		
		for (var i = 0; i < numerosHexadecimal.length; i++){
						
			resultadoBinario = 0;
			
			switch (numerosHexadecimal[i].toUpperCase()) {
				case "A":
					resultadoBinario = 10;
					break;
				case "B":
					resultadoBinario = 11;
					break;
				case "C":
					resultadoBinario = 12;
					break;
				case "D":
					resultadoBinario = 13;
					break;
				case "E":
					resultadoBinario = 14;
					break;
				case "F":
					resultadoBinario = 15;
					break;
				default:
					resultadoBinario = numerosHexadecimal[i];
			}
			
			var repeticoesBase = 4;
			
			while (repeticoesBase != 0) {
				numerosBinario.push(resultadoBinario%2);
				resultadoBinario = Math.trunc(resultadoBinario / 2);
				repeticoesBase--				
			}

			numerosBinario = numerosBinario.reverse();
			
			for (var j = 0; j < numerosBinario.length; j++)
				resultado += ""+numerosBinario[j];
			
			numerosBinario = []
	
		}
		
		return resultado
	}
	
	function Hexadecimal_Octal () {
		return (Binario_Octal(Hexadecimal_Binario(valor)))
	}
	
	function Octal_Decimal(valor) {
		
		var numerosOctal = [];
		var stringOctal = valor+"";
		var valorDecimal = 0;
		
		for (var i = 0; i < stringOctal.length; i++)
			numerosOctal.push(stringOctal.charAt(i))
							
		var x = 0
		
		numerosOctal = numerosOctal.reverse();
		
		var temp = [];
		for (var i = 0; i < numerosOctal.length; i++){
			temp.push(Math.pow(8,i) * numerosOctal[i]);
		}
		
		for (var i = 0; i < temp.length; i++)
			valorDecimal += temp[i]
		
		return valorDecimal.reverse();
		
	}
	
	function Octal_Hexadecimal(valor) {
		return (Binario_Hexadecimal(Octal_Binario(valor)))
	}
	
	function Octal_Binario(valor) {
		
		var stringOctal = valor+"";
		var numerosOctal = [];
		var numerosBinario = []
		var resultado = "";
		var resultadoBinario;
		
		for (var i = 0; i < stringOctal.length; i++)
			numerosOctal.push(stringOctal.charAt(i))
		
		for (var i = 0; i < numerosOctal.length; i++){
						
			resultadoBinario = numerosOctal[i];
			
			var repeticoesBase = 3;
			
			while (repeticoesBase != 0) {
				numerosBinario.push(resultadoBinario%2);
				resultadoBinario = Math.trunc(resultadoBinario / 2);
				repeticoesBase--				
			}

			numerosBinario = numerosBinario.reverse();
			
			for (var j = 0; j < numerosBinario.length; j++)
				resultado += ""+numerosBinario[j];
			
			numerosBinario = []
	
		}
		
		return resultado

	}
		
	function Binario_Decimal (valor) {
		var numerosBinario = [];
		var quatidadeBinario = valor + "";
		var totalDecimal = 0;
		
		for (var i = 0; i < quatidadeBinario.length; i++){
			if (quatidadeBinario.charAt(i) != 0 && quatidadeBinario.charAt(i) != 1){
				return "Valor digitado não é binario"
			}
			numerosBinario.push(quatidadeBinario.charAt(i));
		}
		
		numerosBinario = numerosBinario.reverse();
		
		for (var i = 0; i < numerosBinario.length; i++){
			totalDecimal += Math.pow(2,i) * numerosBinario[i]
		}
		
		return totalDecimal;
	}
	
	function Binario_Octal (valor) {
		
		var numerosBinario = [];
		var stringBinario = valor+"";
		var totalOctal = 0;
		var armazenamentoTemp = "";
		var valorFinal = [];
		var posicoes = [4,2,1]
				
		for (var i = 0; i < stringBinario.length; i++)
			numerosBinario.push(stringBinario.charAt(i));
				
		while (numerosBinario.length % 3 != 0){
			numerosBinario.push("0");
		}
		
		var x = 0;
		var armazenamento = [];
		
		for (var i = 0; i < numerosBinario.length; i++){
			armazenamentoTemp += numerosBinario[i];
			if ((i+1) % 3 == 0) {
				armazenamento.push(armazenamentoTemp)
				armazenamentoTemp = "";
			}
		}
				
		var temp = 0;
		for (var j = 0; j < armazenamento.length; j++){
			for (var i = 0; i < armazenamento[j].length; i++){
				console.log(armazenamento[j].charAt(i)*posicoes[i])
				temp += armazenamento[j].charAt(i) * posicoes[i];
			}	
			valorFinal.push(temp);
			temp = 0;
		}
		
		var retorno = "";		
		for (var j = 0; j < valorFinal.length; j++){
			retorno += valorFinal[j]
		}
			
		return retorno;
		
	}
	
	function Binario_Hexadecimal(valor) {
		var numerosBinario = [];
		var stringBinario = valor+"";
		var totalHexadecimal = 0;
		var armazenamentoTemp = "";
		var valorFinal = [];
		
		for (var i = 0; i < stringBinario.length; i++)
			numerosBinario.push(stringBinario.charAt(i))
		
		while (numerosBinario.length % 4 != 0){
			numerosBinario.push("0");
		}
				
		numerosBinario = numerosBinario.reverse();
			
		var x = 0
		
		var armazenamento = [];
		
		for (var i = 0; i < numerosBinario.length; i++){
			armazenamentoTemp += numerosBinario[i];
			if ((i+1) % 4 == 0){
				armazenamento.push(armazenamentoTemp)
				armazenamentoTemp = "";
			}
		}
		
		var temp = 0;
		for (var j = 0; j < armazenamento.length; j++){
			for (var i = 0; i < armazenamento[j].length; i++){
				temp += Math.pow(2,i) * armazenamento[j].charAt(i);
				
				if (temp > 9) {
					temp = verificaHexadecimal(temp);
				}
			}	
			valorFinal.push(temp);
			temp = 0;
		}
		
		valorFinal = valorFinal.reverse()
		var retorno = "";		
		for (var j = 0; j < valorFinal.length; j++){
			retorno += valorFinal[j]
		}
			
		return retorno;
		
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
	
})();

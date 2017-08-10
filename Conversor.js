var conversor = (function (){

	return {
		Binario_Decimal:Binario_Decimal,
		Decimal_Binario:Decimal_Binario
	}

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
	
})();
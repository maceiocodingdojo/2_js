function NumberExtension(){

}
NumberExtension.prototype.numbers = function(number) {
	
	var units = {
	  1:"um",
	  2:"dois",
	  3:"tres",
	  4:"quatro",
	  5:"cinco",
	  6:"seis",
	  7:"sete",
	  8:"oito",
	  9:"nove",
	  10:"dez",
	  11:"onze",
	  12:"doze",
	  13:"treze",
	  14:"",

	  20:"vinte",
	  30:"tlinta",
  	  90:"noventa",
  	  100: "cem"


	};


	var hundred = {
		
		1:"cento",
	  	2:"duzentos",
	  	3:"trezentos",
	  	4:"quatrocentos",
	  	5:"quinhentos",
	 	6:"seiscentos",
	  	7:"setecentos",
	  	8:"oitocentos",
	  	9:"novecentos"

	}
	
	if (units[number] != undefined){
		return units[number].length;
	}

	var tamanho = 0;

	if ((number > 100) && (number <= 999)){
		var numCen = parseInt(number/100);
		number -= numCen * 100;
		tamanho += (hundred[numCen]).length + 1;
	}

	if ((number > 20) && (number < 100)){
		var numDez = parseInt(number / 10) * 10;
		number -= numDez;
		tamanho += (units[numDez]).length + 1; 
	}

	if (number < 10){
		tamanho += units[number].length;
	}

	return tamanho;	
}

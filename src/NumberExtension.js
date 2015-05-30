function NumberExtension(){
}

NumberExtension.prototype.numbers = function(number) {
	
	var simple = {
	  1:"um", 2:"dois", 3:"tres", 4:"quatro", 5:"cinco", 6:"seis", 7:"sete", 8:"oito", 9:"nove", 10:"dez",
	  11:"onze", 12:"doze", 13:"treze", 14:"quatorze", 15:"quinze", 16:"dezesseis", 17:"dezessete",
	  18:"dezoito", 19:"dezenove", 20:"vinte", 30:"trinta", 40:"quarenta", 50:"cinquenta", 60:"sessenta",
	  70:"setenta", 80:"oitenta", 90:"noventa", 100:"cem", 200:"duzentos", 300:"trezentos", 400:"quatrocentos", 
	  500:"quinhentos", 600:"seiscentos", 700:"setecentos", 800:"oitocentos", 900:"novecentos", 1000:"mil"
	};

	var special = {
		100:"cento"
	};

	if (simple[number] != undefined){
		console.log(simple[number]);
		return simple[number].length;
	} else {

		var size = "";

		if ((number > 100) && (number < 1000)){
			var hundred = parseInt(number/100) * 100;
			number -= hundred;
			if (special[hundred] != undefined) {
				size += (special[hundred]) + "e";
			} else {
				size += (simple[hundred]) + "e";
			}
		}

		if ((number >= 20) && (number < 100)){
			var ten = parseInt(number / 10) * 10;
			number -= ten;
			size += (simple[ten]) + "e"; 
		}

		if (number < 20){
			size += simple[number];
		}

		console.log(size);
		return size.length;
	}		
}

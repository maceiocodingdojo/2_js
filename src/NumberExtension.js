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
		  9:"nove"			
	}

	if (units[number] != undefined){
		return units[number].length;
	}

	// if (number === 1)
	// 	return "um";
	// else 
	// 	return "dois";
}

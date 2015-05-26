function NumberExtension(){

}
NumberExtension.prototype.numbers = function(number) {
	switch(number){
		case 1:
			return "um".length;
			break;
		case 2:
			return "dois".length;
			break;
		case 3:
			return "tres".length;
			break;			
		case 4:
			return "quatro".length;
			break;
		case 5:
			return "quatro".length;
			break;

		default:
			break;
	}

	// if (number === 1)
	// 	return "um";
	// else 
	// 	return "dois";
}

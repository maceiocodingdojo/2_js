function NumbersLength(){
  var self = this;

  var simple_numbers = {
    0:"zero",
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
    14:"quatorze",
    15:"quinze",
    16:"dezesseis",
    17:"dezessete",
    18:"dezoito",
    19:"dezenove",
    20:"vinte",
    30:"trinta",
    40:"quarenta",
    50:"cinquenta",
    60:"sessenta",
    70:"setenta",
    80:"oitenta",
    90:"noventa",
    100: "cem",
    200: "duzentos",
    300: "trezentos",
    400: "quatrocentos",
    500: "quinhentos",
    600: "seiscentos",
    700: "setecentos",
    800: "oitocentos",
    900: "novecentos",
    1000: "mil"
  }

  var different_numbers = {
    100: 'cento'
  }

  self.sum_by_range = function(begin, end) {
    var total = 0;

    for (var i = begin; i <= end; i++) {
      total += self.length_for_number(i);
    }
    return total;
  }

  self.length_for_number = function(number) {

    if (simple_numbers[number] != undefined){
      return simple_numbers[number].length;
    }

    var number_length = 0;

    for (var i = 0; i < number.toString().length; i++) {
      var actual_digit = get_specific_digit(number, i);
      var actual_value = get_hundred_or_ten_or_unit_length(actual_digit, number.toString().length, i);

      if (actual_value == 0) {
        continue;
      }
      number_length = calculate_length(number_length, actual_value);
    }
    return number_length;
  }

  /* ****** Private Methods ****** */

  var get_hundred_or_ten_or_unit_length = function(actual_digit, number_length, position) {
    if (number_length == 3) {
      if (position == 0) {
        actual_digit += "00"
      }

      if (position == 1) {
        actual_digit += "0"
      }
    } else if (number_length == 2) {
      if (position == 0) {
        actual_digit += "0"
      }
    }
    return parseInt(actual_digit);
  }

  var get_specific_digit = function(number, position) {
    return number.toString()[position];
  }

  var calculate_length = function(number_length, actual_value) {
    if (number_length > 0) {
      number_length += 1 //The +1 is the "e"
    }

    if (different_numbers[actual_value] != undefined){
      number_length += different_numbers[actual_value].length;
    } else {
      number_length += simple_numbers[actual_value].length;
    }
    return number_length;
  }
}



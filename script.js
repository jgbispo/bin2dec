const convert = () => {
  var input_binario = document.getElementById("binario").value;
  var input_decimal = document.getElementById("decimal");

  var binario_list = input_binario.split("").reverse();

  var coe = 0, base = 2, result = 0;
  binario_list.forEach(bin => {
    if(bin == 1){
      result += Math.pow(base, coe)
      coe++
    }
    else if(bin == 0){
      coe++
    }
  });
  input_decimal.value = result
} 

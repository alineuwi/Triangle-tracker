function Triangle() {
  var A = parseInt(document.getElementById("input_id").value);
  var B = parseInt(document.getElementById("input_id2").value);
  var C = parseInt(document.getElementById("input_id3").value);
  var output;
  var Text;
  var array = [A, B, C];
  if (A <= 0 || B <= 0 || C <= 0) {
    output = "undefined";
  } else if (A >= B + C || C >= B + A || B >= A + C) {
    output = "Not a triangle";
  } else if (A === B && B === C && C === A) {
    output = "Equilateral";
  } else if (A === B || B === C || C === A) {
    output = "Isoceles";
  } else if (A != B && B != C && C != A) {
    output = "Scalene";
  } else {
    output = "Error";
  }
  document.getElementById("Text").innerHTML = "the value" + " " + array + " ";
  document.getElementById("Text").innerHTML += output;
}

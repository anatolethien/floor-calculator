var calculator = document.getElementById("calculator");
var expression = document.getElementById("expression");
var result = document.getElementById("result");

calculator.addEventListener("submit", (event) => {
  event.preventDefault();
  var computation = eval(expression.value);
  switch (typeof computation) {
    case "number":
      result.innerHTML = Math.floor(computation);
      break;
    case "boolean":
      result.innerHTML =
        computation.toString().charAt(0).toUpperCase() +
        computation.toString().slice(1);
      break;
    default:
      break;
  }
  // result.innerHTML = Math.floor(eval(expression.value))
});

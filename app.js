let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let word = document.getElementById("val").value;
  let count = word.length;
  let output = document.getElementById("output");

  output.innerHTML = `<h1>${count}</h1>`;
});

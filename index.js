console.log("hello");

// window.alert(`yo wassuup`);

document.getElementById("myh").textContent = "this text is coming using js :)";
document.getElementById("myp").textContent = "wwoww";
let online = true;
console.log(`is bro online? ${online}`);
let name = "ayush";
let age = 19;
let days = "a week i guess";
document.getElementById(
  "myp"
).textContent = `my name is ${name} and I'm ${age}, i'm learning js and hopefully i'll complete it in ${days}`;
let cir;
let radius;
const PI = 3.14159;
document.getElementById("submit").onclick = function () {
  radius = document.getElementById("radinput").value;
  radius = Number(radius);
  cir = 2 * PI * radius;
  document.getElementById("result").textContent = cir;
};

let count = 0;

document.getElementById("count").textContent = 0;
document.getElementById("decrease").onclick = function () {
  count = count - 1;
  document.getElementById("count").textContent = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("count").textContent = count;
};
document.getElementById("increase").onclick = function () {
  count = count + 1;
  document.getElementById("count").textContent = count;
};

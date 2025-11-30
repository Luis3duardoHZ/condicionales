const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const msg = document.getElementById("mensaje")
const btn = document.getElementById("ingresar")

btn.addEventListener("click", function() {
  const pass = n1.value + n2.value + n3.value + n4.value

  if (pass === "4827") {
    msg.innerHTML = "password 1 correcto"
  } else if (pass === "2744") {
    msg.innerHTML = "password 2 correcto"
  } else {
    msg.innerHTML = "password incorrecto"
  }
})

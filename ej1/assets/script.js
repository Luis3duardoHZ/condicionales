const foto = document.getElementById("foto")

foto.addEventListener("click", function() {
  if (foto.style.border === "") {
    foto.style.border = "2px solid red"
  } else {
    foto.style.border = ""
  }
})

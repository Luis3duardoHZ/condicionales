const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const res = document.getElementById("resultado")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
  const total = Number(s1.value) + Number(s2.value) + Number(s3.value)

  if (total <= 10) {
    res.innerHTML = "Llevas " + total + " stickers"
  } else {
    res.innerHTML = "Llevas demasiados stickers"
  }
})
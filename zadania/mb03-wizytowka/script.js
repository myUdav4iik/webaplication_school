const umietnosci = ["JavaScript", "Python", "C++", "SQL","Swift"];
let listaUmiejetnosci = document.getElementById("lista-umietnosci");
for (let i = 0; i < umietnosci.length; i++) {
    const li = document.createElement("li");
    li.textContent = umietnosci[i];
    listaUmiejetnosci.appendChild(li);
}
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const imie = document.getElementById("imie").value;
    const email = document.getElementById("email").value;
    const temat = document.getElementById("temat").value;
    const wiadomosc = document.getElementById("tresc").value;
    if (imie && email && temat && wiadomosc) {
        
    }});

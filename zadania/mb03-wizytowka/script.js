const umietnosci = ["JavaScript", "Python", "C++", "SQL","Swift"];
let listaUmiejetnosci = document.getElementById("lista-umietnosci");
for (let i = 0; i < umietnosci.length; i++) {
    const li = document.createElement("li");
    li.textContent = umietnosci[i];
    listaUmiejetnosci.appendChild(li);
}

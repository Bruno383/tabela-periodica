const elementos = [
    {
        numero: 1,
        simbolo: "H",
        nome: "Hidrogênio",
        categoria: "nao-metal",
        coluna: 1,
        linha: 1
    },
    {
        numero: 2,
        simbolo: "He",
        nome: "Hélio",
        categoria: "gas-nobre",
        coluna: 18,
        linha: 1
    },
    {
        numero: 3,
        simbolo: "Li",
        nome: "Lítio",
        categoria: "metal-alcalino",
        coluna: 1,
        linha: 2
    }
];

const tabela = document.getElementById("tabela");

elementos.forEach(el => {

    const div = document.createElement("div");

    div.classList.add("elemento");
    div.classList.add(el.categoria);

    div.style.gridColumn = el.coluna;
    div.style.gridRow = el.linha;

    div.innerHTML = `
        <div class="numero">${el.numero}</div>
        <div class="simbolo">${el.simbolo}</div>
        <div class="nome">${el.nome}</div>
    `;

    tabela.appendChild(div);
});
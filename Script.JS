// Troque pelo seu número: 55 + DDD + número, sem espaços nem parênteses
const WHATSAPP = "5500000000000";

// Todo elemento com data-whats vira um link de WhatsApp com a mensagem pronta
document.querySelectorAll("[data-whats]").forEach(function (el) {
  el.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(el.dataset.whats);
});

// Filtros: Todos / Roupas / Acessórios
const botoesFiltro = document.querySelectorAll(".filtro");
const produtos = document.querySelectorAll(".lista-produtos article");

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    botoesFiltro.forEach(function (b) { b.classList.remove("ativo"); });
    botao.classList.add("ativo");

    const filtro = botao.dataset.filtro;
    produtos.forEach(function (produto) {
      produto.hidden = !(filtro === "todos" || produto.dataset.categoria === filtro);
    });
  });
});
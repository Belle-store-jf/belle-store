// ============================================================
// SACOLA DE COMPRAS + VITRINE DE PRODUTOS
// Depende do arquivo produtos.js (ele precisa ser carregado ANTES deste)
// ============================================================

// Troque pelo seu número de WhatsApp (com 55 + DDD, sem espaços)
const NUMERO_WHATSAPP = "5532999928805";

// A sacola é uma lista de itens: [{ nome: "...", preco: 49.9, qtd: 2 }, ...]
// Ela é guardada no navegador (localStorage), então não some ao recarregar a página.
let sacola = [];
try {
    sacola = JSON.parse(localStorage.getItem("sacola-belle")) || [];
} catch (erro) {
    sacola = [];
} 

// ---------- Elementos da página ----------
const painel = document.getElementById("painel-sacola");
const fundo = document.getElementById("fundo-painel");
const listaItens = document.getElementById("itens-sacola");
const msgVazia = document.getElementById("sacola-vazia");
const conteudoCheckout = document.getElementById("conteudo-checkout");
const rodapePainel = document.getElementById("painel-rodape");
const totalEl = document.getElementById("total-sacola");
const contadorEl = document.querySelector(".contador");
const linkWhatsapp = document.getElementById("finalizar-whatsapp");

// ---------- Funções de apoio ----------
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Evita que um nome com símbolos estranhos (< > & ") quebre o HTML
function escapar(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML.replace(/"/g, "&quot;");
}

function abrirPainel() {
    painel.classList.add("aberto");
    fundo.classList.add("aberto");
    painel.setAttribute("aria-hidden", "false");
}

function fecharPainel() {
    painel.classList.remove("aberto");
    fundo.classList.remove("aberto");
    painel.setAttribute("aria-hidden", "true");
}

// ============================================================
// SACOLA
// ============================================================
function adicionar(nome, preco) {
    const existente = sacola.find(function (item) {
        return item.nome === nome;
    });
    if (existente) {
        existente.qtd += 1;          // já tem na sacola: só soma 1
    } else {
        sacola.push({ nome: nome, preco: preco, qtd: 1 });
    }
    atualizar();
}

function mudarQuantidade(indice, mudanca) {
    sacola[indice].qtd += mudanca;
    if (sacola[indice].qtd <= 0) {
        sacola.splice(indice, 1);    // quantidade zerou: tira o item
    }
    atualizar();
}

function remover(indice) {
    sacola.splice(indice, 1);
    atualizar();
}

// Redesenha tudo que depende da sacola (lista, total, contador e link do WhatsApp)
// Redesenha tudo que depende da sacola (lista, total, contador e link do WhatsApp)
function atualizar() {
    localStorage.setItem("sacola-belle", JSON.stringify(sacola));

    let total = 0;
    let quantidadeTotal = 0;
    let html = "";
    let mensagem = "Olá! Quero fazer um pedido:\n\n";

    sacola.forEach(function (item, i) {
        const subtotal = item.preco * item.qtd;
        total += subtotal;
        quantidadeTotal += item.qtd;
        mensagem += "• " + item.qtd + "x " + item.nome + " - " + formatarPreco(subtotal) + "\n";

        html +=
            '<li class="item-sacola">' +
                '<div class="item-info">' +
                    "<strong>" + escapar(item.nome) + "</strong>" +
                    "<span>" + formatarPreco(item.preco) + "</span>" +
                "</div>" +
                '<div class="item-controles">' +
                    '<button type="button" data-acao="menos" data-i="' + i + '" aria-label="Diminuir">−</button>' +
                    "<span>" + item.qtd + "</span>" +
                    '<button type="button" data-acao="mais" data-i="' + i + '" aria-label="Aumentar">+</button>' +
                    '<button type="button" data-acao="remover" data-i="' + i + '" aria-label="Remover item">×</button>' +
                "</div>" +
            "</li>";
    });

    mensagem += "\nTotal: " + formatarPreco(total);

    listaItens.innerHTML = html;
    totalEl.textContent = formatarPreco(total);
    contadorEl.textContent = quantidadeTotal;
    linkWhatsapp.href = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensagem);

    // Sacola vazia: mostra o aviso e esconde total/botões
    const vazia = sacola.length === 0;
    msgVazia.style.display = vazia ? "block" : "none";
    rodapePainel.style.display = vazia ? "none" : "flex";
}
// Bloqueia ou libera a opção "Dinheiro" conforme a forma de recebimento
function verificarBloqueioDinheiro() {
    const recebimentoEl = document.querySelector('input[name="recebimento"]:checked');
    const radioDinheiro = document.querySelector('input[name="pagamento"][value="Dinheiro"]');
    const radioPix = document.querySelector('input[name="pagamento"][value="Pix"]');

    if (!radioDinheiro) return;

    const labelDinheiro = radioDinheiro.closest(".opcao-radio");
    const ehMotoboy = recebimentoEl && recebimentoEl.value === "Entrega por motoboy";

    radioDinheiro.disabled = ehMotoboy;
    labelDinheiro.classList.toggle("bloqueada", ehMotoboy);

    // Se "Dinheiro" estava marcado e o cliente mudou para motoboy, troca automaticamente para "Pix"
    if (ehMotoboy && radioDinheiro.checked && radioPix) {
        radioPix.checked = true;
    }
}

// Atualiza as regras e o link do WhatsApp sempre que o cliente trocar alguma opção
document.querySelectorAll('input[name="recebimento"], input[name="pagamento"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
        verificarBloqueioDinheiro();

        const total = sacola.reduce(function (soma, item) {
            return soma + (item.preco * item.qtd);
        }, 0);
        atualizarLinkWhatsapp(total);
    });
});

// ============================================================
// VITRINE DE PRODUTOS (cards + filtros por categoria)
// ============================================================
const filtrosCategorias = document.getElementById("filtros-categorias");
const filtrosSub = document.getElementById("filtros-subcategorias");
const listaProdutos = document.getElementById("lista-produtos");
const msgSemProdutos = document.getElementById("sem-produtos");
const secaoProdutos = document.getElementById("produtos");

// O filtro atual: nenhuma categoria = mostra todos os produtos
let filtro = { categoria: null, subcategoria: null };

// ---------- Busca ----------
const formBusca = document.querySelector(".busca");
const campoBusca = document.querySelector(".busca input");
let termoBusca = "";                                       // o que a pessoa digitou (vazio = sem busca)
const TEXTO_SEM_PRODUTOS = msgSemProdutos.textContent;     // guarda a mensagem original

// Tira acentos e deixa tudo minúsculo: "Óleo" vira "oleo"
function semAcento(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// O produto combina com a busca? Todas as palavras digitadas precisam aparecer
// no nome, na marca, na descrição, na categoria ou na subcategoria.
function combinaComBusca(p) {
    const cat = categorias[p.categoria];
    const sub = (cat.subcategorias && p.subcategoria) ? cat.subcategorias[p.subcategoria] : "";
    const texto = semAcento([p.nome, p.marca, p.descricao || "", cat.nome, sub].join(" "));
    return semAcento(termoBusca).split(" ").every(function (palavra) {
        return palavra === "" || texto.includes(palavra);
    });
}

// Faz a busca. Ela procura em TODOS os produtos, então tira o filtro de categoria.
function buscar(texto, rolar) {
    termoBusca = texto.trim();
    if (termoBusca) {
        filtro = { categoria: null, subcategoria: null };
    }
    desenharFiltros();
    desenharProdutos();
    if (rolar && termoBusca) {
        secaoProdutos.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function classeAtivo(condicao) {
    return condicao ? ' class="ativo"' : "";
}

// Desenha os botões de filtro (categorias e, se a categoria tiver, subcategorias)
function desenharFiltros() {
    let html = '<a href="#produtos"' + classeAtivo(!filtro.categoria) + ">Todos</a>";
    Object.keys(categorias).forEach(function (chave) {
        html += '<a href="#' + chave + '"' + classeAtivo(filtro.categoria === chave) + ">" +
                escapar(categorias[chave].nome) + "</a>";
    });
    filtrosCategorias.innerHTML = html;

    const subs = filtro.categoria ? categorias[filtro.categoria].subcategorias : null;
    if (subs) {
        let htmlSub = '<a href="#' + filtro.categoria + '"' + classeAtivo(!filtro.subcategoria) + ">Tudo em " +
                      escapar(categorias[filtro.categoria].nome) + "</a>";
        Object.keys(subs).forEach(function (chave) {
            htmlSub += '<a href="#' + filtro.categoria + "/" + chave + '"' +
                       classeAtivo(filtro.subcategoria === chave) + ">" + escapar(subs[chave]) + "</a>";
        });
        filtrosSub.innerHTML = htmlSub;
        filtrosSub.style.display = "flex";
    } else {
        filtrosSub.innerHTML = "";
        filtrosSub.style.display = "none";
    }
}

// Desenha os cards dos produtos que passam no filtro
function desenharProdutos() {
    const lista = produtos.filter(function (p) {
        if (termoBusca) return combinaComBusca(p);   // com busca: só vale o texto digitado
        const categoriaOk = !filtro.categoria || p.categoria === filtro.categoria;
        const subOk = !filtro.subcategoria || p.subcategoria === filtro.subcategoria;
        return categoriaOk && subOk;
    });

    let html = "";
    lista.forEach(function (p) {
        const foto = p.foto
            ? '<img src="' + escapar(p.foto) + '" alt="' + escapar(p.nome) + '" loading="lazy">'
            : "[FOTO]";

        html +=
            '<article class="produto-card">' +
                '<div class="foto">' + foto + "</div>" +
                '<span class="marca-cat">' + escapar(p.marca) + " · " + escapar(categorias[p.categoria].nome) + "</span>" +
                "<h3>" + escapar(p.nome) + "</h3>" +
                '<p class="descricao">' + escapar(p.descricao || "") + "</p>" +
                '<p class="preco">' + formatarPreco(p.preco) + "</p>" +
                '<div class="acoes">' +
                    '<button type="button" class="btn-comprar" data-nome="' + escapar(p.nome) + '" data-preco="' + p.preco + '">Comprar</button>' +
                    '<button type="button" class="btn-adicionar" data-nome="' + escapar(p.nome) + '" data-preco="' + p.preco + '">Adicionar à sacola</button>' +
                "</div>" +
            "</article>";
    });

    listaProdutos.innerHTML = html;
    msgSemProdutos.textContent = termoBusca
        ? 'Nenhum produto encontrado para "' + termoBusca + '".'
        : TEXTO_SEM_PRODUTOS;
    msgSemProdutos.style.display = lista.length === 0 ? "block" : "none";
}

// Lê um link como "#cabelo" ou "#cabelo/oleos-capilares" e devolve o filtro.
// Devolve null se o link não for de uma categoria (ex.: "#home").
function lerRota(hash) {
    const texto = hash.replace("#", "");
    if (texto === "produtos") return { categoria: null, subcategoria: null };

    const partes = texto.split("/");
    const categoria = partes[0];
    const subcategoria = partes[1] || null;
    if (!categorias[categoria]) return null;
    if (subcategoria && !(categorias[categoria].subcategorias && categorias[categoria].subcategorias[subcategoria])) return null;
    return { categoria: categoria, subcategoria: subcategoria };
}

function aplicarRota(hash, rolar) {
    const rota = lerRota(hash);
    if (!rota) return;
    filtro = rota;
    termoBusca = "";          // escolheu uma categoria: limpa a busca
    campoBusca.value = "";
    desenharFiltros();
    desenharProdutos();
    if (rolar) {
        secaoProdutos.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ============================================================
// CLIQUES E EVENTOS
// ============================================================
// Botões "Adicionar à sacola" (funcionam também nos cards desenhados pelo JavaScript)
// Botões "Comprar" e "Adicionar à sacola" (abrem o resumo do pedido com o item)
document.addEventListener("click", function (evento) {
    const botao = evento.target.closest(".btn-adicionar, .btn-comprar");
    if (botao) {
        adicionar(botao.dataset.nome, Number(botao.dataset.preco));
        abrirPainel();
    }
});
// Botão flutuante: voltar para o início
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", function () {
    // Mostra o botão apenas depois de rolar 300px para baixo
    btnTopo.classList.toggle("visivel", window.scrollY > 300);
});

btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Links de categoria (menu, cards de categoria e botões de filtro)
document.addEventListener("click", function (evento) {
    const link = evento.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute("href");
    if (lerRota(hash)) {
        evento.preventDefault();
        history.pushState(null, "", hash);
        aplicarRota(hash, true);
    }
});

// Barra de pesquisa: filtra enquanto digita e também ao apertar Enter / clicar em "Buscar"
campoBusca.addEventListener("input", function () {
    buscar(campoBusca.value, false);
});
formBusca.addEventListener("submit", function (evento) {
    evento.preventDefault();   // impede a página de recarregar
    buscar(campoBusca.value, true);
});

// Botão voltar/avançar do navegador
window.addEventListener("hashchange", function () {
    aplicarRota(location.hash, true);
});

// Botões + / − / × dentro do painel da sacola
listaItens.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");
    if (!botao) return;
    const indice = Number(botao.dataset.i);
    if (botao.dataset.acao === "mais") mudarQuantidade(indice, 1);
    if (botao.dataset.acao === "menos") mudarQuantidade(indice, -1);
    if (botao.dataset.acao === "remover") remover(indice);
});

document.getElementById("abrir-sacola").addEventListener("click", abrirPainel);
document.getElementById("fechar-sacola").addEventListener("click", fecharPainel);
fundo.addEventListener("click", fecharPainel);
document.getElementById("limpar-sacola").addEventListener("click", function () {
    sacola = [];
    atualizar();
});

// Tecla Esc fecha o painel
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fecharPainel();
});

// ============================================================
// AO ABRIR A PÁGINA
// ============================================================
atualizar(); // desenha a sacola salva
verificarBloqueioDinheiro();        
desenharFiltros();    // desenha os botões de filtro
desenharProdutos();   // desenha todos os produtos
if (lerRota(location.hash)) {
    aplicarRota(location.hash, true);   // abriu com um link de categoria (ex.: site.index.html#cabelo)
}

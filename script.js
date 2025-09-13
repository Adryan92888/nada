// ================================================================================= //
// ============================= ÁREA MAIS IMPORTANTE PARA EDITAR ================== //
// ================================================================================= //

const lojas = [
    {
        id: 1,
        nome: "Rogers Burguer",
        logo: "imagens/Rogers.PNG", // Use um link ou um caminho local como "imagens/renner.png"
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Uma hamburgueria completa, para você, no coração do Shopping Ibiapaba!",
        linkRedeSocial: "https://www.instagram.com/rogersburguertiangua/"
    },
    {
        id: 2,
        nome: "Carlleones Sushi",
        logo: "imagens/CARLLEONES.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Você pediu sushi?",
        linkRedeSocial: "https://www.instagram.com/carlleones_sushi/"
    },
    {
        id: 3,
        nome: "MiniMak Sushi",
        logo: "imagens/MINIMAKI.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "O Sushi mais tradicional de Tianguá!",
        linkRedeSocial: "https://www.instagram.com/minimaksushi/"
    },
    {
        id: 4,
        nome: "Sr. Pastelli",
        logo: "imagens/pastelli.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Uma pastelaria completa, feito para você!",
        linkRedeSocial: "https://www.instagram.com/srpastellitiangua/"
    },
{
        id: 5,
        nome: "Pizzaria Benvenutti",
        logo: "imagens/benvenutti.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Uma Pizzaria completa, feito para você!",
        linkRedeSocial: "https://www.instagram.com/benvenuttipizzastiangua/"
    },

{
        id: 6,
        nome: "Seleto Açaí",
        logo: "imagens/seleto.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "O melhor açaí, feito para você!",
        linkRedeSocial: "https://www.instagram.com/seletoacai/"
    },
    {
        id: 7,
        nome: "GranChef",
        logo: "imagens/granchef.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Self-Service sem peso, com duas opções de proteína!",
        linkRedeSocial: "https://www.instagram.com/grancheftiangua/"
    },
     {
        id: 8,
        nome: "JB Lanches",
        logo: "imagens/jblanches.png",
        categoria: "Praça de Alimentação",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Salgados, Milk-Shake e muito mais!",
        linkRedeSocial: "https://www.instagram.com/jblanchesomelhor/"
    },

    {
        id: 9,
        nome: "Flover Esmalteria",
        logo: "imagens/flover.png",
        categoria: "Estética",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Cuidado com suas mãoes e pés",
        linkRedeSocial: "https://www.instagram.com/floveresmalteria/"
    },

    {
        id: 10,
        nome: "Grupo Teeb",
        logo: "imagens/teeb.png",
        categoria: "Internet e Segurança",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Provedor de Internet e Segurança!",
        linkRedeSocial: "https://www.instagram.com/p/DM2nsl2x1sw/"
    },

{
        id: 11,
        nome: "ML Cosmetics",
        logo: "imagens/mlcosmetics.png",
        categoria: "Estética",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Sua Loja de Cosméticos aqui!",
        linkRedeSocial: "https://www.instagram.com/mlcosmetics123/"
    },

    {
    id: 12,
        nome: "Blackfit",
        logo: "imagens/blackfit.png",
        categoria: "Academia e Suplementos",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Sua Loja de Suplementos aqui!",
        linkRedeSocial: "https://www.instagram.com/blackfitsuplementostiangua/"
    },
    
     {
    id: 13,
        nome: "Bruttus Barbearia",
        logo: "imagens/bruttus.png",
        categoria: "Barbearia",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "A barbearia que mais cresce na região, também no Shopping Ibiapba!",
        linkRedeSocial: "https://www.instagram.com/bruttusbarber_/"
    },

     {
    id: 14,
        nome: "Casa Nóbrega Home Decor",
        logo: "imagens/nobrega.png",
        categoria: "Para Seu Lar",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "O melhor de cama, mesa e banho no conforto do Shopping Ibiapaba!",
        linkRedeSocial: "https://www.instagram.com/casanobregahomedecor/"
    },

    {
    id: 15,
        nome: "Top Up Academia",
        logo: "imagens/topup.png",
        categoria: "Academia e Suplementos",
        horario1: "Academia 24h", // <-- NOVO CAMPO
        horario2: "", // <-- NOVO CAMPO
        descricao: "A primeira academia 24h de Tianguá!",
        linkRedeSocial: "https://www.instagram.com/topuptiangua/"
    },

    {
    id: 16,
        nome: "Cine Ibiapaba",
        logo: "imagens/cine.png",
        categoria: "Cinema",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "O melhor da bilheteria você encontra aqui!",
        linkRedeSocial: "https://www.instagram.com/cineibiapaba_oficial/"
    },


   
    //  =============== PARA ADICIONAR UMA NOVA LOJA, COPIE O BLOCO ABAIXO ===============
    /*
    {
        id: 5, // <-- Mude o número para ser único
        nome: "Nome da Nova Loja",
        logo: "URL_OU_CAMINHO_DA_IMAGEM",
        categoria: "CATEGORIA",
        horario1: "10:00 - 22:00", // <-- NOVO CAMPO
        horario2: "10:00 - 22:00", // <-- NOVO CAMPO
        descricao: "Uma breve descrição sobre a nova loja.",
        linkRedeSocial: "LINK_DO_INSTAGRAM_DA_LOJA"
    },
    */
];

// ================================================================================= //
// ======================= FIM DA ÁREA DE EDIÇÃO PRINCIPAL ========================= //
// ================================================================================= //


// --- O restante do código cuida da mágica. Não precisa editar daqui para baixo. ---

document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do HTML
    const searchInput = document.getElementById('search-input');
    const botoesFiltroContainer = document.getElementById('botoes-filtro');
    const lojasGrid = document.getElementById('lojas-grid');
    const modal = document.getElementById('loja-modal');
    const modalCloseButton = document.getElementById('modal-close-button');

    // 1. Pega todas as categorias únicas do array de lojas
    const categorias = ['Todas', ...new Set(lojas.map(loja => loja.categoria))];

    // 2. Cria os botões de filtro dinamicamente
    function criarBotoesDeFiltro() {
        // ... (esta função continua exatamente a mesma de antes)
        categorias.forEach(categoria => {
            const botao = document.createElement('button');
            botao.className = 'filtro-botao';
            botao.textContent = categoria;
            botao.dataset.categoria = categoria;

            if (categoria === 'Todas') {
                botao.classList.add('active');
            }

            botao.addEventListener('click', handleFiltroClick);
            botoesFiltroContainer.appendChild(botao);
        });
    }

    // 3. Função para quando um botão de filtro é clicado
    function handleFiltroClick(event) {
        const categoriaSelecionada = event.target.dataset.categoria;

        // Limpa o campo de busca ao usar um filtro de categoria
        searchInput.value = '';

        // Atualiza o visual do botão ativo
        document.querySelectorAll('.filtro-botao').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        renderizarLojas();
    }
    
    // 4. Lógica principal para renderizar as lojas
    function renderizarLojas() {
        const termoBusca = searchInput.value.toLowerCase().trim();
        const categoriaAtiva = document.querySelector('.filtro-botao.active')?.dataset.categoria || 'Todas';
        
        let lojasParaMostrar = lojas;

        // Se houver um termo de busca, ele tem prioridade sobre o filtro de categoria
        if (termoBusca) {
            lojasParaMostrar = lojas.filter(loja => 
                loja.nome.toLowerCase().includes(termoBusca)
            );
        } else if (categoriaAtiva !== 'Todas') {
            // Se não houver busca, filtra pela categoria ativa
            lojasParaMostrar = lojas.filter(loja => loja.categoria === categoriaAtiva);
        }

        lojasGrid.innerHTML = ''; // Limpa o grid

        if (lojasParaMostrar.length === 0) {
            lojasGrid.innerHTML = '<p class="aviso-sem-lojas">Nenhuma loja encontrada.</p>';
            return;
        }

        lojasParaMostrar.forEach(loja => {
            const card = document.createElement('div');
            card.className = 'loja-card';
            card.dataset.id = loja.id;
            
         card.innerHTML = `
                <img src="${loja.logo}" alt="Logo da ${loja.nome}">
                <h3>${loja.nome}</h3>
                <p class="loja-horario">${loja.horario1}</p>
                <p class="loja-horario">${loja.horario2}</p>
            `;
            
            card.addEventListener('click', () => abrirModal(loja.id));
            lojasGrid.appendChild(card);
        });
    }

    // 5. Função para o evento de busca
    function handleSearch() {
        // Desativa visualmente os botões de categoria quando uma busca é feita
        document.querySelectorAll('.filtro-botao').forEach(btn => {
            btn.classList.remove('active');
        });
        renderizarLojas();
    }

    // 6. Abre o modal
    function abrirModal(lojaId) {
        // ... (esta função continua exatamente a mesma de antes)
        const loja = lojas.find(l => l.id === lojaId);
        if (loja) {
            document.getElementById('modal-logo').src = loja.logo;
            document.getElementById('modal-titulo').textContent = loja.nome;
            document.getElementById('modal-descricao').textContent = loja.descricao;
            document.getElementById('modal-link-social').href = loja.linkRedeSocial;
            modal.classList.add('visible');
        }
    }

    // 7. Fecha o modal
    function fecharModal() {
        // ... (esta função continua exatamente a mesma de antes)
        modal.classList.remove('visible');
    }

    // Eventos
    modalCloseButton.addEventListener('click', fecharModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal();
        }
    });
    searchInput.addEventListener('input', handleSearch);

    // Função inicial para configurar a página
    function init() {
        criarBotoesDeFiltro();
        renderizarLojas();
    }

    init(); // Inicia tudo!

});

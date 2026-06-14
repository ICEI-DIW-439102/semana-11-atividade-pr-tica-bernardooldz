const dados = {
  autores: [
    {
      id: 1,
      nome: "Aurora Valença",
      genero: "Fantasia",
      biografia: "Escritora conhecida por criar mundos mágicos inspirados em lendas antigas e elementos da natureza.",
      inicioCarreira: 2016,
      nacionalidade: "Brasil",
      seguidores: 187500,
      destaque: true,
      imagem_principal: "assets/images/autores/laura-adai-enkfbbb9yf8-unsplash.jpg",
      obras: [
        { id: 1, titulo: "As Crônicas de Eldoria", ano: 2018, descricao: "Uma jornada épica através de reinos esquecidos.", imagem: "assets/images/livros/fontis-ag-mnRIv1OLby4-unsplash.jpg" },
        { id: 2, titulo: "A Guardiã das Estrelas", ano: 2020, descricao: "Uma jovem descobre um poder capaz de alterar o destino do mundo.", imagem: "assets/images/livros/fontis-ag-XFVIZMF0ZF8-unsplash.jpg" },
        { id: 3, titulo: "O Reino das Névoas", ano: 2023, descricao: "Mistérios e magia envolvem um reino perdido.", imagem: "assets/images/livros/pelle-martin-6fzKe8W6nq4-unsplash.jpg" }
      ]
    },
    {
      id: 2,
      nome: "Lucas Monteiro",
      genero: "Ficção Científica",
      biografia: "Autor apaixonado por tecnologia, exploração espacial e inteligência artificial.",
      inicioCarreira: 2015,
      nacionalidade: "Portugal",
      seguidores: 214000,
      destaque: true,
      imagem_principal: "assets/images/autores/amir-seilsepour-5vg_SarQimA-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Horizonte de Titânio", ano: 2017, descricao: "Colonos enfrentam desafios em um planeta distante.", imagem: "assets/images/livros/ikigloo-dgpCQhcQWOA-unsplash.jpg" },
        { id: 2, titulo: "Código Ômega", ano: 2019, descricao: "Uma IA desenvolve consciência própria.", imagem: "assets/images/livros/amol-srivastava-uOYc6OlgpUI-unsplash.jpg" },
        { id: 3, titulo: "Estação Zero", ano: 2022, descricao: "Segredos escondidos em uma estação espacial abandonada.", imagem: "assets/images/livros/josh-felise-yIMy3ERBc3o-unsplash.jpg" }
      ]
    },
    {
      id: 3,
      nome: "Helena Duarte",
      genero: "Romance",
      biografia: "Especialista em romances contemporâneos com foco em relações humanas.",
      inicioCarreira: 2018,
      nacionalidade: "Brasil",
      seguidores: 325000,
      destaque: true,
      imagem_principal: "assets/images/autores/conor-obrien-nKZuhvCGGQU-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Cartas Para o Amanhã", ano: 2019, descricao: "Uma história emocionante sobre reencontros.", imagem: "assets/images/livros/karen-zhao-2bqXqr4GeCg-unsplash.jpg" },
        { id: 2, titulo: "Entre Estações", ano: 2021, descricao: "Dois desconhecidos conectados pelo acaso.", imagem: "assets/images/livros/sophia-baboolal-rMYrkFfw36U-unsplash.jpg" },
        { id: 3, titulo: "Além do Horizonte Azul", ano: 2024, descricao: "Uma viagem transformadora pelo autoconhecimento.", imagem: "assets/images/livros/thought-catalog-GzYLoRYrX90-unsplash.jpg" }
      ]
    },
    {
      id: 4,
      nome: "Vinícius Noronha",
      genero: "Suspense",
      biografia: "Criador de histórias cheias de mistérios, investigações e reviravoltas.",
      inicioCarreira: 2014,
      nacionalidade: "Brasil",
      seguidores: 198000,
      destaque: false,
      imagem_principal: "assets/images/autores/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
      obras: [
        { id: 1, titulo: "A Última Chave", ano: 2016, descricao: "Um segredo antigo ameaça vir à tona.", imagem: "assets/images/livros/thought-catalog-Q7sGp9MStSY-unsplash.jpg" },
        { id: 2, titulo: "Sombras da Cidade", ano: 2019, descricao: "Mistérios escondidos em uma metrópole moderna.", imagem: "assets/images/livros/thought-catalog-V5BGaJ0VaLU-unsplash.jpg" },
        { id: 3, titulo: "Arquivo 27", ano: 2023, descricao: "Um documento desaparecido pode mudar tudo.", imagem: "assets/images/livros/tim-alex-1i-P178kxHQ-unsplash.jpg" }
      ]
    },
    {
      id: 5,
      nome: "Clara Menezes",
      genero: "Fantasia Urbana",
      biografia: "Mistura elementos mágicos com cenários contemporâneos.",
      inicioCarreira: 2017,
      nacionalidade: "Argentina",
      seguidores: 156000,
      destaque: true,
      imagem_principal: "assets/images/autores/glen-hodson-NlHGKAZ3jCI-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Rua das Sombras", ano: 2018, descricao: "Uma rua comum esconde criaturas extraordinárias.", imagem: "assets/images/livros/zia-king-S7RCVK2PEhk-unsplash.jpg" },
        { id: 2, titulo: "Portal 13", ano: 2021, descricao: "Uma passagem secreta entre dimensões.", imagem: "assets/images/livros/pylyp-sukhenko--jaa_zXcH5E-unsplash.jpg" },
        { id: 3, titulo: "Cidade Encantada", ano: 2024, descricao: "Magia e tecnologia coexistem em segredo.", imagem: "assets/images/livros/nmg-network-_awzRovsBDU-unsplash.jpg" }
      ]
    },
    {
      id: 6,
      nome: "Gabriel Tavares",
      genero: "Aventura",
      biografia: "Escritor de aventuras voltadas para jovens leitores.",
      inicioCarreira: 2013,
      nacionalidade: "Brasil",
      seguidores: 142000,
      destaque: false,
      imagem_principal: "assets/images/autores/christian-buehner-84E44EdD18o-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Expedição Atlântica", ano: 2015, descricao: "Uma jornada pelos mistérios do oceano.", imagem: "assets/images/livros/mridula-gupta-M5nRkYqfUoE-unsplash.jpg" },
        { id: 2, titulo: "A Ilha Perdida", ano: 2018, descricao: "Um grupo de amigos encontra um mapa lendário.", imagem: "assets/images/livros/elin-melaas-6gjiUmp2k_8-unsplash.jpg" },
        { id: 3, titulo: "O Vale dos Ventos", ano: 2022, descricao: "Uma aventura em uma região inexplorada.", imagem: "assets/images/livros/elin-melaas-K8oOs0oFBME-unsplash.jpg" }
      ]
    },
    {
      id: 7,
      nome: "Sofia Almeida",
      genero: "Drama",
      biografia: "Suas histórias exploram emoções profundas e relações familiares.",
      inicioCarreira: 2016,
      nacionalidade: "Portugal",
      seguidores: 279000,
      destaque: false,      
      imagem_principal: "assets/images/autores/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Entre Nós", ano: 2017, descricao: "Uma narrativa sobre amizade e superação.", imagem: "assets/images/livros/fontis-ag-mnRIv1OLby4-unsplash.jpg" },
        { id: 2, titulo: "Dias de Chuva", ano: 2020, descricao: "Uma família enfrenta mudanças inesperadas.", imagem: "assets/images/livros/fontis-ag-XFVIZMF0ZF8-unsplash.jpg" },
        { id: 3, titulo: "Quando o Sol Voltar", ano: 2024, descricao: "Esperança em tempos difíceis.", imagem: "assets/images/livros/pelle-martin-6fzKe8W6nq4-unsplash.jpg" }
      ]
    },
    {
      id: 8,
      nome: "Theo Martins",
      genero: "Distopia",
      biografia: "Autor de narrativas futuristas e sociedades alternativas.",
      inicioCarreira: 2015,
      nacionalidade: "Canadá",
      seguidores: 301000,
      destaque: false,
      imagem_principal: "assets/images/autores/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg",
      obras: [
        { id: 1, titulo: "Projeto Aurora", ano: 2018, descricao: "Uma sociedade controlada por algoritmos.", imagem: "assets/images/livros/ikigloo-dgpCQhcQWOA-unsplash.jpg" },
        { id: 2, titulo: "Cidade Vertical", ano: 2021, descricao: "A vida em uma megacidade dividida por classes.", imagem: "assets/images/livros/amol-srivastava-uOYc6OlgpUI-unsplash.jpg" },
        { id: 3, titulo: "O Último Sinal", ano: 2024, descricao: "Uma mensagem misteriosa pode salvar a humanidade.", imagem: "assets/images/livros/josh-felise-yIMy3ERBc3o-unsplash.jpg" }
      ]
    }
  ]
};

function carregarDestaques() {
  const destaques = dados.autores.filter(a => a.destaque);
  const indicators = document.getElementById('carousel-indicators');
  const inner = document.getElementById('carousel-inner');
  if (!indicators || !inner) return;

  destaques.forEach((autor, i) => {
    indicators.innerHTML += `
      <button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${i}"
        ${i === 0 ? 'class="active" aria-current="true"' : ''}
        aria-label="Slide ${i + 1}"></button>`;

    inner.innerHTML += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <img src="${autor.imagem_principal}" class="d-block w-100" alt="${autor.nome}">
        <div class="carousel-caption">
          <span class="badge-genero">${autor.genero}</span>
          <h3>${autor.nome}</h3>
          <p>${autor.biografia}</p>
          <a href="detalhe.html?id=${autor.id}" class="btn-perfil" onclick="event.stopPropagation()">
            <i class="fa-solid fa-user"></i> Ver Perfil
          </a>
        </div>
      </div>`;
  });
}

function carregarAutores() {
  const container = document.getElementById('lista-autores');
  if (!container) return;

  dados.autores.forEach(autor => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="card h-100">
        <a href="detalhe.html?id=${autor.id}">
          <img src="${autor.imagem_principal}" class="card-img-top" alt="${autor.nome}"
            onerror="this.outerHTML='<div class=\\'card-img-placeholder\\'><i class=\\'fa-solid fa-user\\'></i></div>'">
        </a>
        <div class="card-body">
          <a href="detalhe.html?id=${autor.id}" class="card-title">${autor.nome}</a>
          <p class="card-genero">${autor.genero}</p>
          <p class="card-text">${autor.biografia}</p>
        </div>
        <div class="card-footer">
          <a href="detalhe.html?id=${autor.id}" class="btn-ver-perfil">
            <i class="fa-solid fa-arrow-right"></i> Ver Perfil
          </a>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

function obterAutorPorId() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  return dados.autores.find(a => a.id === id) || null;
}

function carregarDetalhesAutor(autor) {
  const container = document.getElementById('detalhe-autor');
  if (!container) return;

  const seguidoresFormatado = autor.seguidores.toLocaleString('pt-BR');

  container.innerHTML = `
    <a href="index.html" class="btn-voltar">
      <i class="fa-solid fa-arrow-left"></i> Voltar para Autores
    </a>
    <div class="detalhe-header">
      <div class="row align-items-center g-4">
        <div class="col-12 col-md-auto text-center">
          <img src="${autor.imagem_principal}" alt="${autor.nome}" class="detalhe-foto"
            onerror="this.outerHTML='<div class=\\'detalhe-foto-placeholder\\'><i class=\\'fa-solid fa-user\\'></i></div>'">
        </div>
        <div class="col">
          <h1 class="detalhe-nome">${autor.nome}</h1>
          <span class="detalhe-genero">${autor.genero}</span>
          <p class="detalhe-bio">${autor.biografia}</p>
          <div class="detalhe-stats">
            <div class="stat-item">
              <div class="stat-label"><i class="fa-solid fa-flag me-1"></i>Nacionalidade</div>
              <div class="stat-value">${autor.nacionalidade}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label"><i class="fa-solid fa-calendar me-1"></i>Início da Carreira</div>
              <div class="stat-value">${autor.inicioCarreira}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label"><i class="fa-solid fa-book me-1"></i>Obras Cadastradas</div>
              <div class="stat-value">${autor.obras.length} obras</div>
            </div>
            <div class="stat-item">
              <div class="stat-label"><i class="fa-solid fa-users me-1"></i>Seguidores</div>
              <div class="stat-value">${seguidoresFormatado}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function carregarObrasAutor(autor) {
  const container = document.getElementById('lista-obras');
  if (!container) return;

  autor.obras.forEach(obra => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="card-obra-item">
        <img src="${obra.imagem}" alt="${obra.titulo}"
          onerror="this.outerHTML='<div class=\\'img-placeholder\\'><i class=\\'fa-solid fa-book\\'></i></div>'">
        <div class="card-body">
          <h3 class="obra-titulo">${obra.titulo}</h3>
          <p class="obra-ano"><i class="fa-solid fa-calendar-days me-1"></i>${obra.ano}</p>
          <p class="obra-desc">${obra.descricao}</p>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pagina = window.location.pathname;

  if (pagina.includes('detalhe.html')) {
    const autor = obterAutorPorId();
    if (autor) {
      document.title = `iBook — ${autor.nome}`;
      carregarDetalhesAutor(autor);
      carregarObrasAutor(autor);
    } else {
      document.getElementById('detalhe-autor').innerHTML = `
        <div class="text-center py-5">
          <i class="fa-solid fa-circle-exclamation fa-3x text-laranja mb-3"></i>
          <h3>Autor não encontrado</h3>
          <a href="index.html" class="btn-voltar mt-3">
            <i class="fa-solid fa-arrow-left"></i> Voltar
          </a>
        </div>`;
    }
  } else {
    carregarDestaques();
    carregarAutores();
    iniciarNavScroll();
  }
});

function iniciarNavScroll() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const secoes = ['destaques', 'autores', 'sobre'];

  function atualizarAtivo() {
    const offset = 80;
    let atual = secoes[0];

    for (const id of secoes) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        atual = id;
      }
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${atual}`);
    });
  }

  document.addEventListener('scroll', atualizarAtivo, { passive: true });
  atualizarAtivo();
}

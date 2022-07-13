function changePage(element) {
    changeBtnSelectionClass(element);
    const header = document.querySelector('.topMenuContainer > header');

    document
        .querySelectorAll('section.mainContent')
        .forEach(s => {
            s.classList.add('hidden');

            let target = element.getAttribute('data-target');
            header.style.fontSize = (target == 'about') ? '0px' : '32px';

            if (s.id == target) {
                s.classList.remove('hidden');
            }
        });
}

function changeBtnSelectionClass(element) {
    document
        .querySelectorAll('.topMenu a.customLink')
        .forEach(a => {
            a.classList.remove('selectedBtn');
            if (a == element) {
                a.classList.add('selectedBtn');
            }
        });
}

fillData();

function fillData() {
    let allProjects = '';
    let games = '';
    let tools = '';
    let backend = '';

    let jsonProjects = getProjectsData();
    jsonProjects.content.forEach(p => {
        let html = buildHtmlForProject(p);
        allProjects += html;

        if (p.labels.some(l => l === 'backend')) { backend += html; }

        if (p.labels.some(l => l === 'games')) { games += html; }

        if (p.labels.some(l => l === 'tools')) { tools += html; }
    });

    setHtmlData('tools', tools);
    setHtmlData('games', games);
    setHtmlData('backend', backend);
    setHtmlData('allProjects', allProjects);
}

function getProjectsData() {
    const dataJson =
    {
        "content": [
            {
                "id": 1657660561300,
                "title": "Controle Financeiro",
                "description": "Sistema de controle e gestão de finanças pessoais.",
                "detailedDescription": [],
                "clipUrlID": "",
                "art": "./img/financeiro.png",
                "url": "https://github.com/AndersonMarquess/Debts-management-api",
                "labels": [
                    "backend",
                    "frontend"
                ],
                "stack": [
                    "Java",
                    "Spring Boot",
                    "MongoDB",
                    "Angular",
                    "Angular Material",
                    "Heroku",
                    "Firebase"
                ],
                "release": "2019",
                "status": "offline"
            },
            {
                "id": 1657660636248,
                "title": "Gerenciador de tarefas",
                "description": "Trabalho da Faculdade com objetivo de criar um sistema gerenciador de tarefas acadêmicas.",
                "detailedDescription": [],
                "clipUrlID": "",
                "art": "./img/projeto_tarefas.png",
                "url": "https://github.com/AndersonMarquess/Gerenciador-de-tarefas",
                "labels": [
                    "backend",
                    "frontend"
                ],
                "stack": [
                    "C#",
                    "ASP.NET MVC",
                    "MySQL",
                    "Razor",
                    "Boostrap"
                ],
                "release": "2018",
                "status": "offline"
            },
            {
                "id": 1657660647553,
                "title": "Biblioteca virtual",
                "description": "Aplicação de compartilhamento de livros.",
                "detailedDescription": [],
                "clipUrlID": "",
                "art": "./img/projeto_biblioteca.png",
                "url": "https://github.com/AndersonMarquess/Biblioteca-Virtual-P",
                "labels": [
                    "backend",
                    "frontend"
                ],
                "stack": [
                    "Java",
                    "Spring Boot",
                    "MongoDB",
                    "Angular",
                    "Boostrap",
                    "Heroku",
                    "Firebase"
                ],
                "release": "2019",
                "status": "offline"
            },
            {
                "id": 1657660656340,
                "title": "Ignis Corruption",
                "description": "Jogo procedural de estratégia e sobrevivência, com foco em computadores, disponibilizado na plataforma Steam.",
                "detailedDescription": [
                    "Desenvolvido com C# e Unity.",
                    "Integrei com a API do Steamworks as funcionalidades de Leaderboard, Achievement, Stats e Remote Storage.",
                    "Adicionado suporte para acessibilidade como remapeamento de botões, configurações de feedback e escala de interface.",
                    "Implementei um controle de câmera com todas as movitações padrões de um RTS.",
                    "Criado sistema de feedback dinâmico com base na visibilidade dos objetos em cena.",
                    "Implementado sistema para criação e posicionamento dos objetos de forma procedural, com base nas configurações escolhidas pelo jogador em runtime.",
                    "Implementado diferentes I.A. usando behaviour tree e scriptable objects para os detalhes dos comportamentos.",
                ],
                "clipUrlID": "IfDs7JbqcPc",
                "art": "./img/IgnisCorruption.png",
                "url": "https://store.steampowered.com/agecheck/app/1825130/",
                "labels": [
                    "games"
                ],
                "stack": [
                    "Unity Engine",
                    "C#",
                    "Steam",
                    "Windows"
                ],
                "release": "2022",
                "status": "online"
            },
            {
                "id": 1657660670284,
                "title": "Frostbite",
                "description": "Jogo curtinho de ação e aventura, feito para Mage Jam 1.",
                "detailedDescription": [
                    "Desenvolvido com C# e Unity.",
                    "Desenvolvi toda a gameplay pensando em como combinar elementos 2D e 3D no mesmo mundo.",
                    "Adicionado diferentes tipos de feedbacks como por exemplo, movimentação, ataque, dano e morte.",
                    "Implementado sistema de ondas de inimigos, com ajuste na quantidade com base no tempo em jogo.",
                    "Criado cronômetro com o melhor tempo por nível, para incentivar o replay."
                ],
                "clipUrlID": "kT7kZMSKBVA",
                "art": "./img/Frostbite.png",
                "url": "https://andersonmarquess.itch.io/frostbite",
                "labels": [
                    "games"
                ],
                "stack": [
                    "Unity Engine",
                    "C#",
                    "Itch.io",
                    "WebGL"
                ],
                "release": "2022",
                "status": "online"
            },
            {
                "id": 1657660681571,
                "title": "Dependency Initializer",
                "description": "Ferramenta para buscar e preencher a depedência de campos serializados na Unity Engine.",
                "detailedDescription": [],
                "clipUrlID": "",
                "art": "./img/AM_DI.png",
                "url": "https://github.com/AndersonMarquess/AM_DI",
                "labels": [
                    "tools"
                ],
                "stack": [
                    "Unity Engine",
                    "C#"
                ],
                "release": "2022",
                "status": "online"
            }
        ]
    };

    return dataJson;
}

function buildHtmlForProject(project) {
    let videoBtnHTML = '';
    if (project.clipUrlID.length > 0) {
        videoBtnHTML = `<a class="pointer selectedBtn customLink videoPlayerLink" onclick="showVideoPlayer('${project.clipUrlID}')">Vídeo</a>`;
    }

    const detailsList = project.detailedDescription.map(d => `<li class="detailItem">${d}</li>`).join("");
    let detailsHTML = '';
    if (detailsList.length > 0) {
        detailsHTML =
            `<div class="detailedDescription"> 
                <header>Pontos chaves do meu trabalho: </header> 
                <ul>${detailsList}</ul>
            </div>`;
    }

    return `<div class="project" id=${project.id}>
                <div class="details">
                    <img class="image" src=${project.art} alt="project art">
                    <strong class="title">${project.title}</strong>
                    <p class="description">${project.description}</p>
                    <div class="actionsContainer">
                        ${videoBtnHTML}
                        <a href=${project.url} class="selectedBtn customLink" target="_blank">Acessar
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>            
            ${detailsHTML}
        </div>`;
}

function setHtmlData(target, value) {
    if (value === '') {
        document.querySelector(`a[data-target="${target}"]`).style.display = 'none';
    } else {
        const element = document.getElementById(`${target}`);
        if (element === null) { return; }
        element.innerHTML = value;
    }
}

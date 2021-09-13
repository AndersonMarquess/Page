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
    let backend = '';

    let jsonProjects = getProjectsData();
    jsonProjects.forEach(p => {
        let html = buildHtmlForProject(p);
        allProjects += html;

        if (p.labels.some(l => l === "backend")) { backend += html; }

        if (p.labels.some(l => l === "games")) { games += html; }
    });

    setHtmlData('games', games);
    setHtmlData('backend', backend);
    setHtmlData('allProjects', allProjects);
}

function getProjectsData() {
    return [
        {
            "title": "Controle Financeiro",
            "description": "Sistema de controle e gestão de finanças pessoais.",
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
            "title": "Gerenciador de tarefas",
            "description": "Trabalho da Faculdade com objetivo de criar um sistema gerenciador de tarefas acadêmicas.",
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
            "title": "Biblioteca virtual",
            "description": "Aplicação de compartilhamento de livros.",
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
        }
    ];
}

function buildHtmlForProject(project) {
    return `<div class="project">
            <img class="image" src=${project.art} alt="project art">
            <strong class="title">${project.title}</strong>
            <p class="description">${project.description}</p>
            <a href=${project.url} class="selectedBtn customLink" target="_blank">Acessar
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>`;
}

function setHtmlData(target, value) {
    if (value === '') {
        document.querySelector(`a[data-target="${target}"]`).style.display = "none";
    } else {
        document.getElementById(`${target}`).innerHTML = value;
    }
}
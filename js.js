// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sobreTab = document.getElementById("sobre-tab");
    const atividadesTab = document.getElementById("atividades-tab");
    const sobreContent = document.getElementById("sobre");
    const atividadesContent = document.getElementById("atividades");
    const atividadeDetalhe = document.getElementById("atividade-detalhe");

    // Função para exibir ou ocultar conteúdo
    function toggleContent(contentToShow) {
        sobreContent.classList.toggle("active", contentToShow === 'sobre');
        atividadesContent.classList.toggle("active", contentToShow === 'atividades');
        atividadeDetalhe.style.display = (contentToShow === 'atividades' && localStorage.getItem('currentActivityUrl')) ? "block" : "none";
    }

    // Função para inicializar o estado da página com base no armazenamento
    function initializePage() {
        if (localStorage.getItem('currentActivityUrl')) {
            toggleContent('atividades');
            fetchActivity(localStorage.getItem('currentActivityUrl'));
        } else {
            toggleContent('sobre');
        }
    }

    sobreTab.addEventListener("click", function(e) {
        e.preventDefault();
        toggleContent('sobre');
        localStorage.removeItem('currentActivityUrl'); // Limpar a URL ao exibir 'Sobre'
    });

    atividadesTab.addEventListener("click", function(e) {
        e.preventDefault();
        toggleContent('atividades');
        if (localStorage.getItem('currentActivityUrl')) {
            fetchActivity(localStorage.getItem('currentActivityUrl')); // Recarregar a atividade ao exibir 'Atividades'
        }
    });

    const atividades = document.querySelectorAll(".atividade");
    atividades.forEach(function(atividade) {
        atividade.addEventListener("click", function(e) {
            e.preventDefault();
            const url = atividade.getAttribute("href");
            localStorage.setItem('currentActivityUrl', url); // Armazenar URL da atividade
            fetchActivity(url);
        });
    });

    function fetchActivity(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                atividadeDetalhe.innerHTML = `
                    <div>${data}</div>
                    <button id="reloadButton">Recarregar</button>
                `;
                atividadeDetalhe.style.display = "block";
                executeScripts(atividadeDetalhe);
            })
            .catch(error => {
                atividadeDetalhe.innerHTML = "<p>Erro ao carregar a atividade.</p>";
                atividadeDetalhe.style.display = "block";
            });
    }

    function executeScripts(element) {
        const scripts = element.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const script = document.createElement('script');
            if (scripts[i].src) {
                script.src = scripts[i].src;
            } else {
                script.textContent = scripts[i].textContent;
            }
            document.head.appendChild(script).parentNode.removeChild(script);
        }
    }

    document.addEventListener("click", function(e) {
        if (e.target && e.target.id === "reloadButton") {
            location.reload(); // Recarregar a página
        }
    });

    // Inicializar a página com o estado correto
    initializePage();
});

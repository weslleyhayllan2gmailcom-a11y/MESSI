// Páginas do site
const pages = {
    inicio: `
        <header class="hero">
            <div class="hero-content">
                <h1>CLT - Consolidação das Leis do Trabalho</h1>
                <p>Conheça todos os seus direitos e deveres como trabalhador</p>
                <button class="cta-button" onclick="changePage('historia')">Saiba Mais</button>
            </div>
        </header>
    `,

    historia: `
        <section class="container section">
            <h2>História da CLT</h2>
            <div class="content-grid">
                <div class="card">
                    <h3>Origem</h3>
                    <p>A CLT foi promulgada em 1º de maio de 1943 pelo presidente Getúlio Vargas. Foi consolidação de leis trabalhistas anteriores e representou um marco importante na proteção dos direitos dos trabalhadores no Brasil.</p>
                </div>
                <div class="card">
                    <h3>Objetivo</h3>
                    <p>Reunir e organizar todas as leis referentes ao trabalho em um único documento, garantindo proteção aos trabalhadores e estabelecendo diretrizes para as relações entre empregadores e empregados.</p>
                </div>
                <div class="card">
                    <h3>Importância</h3>
                    <p>A CLT é a base da legislação trabalhista brasileira, protegendo os direitos fundamentais dos trabalhadores e estabelecendo as obrigações dos empregadores.</p>
                </div>
            </div>
        </section>
    `,

    direitos: `
        <section class="container section">
            <h2>Direitos do Trabalhador</h2>
            <div class="rights-grid">
                <div class="right-card">
                    <h3>Salário Mínimo</h3>
                    <p>Todo trabalhador tem direito a receber no mínimo o salário mínimo estabelecido por lei, reajustado anualmente.</p>
                </div>
                <div class="right-card">
                    <h3>13º Salário</h3>
                    <p>Toda empresa deve pagar uma gratificação anual ao empregado, equivalente a um salário. É pago em duas parcelas: até 30 de novembro e até 20 de dezembro.</p>
                </div>
                <div class="right-card">
                    <h3>Férias Remuneradas</h3>
                    <p>Todo trabalhador tem direito a 30 dias de férias remuneradas a cada 12 meses de trabalho. Pode receber abono pecuniário de 1/3 das férias.</p>
                </div>
                <div class="right-card">
                    <h3>Jornada de Trabalho</h3>
                    <p>A jornada não deve exceder 8 horas diárias e 44 horas semanais. Horas extras devem ser remuneradas com adicional.</p>
                </div>
                <div class="right-card">
                    <h3>Repouso Semanal</h3>
                    <p>Todo trabalhador tem direito a pelo menos um dia de repouso semanal, preferencialmente aos domingos.</p>
                </div>
                <div class="right-card">
                    <h3>Segurança no Trabalho</h3>
                    <p>O empregador é obrigado a fornecer equipamentos de proteção e condições seguras de trabalho para evitar acidentes.</p>
                </div>
                <div class="right-card">
                    <h3>FGTS</h3>
                    <p>Fundo de Garantia do Tempo de Serviço. O empregador deposita 8% do salário em conta para o trabalhador, resgatável em determinadas situações.</p>
                </div>
                <div class="right-card">
                    <h3>Indenização por Dispensa</h3>
                    <p>Em caso de dispensa sem justa causa, o trabalhador recebe indenização compensatória de 40% do saldo do FGTS e avisos prévios.</p>
                </div>
                <div class="right-card">
                    <h3>Maternidade</h3>
                    <p>A gestante tem direito a 120 dias de licença maternidade remunerada, sem perder o emprego.</p>
                </div>
                <div class="right-card">
                    <h3>Paternidade</h3>
                    <p>O pai tem direito a 5 dias de licença paternidade remunerada após o nascimento do filho.</p>
                </div>
                <div class="right-card">
                    <h3>Auxílio-Doença</h3>
                    <p>Trabalhador afastado por doença recebe benefício do INSS enquanto estiver incapacitado para o trabalho.</p>
                </div>
                <div class="right-card">
                    <h3>Liberdade de Associação</h3>
                    <p>Todo trabalhador tem direito de se associar a sindicatos e organizações de classe para defender seus interesses.</p>
                </div>
            </div>
        </section>
    `,

    deveres: `
        <section class="container section">
            <h2>Deveres do Trabalhador</h2>
            <div class="duties-grid">
                <div class="duty-card">
                    <h3>Cumprimento das Obrigações</h3>
                    <p>O trabalhador deve cumprir as tarefas e responsabilidades definidas no contrato de trabalho com diligência e eficiência.</p>
                </div>
                <div class="duty-card">
                    <h3>Respeito às Normas</h3>
                    <p>Deve respeitar as normas e regulamentos da empresa, cumprindo com disciplina e responsabilidade.</p>
                </div>
                <div class="duty-card">
                    <h3>Assiduidade e Pontualidade</h3>
                    <p>O trabalhador deve ser assíduo e pontual nos horários estabelecidos pela empresa.</p>
                </div>
                <div class="duty-card">
                    <h3>Sigilo Profissional</h3>
                    <p>Deve manter sigilo sobre informações confidenciais da empresa e de clientes.</p>
                </div>
                <div class="duty-card">
                    <h3>Preservação do Patrimônio</h3>
                    <p>O trabalhador é responsável pela preservação e cuidado com os bens e equipamentos da empresa.</p>
                </div>
                <div class="duty-card">
                    <h3>Comunicação de Problemas</h3>
                    <p>Deve comunicar ao empregador qualquer problema ou situação que possa prejudicar o trabalho.</p>
                </div>
            </div>
        </section>
    `,

    temas: `
        <section class="container section">
            <h2>Temas Importantes na CLT</h2>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="accordion-button">Contrato de Trabalho</button>
                    <div class="accordion-content">
                        <p>O contrato de trabalho é o acordo entre empregador e empregado. Pode ser por prazo indeterminado (contínuo) ou determinado (temporário, de safra ou por obra certa). Deve conter informações sobre funções, salário, jornada e local de trabalho.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Rescisão do Contrato</button>
                    <div class="accordion-content">
                        <p>A rescisão pode ser por demissão sem justa causa (com direitos indenizatórios), demissão por justa causa (sem direitos adicionais), pedido de demissão pelo trabalhador ou término do contrato por prazo determinado.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Justa Causa</button>
                    <div class="accordion-content">
                        <p>Motivos legítimos para demitir sem indenização: má conduta grave, falta disciplinar séria, embriaguez no trabalho, atos contra segurança, desonestidade e abandono do emprego.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Aviso Prévio</button>
                    <div class="accordion-content">
                        <p>Comunicação formal com antecedência de 30 dias sobre o término do contrato. Pode ser trabalhado ou indenizado. O trabalhador tem direito a 2 horas diárias livres durante o aviso prévio.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Horas Extras e Noturnas</button>
                    <div class="accordion-content">
                        <p>Horas extras são remuneradas com adicional de 50%. Trabalho noturno (22h às 5h) recebe adicional de 20%. Horas extras noturnas recebem ambos os adicionais.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Estabilidade Provisória</button>
                    <div class="accordion-content">
                        <p>Alguns trabalhadores têm direito a estabilidade: gestantes, dirigentes sindicais, membros de CIPA e acidentados. Durante este período, não podem ser demitidos sem justa causa.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Benefícios Sociais</button>
                    <div class="accordion-content">
                        <p>Além do salário, o trabalhador recebe FGTS, décimo terceiro, férias, licenças remuneradas e acesso a programas de bem-estar oferecidos pela empresa.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">Trabalho de Menores</button>
                    <div class="accordion-content">
                        <p>Menores de 18 anos não podem trabalhar à noite, em trabalhos perigosos ou insalubres. Menores de 16 anos só podem trabalhar como aprendiz, com proteção especial.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    info: `
        <section class="info-section">
            <div class="container">
                <h2>Informações Essenciais</h2>
                <div class="info-grid">
                    <div class="info-box">
                        <h4>Artigos Principais</h4>
                        <ul>
                            <li>Art. 5º - Direitos fundamentais</li>
                            <li>Art. 7º - Direitos dos trabalhadores</li>
                            <li>Art. 47 a 52 - Contrato individual</li>
                            <li>Art. 482 a 491 - Rescisão do contrato</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h4>Instituições Responsáveis</h4>
                        <ul>
                            <li>Ministério do Trabalho</li>
                            <li>Sindicatos</li>
                            <li>Justiça do Trabalho</li>
                            <li>INSS</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h4>Reclamações e Denúncias</h4>
                        <ul>
                            <li>Reclamação trabalhista na Justiça</li>
                            <li>Auditoria Fiscal do Trabalho</li>
                            <li>Sindicatos</li>
                            <li>Central de Atendimento (188)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Página atual
let currentPage = 'inicio';

// Função para mudar de página
function changePage(page) {
    if (pages[page]) {
        currentPage = page;
        const app = document.getElementById('app');
        app.innerHTML = pages[page];
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reinicializar funcionalidades
        if (page === 'temas') {
            initAccordion();
        }
        
        // Adicionar animação de entrada
        app.style.opacity = '0';
        setTimeout(() => {
            app.style.transition = 'opacity 0.3s ease';
            app.style.opacity = '1';
        }, 10);
    }
}

// Inicializar accordion
function initAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Fechar todos os outros
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.classList.remove('show');
            });
            
            // Abrir o atual
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('show');
            }
        });
    });
}

// Carregar página inicial
window.addEventListener('load', () => {
    changePage('inicio');
    
    // Animar elementos ao entrar na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards quando a página mudar
    setTimeout(() => {
        document.querySelectorAll('.card, .right-card, .duty-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// Suporte a botão de voltar do navegador
window.addEventListener('popstate', () => {
    changePage(currentPage);
});

console.log('🚀 CLT SPA loaded successfully!');
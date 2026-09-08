// Páginas do site
const pages = {
    inicio: `
        <header class="hero">
            <div class="hero-content">
                <h1>⚖️ CLT - Consolidação das Leis do Trabalho</h1>
                <p>Conheça todos os seus direitos e deveres como trabalhador</p>
                <div class="hero-buttons">
                    <button class="cta-button" onclick="changePage('direitos')">Conhecer Direitos</button>
                    <button class="cta-button secondary" onclick="changePage('deveres')">Entender Deveres</button>
                </div>
            </div>
        </header>
    `,

    historia: `
        <section class="container section">
            <h2>📚 História da CLT</h2>
            <div class="content-grid">
                <div class="card">
                    <h3>🌍 Origem</h3>
                    <p>A CLT foi promulgada em 1º de maio de 1943 pelo presidente Getúlio Vargas. Foi consolidação de leis trabalhistas anteriores e representou um marco importante na proteção dos direitos dos trabalhadores brasileiros.</p>
                </div>
                <div class="card">
                    <h3>🎯 Objetivo</h3>
                    <p>Reunir e organizar todas as leis referentes ao trabalho em um único documento, garantindo proteção aos trabalhadores e estabelecendo diretrizes para as relações entre empregadores e empregados.</p>
                </div>
                <div class="card">
                    <h3>⭐ Importância</h3>
                    <p>A CLT é a base da legislação trabalhista brasileira, protegendo os direitos fundamentais dos trabalhadores e estabelecendo as obrigações dos empregadores. Ela continua sendo fundamental nos dias atuais.</p>
                </div>
                <div class="card">
                    <h3>📅 Evolução</h3>
                    <p>Desde 1943, a CLT sofreu diversas modificações. A mais recente e importante foi a Lei da Reforma Trabalhista (Lei 13.467/2017), que modernizou vários aspectos das relações trabalhistas.</p>
                </div>
                <div class="card">
                    <h3>🇧🇷 Brasil e CLT</h3>
                    <p>A CLT é específica para o Brasil. Outros países têm suas próprias legislações trabalhistas. O Brasil é reconhecido internacionalmente por ter uma das legislações trabalhistas mais completas.</p>
                </div>
                <div class="card">
                    <h3>🔄 Atualidade</h3>
                    <p>A CLT continua sendo o documento mais importante para trabalhadores. Com o surgimento de novas formas de trabalho (home office, freelance), a lei continua se adaptando para proteger todos.</p>
                </div>
            </div>
        </section>
    `,

    direitos: `
        <section class="container section">
            <h2>✅ Direitos do Trabalhador</h2>
            <div class="search-box">
                <input type="text" id="searchDireitos" placeholder="🔍 Buscar direito..." onkeyup="filterCards('direitos')">
            </div>
            <div class="rights-grid">
                <div class="right-card" data-search="salário mínimo">
                    <h3>💰 Salário Mínimo</h3>
                    <p>Todo trabalhador tem direito a receber no mínimo o salário mínimo estabelecido por lei, reajustado anualmente. Ninguém pode receber menos que isso!</p>
                </div>
                <div class="right-card" data-search="décimo terceiro 13">
                    <h3>🎁 13º Salário</h3>
                    <p>Toda empresa deve pagar uma gratificação anual ao empregado, equivalente a um salário. É pago em duas parcelas: até 30 de novembro e até 20 de dezembro.</p>
                </div>
                <div class="right-card" data-search="férias">
                    <h3>🏖️ Férias Remuneradas</h3>
                    <p>Todo trabalhador tem direito a 30 dias de férias remuneradas a cada 12 meses de trabalho. Pode receber abono pecuniário de 1/3 das férias em dinheiro.</p>
                </div>
                <div class="right-card" data-search="jornada horário">
                    <h3>⏰ Jornada de Trabalho</h3>
                    <p>A jornada não deve exceder 8 horas diárias e 44 horas semanais. Horas extras devem ser remuneradas com adicional de 50%.</p>
                </div>
                <div class="right-card" data-search="repouso semanal domingo">
                    <h3>😴 Repouso Semanal</h3>
                    <p>Todo trabalhador tem direito a pelo menos um dia de repouso semanal, preferencialmente aos domingos. Isso é essencial para a saúde e bem-estar!</p>
                </div>
                <div class="right-card" data-search="segurança trabalho">
                    <h3>🦺 Segurança no Trabalho</h3>
                    <p>O empregador é obrigado a fornecer equipamentos de proteção e condições seguras de trabalho para evitar acidentes. Sua saúde é prioridade!</p>
                </div>
                <div class="right-card" data-search="fgts fundo garantia">
                    <h3>🏦 FGTS</h3>
                    <p>Fundo de Garantia do Tempo de Serviço. O empregador deposita 8% do salário em conta para o trabalhador, resgatável em determinadas situações.</p>
                </div>
                <div class="right-card" data-search="indenização dispensa">
                    <h3>💵 Indenização por Dispensa</h3>
                    <p>Em caso de dispensa sem justa causa, o trabalhador recebe indenização compensatória de 40% do saldo do FGTS e avisos prévios.</p>
                </div>
                <div class="right-card" data-search="maternidade gestante gravidez">
                    <h3>👶 Maternidade</h3>
                    <p>A gestante tem direito a 120 dias de licença maternidade remunerada, sem perder o emprego. É um direito essencial para mãe e filho!</p>
                </div>
                <div class="right-card" data-search="paternidade pai">
                    <h3>👨‍👧 Paternidade</h3>
                    <p>O pai tem direito a 5 dias de licença paternidade remunerada após o nascimento do filho. Tempo importante para a família!</p>
                </div>
                <div class="right-card" data-search="auxílio doença inss">
                    <h3>🏥 Auxílio-Doença</h3>
                    <p>Trabalhador afastado por doença recebe benefício do INSS enquanto estiver incapacitado para o trabalho. Sua saúde vem em primeiro lugar!</p>
                </div>
                <div class="right-card" data-search="associação sindicato">
                    <h3>🤝 Liberdade de Associação</h3>
                    <p>Todo trabalhador tem direito de se associar a sindicatos e organizações de classe para defender seus interesses coletivos.</p>
                </div>
            </div>
        </section>
    `,

    deveres: `
        <section class="container section">
            <h2>📋 Deveres do Trabalhador</h2>
            <p class="intro-text">O trabalhador também tem responsabilidades! Conheça os principais deveres:</p>
            <div class="duties-grid">
                <div class="duty-card">
                    <h3>✔️ Cumprimento das Obrigações</h3>
                    <p>O trabalhador deve cumprir as tarefas e responsabilidades definidas no contrato de trabalho com diligência, eficiência e qualidade. Faça bem o seu trabalho!</p>
                </div>
                <div class="duty-card">
                    <h3>📏 Respeito às Normas</h3>
                    <p>Deve respeitar as normas e regulamentos da empresa, cumprindo com disciplina e responsabilidade. As regras existem para o bem de todos!</p>
                </div>
                <div class="duty-card">
                    <h3>🕐 Assiduidade e Pontualidade</h3>
                    <p>O trabalhador deve ser assíduo (frequente) e pontual nos horários estabelecidos pela empresa. Faltas e atrasos prejudicam a empresa e seus colegas.</p>
                </div>
                <div class="duty-card">
                    <h3>🤐 Sigilo Profissional</h3>
                    <p>Deve manter sigilo sobre informações confidenciais da empresa e de clientes. Não divulgar segredos é essencial para a confiança e a empresa!</p>
                </div>
                <div class="duty-card">
                    <h3>🛡️ Preservação do Patrimônio</h3>
                    <p>O trabalhador é responsável pela preservação e cuidado com os bens e equipamentos da empresa. Use com responsabilidade o que lhe é confiado!</p>
                </div>
                <div class="duty-card">
                    <h3>📢 Comunicação de Problemas</h3>
                    <p>Deve comunicar ao empregador qualquer problema ou situação que possa prejudicar o trabalho. A comunicação clara evita maiores problemas!</p>
                </div>
            </div>
        </section>
    `,

    temas: `
        <section class="container section">
            <h2>🎯 Temas Importantes na CLT</h2>
            <p class="intro-text">Clique nos tópicos abaixo para saber mais detalhes:</p>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="accordion-button">📝 Contrato de Trabalho</button>
                    <div class="accordion-content">
                        <h4>O que é?</h4>
                        <p>O contrato de trabalho é o acordo entre empregador e empregado. Pode ser por prazo indeterminado (contínuo) ou determinado (temporário, de safra ou por obra certa).</p>
                        <h4>O que deve conter?</h4>
                        <p>Deve especificar: funções, salário, jornada, local de trabalho, benefícios, e outras cláusulas importantes. Sempre peça uma cópia para guardar!</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">🚪 Rescisão do Contrato</button>
                    <div class="accordion-content">
                        <h4>Tipos de rescisão:</h4>
                        <p><strong>Demissão sem justa causa:</strong> O empregador dispensa sem motivo - trabalhador recebe direitos.</p>
                        <p><strong>Demissão por justa causa:</strong> Por falta grave - sem direitos adicionais.</p>
                        <p><strong>Pedido de demissão:</strong> Trabalhador sai voluntariamente - direitos reduzidos.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">⚖️ Justa Causa</button>
                    <div class="accordion-content">
                        <h4>Exemplos de justa causa:</h4>
                        <ul><li>Má conduta grave ou roubo</li><li>Falta disciplinar séria</li><li>Embriaguez no trabalho</li><li>Atos contra segurança</li><li>Desonestidade ou fraude</li></ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">⏲️ Aviso Prévio</button>
                    <div class="accordion-content">
                        <h4>O que é?</h4>
                        <p>Comunicação formal com 30 dias de antecedência sobre o término do contrato de trabalho.</p>
                        <p>Direitos durante o aviso: 2 horas diárias livres para procurar outro emprego.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">⚡ Horas Extras e Noturnas</button>
                    <div class="accordion-content">
                        <h4>Horas Extras:</h4>
                        <p>Remuneradas com adicional de 50% (mínimo).</p>
                        <h4>Horário Noturno:</h4>
                        <p>Trabalho entre 22h e 5h recebe adicional de 20% (mínimo).</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">🛡️ Estabilidade Provisória</button>
                    <div class="accordion-content">
                        <h4>Quem tem direito:</h4>
                        <ul><li>Gestantes (durante gravidez + 5 meses)</li><li>Dirigentes Sindicais</li><li>Membros de CIPA</li><li>Acidentados</li></ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">🎁 Benefícios Sociais</button>
                    <div class="accordion-content">
                        <h4>Benefícios obrigatórios:</h4>
                        <ul><li>FGTS (8% do salário)</li><li>13º salário</li><li>Férias (30 dias)</li><li>Vale transporte</li><li>Licenças remuneradas</li></ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">👶 Trabalho de Menores</button>
                    <div class="accordion-content">
                        <h4>Proibições:</h4>
                        <p><strong>Menores de 18:</strong> Não podem trabalhar à noite ou em trabalhos perigosos.</p>
                        <p><strong>Menores de 16:</strong> Só como aprendiz, com proteção especial.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    info: `
        <section class="info-section">
            <div class="container">
                <h2>ℹ️ Informações Essenciais</h2>
                <div class="info-grid">
                    <div class="info-box">
                        <h4>📖 Artigos Principais</h4>
                        <ul>
                            <li><strong>Art. 5º:</strong> Direitos fundamentais</li>
                            <li><strong>Art. 7º:</strong> Direitos dos trabalhadores</li>
                            <li><strong>Art. 47-52:</strong> Contrato individual</li>
                            <li><strong>Art. 482-491:</strong> Rescisão do contrato</li>
                            <li><strong>Art. 58-65:</strong> Jornada de trabalho</li>
                            <li><strong>Art. 120-133:</strong> Férias</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h4>🏢 Instituições Responsáveis</h4>
                        <ul>
                            <li>🏛️ <strong>Ministério do Trabalho</strong></li>
                            <li>🤝 <strong>Sindicatos</strong></li>
                            <li>⚖️ <strong>Justiça do Trabalho</strong></li>
                            <li>🏥 <strong>INSS</strong></li>
                            <li>🛡️ <strong>MTE/Auditoria Fiscal</strong></li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h4>📞 Canais de Atendimento</h4>
                        <ul>
                            <li>📞 <strong>Central 188:</strong> Informações</li>
                            <li>⚖️ <strong>Justiça do Trabalho:</strong> Ações judiciais</li>
                            <li>🤝 <strong>Sindicatos:</strong> Orientação</li>
                            <li>👨‍⚖️ <strong>Advogado:</strong> Consultoria</li>
                            <li>📍 <strong>Delegacia Regional:</strong> Auditoria</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,

    seguranca: `
        <section class="container section">
            <h2>🔒 Segurança e Privacidade</h2>
            <div class="content-grid">
                <div class="card">
                    <h3>🛡️ Proteção de Dados</h3>
                    <p>Este site não coleta dados pessoais. Todas as informações que você vê são públicas e educacionais sobre a CLT. Nenhum rastreamento é realizado.</p>
                </div>
                <div class="card">
                    <h3>🔐 Segurança do Navegador</h3>
                    <p>Use sempre conexões seguras (HTTPS). Navegadores modernos protegem sua conexão. Não compartilhe informações sensíveis em sites públicos.</p>
                </div>
                <div class="card">
                    <h3>📋 Política de Privacidade</h3>
                    <p>Respeitamos sua privacidade. O site funciona totalmente no seu navegador. Nenhuma informação é enviada para servidores externos sem sua autorização.</p>
                </div>
                <div class="card">
                    <h3>⚠️ Aviso Legal</h3>
                    <p>As informações aqui são educacionais. Para questões legais específicas, consulte um advogado. A CLT é dinâmica e sofre atualizações frequentes.</p>
                </div>
                <div class="card">
                    <h3>🔄 Atualizações</h3>
                    <p>Este site é mantido com informações atualizadas sobre a CLT. Consulte sempre fontes oficiais do Ministério do Trabalho para informações críticas.</p>
                </div>
                <div class="card">
                    <h3>💬 Feedback</h3>
                    <p>Suas sugestões e feedback são importantes para melhorar este projeto. Ajude-nos a manter este recurso educacional útil e preciso.</p>
                </div>
            </div>
        </section>
    `,

    creditos: `
        <section class="container section">
            <h2>🎓 Créditos e Recursos</h2>
            <div class="content-grid">
                <div class="card">
                    <h3>📚 Fontes de Informação</h3>
                    <p>Este projeto utiliza informações do texto oficial da CLT (Consolidação das Leis do Trabalho), publicado pelo Ministério da Economia e regulamentações atualizadas até 2024.</p>
                </div>
                <div class="card">
                    <h3>👨‍💻 Desenvolvimento</h3>
                    <p>Site desenvolvido como projeto educacional sobre legislação trabalhista brasileira. Utiliza tecnologias web modernas (HTML5, CSS3, JavaScript vanilla).</p>
                </div>
                <div class="card">
                    <h3>🎨 Design</h3>
                    <p>Interface amigável e responsiva, otimizada para desktop e dispositivos móveis. Cores escolhidas seguindo padrões de acessibilidade e usabilidade.</p>
                </div>
                <div class="card">
                    <h3>📱 Tecnologias</h3>
                    <p><strong>Frontend:</strong> HTML5, CSS3 (com gradientes e animações), JavaScript vanilla (sem dependências externas).</p>
                </div>
                <div class="card">
                    <h3>♿ Acessibilidade</h3>
                    <p>Projeto desenvolvido seguindo princípios WCAG de acessibilidade. Suporta navegação por teclado, leitura de tela e contraste adequado.</p>
                </div>
                <div class="card">
                    <h3>📄 Licença</h3>
                    <p>Este projeto é de código aberto e educacional. Use, compartilhe e contribua livremente, sempre respeitando a legislação e dando crédito quando apropriado.</p>
                </div>
            </div>
            <div style="margin-top: 40px; padding: 20px; background: #f0f9ff; border-radius: 10px; text-align: center;">
                <h4>Desenvolvido com ❤️ para educação laboral</h4>
                <p style="margin-top: 10px; color: #666;">Este projeto visa democratizar o conhecimento sobre direitos e deveres trabalhistas no Brasil.</p>
            </div>
        </section>
    `
};

let currentPage = 'inicio';

function changePage(page) {
    if (pages[page]) {
        const app = document.getElementById('app');
        
        // Animação de saída
        app.style.animation = 'pageOut 0.4s ease-out forwards';
        
        // Aguardar animação de saída terminar
        setTimeout(() => {
            currentPage = page;
            app.innerHTML = pages[page];
            
            // Animação de entrada
            app.style.animation = 'pageIn 0.5s ease-out forwards';
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reinicializar funcionalidades
            setTimeout(() => {
                if (page === 'temas') {
                    initAccordion();
                } else if (page === 'direitos') {
                    initSearch();
                }
            }, 100);
        }, 400);
    }
}

function filterCards(page) {
    const searchInput = document.getElementById(`search${page.charAt(0).toUpperCase() + page.slice(1)}`).value.toLowerCase();
    const cards = document.querySelectorAll('[data-search]');
    
    cards.forEach(card => {
        const searchText = card.getAttribute('data-search').toLowerCase();
        if (searchText.includes(searchInput) || searchInput === '') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function initSearch() {
    const searchInput = document.getElementById('searchDireitos');
    if (searchInput) {
        searchInput.focus();
    }
}

function initAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.classList.remove('show');
            });
            
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('show');
            }
        });
    });
}

window.addEventListener('load', () => {
    changePage('inicio');
});

console.log('🚀 CLT SPA com Animações carregado com sucesso!');

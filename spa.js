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
                <div class="card" style="animation: slideDown 0.8s ease-out 0s forwards; opacity: 0;">
                    <h3>🌍 Origem</h3>
                    <p>A CLT foi promulgada em 1º de maio de 1943 pelo presidente Getúlio Vargas. Foi consolidação de leis trabalhistas anteriores e representou um marco importante na proteção dos direitos dos trabalhadores no Brasil. Este foi um passo revolucionário para a época!</p>
                </div>
                <div class="card" style="animation: slideDown 0.8s ease-out 0.1s forwards; opacity: 0;">
                    <h3>🎯 Objetivo</h3>
                    <p>Reunir e organizar todas as leis referentes ao trabalho em um único documento, garantindo proteção aos trabalhadores e estabelecendo diretrizes para as relações entre empregadores e empregados. A CLT unificou mais de 100 leis esparsas.</p>
                </div>
                <div class="card" style="animation: slideDown 0.8s ease-out 0.2s forwards; opacity: 0;">
                    <h3>⭐ Importância</h3>
                    <p>A CLT é a base da legislação trabalhista brasileira, protegendo os direitos fundamentais dos trabalhadores e estabelecendo as obrigações dos empregadores. Ela continua sendo atualizada para acompanhar a modernidade.</p>
                </div>
                <div class="card" style="animation: slideDown 0.8s ease-out 0.3s forwards; opacity: 0;">
                    <h3>📅 Evolução</h3>
                    <p>Desde 1943, a CLT sofreu diversas modificações. A mais recente e importante foi a Lei da Reforma Trabalhista (Lei 13.467/2017), que modernizou vários aspectos das relações de trabalho.</p>
                </div>
                <div class="card" style="animation: slideDown 0.8s ease-out 0.4s forwards; opacity: 0;">
                    <h3>🇧🇷 Brasil e CLT</h3>
                    <p>A CLT é específica para o Brasil. Outros países têm suas próprias legislações trabalhistas. O Brasil é reconhecido internacionalmente por ter uma das legislações trabalhistas mais protetoras.</p>
                </div>
                <div class="card" style="animation: slideDown 0.8s ease-out 0.5s forwards; opacity: 0;">
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
                <input type="text" id="searchDireitos" placeholder="🔍 Buscar direito..." onkeyup="filterCards('direitos')" style="animation: slideUp 0.6s ease-out 0.3s forwards; opacity: 0;">
            </div>
            <div class="rights-grid">
                <div class="right-card" data-search="salário mínimo" style="animation: slideUp 0.6s ease-out 0.4s forwards; opacity: 0;">
                    <h3>💰 Salário Mínimo</h3>
                    <p>Todo trabalhador tem direito a receber no mínimo o salário mínimo estabelecido por lei, reajustado anualmente. Ninguém pode receber menos que isso!</p>
                </div>
                <div class="right-card" data-search="décimo terceiro 13" style="animation: slideUp 0.6s ease-out 0.5s forwards; opacity: 0;">
                    <h3>🎁 13º Salário</h3>
                    <p>Toda empresa deve pagar uma gratificação anual ao empregado, equivalente a um salário. É pago em duas parcelas: até 30 de novembro e até 20 de dezembro.</p>
                </div>
                <div class="right-card" data-search="férias" style="animation: slideUp 0.6s ease-out 0.6s forwards; opacity: 0;">
                    <h3>🏖️ Férias Remuneradas</h3>
                    <p>Todo trabalhador tem direito a 30 dias de férias remuneradas a cada 12 meses de trabalho. Pode receber abono pecuniário de 1/3 das férias em dinheiro.</p>
                </div>
                <div class="right-card" data-search="jornada horário" style="animation: slideUp 0.6s ease-out 0.7s forwards; opacity: 0;">
                    <h3>⏰ Jornada de Trabalho</h3>
                    <p>A jornada não deve exceder 8 horas diárias e 44 horas semanais. Horas extras devem ser remuneradas com adicional de 50%.</p>
                </div>
                <div class="right-card" data-search="repouso semanal domingo" style="animation: slideUp 0.6s ease-out 0.8s forwards; opacity: 0;">
                    <h3>😴 Repouso Semanal</h3>
                    <p>Todo trabalhador tem direito a pelo menos um dia de repouso semanal, preferencialmente aos domingos. Isso é essencial para a saúde e bem-estar!</p>
                </div>
                <div class="right-card" data-search="segurança trabalho" style="animation: slideUp 0.6s ease-out 0.9s forwards; opacity: 0;">
                    <h3>🦺 Segurança no Trabalho</h3>
                    <p>O empregador é obrigado a fornecer equipamentos de proteção e condições seguras de trabalho para evitar acidentes. Sua saúde é prioridade!</p>
                </div>
                <div class="right-card" data-search="fgts fundo garantia" style="animation: slideUp 0.6s ease-out 1s forwards; opacity: 0;">
                    <h3>🏦 FGTS</h3>
                    <p>Fundo de Garantia do Tempo de Serviço. O empregador deposita 8% do salário em conta para o trabalhador, resgatável em determinadas situações.</p>
                </div>
                <div class="right-card" data-search="indenização dispensa" style="animation: slideUp 0.6s ease-out 1.1s forwards; opacity: 0;">
                    <h3>💵 Indenização por Dispensa</h3>
                    <p>Em caso de dispensa sem justa causa, o trabalhador recebe indenização compensatória de 40% do saldo do FGTS e avisos prévios.</p>
                </div>
                <div class="right-card" data-search="maternidade gestante gravidez" style="animation: slideUp 0.6s ease-out 1.2s forwards; opacity: 0;">
                    <h3>👶 Maternidade</h3>
                    <p>A gestante tem direito a 120 dias de licença maternidade remunerada, sem perder o emprego. É um direito essencial para mãe e filho!</p>
                </div>
                <div class="right-card" data-search="paternidade pai" style="animation: slideUp 0.6s ease-out 1.3s forwards; opacity: 0;">
                    <h3>👨‍👧 Paternidade</h3>
                    <p>O pai tem direito a 5 dias de licença paternidade remunerada após o nascimento do filho. Tempo importante para a família!</p>
                </div>
                <div class="right-card" data-search="auxílio doença inss" style="animation: slideUp 0.6s ease-out 1.4s forwards; opacity: 0;">
                    <h3>🏥 Auxílio-Doença</h3>
                    <p>Trabalhador afastado por doença recebe benefício do INSS enquanto estiver incapacitado para o trabalho. Sua saúde vem em primeiro lugar!</p>
                </div>
                <div class="right-card" data-search="associação sindicato" style="animation: slideUp 0.6s ease-out 1.5s forwards; opacity: 0;">
                    <h3>🤝 Liberdade de Associação</h3>
                    <p>Todo trabalhador tem direito de se associar a sindicatos e organizações de classe para defender seus interesses coletivos.</p>
                </div>
            </div>
        </section>
    `,

    deveres: `
        <section class="container section">
            <h2>📋 Deveres do Trabalhador</h2>
            <p class="intro-text" style="animation: slideDown 0.6s ease-out 0s forwards; opacity: 0;">O trabalhador também tem responsabilidades! Conheça os principais deveres:</p>
            <div class="duties-grid">
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.2s forwards; opacity: 0;">
                    <h3>✔️ Cumprimento das Obrigações</h3>
                    <p>O trabalhador deve cumprir as tarefas e responsabilidades definidas no contrato de trabalho com diligência, eficiência e qualidade. Faça bem o seu trabalho!</p>
                </div>
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.35s forwards; opacity: 0;">
                    <h3>📏 Respeito às Normas</h3>
                    <p>Deve respeitar as normas e regulamentos da empresa, cumprindo com disciplina e responsabilidade. As regras existem para o bem de todos!</p>
                </div>
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.5s forwards; opacity: 0;">
                    <h3>🕐 Assiduidade e Pontualidade</h3>
                    <p>O trabalhador deve ser assíduo (frequente) e pontual nos horários estabelecidos pela empresa. Faltas e atrasos prejudicam a empresa e seus colegas.</p>
                </div>
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.65s forwards; opacity: 0;">
                    <h3>🤐 Sigilo Profissional</h3>
                    <p>Deve manter sigilo sobre informações confidenciais da empresa e de clientes. Não divulgar segredos é essencial para a confiança e a empresa!</p>
                </div>
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.8s forwards; opacity: 0;">
                    <h3>🛡️ Preservação do Patrimônio</h3>
                    <p>O trabalhador é responsável pela preservação e cuidado com os bens e equipamentos da empresa. Use com responsabilidade o que lhe é confiado!</p>
                </div>
                <div class="duty-card" style="animation: slideUp 0.6s ease-out 0.95s forwards; opacity: 0;">
                    <h3>📢 Comunicação de Problemas</h3>
                    <p>Deve comunicar ao empregador qualquer problema ou situação que possa prejudicar o trabalho. A comunicação clara evita maiores problemas!</p>
                </div>
            </div>
        </section>
    `,

    temas: `
        <section class="container section">
            <h2>🎯 Temas Importantes na CLT</h2>
            <p class="intro-text" style="animation: slideDown 0.6s ease-out 0s forwards; opacity: 0;">Clique nos tópicos abaixo para saber mais detalhes:</p>
            <div class="accordion">
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.15s forwards; opacity: 0;">
                    <button class="accordion-button">📝 Contrato de Trabalho</button>
                    <div class="accordion-content">
                        <h4>O que é?</h4>
                        <p>O contrato de trabalho é o acordo entre empregador e empregado. Pode ser por prazo indeterminado (contínuo) ou determinado (temporário, de safra ou por obra certa).</p>
                        <h4>O que deve conter?</h4>
                        <p>Deve especificar: funções, salário, jornada, local de trabalho, benefícios, e outras cláusulas importantes. Sempre peça uma cópia para guardar!</p>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.3s forwards; opacity: 0;">
                    <button class="accordion-button">🚪 Rescisão do Contrato</button>
                    <div class="accordion-content">
                        <h4>Tipos de rescisão:</h4>
                        <p><strong>Demissão sem justa causa:</strong> O empregador dispensa sem motivo - trabalhador recebe direitos.</p>
                        <p><strong>Demissão por justa causa:</strong> Por falta grave - sem direitos adicionais.</p>
                        <p><strong>Pedido de demissão:</strong> Trabalhador sai voluntariamente - direitos reduzidos.</p>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.45s forwards; opacity: 0;">
                    <button class="accordion-button">⚖️ Justa Causa</button>
                    <div class="accordion-content">
                        <h4>Exemplos de justa causa:</h4>
                        <ul><li>Má conduta grave ou roubo</li><li>Falta disciplinar séria</li><li>Embriaguez no trabalho</li><li>Atos contra segurança</li><li>Desonestidade ou fraude</li></ul>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.6s forwards; opacity: 0;">
                    <button class="accordion-button">⏲️ Aviso Prévio</button>
                    <div class="accordion-content">
                        <h4>O que é?</h4>
                        <p>Comunicação formal com 30 dias de antecedência sobre o término do contrato de trabalho.</p>
                        <p>Direitos durante o aviso: 2 horas diárias livres para procurar outro emprego.</p>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.75s forwards; opacity: 0;">
                    <button class="accordion-button">⚡ Horas Extras e Noturnas</button>
                    <div class="accordion-content">
                        <h4>Horas Extras:</h4>
                        <p>Remuneradas com adicional de 50% (mínimo).</p>
                        <h4>Horário Noturno:</h4>
                        <p>Trabalho entre 22h e 5h recebe adicional de 20% (mínimo).</p>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.9s forwards; opacity: 0;">
                    <button class="accordion-button">🛡️ Estabilidade Provisória</button>
                    <div class="accordion-content">
                        <h4>Quem tem direito:</h4>
                        <ul><li>Gestantes (durante gravidez + 5 meses)</li><li>Dirigentes Sindicais</li><li>Membros de CIPA</li><li>Acidentados</li></ul>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 1.05s forwards; opacity: 0;">
                    <button class="accordion-button">🎁 Benefícios Sociais</button>
                    <div class="accordion-content">
                        <h4>Benefícios obrigatórios:</h4>
                        <ul><li>FGTS (8% do salário)</li><li>13º salário</li><li>Férias (30 dias)</li><li>Vale transporte</li><li>Licenças remuneradas</li></ul>
                    </div>
                </div>
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 1.2s forwards; opacity: 0;">
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

    seguranca: `
        <section class="container section">
            <h2>🛡️ Segurança do Trabalho</h2>
            <p class="intro-text" style="animation: slideDown 0.6s ease-out 0s forwards; opacity: 0;">A segurança do trabalho é fundamental para proteger a vida e a saúde dos trabalhadores. Conheça os principais direitos e deveres:</p>
            
            <div class="accordion">
                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.15s forwards; opacity: 0;">
                    <button class="accordion-button">⚠️ O que é Segurança do Trabalho?</button>
                    <div class="accordion-content">
                        <h4>Definição</h4>
                        <p>Segurança do Trabalho é o conjunto de medidas adotadas para prevenir acidentes, doenças ocupacionais e proteger a vida dos trabalhadores durante o exercício de suas funções.</p>
                        <h4>Importância</h4>
                        <p>Previne acidentes graves, reduz custos com indenizações e afastamentos, melhora a produtividade e garante um ambiente de trabalho mais saudável para todos.</p>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.3s forwards; opacity: 0;">
                    <button class="accordion-button">👷 Equipamentos de Proteção Individual (EPI)</button>
                    <div class="accordion-content">
                        <h4>O que é EPI?</h4>
                        <p>São dispositivos de uso individual destinados a proteger a saúde e a integridade física do trabalhador. Exemplos: capacete, luvas, óculos de proteção, máscara, colete, botina de segurança.</p>
                        <h4>Responsabilidades</h4>
                        <ul>
                            <li><strong>Empregador:</strong> Fornece, mantém e substitui o EPI gratuitamente</li>
                            <li><strong>Trabalhador:</strong> Usa corretamente, cuida e mantém em bom estado</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.45s forwards; opacity: 0;">
                    <button class="accordion-button">🔍 Normas de Segurança (NR)</button>
                    <div class="accordion-content">
                        <h4>O que são NRs?</h4>
                        <p>Normas Regulamentadoras são regras do Ministério do Trabalho que estabelecem diretrizes de segurança e saúde no trabalho.</p>
                        <h4>Principais NRs:</h4>
                        <ul>
                            <li><strong>NR 1:</strong> Disposições gerais de segurança</li>
                            <li><strong>NR 4:</strong> Serviços de Segurança e Medicina do Trabalho</li>
                            <li><strong>NR 5:</strong> CIPA (Comissão Interna de Prevenção de Acidentes)</li>
                            <li><strong>NR 6:</strong> Equipamento de Proteção Individual</li>
                            <li><strong>NR 17:</strong> Ergonomia</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.6s forwards; opacity: 0;">
                    <button class="accordion-button">🏥 Prevenção de Acidentes</button>
                    <div class="accordion-content">
                        <h4>Medidas preventivas:</h4>
                        <ul>
                            <li>✅ Avaliação de riscos no ambiente de trabalho</li>
                            <li>✅ Treinamento dos trabalhadores</li>
                            <li>✅ Sinalização adequada</li>
                            <li>✅ Manutenção preventiva de máquinas e equipamentos</li>
                            <li>✅ Uso obrigatório de EPI</li>
                            <li>✅ Primeiros socorros disponíveis</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.75s forwards; opacity: 0;">
                    <button class="accordion-button">🚨 Acidente de Trabalho</button>
                    <div class="accordion-content">
                        <h4>O que é acidente de trabalho?</h4>
                        <p>É qualquer lesão corporal ou perturbação funcional que o trabalhador sofra durante o trabalho ou em consequência dele.</p>
                        <h4>Direitos do trabalhador acidentado:</h4>
                        <ul>
                            <li>Receber auxílio-doença do INSS</li>
                            <li>Receber auxílio-acidente se tiver sequelas</li>
                            <li>Não perder o emprego</li>
                            <li>Afastamento da função de risco</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 0.9s forwards; opacity: 0;">
                    <button class="accordion-button">🔬 Doenças Ocupacionais</button>
                    <div class="accordion-content">
                        <h4>O que são?</h4>
                        <p>Doenças causadas pelas condições de trabalho. Exemplos: LER (Lesão por Esforço Repetitivo), dermatite, perda auditiva, problemas respiratórios.</p>
                        <h4>Prevenção:</h4>
                        <ul>
                            <li>Ergonomia adequada no ambiente</li>
                            <li>Pausas regulares</li>
                            <li>Rotatividade de funções</li>
                            <li>Monitoramento da saúde</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 1.05s forwards; opacity: 0;">
                    <button class="accordion-button">👥 CIPA - Comissão Interna de Prevenção</button>
                    <div class="accordion-content">
                        <h4>O que é CIPA?</h4>
                        <p>Comissão formada por representantes dos trabalhadores e da empresa para identificar riscos e promover ações de segurança.</p>
                        <h4>Funções:</h4>
                        <ul>
                            <li>Investigar acidentes</li>
                            <li>Fazer inspeções na empresa</li>
                            <li>Promover treinamentos</li>
                            <li>Comunicar riscos ao empregador</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item" style="animation: slideUp 0.6s ease-out 1.2s forwards; opacity: 0;">
                    <button class="accordion-button">⚖️ Direitos e Deveres</button>
                    <div class="accordion-content">
                        <h4>Direitos do Trabalhador:</h4>
                        <ul>
                            <li>✅ Trabalhar em ambiente seguro</li>
                            <li>✅ Receber EPI gratuitamente</li>
                            <li>✅ Ser informado sobre riscos</li>
                            <li>✅ Recusar trabalho perigoso</li>
                            <li>✅ Participar de treinamentos</li>
                        </ul>
                        <h4>Deveres do Trabalhador:</h4>
                        <ul>
                            <li>✅ Usar EPI corretamente</li>
                            <li>✅ Cumprir as normas de segurança</li>
                            <li>✅ Comunicar riscos e acidentes</li>
                            <li>✅ Participar de treinamentos</li>
                            <li>✅ Colaborar com a CIPA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,

    creditos: `
        <section class="container section">
            <h2>👥 Créditos - Trabalho do Grupo</h2>
            <p class="intro-text" style="animation: slideDown 0.6s ease-out 0s forwards; opacity: 0;">Projeto desenvolvido pelos alunos como trabalho sobre Segurança do Trabalho</p>
            
            <div class="credits-box" style="animation: slideUp 0.6s ease-out 0.2s forwards; opacity: 0;">
                <h3>📚 Instituição de Ensino</h3>
                <div class="credit-info">
                    <p><strong>Escola:</strong> Escola Estadual de Educação Profissional</p>
                    <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">*(Insira o nome da sua escola aqui)*</p>
                </div>
            </div>

            <div class="credits-grid" style="margin-top: 2rem;">
                <div class="member-card" style="animation: slideUp 0.6s ease-out 0.3s forwards; opacity: 0;">
                    <div class="member-avatar">👤</div>
                    <h3>Weslley</h3>
                    <p class="member-role">Desenvolvedor Web & Design</p>
                    <p class="member-desc">Responsável pela programação e interface do site</p>
                </div>

                <div class="member-card" style="animation: slideUp 0.6s ease-out 0.45s forwards; opacity: 0;">
                    <div class="member-avatar">👤</div>
                    <h3>Igão</h3>
                    <p class="member-role">Pesquisador & Conteúdo</p>
                    <p class="member-desc">Responsável pela coleta e organização das informações</p>
                </div>

                <div class="member-card" style="animation: slideUp 0.6s ease-out 0.6s forwards; opacity: 0;">
                    <div class="member-avatar">👤</div>
                    <h3>Alisson</h3>
                    <p class="member-role">Pesquisador & Redação</p>
                    <p class="member-desc">Responsável pela redação e revisão do conteúdo</p>
                </div>

                <div class="member-card" style="animation: slideUp 0.6s ease-out 0.75s forwards; opacity: 0;">
                    <div class="member-avatar">👤</div>
                    <h3>Levi</h3>
                    <p class="member-role">Pesquisador & Validação</p>
                    <p class="member-desc">Responsável pela validação das informações legais</p>
                </div>
            </div>

            <div class="project-info" style="animation: slideUp 0.6s ease-out 0.9s forwards; opacity: 0;">
                <h3>📋 Sobre Este Projeto</h3>
                <div class="info-content">
                    <p><strong>Objetivo:</strong> Criar um website educativo sobre a Consolidação das Leis do Trabalho (CLT) com foco especial em <strong>Segurança do Trabalho</strong>.</p>
                    <p><strong>Tema:</strong> Segurança, Saúde e Proteção do Trabalhador</p>
                    <p><strong>Disciplina:</strong> Trabalho Integrado</p>
                    <p><strong>Tecnologias Utilizadas:</strong></p>
                    <ul>
                        <li>HTML5 para estrutura</li>
                        <li>CSS3 para estilo e animações</li>
                        <li>JavaScript para interatividade</li>
                        <li>SPA (Single Page Application) para navegação fluida</li>
                    </ul>
                    <p><strong>Data de Conclusão:</strong> 2024</p>
                </div>
            </div>

            <div class="features-box" style="animation: slideUp 0.6s ease-out 1.05s forwards; opacity: 0;">
                <h3>✨ Funcionalidades do Site</h3>
                <div class="features-list">
                    <div class="feature-item">✅ 8 Páginas com conteúdo completo</div>
                    <div class="feature-item">✅ Animações suaves em todos os elementos</div>
                    <div class="feature-item">✅ Sistema de busca nos direitos</div>
                    <div class="feature-item">✅ Acordeom interativo para temas</div>
                    <div class="feature-item">✅ Design responsivo (mobile & desktop)</div>
                    <div class="feature-item">✅ Conteúdo sobre Segurança do Trabalho</div>
                    <div class="feature-item">✅ Navegação sem recarregar página (SPA)</div>
                    <div class="feature-item">✅ Interface moderna e atrativa</div>
                </div>
            </div>
        </section>
    `,

    info: `
        <section class="info-section">
            <div class="container">
                <h2>ℹ️ Informações Essenciais</h2>
                <div class="info-grid">
                    <div class="info-box" style="animation: slideUp 0.6s ease-out 0.2s forwards; opacity: 0;">
                        <h4>📖 Artigos Principais</h4>
                        <ul>
                            <li><strong>Art. 5º:</strong> Direitos fundamentais</li>
                            <li><strong>Art. 7º:</strong> Direitos dos trabalhadores</li>
                            <li><strong>Art. 47-52:</strong> Contrato individual</li>
                            <li><strong>Art. 482-491:</strong> Rescisão do contrato</li>
                            <li><strong>Art. 154-159:</strong> Segurança e Medicina</li>
                        </ul>
                    </div>
                    <div class="info-box" style="animation: slideUp 0.6s ease-out 0.35s forwards; opacity: 0;">
                        <h4>🏢 Instituições Responsáveis</h4>
                        <ul>
                            <li>🏛️ <strong>Ministério do Trabalho</strong></li>
                            <li>🤝 <strong>Sindicatos</strong></li>
                            <li>⚖️ <strong>Justiça do Trabalho</strong></li>
                            <li>🏥 <strong>INSS</strong></li>
                            <li>🛡️ <strong>MTE/Auditoria Fiscal</strong></li>
                        </ul>
                    </div>
                    <div class="info-box" style="animation: slideUp 0.6s ease-out 0.5s forwards; opacity: 0;">
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
                if (page === 'temas' || page === 'seguranca') {
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

console.log('🚀 CLT SPA com Segurança e Créditos carregado com sucesso!');

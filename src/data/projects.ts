// Fonte: READMEs e código dos repositórios em github.com/KevinBrandao.
// Só entram aqui funcionalidades documentadas ou implementadas nos repositórios.

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "web" | "mobile" | "diagram";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  focus: ("IA" | "Saúde" | "Automação" | "Integração" | "QA" | "Desenvolvimento")[];
  ai?: boolean;
  featured?: boolean;
  year: string;
  context: string;
  summary: string;
  problem: string;
  participation: string;
  features: string[];
  architecture: { title: string; text: string }[];
  stack: string[];
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  links: { repo: string; demo?: string; demoLabel?: string; extra?: { label: string; href: string }[] };
};

const gh = (repo: string) => `https://github.com/KevinBrandao/${repo}`;

export const projects: Project[] = [
  {
    slug: "healthcheck",
    name: "HealthCheck",
    tagline: "Avaliação de risco cardíaco e qualidade do sono com Machine Learning",
    category: "IA aplicada à saúde",
    focus: ["IA", "Saúde", "Integração"],
    ai: true,
    featured: true,
    year: "2025",
    context: "Projeto Interdisciplinar · 6º semestre · FATEC Franca",
    summary:
      "Plataforma web e mobile que apoia médicos na triagem de risco cardíaco e na análise da qualidade do sono, com modelos preditivos processados de forma assíncrona.",
    problem:
      "A avaliação de risco cardiovascular e de distúrbios do sono depende de cruzar vários fatores clínicos e comportamentais. O HealthCheck reúne esses dados em questionários e devolve uma classificação de risco com recomendações, mantendo o histórico por médico.",
    participation:
      "Projeto desenvolvido em equipe de quatro integrantes, como evolução do CardioCheck criado pelo mesmo grupo no semestre anterior.",
    features: [
      "Questionário cardíaco com 11 fatores de risco e classificação em baixo ou alto risco",
      "Módulo de sono: score de 1 a 10 e identificação de padrões compatíveis com insônia ou apneia",
      "Recomendações de acordo com o perfil avaliado",
      "Acesso por aplicativo Android e por navegador",
      "Login de médicos com JWT e histórico de avaliações dos dois módulos",
      "API REST documentada em OpenAPI",
    ],
    architecture: [
      {
        title: "Interfaces",
        text: "Aplicativo Android em .NET MAUI (C#) e aplicação web em React com Vite e TypeScript.",
      },
      {
        title: "API Gateway",
        text: "Node.js com Express e TypeScript. Cuida da autenticação, persiste os dados em MySQL via TypeORM e publica as solicitações de análise na fila.",
      },
      {
        title: "Mensageria",
        text: "NATS em Docker faz a comunicação assíncrona entre a API e os workers de IA.",
      },
      {
        title: "Workers de IA",
        text: "Consumidores em Python (scikit-learn e pandas) escutam as filas, executam os modelos preditivos serializados em .joblib e devolvem o resultado.",
      },
    ],
    stack: ["Python", "scikit-learn", "Node.js", "TypeScript", "React", ".NET MAUI", "NATS", "MySQL", "Docker"],
    cover: {
      src: "/projetos/healthcheck-web.png",
      alt: "Tela de histórico de avaliações do HealthCheck, com cartões de baixo e alto risco",
      width: 1899,
      height: 634,
      kind: "web",
    },
    gallery: [
      {
        src: "/projetos/healthcheck-arquitetura.png",
        alt: "Diagrama de arquitetura: app, API Gateway em Node.js, fila NATS, processamento de IA em Python e banco MySQL",
        width: 1227,
        height: 355,
        kind: "diagram",
      },
    ],
    links: {
      repo: gh("DSM-P6-2025-2"),
      demo: "https://youtu.be/HyWEk_p2UE0",
      demoLabel: "Assistir ao vídeo",
    },
  },
  {
    slug: "cardiocheck",
    name: "CardioCheck",
    tagline: "App mobile que apoia médicos na avaliação de risco cardíaco",
    category: "IA aplicada à saúde",
    focus: ["IA", "Saúde"],
    ai: true,
    featured: true,
    year: "2025",
    context: "Projeto Interdisciplinar · 5º semestre · FATEC Franca",
    summary:
      "Aplicativo Android e API que classificam o risco de doença cardíaca a partir de dados clínicos informados pelo médico, usando um modelo de classificação pré-treinado.",
    problem:
      "Dar ao médico uma segunda leitura rápida sobre o risco cardíaco do paciente, a partir de dados como idade, pressão arterial, colesterol e resultados de exames, com registro das avaliações feitas.",
    participation: "Projeto desenvolvido em equipe de quatro integrantes.",
    features: [
      "Cadastro e autenticação de médicos",
      "Questionário de saúde com 11 fatores de risco",
      "Classificação em alto ou baixo risco com recomendações",
      "Histórico das avaliações realizadas",
      "API documentada em OpenAPI e hospedada em nuvem durante o projeto",
    ],
    architecture: [
      {
        title: "Aplicativo",
        text: "C# com .NET MAUI para Android: interface, coleta dos dados e comunicação com a API.",
      },
      {
        title: "API",
        text: "Node.js, Express e TypeScript, com TypeORM e MySQL. Gerencia médicos, autenticação via JWT e o processamento dos questionários.",
      },
      {
        title: "Modelo de IA",
        text: "Script em Python com scikit-learn, pandas e numpy, que carrega um modelo de classificação LDA pré-treinado e devolve a predição.",
      },
    ],
    stack: ["Python", "scikit-learn", ".NET MAUI", "C#", "Node.js", "TypeScript", "MySQL", "JWT"],
    cover: {
      src: "/projetos/cardiocheck-app.png",
      alt: "Tela inicial do aplicativo CardioCheck",
      width: 432,
      height: 961,
      kind: "mobile",
    },
    gallery: [
      {
        src: "/projetos/cardiocheck-app-2.png",
        alt: "Tela do aplicativo CardioCheck",
        width: 432,
        height: 961,
        kind: "mobile",
      },
    ],
    links: {
      repo: gh("DSM-P5-G02-2025-1"),
      demo: "https://youtu.be/Yk_RNUFOG6M",
      demoLabel: "Assistir ao vídeo",
    },
  },
  {
    slug: "ba-manicure",
    name: "BA Manicure",
    tagline: "Secretária virtual: agendamento pelo WhatsApp com painel administrativo",
    category: "Automação",
    focus: ["Automação", "Integração", "Desenvolvimento"],
    featured: true,
    year: "2026",
    context: "Projeto pessoal",
    summary:
      "Sistema de agendamento para uma manicure autônoma: site público, atendimento automatizado pelo WhatsApp, lembretes e painel de gestão em um único projeto Next.js.",
    problem:
      "Profissionais autônomos perdem tempo e clientes respondendo mensagens para marcar, confirmar e remarcar horários. O sistema assume esse atendimento e impede reservas duplicadas no mesmo horário.",
    participation: "Projeto pessoal, publicado no meu GitHub e em produção na Vercel.",
    features: [
      "Fluxo conversacional no WhatsApp para agendar, consultar e cancelar",
      "Integração com a WhatsApp Business Cloud API, com verificação de assinatura do webhook",
      "Motor de disponibilidade: expediente, almoço, bloqueios, datas especiais e antecedência mínima",
      "Fila persistente de lembretes de 1h, 30min e 10min, sem duplicidade",
      "Painel com agenda, clientes, serviços, galeria e monitor do WhatsApp",
      "Testes automatizados das regras de negócio",
    ],
    architecture: [
      {
        title: "Aplicação",
        text: "Next.js (App Router), React, TypeScript e Tailwind CSS: site, painel e API no mesmo projeto.",
      },
      {
        title: "Banco de dados",
        text: "PostgreSQL com SQL parametrizado, sem ORM. Em desenvolvimento e nos testes usa PGlite, um PostgreSQL embutido.",
      },
      {
        title: "Regras críticas no banco",
        text: "Uma exclusion constraint impede agendamentos sobrepostos mesmo com confirmações simultâneas, e os lembretes são reivindicados com FOR UPDATE SKIP LOCKED.",
      },
      {
        title: "Segurança",
        text: "Autenticação própria com scrypt, sessão em cookie httpOnly e bloqueio após tentativas erradas.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp Cloud API"],
    links: {
      repo: gh("BAManicure"),
      demo: "https://ba-manicure.vercel.app",
      demoLabel: "Ver site",
    },
  },
  {
    slug: "data-weather",
    name: "Data Weather",
    tagline: "Estatísticas de temperatura e umidade a partir de sensores DHT11",
    category: "Integração de sistemas",
    focus: ["Integração", "Desenvolvimento"],
    featured: true,
    year: "2024",
    context: "Projeto Interdisciplinar · 4º semestre · FATEC Franca",
    summary:
      "Conjunto de APIs, aplicação web e app mobile que coleta leituras de sensores DHT11 e as transforma em estatísticas, gráficos e projeções.",
    problem:
      "Dados brutos de sensores dizem pouco sozinhos. O projeto adiciona uma camada que calcula médias, medianas, desvios, mínimos e máximos por período e entrega tudo em uma interface única.",
    participation: "Projeto desenvolvido em equipe de quatro integrantes.",
    features: [
      "API de estatísticas que orquestra a API de sensores e a API de usuários",
      "Estatísticas por período e médias diárias de temperatura e umidade",
      "Autenticação com JWT repassada entre os serviços",
      "Dashboard web em React",
      "App mobile em React Native com gráficos e projeções",
      "Documentação OpenAPI e relatório em Power BI",
    ],
    architecture: [
      {
        title: "API de sensores",
        text: "Fornece as leituras brutas do DHT11, históricas e atuais.",
      },
      {
        title: "API de estatísticas",
        text: "Node.js. Consome as outras duas APIs, calcula as estatísticas e expõe uma interface unificada para os clientes.",
      },
      {
        title: "Clientes",
        text: "Aplicação web em React e app Android em React Native com Expo.",
      },
    ],
    stack: ["Node.js", "React", "React Native", "Expo", "JWT", "OpenAPI", "Power BI"],
    cover: {
      src: "/projetos/dataweather-dashboard.png",
      alt: "Dashboard do app Data Weather com temperatura, umidade e recomendação",
      width: 622,
      height: 1281,
      kind: "mobile",
    },
    gallery: [
      {
        src: "/projetos/dataweather-temperatura.png",
        alt: "Tela de temperatura do app Data Weather",
        width: 624,
        height: 1287,
        kind: "mobile",
      },
    ],
    links: { repo: gh("PI-4-semestre-2024") },
  },
  {
    slug: "reservas-mensageria",
    name: "Reservas com Mensageria",
    tagline: "Reservas de hotel processadas de forma assíncrona com Pub/Sub",
    category: "Integração de sistemas",
    focus: ["Integração", "Desenvolvimento"],
    year: "2025",
    context: "Computação em Nuvem II · FATEC Franca",
    summary:
      "Sistema de reservas de hotéis em que uma API em NestJS e um consumidor em Java se comunicam por mensageria.",
    problem:
      "Exercitar a integração entre serviços escritos em linguagens diferentes, com processamento assíncrono e proteção contra mensagens duplicadas.",
    participation: "Trabalho em grupo da disciplina de Computação em Nuvem II.",
    features: [
      "API de reservas em NestJS com Sequelize e documentação Swagger",
      "Consumidor em Java inscrito no Google Cloud Pub/Sub",
      "Persistência das reservas em PostgreSQL",
      "Tratamento de mensagens com identificador duplicado",
      "Modelo de dados com clientes, hotéis, quartos, reservas e pagamentos",
    ],
    architecture: [
      { title: "API", text: "NestJS e TypeScript, com migrations e modelos em Sequelize." },
      {
        title: "Consumidor",
        text: "Aplicação Java que recebe as mensagens do Pub/Sub e grava as reservas no banco.",
      },
    ],
    stack: ["NestJS", "TypeScript", "Java", "Google Cloud Pub/Sub", "PostgreSQL", "Swagger"],
    cover: {
      src: "/projetos/reservas-der.png",
      alt: "Diagrama entidade-relacionamento do sistema de reservas",
      width: 3827,
      height: 2169,
      kind: "diagram",
    },
    links: { repo: gh("api_mensageria_ts") },
  },
  {
    slug: "primary-replica",
    name: "MySQL Primary-Replica",
    tagline: "Separação de leitura e escrita com replicação em Docker",
    category: "Arquitetura de dados",
    focus: ["Integração", "Desenvolvimento"],
    year: "2025",
    context: "Computação em Nuvem II · FATEC Franca",
    summary:
      "Demonstração de arquitetura Primary-Replica: escritas vão para o banco primário e leituras para a réplica, tudo orquestrado com Docker Compose.",
    problem:
      "Mostrar na prática como separar leitura e escrita para ganhar desempenho e escala em uma aplicação Node.js.",
    participation: "Trabalho em grupo de quatro integrantes.",
    features: [
      "Dois containers MySQL com replicação configurada por script",
      "Réplica em modo somente leitura",
      "Pools de conexão separados para escrita e leitura",
      "API Express com rotas de produtos",
      "Script de demonstração do atraso de replicação",
    ],
    architecture: [
      { title: "Infraestrutura", text: "Docker Compose com serviços primary, replica e um serviço temporário de configuração." },
      { title: "Aplicação", text: "Node.js e TypeScript: INSERT no primary, SELECT na réplica." },
    ],
    stack: ["Node.js", "TypeScript", "MySQL", "Docker Compose", "Express"],
    links: { repo: gh("BancoDadosGerencial") },
  },
  {
    slug: "log-control",
    name: "Log Control",
    tagline: "Controle de manutenções de veículos",
    category: "Gestão de produto",
    focus: ["Desenvolvimento"],
    year: "2024",
    context: "Projeto Interdisciplinar · 3º semestre · FATEC Franca",
    summary:
      "Aplicação CRUD para registrar e acompanhar manutenções realizadas em veículos.",
    problem: "Centralizar o histórico de manutenções de uma frota em um só lugar.",
    participation: "Atuei como Product Owner do grupo.",
    features: ["Listagem, criação, atualização e exclusão de manutenções", "Front-end em React e API em Node.js", "Persistência em MongoDB"],
    architecture: [{ title: "Aplicação", text: "React no front-end, Node.js no back-end e MongoDB como banco de dados." }],
    stack: ["React", "Node.js", "MongoDB"],
    links: {
      repo: gh("DSM-G04-PI3-2024-1"),
      extra: [{ label: "Documentação no Behance", href: "https://www.behance.net/gallery/200899593/Log-Control" }],
    },
  },
  {
    slug: "cypress-swag-labs",
    name: "Cypress · Swag Labs",
    tagline: "Cenários E2E de login escritos em um hackathon de QA",
    category: "Qualidade de software",
    focus: ["QA", "Automação"],
    year: "2023",
    context: "Hackathon de QA",
    summary:
      "Suíte de testes end-to-end em Cypress sobre o site de demonstração Swag Labs.",
    problem: "Praticar automação de testes de interface cobrindo caminhos felizes e de erro em um fluxo de login.",
    participation: "Repositório pessoal com os testes que escrevi durante o hackathon.",
    features: [
      "Validação da tela de login",
      "Login com usuário padrão, problemático e com falha de desempenho",
      "Verificação da mensagem de erro para usuário bloqueado",
      "Gravação em vídeo das execuções",
    ],
    architecture: [{ title: "Testes", text: "Specs em JavaScript executadas com o Cypress." }],
    stack: ["Cypress", "JavaScript"],
    links: { repo: gh("Hackathon-Cypress-QAs") },
  },
];

export const moreRepos = [
  {
    name: "To-Do API",
    text: "CRUD de tarefas em Java Spring Boot e PostgreSQL, com testes unitários e de integração.",
    href: gh("TODO_JAVA_SPRING"),
  },
  {
    name: "Employee CRUD API",
    text: "API em Node.js, Express e MongoDB documentada com Swagger.",
    href: gh("employee-crud-api"),
  },
  {
    name: "NetCar",
    text: "Agendamento para oficina mecânica em Vue e Bootstrap. Projeto Interdisciplinar do 2º semestre.",
    href: gh("projetoPiFatec-2023-2"),
  },
  {
    name: "Site de casamento",
    text: "Site em Next.js para confirmação de presença no meu casamento.",
    href: "https://kevin-carol.vercel.app",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

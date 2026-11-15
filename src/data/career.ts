// Fonte: currículo (PDF). Datas e cargos conforme o documento.

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  context?: string;
  description: string;
  responsibilities: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "TOTVS",
    role: "Analista de Qualidade Pleno",
    period: "Ago 2025 — Atual",
    current: true,
    description:
      "Atuo na qualidade de sistemas multiplataforma, do refinamento das histórias ao reporte dos resultados, dentro dos ritos ágeis do time.",
    responsibilities: [
      "Refinamento, planejamento e participação nos ritos ágeis",
      "Avaliação de requisitos e verificação das especificações de sistemas",
      "Definição das estratégias de teste",
      "Acompanhamento e análise dos casos de teste executados",
      "Monitoramento e reporte de resultados",
    ],
    tags: ["Estratégia de testes", "Análise de requisitos", "Metodologias ágeis"],
  },
  {
    company: "MazzaFC Tecnologia da Informação",
    role: "Analista de Qualidade de Software",
    period: "Abr 2023 — Ago 2025",
    context: "Alocado na Stone/Linx",
    description:
      "Responsável pela automação de testes de interface e de API em produtos da Stone/Linx, além do planejamento e da execução dos testes.",
    responsibilities: [
      "Automação de testes com Cypress, Playwright e Selenium",
      "Validação de APIs com Swagger",
      "Planejamento e execução de testes",
      "Avaliação de requisitos e definição de estratégias de teste",
      "Monitoramento e reporte de resultados",
    ],
    tags: ["Cypress", "Playwright", "Selenium", "Swagger"],
  },
  {
    company: "Compass",
    role: "Estagiário em Programação React",
    period: "Mai 2024 — Ago 2024",
    description:
      "Programa de estágio remoto com foco em React: componentes, interfaces interativas, usabilidade e design responsivo.",
    responsibilities: [
      "Criação de componentes em React",
      "Desenvolvimento de interface interativa e responsiva",
      "Trabalho remoto em equipe com práticas ágeis",
    ],
    tags: ["React", "JavaScript", "Design responsivo"],
  },
  {
    company: "MazzaFC Tecnologia da Informação",
    role: "Desenvolvedor de Sistemas Web",
    period: "Fev 2022 — Abr 2023",
    description:
      "Único responsável pela manutenção de sites e aplicações e pelo desenvolvimento de novos sistemas web.",
    responsibilities: [
      "Desenvolvimento de sistemas web em PHP e JavaScript",
      "Manutenção de sites e aplicações",
      "Monitoramento de desempenho e intervenção quando necessário",
      "Criação de novos softwares conforme as especificações dos projetos",
    ],
    tags: ["PHP", "JavaScript", "MySQL"],
  },
  {
    company: "MazzaFC Tecnologia da Informação",
    role: "Líder de Qualidade de Software",
    period: "Fev 2021 — Fev 2022",
    description:
      "Liderança do time de qualidade, do treinamento dos analistas ao contato com clientes e à divisão dos projetos.",
    responsibilities: [
      "Treinamento e acompanhamento dos analistas",
      "Contato com clientes e divisão de projetos",
      "Avaliação de requisitos e planejamento de testes",
      "Execução e monitoramento dos testes",
      "Elaboração da documentação dos sistemas",
    ],
    tags: ["Liderança", "Planejamento de testes", "Documentação"],
  },
  {
    company: "MazzaFC Tecnologia da Informação",
    role: "Analista de Qualidade de Software",
    period: "Ago 2020 — Fev 2021",
    description: "Primeira atuação em qualidade de software, cobrindo o ciclo completo de testes.",
    responsibilities: [
      "Avaliação de requisitos de teste",
      "Definição de estratégia e planejamento",
      "Execução, monitoramento e reporte",
    ],
    tags: ["Testes manuais", "Análise de requisitos"],
  },
  {
    company: "Franca Virtual Informática",
    role: "Técnico em Informática",
    period: "Abr 2013 — Ago 2020",
    description:
      "Atendimento de TI: configuração, instalação, reparo e diagnóstico de software e hardware.",
    responsibilities: [
      "Diagnóstico e reparo de desktops, notebooks, impressoras e scanners",
      "Instalação e configuração de software e aplicativos",
      "Configuração de switches",
    ],
    tags: ["Hardware", "Suporte técnico", "Redes"],
  },
];

export type Education = {
  institution: string;
  short: string;
  course: string;
  level: string;
  status: "Concluído" | "Em andamento";
  year?: string;
};

// Status e anos conforme o currículo. Não marcar como concluído o que ainda está em andamento.
export const education: Education[] = [
  {
    institution: "Universidade Federal de São Paulo",
    short: "UNIFESP",
    course: "Informática na Saúde",
    level: "Especialização",
    status: "Concluído",
    year: "2025",
  },
  {
    institution: "Faculdade de Tecnologia de Franca",
    short: "FATEC",
    course: "Desenvolvimento de Software Multiplataforma",
    level: "Graduação",
    status: "Em andamento",
  },
  {
    institution: "Faculdade Anhanguera Educacional",
    short: "Anhanguera",
    course: "Análise e Desenvolvimento de Sistemas",
    level: "Graduação",
    status: "Concluído",
    year: "2021",
  },
  {
    institution: "Escola Técnica Estadual Dr. Júlio Cardoso",
    short: "ETEC",
    course: "Eletrônica",
    level: "Curso técnico",
    status: "Concluído",
    year: "2019",
  },
];

export const languages = [{ name: "Inglês", level: "Básico" }];

export type LearningGroup = {
  category: string;
  items: { name: string; year?: string; note?: string }[];
};

// Cursos complementares registrados no portfólio anterior e formações do currículo.
// Para incluir novas especializações (ex.: pós-graduações em andamento), adicione um item
// com `note: "Em andamento"` na categoria correspondente.
export const learning: LearningGroup[] = [
  {
    category: "Qualidade de Software",
    items: [{ name: "Introdução ao Teste de Software", year: "2021" }],
  },
  {
    category: "Desenvolvimento de Sistemas",
    items: [
      { name: "Programação em PHP", year: "2022" },
      { name: "PHP/Laravel — Nível I", year: "2022" },
      { name: "PHP/Laravel — Níveis II e III", year: "2022" },
      { name: "Introdução à Linguagem Python", year: "2021" },
      { name: "Estruturas de Dados em Python", year: "2021" },
    ],
  },
  {
    category: "Engenharia de Software",
    items: [
      { name: "Programa de estágio em React — Compass", year: "2024" },
      { name: "Projetos Interdisciplinares — FATEC", note: "2º ao 6º semestre" },
    ],
  },
  {
    category: "Dados e Inteligência Artificial",
    items: [
      { name: "Introdução à Análise de Dados com Python", year: "2021" },
      { name: "Especialização em Informática na Saúde — UNIFESP", year: "2025" },
    ],
  },
  {
    category: "Gestão e Inovação",
    items: [
      { name: "Empreendedorismo e Inovação", year: "2023" },
      { name: "Canvas: desenhando seu projeto como negócio", year: "2020" },
      { name: "Processo da Criatividade", year: "2020" },
    ],
  },
];

export type StackGroup = {
  category: string;
  // primary: uso profissional comprovado no currículo
  // secondary: repertório complementar e projetos acadêmicos/pessoais
  primary: string[];
  secondary: string[];
};

export const stack: StackGroup[] = [
  {
    category: "Qualidade de Software",
    primary: ["Cypress", "Playwright", "Selenium", "Swagger"],
    secondary: ["Postman", "Robot Framework", "TestComplete"],
  },
  {
    category: "Desenvolvimento",
    primary: ["JavaScript", "PHP", "React", "SQL", "HTML", "CSS"],
    secondary: ["TypeScript", "Node.js", "Next.js", "Laravel"],
  },
  {
    category: "Banco de Dados",
    primary: ["MySQL"],
    secondary: ["PostgreSQL", "SQLite", "Firebird", "MongoDB"],
  },
  {
    category: "Ferramentas e Processos",
    primary: ["Jira", "Trello", "ClickUp", "Git", "GitHub", "Metodologias ágeis"],
    secondary: ["Docker"],
  },
  {
    category: "IA e Automação",
    primary: ["Integrações e APIs", "Automação de processos"],
    secondary: ["Ferramentas de IA", "Python + scikit-learn", "Mensageria (NATS, Pub/Sub)"],
  },
];

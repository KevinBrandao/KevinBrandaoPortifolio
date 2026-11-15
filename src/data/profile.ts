// Fonte: currículo (PDF) e portfólio anterior. Edite aqui para atualizar o site inteiro.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Kevin Brandão",
  fullName: "Kevin de Almeida Brandão",
  roles: ["Quality Assurance", "Software Engineering", "Innovation"],
  headline: "Profissional de Tecnologia",
  currentRole: "Analista de Qualidade Pleno na TOTVS",
  location: "Franca, SP · Brasil",
  email: "kevinmsbrandao@gmail.com",
  whatsapp: "5516991746516",
  links: {
    linkedin: "https://www.linkedin.com/in/kevin-de-almeida-brand%C3%A3o-903b16138",
    github: "https://github.com/KevinBrandao",
  },
  resumePdf: "/kevin-brandao-curriculo.pdf",
  photo: "/kevin-brandao.jpg",
  description:
    "Portfólio de Kevin Brandão, Analista de Qualidade de Software na TOTVS. Experiência em automação de testes, desenvolvimento web e projetos com Inteligência Artificial.",
  intro:
    "Sou Analista de Qualidade Pleno na TOTVS. Comecei no suporte técnico, passei pelo desenvolvimento web e encontrei na qualidade de software o ponto em que código, regra de negócio e experiência de quem usa se encontram. Hoje investigo como a Inteligência Artificial pode ampliar esse trabalho.",
} as const;

export const whatsappUrl = `https://wa.me/${profile.whatsapp}`;

// Indicadores calculados a partir das datas do currículo (referência: novembro/2026).
export const indicators = [
  { value: "6+", label: "anos em software", detail: "QA e desenvolvimento desde 2020" },
  { value: "5+", label: "anos em qualidade", detail: "analista, líder e automação" },
  { value: "13", label: "anos em tecnologia", detail: "do suporte técnico à engenharia" },
  { value: "3", label: "frameworks de automação", detail: "Cypress, Playwright e Selenium" },
] as const;

export const about = {
  paragraphs: [
    "Minha relação com tecnologia começou em 2013, na bancada de uma assistência técnica: formatar, diagnosticar, consertar. Foram sete anos entendendo como as coisas quebram, e isso moldou o jeito como olho para software até hoje.",
    "Em 2020 entrei na MazzaFC como Analista de Qualidade. Em cinco anos na empresa liderei o time de QA, assumi sozinho a manutenção e o desenvolvimento de sistemas web em PHP e JavaScript e, de volta à qualidade, atuei alocado na Stone/Linx automatizando testes com Cypress, Playwright e Selenium.",
    "Desde agosto de 2025 sou Analista de Qualidade Pleno na TOTVS, onde participo do refinamento e do planejamento, defino estratégias de teste e acompanho os resultados dentro dos ritos ágeis do time.",
    "Ter estado dos dois lados, escrevendo código e questionando código, me ensinou a ler regra de negócio antes de ler tela. A especialização em Informática na Saúde pela UNIFESP e os projetos acadêmicos com Machine Learning apontam para onde quero ir: arquitetura de software, automação e Inteligência Artificial aplicada a problemas reais.",
  ],
  highlights: [
    {
      title: "Visão dos dois lados",
      text: "Já fui o desenvolvedor responsável pelo sistema e o analista responsável por questioná-lo. Isso encurta a conversa entre QA e desenvolvimento.",
    },
    {
      title: "Regra de negócio primeiro",
      text: "Experiência com sistemas empresariais de varejo, meios de pagamento e gestão, além de formação voltada à área da saúde.",
    },
    {
      title: "Automação de testes",
      text: "Testes automatizados de interface e de API com Cypress, Playwright, Selenium e Swagger em contexto profissional.",
    },
    {
      title: "Liderança técnica",
      text: "Liderei um time de qualidade: treinamento de analistas, divisão de projetos, contato com clientes e documentação.",
    },
  ],
} as const;

import { v4 as uuidv4 } from 'uuid'; // Para gerar UUIDs aleatórios

const questions = [
  {
    id: uuidv4(),
    question: "Quais são os primeiros passos a serem tomados após sofrer um acidente de trânsito com vítimas?",
    answer: "Primeiramente, garanta a segurança de todos os envolvidos e sinalize o local para evitar novos acidentes. Em seguida, acione os serviços de emergência (SAMU/Bombeiros) se houver feridos e a autoridade policial (Polícia Militar ou Rodoviária) para registrar o Boletim de Ocorrência (BO). É crucial coletar o máximo de informações possíveis, como dados dos outros veículos e condutores envolvidos, nomes e contatos de testemunhas, e registrar fotos/vídeos da cena do acidente e dos danos. Não discuta culpa no local e procure um advogado para orientação sobre os próximos passos legais, como acionar o seguro DPVAT e apurar responsabilidades civis e criminais."
  },
  {
    id: uuidv4(),
    question: "Fui demitido sem justa causa. Quais são meus direitos trabalhistas?",
    answer: "Ao ser demitido sem justa causa, o trabalhador tem direito a diversas verbas rescisórias, incluindo: saldo de salário (dias trabalhados no mês da rescisão), aviso prévio (trabalhado ou indenizado), férias vencidas e proporcionais acrescidas de 1/3 constitucional, 13º salário proporcional, saque do FGTS (Fundo de Garantia por Tempo de Serviço) e a multa de 40% sobre o saldo do FGTS. Além disso, dependendo do tempo de serviço e outros critérios, pode ter direito ao seguro-desemprego. É recomendável buscar a assessoria de um advogado trabalhista para conferir todos os cálculos e garantir o recebimento integral dos seus direitos."
  },
  {
    id: uuidv4(),
    question: "Como funciona o processo de divórcio consensual em cartório?",
    answer: "O divórcio consensual em cartório (extrajudicial) é uma forma mais rápida e menos burocrática de dissolver o casamento. Para que seja possível, o casal deve estar de acordo com todos os termos do divórcio (partilha de bens, pensão alimentícia, etc.) e não pode ter filhos menores ou incapazes. É obrigatória a presença de um advogado, que pode ser o mesmo para ambas as partes. Os documentos necessários geralmente incluem certidão de casamento atualizada, documentos pessoais dos cônjuges, pacto antenupcial (se houver) e documentos dos bens a serem partilhados. Após a conferência da documentação e a lavratura da escritura pública de divórcio pelo tabelião, o casamento é oficialmente dissolvido."
  },
  {
    id: uuidv4(),
    question: "O que é usucapião e quais são os requisitos básicos para solicitar?",
    answer: "Usucapião é uma forma de adquirir a propriedade de um bem móvel ou imóvel pelo uso contínuo e incontestado durante um certo período de tempo, como se fosse o verdadeiro dono. Os requisitos básicos variam conforme a modalidade de usucapião (extraordinária, ordinária, especial urbana, especial rural, etc.), mas geralmente incluem: posse mansa, pacífica e ininterrupta; 'animus domini' (intenção de ser dono); e decurso de um prazo legal específico (que pode variar de 2 a 15 anos, ou mais, dependendo do caso e da existência de justo título e boa-fé). É fundamental consultar um advogado para analisar o caso concreto e verificar qual modalidade de usucapião se aplica e quais os documentos necessários para ingressar com a ação."
  },
  {
    id: uuidv4(),
    question: "Quais são as consequências de não pagar pensão alimentícia?",
    answer: "O não pagamento da pensão alimentícia pode acarretar sérias consequências para o devedor. Dentre elas, destacam-se: execução judicial dos valores devidos, com possibilidade de penhora de bens (dinheiro em conta, veículos, imóveis); protesto do nome do devedor em órgãos de proteção ao crédito (SPC/Serasa); inclusão do nome no cadastro de devedores de alimentos; e, em último caso, a prisão civil do devedor, que pode durar de 1 a 3 meses em regime fechado. É importante ressaltar que a prisão não quita a dívida, apenas serve como medida coercitiva para o pagamento. Se houver dificuldade em pagar o valor estipulado, o devedor deve buscar a via judicial para solicitar uma revisão da pensão."
  }
];

export { questions }


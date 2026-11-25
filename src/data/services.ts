export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  problemSolved: string;
  expectedBenefit: string;
  icon: string;
  whatsappMessage: string;
}

export interface ServiceCategory {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  ctaLabel: string;
  ctaMessage: string;
  services: ServiceItem[];
}

export const HOME_SERVICE_CARDS = [
  {
    id: 'montagem',
    title: 'Montagem de computadores',
    description:
      'Projetos sob medida para jogos, trabalho, estudos ou produtividade, com organização interna e escolha orientada de peças.',
    href: '/servicos/#montagem-e-personalizacao',
    imageKey: 'montagem',
    whatsappMessage:
      'Olá! Vim pelo site da RECUPERATECH e gostaria de solicitar um orçamento para montagem de computador.',
  },
  {
    id: 'manutencao-pc',
    title: 'Manutenção de computadores',
    description:
      'Limpeza interna, troca de pasta térmica, diagnóstico técnico e substituição de componentes para manter o PC estável.',
    href: '/servicos/#manutencao-preventiva',
    imageKey: 'manutencao',
    whatsappMessage:
      'Olá! Gostaria de informações sobre manutenção de computador.',
  },
  {
    id: 'upgrade',
    title: 'Upgrade de hardware',
    description:
      'Instalação de SSD NVMe, expansão de memória RAM, placa de vídeo e fonte para dar fôlego novo ao equipamento.',
    href: '/servicos/#upgrades-de-hardware',
    imageKey: 'upgrade',
    whatsappMessage:
      'Olá! Quero melhorar o desempenho do meu computador e gostaria de consultar as opções de upgrade.',
  },
  {
    id: 'notebooks',
    title: 'Manutenção de notebooks',
    description:
      'Troca de tela, bateria, carregador, limpeza interna e reparo de carcaça e dobradiças com avaliação técnica.',
    href: '/servicos/#manutencao-de-notebooks',
    imageKey: 'notebook',
    whatsappMessage:
      'Olá! Preciso de assistência para meu notebook e gostaria de solicitar uma avaliação.',
  },
  {
    id: 'formatacao',
    title: 'Formatação e otimização',
    description:
      'Instalação limpa do sistema operacional, remoção de vírus, organização de programas e pacotes Office com licença legítima.',
    href: '/servicos/#software-e-otimizacao',
    imageKey: 'custom',
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento para formatação e otimização de computador.',
  },
  {
    id: 'backup',
    title: 'Backup e recuperação de dados',
    description:
      'Cópia segura de arquivos, grandes volumes e diagnóstico de armazenamento para lidar com falhas e perdas.',
    href: '/servicos/#backup-e-recuperacao-de-dados',
    imageKey: 'upgrade',
    whatsappMessage:
      'Olá! Gostaria de informações sobre backup e recuperação de dados.',
  },
] as const;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'montagem-e-personalizacao',
    code: 'CATEGORIA A',
    title: 'Montagem e Personalização',
    shortTitle: 'Montagem e Personalização',
    summary:
      'Montagem técnica completa com foco em compatibilidade, fluxo de ar, organização de cabos e acabamento profissional.',
    ctaLabel: 'Solicitar orçamento de montagem',
    ctaMessage:
      'Olá! Vim pelo site da RECUPERATECH e gostaria de solicitar um orçamento para montagem de computador.',
    services: [
      {
        id: 'montagem-pc-completo',
        name: 'Montagem de PC completo',
        description:
          'Montagem integral de computador do zero, com verificação de compatibilidade, instalação de componentes e testes iniciais.',
        problemSolved: 'Risco de incompatibilidade entre peças, erros de encaixe e montagem sem padrão técnico.',
        expectedBenefit: 'Equipamento montado com segurança, estabilidade e pronto para uso.',
        icon: 'cpu',
        whatsappMessage:
          'Olá! Gostaria de solicitar um orçamento para montagem de PC completo.',
      },
      {
        id: 'setup-gamer',
        name: 'Setup personalizado gamer',
        description:
          'Configuração voltada para jogos e alto desempenho gráfico, considerando refrigeração, fonte adequada e estética.',
        problemSolved: 'Gargalos entre processador, placa de vídeo e refrigeração em máquinas para jogos.',
        expectedBenefit: 'Conjunto equilibrado para rodar jogos com estabilidade térmica e visual limpo.',
        icon: 'gamepad-2',
        whatsappMessage:
          'Olá! Quero montar um setup personalizado gamer e gostaria de um orçamento.',
      },
      {
        id: 'setup-escritorio',
        name: 'Setup para escritório',
        description:
          'Montagem de estações de trabalho para rotinas administrativas, sistemas corporativos, estudos e produtividade diária.',
        problemSolved: 'Computadores lentos ou superdimensionados que não atendem à rotina profissional.',
        expectedBenefit: 'Máquina ágil, silenciosa e alinhada ao orçamento e às tarefas do dia a dia.',
        icon: 'briefcase',
        whatsappMessage:
          'Olá! Preciso de um orçamento para montagem de computador para escritório ou produtividade.',
      },
      {
        id: 'montagem-water-cooler-rgb',
        name: 'Montagem com water cooler e RGB',
        description:
          'Instalação de sistemas de refrigeração líquida AIO e controladoras de iluminação RGB com configuração organizada.',
        problemSolved: 'Aquecimento excessivo do processador e cabeamento desorganizado em sistemas iluminados.',
        expectedBenefit: 'Refrigeração eficiente aliada a acabamento estético limpo.',
        icon: 'fan',
        whatsappMessage:
          'Olá! Gostaria de solicitar montagem com water cooler e iluminação RGB.',
      },
      {
        id: 'troca-de-gabinete',
        name: 'Troca de gabinete',
        description:
          'Transferência completa dos componentes para um novo gabinete com melhor ventilação, espaço interno ou estética.',
        problemSolved: 'Gabinetes apertados, sem fluxo de ar adequado ou com estrutura danificada.',
        expectedBenefit: 'Melhor circulação de ar e espaço para futuros upgrades.',
        icon: 'box',
        whatsappMessage:
          'Olá! Gostaria de fazer a troca de gabinete do meu computador.',
      },
      {
        id: 'organizacao-de-cabos',
        name: 'Organização de cabos',
        description:
          'Reorganização completa do cabeamento interno (cable management) para melhorar fluxo de ar e acesso técnico.',
        problemSolved: 'Cabos soltos obstruindo ventoinhas e dificultando manutenções futuras.',
        expectedBenefit: 'Interior mais limpo, ventilação otimizada e visual profissional.',
        icon: 'cable',
        whatsappMessage:
          'Olá! Gostaria de solicitar serviço de organização de cabos no meu PC.',
      },
    ],
  },
  {
    id: 'upgrades-de-hardware',
    code: 'CATEGORIA B',
    title: 'Upgrades de Hardware',
    shortTitle: 'Upgrades de Hardware',
    summary:
      'Atualizações estratégicas de componentes para ampliar a vida útil e a capacidade de resposta do seu computador ou notebook.',
    ctaLabel: 'Quero fazer um upgrade',
    ctaMessage:
      'Olá! Quero melhorar o desempenho do meu computador e gostaria de consultar as opções de upgrade.',
    services: [
      {
        id: 'upgrade-hd-ssd',
        name: 'Upgrade de armazenamento HD para SSD',
        description:
          'Substituição de disco rígido mecânico por unidade SSD, com preparação do sistema para maior agilidade.',
        problemSolved: 'Inicialização demorada, travamentos constantes e lentidão ao abrir programas.',
        expectedBenefit: 'Respostas muito mais rápidas na inicialização e no uso cotidiano.',
        icon: 'hard-drive',
        whatsappMessage:
          'Olá! Gostaria de consultar o upgrade de HD para SSD no meu equipamento.',
      },
      {
        id: 'instalacao-ssd-nvme',
        name: 'Instalação de SSD NVMe',
        description:
          'Instalação física e configuração de unidades SSD M.2 NVMe em placas-mãe e notebooks compatíveis.',
        problemSolved: 'Limitação de velocidade em transferências de arquivos e carregamento de aplicativos pesados.',
        expectedBenefit: 'Leitura e gravação de alta velocidade conforme a geração suportada pelo hardware.',
        icon: 'zap',
        whatsappMessage:
          'Olá! Quero instalar um SSD NVMe e gostaria de verificar compatibilidade e orçamento.',
      },
      {
        id: 'upgrade-memoria-ram',
        name: 'Upgrade de memória RAM',
        description:
          'Expansão da capacidade de memória respeitando frequência, latência e compatibilidade da placa-mãe.',
        problemSolved: 'Engasgos ao trabalhar com várias abas, planilhas, edição ou jogos atuais.',
        expectedBenefit: 'Multitarefa mais fluida e menor uso de memória virtual em disco.',
        icon: 'memory-stick',
        whatsappMessage:
          'Olá! Gostaria de fazer upgrade de memória RAM no meu computador ou notebook.',
      },
      {
        id: 'upgrade-placa-video',
        name: 'Upgrade de placa de vídeo',
        description:
          'Instalação de GPU dedicada com verificação prévia de espaço no gabinete, alimentação da fonte e drivers.',
        problemSolved: 'Baixo desempenho gráfico em jogos, modelagem, edição de vídeo ou múltiplos monitores.',
        expectedBenefit: 'Maior capacidade gráfica com alimentação e refrigeração verificadas.',
        icon: 'monitor',
        whatsappMessage:
          'Olá! Gostaria de consultar um upgrade de placa de vídeo para o meu PC.',
      },
      {
        id: 'upgrade-fonte',
        name: 'Upgrade de fonte',
        description:
          'Substituição da fonte de alimentação por modelo dimensionado para a demanda energética real do sistema.',
        problemSolved: 'Desligamentos sob carga, ruídos elétricos ou falta de potência para novos componentes.',
        expectedBenefit: 'Fornecimento de energia mais estável e seguro para todo o hardware.',
        icon: 'plug-zap',
        whatsappMessage:
          'Olá! Preciso trocar ou fazer upgrade da fonte do meu computador.',
      },
      {
        id: 'substituicao-componentes',
        name: 'Substituição de componentes defeituosos',
        description:
          'Troca de peças com falha identificada em bancada, como placa-mãe, processador, ventoinhas ou módulos de memória.',
        problemSolved: 'Equipamento que não liga, reinicia sozinho ou apresenta falhas físicas de hardware.',
        expectedBenefit: 'Restabelecimento do funcionamento normal após avaliação técnica.',
        icon: 'wrench',
        whatsappMessage:
          'Olá! Acredito que uma peça do meu computador está com defeito e preciso de avaliação.',
      },
    ],
  },
  {
    id: 'manutencao-preventiva',
    code: 'CATEGORIA C',
    title: 'Manutenção Preventiva',
    shortTitle: 'Manutenção Preventiva',
    summary:
      'Cuidados periódicos essenciais para evitar superaquecimento, ruído excessivo e desgaste prematuro dos componentes.',
    ctaLabel: 'Meu computador precisa de manutenção',
    ctaMessage:
      'Olá! Gostaria de informações sobre manutenção preventiva e limpeza de computador.',
    services: [
      {
        id: 'limpeza-desktop',
        name: 'Limpeza interna completa de desktop',
        description:
          'Remoção cuidadosa de poeira e resíduos em ventoinhas, dissipadores, filtros, placa-mãe e gabinete.',
        problemSolved: 'Acúmulo de poeira que retém calor, aumenta ruídos e prejudica a ventilação.',
        expectedBenefit: 'Fluxo de ar restaurado e menor risco de superaquecimento.',
        icon: 'sparkles',
        whatsappMessage:
          'Olá! Gostaria de solicitar uma limpeza interna completa no meu desktop.',
      },
      {
        id: 'limpeza-notebook',
        name: 'Limpeza interna de notebook',
        description:
          'Desmontagem técnica do sistema de arrefecimento do notebook para limpeza de cooler, saídas de ar e placa.',
        problemSolved: 'Notebook esquentando muito, ventoinha barulhenta e queda de desempenho por temperatura.',
        expectedBenefit: 'Refrigeração mais eficiente e operação mais silenciosa.',
        icon: 'wind',
        whatsappMessage:
          'Olá! Meu notebook precisa de limpeza interna. Gostaria de um orçamento.',
      },
      {
        id: 'troca-pasta-termica',
        name: 'Troca de pasta térmica',
        description:
          'Remoção da pasta térmica ressecada e aplicação de composto térmico adequado em processador e/ou GPU.',
        problemSolved: 'Transferência térmica comprometida pelo ressecamento natural do material original.',
        expectedBenefit: 'Melhor dissipação de calor entre o chip e o dissipador.',
        icon: 'thermometer',
        whatsappMessage:
          'Olá! Gostaria de solicitar a troca de pasta térmica do meu equipamento.',
      },
      {
        id: 'pasta-termica-limpeza',
        name: 'Pasta térmica + limpeza completa',
        description:
          'Atendimento integrado unindo higienização interna completa do equipamento e renovação da pasta térmica.',
        problemSolved: 'Superaquecimento combinado com acúmulo severo de sujeira interna.',
        expectedBenefit: 'Revisão térmica completa para manter estabilidade e preservar componentes.',
        icon: 'shield-check',
        whatsappMessage:
          'Olá! Quero solicitar o serviço completo de limpeza interna + troca de pasta térmica.',
      },
    ],
  },
  {
    id: 'software-e-otimizacao',
    code: 'CATEGORIA D',
    title: 'Software e Otimização',
    shortTitle: 'Software e Otimização',
    summary:
      'Instalação, limpeza e configuração de sistemas operacionais e aplicativos essenciais com foco em segurança e estabilidade.',
    ctaLabel: 'Conversar com um técnico',
    ctaMessage:
      'Olá! Preciso de suporte para formatação, otimização ou instalação de software.',
    services: [
      {
        id: 'formatacao-computadores',
        name: 'Formatação de computadores',
        description:
          'Reinstalação limpa do sistema operacional com atualização de drivers essenciais e configurações básicas.',
        problemSolved: 'Sistema corrompido, erros recorrentes, lentidão acumulada ou conflitos de software.',
        expectedBenefit: 'Ambiente limpo, estável e organizado para retomar o uso.',
        icon: 'refresh-cw',
        whatsappMessage:
          'Olá! Gostaria de solicitar orçamento para formatação de computador.',
      },
      {
        id: 'instalacao-sistemas',
        name: 'Instalação de sistemas operacionais',
        description:
          'Instalação e configuração inicial de sistemas operacionais compatíveis com o equipamento do cliente.',
        problemSolved: 'Máquina sem sistema operacional, após troca de SSD/HD ou com sistema incompatível.',
        expectedBenefit: 'Sistema configurado corretamente com os drivers necessários.',
        icon: 'hard-drive-download',
        whatsappMessage:
          'Olá! Preciso instalar o sistema operacional no meu computador ou notebook.',
      },
      {
        id: 'formatacao-com-backup',
        name: 'Formatação com backup',
        description:
          'Cópia prévia dos arquivos pessoais do usuário antes da formatação e restauração após a instalação do sistema.',
        problemSolved: 'Necessidade de formatar o equipamento sem perder documentos, fotos e arquivos importantes.',
        expectedBenefit: 'Sistema renovado preservando os dados indicados pelo cliente.',
        icon: 'folder-sync',
        whatsappMessage:
          'Olá! Preciso formatar meu equipamento com backup dos meus arquivos.',
      },
      {
        id: 'remocao-virus',
        name: 'Remoção de vírus e malwares',
        description:
          'Varredura técnica e remoção de softwares maliciosos, adwares e extensões indesejadas.',
        problemSolved: 'Janelas suspeitas, lentidão anormal, redirecionamentos e comportamentos inseguros.',
        expectedBenefit: 'Ambiente mais limpo e seguro após análise do sistema.',
        icon: 'shield-alert',
        whatsappMessage:
          'Olá! Suspeito de vírus ou malware no meu computador e preciso de ajuda.',
      },
      {
        id: 'otimizacao-sistema',
        name: 'Otimização do sistema',
        description:
          'Ajustes de inicialização, limpeza de arquivos temporários, verificação de drivers e serviços em segundo plano.',
        problemSolved: 'Consumo excessivo de recursos sem necessidade imediata de formatação.',
        expectedBenefit: 'Uso mais racional de memória e processamento no dia a dia.',
        icon: 'gauge',
        whatsappMessage:
          'Olá! Gostaria de otimizar o desempenho do sistema do meu computador.',
      },
      {
        id: 'instalacao-programas',
        name: 'Instalação e configuração de programas',
        description:
          'Instalação de aplicativos necessários à rotina de trabalho, estudos ou uso pessoal conforme demanda.',
        problemSolved: 'Dificuldade na instalação, configuração inicial ou compatibilidade de softwares.',
        expectedBenefit: 'Ferramentas configuradas e prontas para utilização.',
        icon: 'app-window',
        whatsappMessage:
          'Olá! Preciso de ajuda para instalar e configurar programas no meu computador.',
      },
      {
        id: 'instalacao-office',
        name: 'Instalação do pacote Office',
        description:
          'Instalação organizada dos aplicativos de produtividade do pacote Office no computador ou notebook.',
        problemSolved: 'Ausência de suíte de escritório configurada para textos, planilhas e apresentações.',
        expectedBenefit: 'Ferramentas de produtividade instaladas corretamente.',
        icon: 'file-text',
        whatsappMessage:
          'Olá! Gostaria de solicitar a instalação do pacote Office no meu equipamento.',
      },
      {
        id: 'ativacao-office-legitimo',
        name: 'Configuração e ativação do Microsoft Office com licenças legítimas',
        description:
          'Configuração e vinculação de licenças legítimas do Microsoft Office fornecidas ou adquiridas regularmente.',
        problemSolved: 'Erros de ativação, vinculação incorreta de conta ou avisos de licenciamento.',
        expectedBenefit: 'Suíte devidamente configurada e regularizada com licença original.',
        icon: 'badge-check',
        whatsappMessage:
          'Olá! Preciso configurar e ativar o Microsoft Office com licença legítima.',
      },
    ],
  },
  {
    id: 'manutencao-de-notebooks',
    code: 'CATEGORIA E',
    title: 'Manutenção de Notebooks',
    shortTitle: 'Manutenção de Notebooks',
    summary:
      'Reparos físicos, substituição de peças de desgaste e avaliação técnica especializada para notebooks.',
    ctaLabel: 'Preciso de ajuda com meu notebook',
    ctaMessage:
      'Olá! Preciso de assistência para meu notebook e gostaria de solicitar uma avaliação.',
    services: [
      {
        id: 'troca-de-tela',
        name: 'Troca de tela',
        description:
          'Substituição de painéis danificados, trincados, com manchas ou falhas de imagem por tela compatível.',
        problemSolved: 'Tela quebrada, listras verticais, tela apagada ou defeitos de backlight.',
        expectedBenefit: 'Visualização nítida e uso normal do notebook restaurados.',
        icon: 'laptop',
        whatsappMessage:
          'Olá! Preciso fazer a troca de tela do meu notebook e gostaria de um orçamento.',
      },
      {
        id: 'troca-de-bateria',
        name: 'Troca de bateria',
        description:
          'Substituição de bateria viciada, estufada ou que não segura carga por unidade compatível com o modelo.',
        problemSolved: 'Notebook que só funciona na tomada ou apresenta bateria inchada com risco à carcaça.',
        expectedBenefit: 'Autonomia portátil recuperada e maior segurança estrutural.',
        icon: 'battery-charging',
        whatsappMessage:
          'Olá! Preciso trocar a bateria do meu notebook. Como solicitar orçamento?',
      },
      {
        id: 'troca-fonte-carregadora',
        name: 'Troca de fonte carregadora',
        description:
          'Fornecimento ou substituição de fonte carregadora respeitando tensão, corrente e conector corretos.',
        problemSolved: 'Carregador com mau contato, cabo partido ou falha na alimentação do notebook.',
        expectedBenefit: 'Carregamento estável sem riscos elétricos à placa.',
        icon: 'plug',
        whatsappMessage:
          'Olá! Preciso de uma fonte carregadora compatível com o meu notebook.',
      },
      {
        id: 'reparo-de-carcaca',
        name: 'Reparo de carcaça',
        description:
          'Reconstrução e reforço de pontos de fixação e áreas danificadas da estrutura plástica ou metálica.',
        problemSolved: 'Carcaça abrindo ao movimentar a tampa, rachaduras e pontos de parafuso quebrados.',
        expectedBenefit: 'Estrutura firme protegendo a placa e os cabos internos.',
        icon: 'hammer',
        whatsappMessage:
          'Olá! A carcaça do meu notebook está danificada e preciso de avaliação.',
      },
      {
        id: 'reparo-de-dobradicas',
        name: 'Reparo de dobradiças',
        description:
          'Ajuste, lubrificação ou reparo de fixação das dobradiças da tampa para movimento suave e seguro.',
        problemSolved: 'Tampa dura ao abrir, estalos ou descolamento da moldura da tela.',
        expectedBenefit: 'Abertura e fechamento seguros sem forçar a tela ou a carcaça.',
        icon: 'panel-top-open',
        whatsappMessage:
          'Olá! Meu notebook está com problema nas dobradiças e precisa de reparo.',
      },
    ],
  },
  {
    id: 'backup-e-recuperacao-de-dados',
    code: 'CATEGORIA F',
    title: 'Backup e Recuperação de Dados',
    shortTitle: 'Backup e Recuperação',
    summary:
      'Proteção preventiva de arquivos e análise técnica de mídias de armazenamento. A recuperação de dados depende das condições do dispositivo e da avaliação técnica.',
    ctaLabel: 'Preciso recuperar meus arquivos',
    ctaMessage:
      'Olá! Gostaria de informações sobre backup e recuperação de dados.',
    services: [
      {
        id: 'backup-de-arquivos',
        name: 'Backup de arquivos',
        description:
          'Transferência organizada de documentos, fotos, vídeos e pastas importantes para mídia externa ou unidade segura.',
        problemSolved: 'Risco de perda de arquivos pessoais ou profissionais antes de reparos ou trocas.',
        expectedBenefit: 'Cópia de segurança acessível dos arquivos indicados.',
        icon: 'save',
        whatsappMessage:
          'Olá! Gostaria de solicitar um serviço de backup dos meus arquivos.',
      },
      {
        id: 'backup-grandes-volumes',
        name: 'Backup de grandes volumes',
        description:
          'Cópia estruturada de grandes quantidades de dados com verificação de integridade durante a transferência.',
        problemSolved: 'Dificuldade para mover acervos extensos de trabalho, mídia ou projetos.',
        expectedBenefit: 'Migração organizada de grandes volumes de arquivos.',
        icon: 'database',
        whatsappMessage:
          'Olá! Preciso realizar backup de um grande volume de dados.',
      },
      {
        id: 'recuperacao-de-dados',
        name: 'Recuperação de dados',
        description:
          'Tentativa técnica de resgate de arquivos em HDs, SSDs ou pendrives inacessíveis. Os resultados dependem das condições físicas e lógicas do dispositivo após avaliação técnica.',
        problemSolved: 'Arquivos apagados acidentalmente ou partições que deixaram de responder.',
        expectedBenefit: 'Avaliação transparente das possibilidades reais de resgate dos dados.',
        icon: 'file-search',
        whatsappMessage:
          'Olá! Preciso de avaliação para recuperação de dados em um dispositivo.',
      },
      {
        id: 'diagnostico-armazenamento',
        name: 'Diagnóstico de problemas relacionados ao armazenamento',
        description:
          'Testes de saúde, setores defeituosos e leitura S.M.A.R.T. em unidades de armazenamento.',
        problemSolved: 'Incerteza sobre a integridade de HDs e SSDs que apresentam lentidão ou erros de leitura.',
        expectedBenefit: 'Diagnóstico claro antes que ocorra falha definitiva da unidade.',
        icon: 'activity',
        whatsappMessage:
          'Olá! Gostaria de fazer um diagnóstico de armazenamento no meu HD ou SSD.',
      },
    ],
  },
  {
    id: 'diagnostico-e-suporte',
    code: 'CATEGORIA G',
    title: 'Diagnóstico e Suporte',
    shortTitle: 'Diagnóstico e Suporte',
    summary:
      'Investigação técnica precisa de falhas, configuração de ambiente e orientação especializada para aquisição de equipamentos.',
    ctaLabel: 'Conversar com um técnico',
    ctaMessage:
      'Olá! Gostaria de conversar com um técnico da RECUPERATECH para diagnóstico ou suporte.',
    services: [
      {
        id: 'diagnostico-tecnico-completo',
        name: 'Diagnóstico técnico completo',
        description:
          'Análise detalhada em bancada envolvendo hardware, temperaturas, energia, armazenamento e sistema.',
        problemSolved: 'Equipamento com falhas múltiplas ou causa desconhecida.',
        expectedBenefit: 'Laudo técnico claro para decisão segura sobre reparo ou upgrade.',
        icon: 'search-check',
        whatsappMessage:
          'Olá! Gostaria de solicitar um diagnóstico técnico completo para meu equipamento.',
      },
      {
        id: 'diagnostico-defeito-intermitente',
        name: 'Diagnóstico de defeito intermitente',
        description:
          'Testes prolongados e monitoramento para identificar falhas que acontecem apenas em momentos específicos.',
        problemSolved: 'Travamentos aleatórios, telas azuis esporádicas ou desligamentos sem padrão aparente.',
        expectedBenefit: 'Identificação mais precisa da origem do problema antes da troca de peças.',
        icon: 'stethoscope',
        whatsappMessage:
          'Olá! Meu computador apresenta um defeito intermitente e preciso de diagnóstico.',
      },
      {
        id: 'configuracao-rede-local',
        name: 'Configuração de rede local',
        description:
          'Configuração e ajuste de conectividade de computadores, compartilhamento em rede local e acesso à internet.',
        problemSolved: 'Computadores sem acesso estável à rede ou dificuldade no compartilhamento interno.',
        expectedBenefit: 'Conexão local funcional e organizada para o ambiente.',
        icon: 'network',
        whatsappMessage:
          'Olá! Preciso de suporte para configuração de rede local.',
      },
      {
        id: 'configuracao-impressoras',
        name: 'Configuração de impressoras',
        description:
          'Instalação de drivers, conexão USB ou em rede e testes de impressão nos equipamentos conectados.',
        problemSolved: 'Impressoras não reconhecidas, filas travadas ou erro de comunicação.',
        expectedBenefit: 'Impressora pronta para uso no computador ou na rede.',
        icon: 'printer',
        whatsappMessage:
          'Olá! Preciso de ajuda para instalar e configurar uma impressora.',
      },
      {
        id: 'suporte-remoto',
        name: 'Suporte remoto',
        description:
          'Atendimento técnico à distância para questões de software, configurações e orientações que não exijam bancada.',
        problemSolved: 'Necessidade de ajuste rápido de software ou configuração sem deslocamento imediato.',
        expectedBenefit: 'Agilidade no atendimento para demandas compatíveis com acesso remoto.',
        icon: 'headset',
        whatsappMessage:
          'Olá! Gostaria de saber se meu caso pode ser atendido por suporte remoto.',
      },
      {
        id: 'consultoria-compra',
        name: 'Consultoria para compra de computadores e componentes',
        description:
          'Orientação técnica imparcial para escolha de peças ou equipamentos alinhados ao seu uso e orçamento.',
        problemSolved: 'Dúvidas sobre compatibilidade, custo-benefício e risco de comprar peças inadequadas.',
        expectedBenefit: 'Decisão de compra mais segura e adequada à sua necessidade real.',
        icon: 'compass',
        whatsappMessage:
          'Olá! Gostaria de consultoria técnica para escolher um computador ou componentes.',
      },
    ],
  },
];

export const COMBINED_SOLUTIONS = [
  {
    title: 'Limpeza completa + troca de pasta térmica',
    description:
      'Higienização interna detalhada combinada com renovação térmica para reduzir aquecimento e preservar o hardware.',
    whatsappMessage:
      'Olá! Gostaria de solicitar orçamento para Limpeza completa + troca de pasta térmica.',
  },
  {
    title: 'Formatação + backup',
    description:
      'Cópia segura dos arquivos indicados seguida de reinstalação limpa do sistema operacional e drivers.',
    whatsappMessage:
      'Olá! Gostaria de solicitar orçamento para Formatação + backup.',
  },
  {
    title: 'Montagem personalizada + water cooler + RGB',
    description:
      'Projeto completo sob medida com refrigeração líquida, organização de cabos e iluminação configurada.',
    whatsappMessage:
      'Olá! Gostaria de solicitar orçamento para Montagem personalizada + water cooler + RGB.',
  },
  {
    title: 'Diagnóstico de defeito intermitente',
    description:
      'Avaliação técnica dedicada em bancada para identificar falhas aleatórias de hardware ou sistema antes de qualquer troca.',
    whatsappMessage:
      'Olá! Gostaria de solicitar orçamento para Diagnóstico de defeito intermitente.',
  },
] as const;

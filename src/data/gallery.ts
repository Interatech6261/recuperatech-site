export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

/**
 * Mapeamento centralizado de imagens do site.
 * Para substituir pelas fotografias reais da RECUPERATECH (em WebP ou AVIF),
 * basta colocar os arquivos em public/images/ e atualizar o caminho `src` abaixo.
 */
export const SITE_IMAGES = {
  hero: {
    src: '/images/hero-pc-gamer.svg',
    alt: 'Computador gamer com gabinete preto e iluminação vermelha em ambiente escuro profissional',
  },
  montagem: {
    src: '/images/montagem-bancada.svg',
    alt: 'Montagem técnica de componentes em placa-mãe sobre bancada profissional da RECUPERATECH',
  },
  manutencao: {
    src: '/images/manutencao-limpeza.svg',
    alt: 'Computador desktop aberto sobre bancada técnica para limpeza interna e revisão',
  },
  upgrade: {
    src: '/images/upgrade-hardware.svg',
    alt: 'Unidade SSD NVMe e módulos de memória RAM para upgrade de desempenho',
  },
  notebook: {
    src: '/images/manutencao-notebook.svg',
    alt: 'Notebook aberto em bancada técnica com ferramentas de precisão para manutenção',
  },
  custom: {
    src: '/images/personalizacao-watercooler.svg',
    alt: 'Gabinete personalizado com water cooler, organização de cabos e iluminação vermelha e branca',
  },
} as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Setup Gamer com Iluminação Vermelha',
    category: 'Montagem Personalizada',
    src: SITE_IMAGES.hero.src,
    alt: 'Ilustração técnica de computador gamer com gabinete preto e iluminação vermelha',
  },
  {
    id: 'gal-2',
    title: 'Montagem em Bancada Técnica',
    category: 'Montagem de PCs',
    src: SITE_IMAGES.montagem.src,
    alt: 'Instalação de processador e componentes em placa-mãe sobre bancada',
  },
  {
    id: 'gal-3',
    title: 'Limpeza Interna e Troca de Pasta Térmica',
    category: 'Manutenção Preventiva',
    src: SITE_IMAGES.manutencao.src,
    alt: 'Interior de computador desktop em procedimento de limpeza técnica',
  },
  {
    id: 'gal-4',
    title: 'Upgrade de SSD NVMe e Memória RAM',
    category: 'Upgrades de Hardware',
    src: SITE_IMAGES.upgrade.src,
    alt: 'Componentes de armazenamento SSD NVMe e memória RAM em destaque',
  },
  {
    id: 'gal-5',
    title: 'Assistência Técnica para Notebooks',
    category: 'Manutenção de Notebooks',
    src: SITE_IMAGES.notebook.src,
    alt: 'Notebook aberto sobre manta antiestática com ferramentas técnicas',
  },
  {
    id: 'gal-6',
    title: 'Water Cooler e Organização de Cabos',
    category: 'Personalização',
    src: SITE_IMAGES.custom.src,
    alt: 'Gabinete equipado com water cooler e cabeamento organizado',
  },
];

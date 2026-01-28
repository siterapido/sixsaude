/**
 * News API Mock - SIX Saúde
 * Simulates API responses for development
 */

import type { NewsArticle, NewsCategory, NewsFilters, PaginatedResponse } from '@/lib/types/news'

// Categories
const categories: NewsCategory[] = [
  { id: '1', name: 'Saúde', slug: 'saude', color: '#10D86F' },
  { id: '2', name: 'Planos', slug: 'planos', color: '#F5A623' },
  { id: '3', name: 'Bem-estar', slug: 'bem-estar', color: '#6366F1' },
  { id: '4', name: 'Institucional', slug: 'institucional', color: '#FFB800' },
  { id: '5', name: 'Dicas', slug: 'dicas', color: '#EC4899' },
]

// Mock Articles
const articles: NewsArticle[] = [
  {
    id: '1',
    slug: 'importancia-check-up-anual',
    title: 'A Importância do Check-up Anual para sua Saúde',
    excerpt: 'Descubra por que realizar exames preventivos regularmente pode salvar sua vida e como a SIX Saúde facilita esse processo.',
    content: `
      <p>O check-up anual é uma das ferramentas mais importantes para manter sua saúde em dia. Muitas doenças graves podem ser prevenidas ou tratadas com mais eficácia quando detectadas precocemente.</p>

      <h2>Por que fazer check-up?</h2>
      <p>Exames de rotina permitem identificar fatores de risco e condições de saúde antes que se tornem problemas sérios. Diabetes, hipertensão e colesterol alto são exemplos de condições que, quando descobertas cedo, podem ser controladas com mudanças no estilo de vida.</p>

      <h2>Quais exames fazer?</h2>
      <p>Os exames variam de acordo com idade, sexo e histórico familiar. De forma geral, incluem:</p>
      <ul>
        <li>Hemograma completo</li>
        <li>Glicemia em jejum</li>
        <li>Colesterol total e frações</li>
        <li>Função renal e hepática</li>
        <li>Eletrocardiograma</li>
      </ul>

      <h2>SIX Saúde facilita seu check-up</h2>
      <p>Com a SIX Saúde, você tem acesso a uma ampla rede credenciada para realizar todos os seus exames com comodidade e qualidade.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    category: categories[0],
    author: { name: 'Dra. Ana Silva', role: 'Diretora Médica', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' },
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 5,
    featured: true,
    tags: ['check-up', 'prevenção', 'exames'],
  },
  {
    id: '2',
    slug: 'novos-planos-empresariais-2024',
    title: 'SIX Saúde Lança Novos Planos Empresariais para 2024',
    excerpt: 'Conheça as novas opções de planos corporativos com cobertura ampliada e benefícios exclusivos para sua empresa.',
    content: `
      <p>A SIX Saúde está lançando uma nova linha de planos empresariais, pensada especialmente para atender às necessidades das empresas modernas.</p>

      <h2>Novidades dos planos</h2>
      <p>Os novos planos incluem cobertura nacional, telemedicina 24h e programas de bem-estar para os colaboradores.</p>

      <h2>Benefícios para sua empresa</h2>
      <ul>
        <li>Redução de absenteísmo</li>
        <li>Maior satisfação dos colaboradores</li>
        <li>Gestão simplificada via portal</li>
        <li>Relatórios de utilização</li>
      </ul>
    `,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    category: categories[1],
    author: { name: 'Carlos Mendes', role: 'Diretor Comercial' },
    publishedAt: '2024-01-12T14:30:00Z',
    readingTime: 4,
    featured: false,
    tags: ['planos', 'empresarial', 'corporativo'],
  },
  {
    id: '3',
    slug: 'dicas-alimentacao-saudavel',
    title: '10 Dicas para uma Alimentação Mais Saudável no Dia a Dia',
    excerpt: 'Pequenas mudanças na alimentação podem trazer grandes benefícios para sua saúde. Confira nossas dicas práticas.',
    content: `
      <p>Manter uma alimentação saudável não precisa ser complicado. Com algumas mudanças simples, você pode melhorar significativamente sua qualidade de vida.</p>

      <h2>Dicas práticas</h2>
      <ol>
        <li>Beba mais água</li>
        <li>Inclua mais frutas e vegetais</li>
        <li>Reduza o açúcar refinado</li>
        <li>Prefira grãos integrais</li>
        <li>Faça refeições em horários regulares</li>
      </ol>
    `,
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop',
    category: categories[2],
    author: { name: 'Nutricionista Maria Costa', role: 'Especialista em Nutrição' },
    publishedAt: '2024-01-10T09:00:00Z',
    readingTime: 6,
    featured: false,
    tags: ['alimentação', 'nutrição', 'dicas'],
  },
  {
    id: '4',
    slug: 'six-saude-expansao-rede',
    title: 'SIX Saúde Anuncia Expansão da Rede Credenciada',
    excerpt: 'Nossa rede agora conta com mais de 500 novos parceiros em todo o Brasil, ampliando o acesso à saúde de qualidade.',
    content: `
      <p>A SIX Saúde continua investindo na expansão de sua rede credenciada para oferecer ainda mais opções aos beneficiários.</p>

      <h2>Novos parceiros</h2>
      <p>Hospitais, clínicas e laboratórios de referência foram adicionados em todas as regiões do país.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
    category: categories[3],
    author: { name: 'Equipe SIX Saúde', role: 'Comunicação' },
    publishedAt: '2024-01-08T16:00:00Z',
    readingTime: 3,
    featured: false,
    tags: ['institucional', 'rede', 'expansão'],
  },
  {
    id: '5',
    slug: 'exercicios-home-office',
    title: 'Exercícios para Fazer Durante o Home Office',
    excerpt: 'Trabalhar em casa pode afetar sua postura e saúde. Aprenda exercícios simples para fazer no intervalo.',
    content: `
      <p>O trabalho remoto trouxe muitas vantagens, mas também desafios para a saúde física. Passar muitas horas sentado pode causar dores e problemas posturais.</p>

      <h2>Exercícios recomendados</h2>
      <p>Alongamentos simples podem ser feitos a cada hora para prevenir desconfortos.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop',
    category: categories[4],
    author: { name: 'Dr. Pedro Santos', role: 'Fisioterapeuta' },
    publishedAt: '2024-01-05T11:00:00Z',
    readingTime: 4,
    featured: false,
    tags: ['exercícios', 'home office', 'postura'],
  },
  {
    id: '6',
    slug: 'saude-mental-trabalho',
    title: 'Saúde Mental no Ambiente de Trabalho: Como Cuidar',
    excerpt: 'A saúde mental é tão importante quanto a física. Veja como empresas e colaboradores podem trabalhar juntos.',
    content: `
      <p>A saúde mental no trabalho tem ganhado cada vez mais atenção. Empresas que investem no bem-estar psicológico dos colaboradores colhem resultados positivos.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop',
    category: categories[2],
    author: { name: 'Dra. Lucia Ferreira', role: 'Psicóloga' },
    publishedAt: '2024-01-03T08:30:00Z',
    readingTime: 7,
    featured: false,
    tags: ['saúde mental', 'trabalho', 'bem-estar'],
  },
  {
    id: '7',
    slug: 'telemedicina-vantagens',
    title: 'Telemedicina: Conheça as Vantagens deste Serviço',
    excerpt: 'A consulta online chegou para ficar. Entenda como funciona e quando utilizar a telemedicina da SIX Saúde.',
    content: `
      <p>A telemedicina revolucionou o acesso à saúde, permitindo consultas médicas de qualquer lugar.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
    category: categories[0],
    author: { name: 'Dr. Roberto Lima', role: 'Coordenador de Telemedicina' },
    publishedAt: '2024-01-01T10:00:00Z',
    readingTime: 5,
    featured: false,
    tags: ['telemedicina', 'tecnologia', 'consulta online'],
  },
  {
    id: '8',
    slug: 'vacinacao-adultos',
    title: 'Vacinação para Adultos: Quais Vacinas Você Precisa Tomar',
    excerpt: 'A vacinação não é só para crianças. Descubra quais vacinas são recomendadas para adultos e mantenha sua imunidade em dia.',
    content: `
      <p>Muitos adultos não sabem que precisam manter a carteira de vacinação atualizada. Algumas vacinas perdem a eficácia com o tempo e precisam de reforço.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=1200&h=800&fit=crop',
    category: categories[0],
    author: { name: 'Dra. Ana Silva', role: 'Diretora Médica' },
    publishedAt: '2023-12-28T14:00:00Z',
    readingTime: 6,
    featured: false,
    tags: ['vacinação', 'prevenção', 'imunização'],
  },
  {
    id: '9',
    slug: 'como-escolher-plano-saude',
    title: 'Como Escolher o Plano de Saúde Ideal para Você',
    excerpt: 'Escolher um plano de saúde pode ser confuso. Veja os principais pontos a considerar antes de contratar.',
    content: `
      <p>Com tantas opções no mercado, escolher o plano de saúde certo exige atenção a diversos fatores.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop',
    category: categories[1],
    author: { name: 'Equipe SIX Saúde', role: 'Comunicação' },
    publishedAt: '2023-12-25T09:00:00Z',
    readingTime: 8,
    featured: false,
    tags: ['planos', 'escolha', 'dicas'],
  },
]

/**
 * Get paginated news with filters
 */
export async function getNews(filters: NewsFilters = {}): Promise<PaginatedResponse<NewsArticle>> {
  const { category, search, page = 1, limit = 6 } = filters

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  let filtered = [...articles]

  // Filter by category
  if (category && category !== 'all') {
    filtered = filtered.filter(a => a.category.slug === category)
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase()
    filtered = filtered.filter(
      a =>
        a.title.toLowerCase().includes(searchLower) ||
        a.excerpt.toLowerCase().includes(searchLower) ||
        a.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }

  // Sort by date (newest first)
  filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const total = filtered.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const data = filtered.slice(start, start + limit)

  return {
    data,
    total,
    page,
    totalPages,
    hasMore: page < totalPages,
  }
}

/**
 * Get single news article by slug
 */
export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return articles.find(a => a.slug === slug) || null
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<NewsCategory[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return categories
}

/**
 * Get featured news
 */
export async function getFeaturedNews(): Promise<NewsArticle | null> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return articles.find(a => a.featured) || articles[0] || null
}

/**
 * Get popular/most read news
 */
export async function getPopularNews(limit = 5): Promise<NewsArticle[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  // In a real app, this would be based on view counts
  return articles.slice(0, limit)
}

/**
 * Get related news by category
 */
export async function getRelatedNews(categorySlug: string, excludeSlug: string, limit = 3): Promise<NewsArticle[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return articles
    .filter(a => a.category.slug === categorySlug && a.slug !== excludeSlug)
    .slice(0, limit)
}

/**
 * Get all article slugs (for static generation)
 */
export async function getAllSlugs(): Promise<string[]> {
  return articles.map(a => a.slug)
}

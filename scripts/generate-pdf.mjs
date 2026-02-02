import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, '../public/Logos/SIX SAÚDE LOGO FINAL - Amarela.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documento de Entrega - SIX Saúde</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --black: #0A0A0A;
      --gold: #F1C10F;
      --gold-light: #F4CA2F;
      --white: #FFFFFF;
      --platinum: #A8A8A8;
      --charcoal: #1E1E1E;
      --border: #2A2A2A;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--black);
      color: var(--white);
      line-height: 1.6;
      font-size: 11pt;
    }

    .page {
      page-break-after: always;
      padding: 40px 50px;
      min-height: 100vh;
      position: relative;
    }

    .page:last-child {
      page-break-after: avoid;
    }

    /* Cover Page */
    .cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: linear-gradient(135deg, var(--black) 0%, var(--charcoal) 50%, var(--black) 100%);
    }

    .cover-logo {
      width: 280px;
      margin-bottom: 60px;
    }

    .cover h1 {
      font-family: 'Syne', sans-serif;
      font-size: 42pt;
      font-weight: 800;
      color: var(--white);
      margin-bottom: 20px;
      letter-spacing: -1px;
    }

    .cover h1 span {
      color: var(--gold);
    }

    .cover-subtitle {
      font-size: 16pt;
      color: var(--platinum);
      margin-bottom: 60px;
      max-width: 500px;
    }

    .cover-meta {
      display: flex;
      gap: 40px;
      margin-top: 40px;
    }

    .cover-meta-item {
      text-align: center;
    }

    .cover-meta-label {
      font-size: 9pt;
      color: var(--platinum);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    .cover-meta-value {
      font-family: 'Syne', sans-serif;
      font-size: 14pt;
      font-weight: 600;
      color: var(--gold);
    }

    .gold-line {
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 40px auto;
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 30px;
    }

    .header-logo {
      height: 40px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 12pt;
      color: var(--gold);
      font-weight: 600;
    }

    /* Typography */
    h1 {
      font-family: 'Syne', sans-serif;
      font-size: 28pt;
      font-weight: 800;
      color: var(--white);
      margin-bottom: 20px;
    }

    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 20pt;
      font-weight: 700;
      color: var(--gold);
      margin: 30px 0 15px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--gold);
    }

    h3 {
      font-family: 'Syne', sans-serif;
      font-size: 14pt;
      font-weight: 600;
      color: var(--white);
      margin: 25px 0 12px 0;
    }

    h4 {
      font-family: 'Syne', sans-serif;
      font-size: 12pt;
      font-weight: 600;
      color: var(--gold-light);
      margin: 20px 0 10px 0;
    }

    p {
      margin-bottom: 12px;
      color: var(--platinum);
    }

    strong {
      color: var(--white);
      font-weight: 600;
    }

    /* Lists */
    ul, ol {
      margin: 10px 0 15px 20px;
      color: var(--platinum);
    }

    li {
      margin-bottom: 6px;
    }

    li strong {
      color: var(--gold-light);
    }

    /* Cards */
    .card {
      background: var(--charcoal);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin: 15px 0;
    }

    .card-gold {
      border-color: var(--gold);
      background: linear-gradient(135deg, rgba(241, 193, 15, 0.1) 0%, var(--charcoal) 100%);
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      font-size: 10pt;
    }

    th {
      background: var(--gold);
      color: var(--black);
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      padding: 12px 15px;
      text-align: left;
    }

    td {
      padding: 12px 15px;
      border-bottom: 1px solid var(--border);
      color: var(--platinum);
    }

    tr:nth-child(even) td {
      background: rgba(30, 30, 30, 0.5);
    }

    /* Code blocks */
    code, pre {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 9pt;
    }

    pre {
      background: var(--charcoal);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 15px;
      overflow-x: auto;
      margin: 15px 0;
    }

    code {
      background: var(--charcoal);
      padding: 2px 6px;
      border-radius: 4px;
      color: var(--gold-light);
    }

    pre code {
      background: transparent;
      padding: 0;
    }

    /* Grid */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
    }

    /* Stats */
    .stat-box {
      background: var(--charcoal);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
    }

    .stat-number {
      font-family: 'Syne', sans-serif;
      font-size: 32pt;
      font-weight: 800;
      color: var(--gold);
      line-height: 1;
    }

    .stat-label {
      font-size: 10pt;
      color: var(--platinum);
      margin-top: 8px;
    }

    /* Checklist */
    .checklist {
      list-style: none;
      margin-left: 0;
    }

    .checklist li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
    }

    .check {
      width: 20px;
      height: 20px;
      background: var(--gold);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--black);
      font-weight: bold;
      font-size: 12px;
      flex-shrink: 0;
    }

    /* Colors */
    .color-swatch {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 10px 0;
    }

    .color-box {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      border: 1px solid var(--border);
    }

    .color-info {
      flex: 1;
    }

    .color-name {
      font-weight: 600;
      color: var(--white);
    }

    .color-hex {
      font-family: monospace;
      font-size: 10pt;
      color: var(--platinum);
    }

    /* Footer */
    .footer {
      position: absolute;
      bottom: 30px;
      left: 50px;
      right: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      border-top: 1px solid var(--border);
      font-size: 9pt;
      color: var(--platinum);
    }

    /* Highlight box */
    .highlight-box {
      background: linear-gradient(135deg, rgba(241, 193, 15, 0.15) 0%, rgba(241, 193, 15, 0.05) 100%);
      border-left: 4px solid var(--gold);
      padding: 20px;
      margin: 20px 0;
      border-radius: 0 12px 12px 0;
    }

    .highlight-box p {
      color: var(--white);
      margin: 0;
    }

    /* Summary section */
    .summary {
      font-size: 12pt;
      line-height: 1.8;
      color: var(--white);
    }

    /* Page numbers */
    @page {
      margin: 0;
    }

    .page-number {
      font-family: 'Syne', sans-serif;
      font-size: 10pt;
      color: var(--gold);
    }
  </style>
</head>
<body>

  <!-- Cover Page -->
  <div class="page cover">
    <img src="${logoDataUrl}" alt="SIX Saúde" class="cover-logo">
    <h1>Documento de <span>Entrega</span></h1>
    <p class="cover-subtitle">Plataforma Digital Institucional - Landing Page, CMS e Assistente Virtual com Inteligência Artificial</p>
    <div class="gold-line"></div>
    <div class="cover-meta">
      <div class="cover-meta-item">
        <div class="cover-meta-label">Cliente</div>
        <div class="cover-meta-value">SIX Saúde</div>
      </div>
      <div class="cover-meta-item">
        <div class="cover-meta-label">Status</div>
        <div class="cover-meta-value">Concluído</div>
      </div>
      <div class="cover-meta-item">
        <div class="cover-meta-label">Data</div>
        <div class="cover-meta-value">Fevereiro 2026</div>
      </div>
    </div>
  </div>

  <!-- Page 2: Summary -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Sumário Executivo</h2>

    <div class="highlight-box">
      <p>Desenvolvemos uma plataforma digital completa e moderna para a SIX Saúde, combinando uma <strong>landing page institucional de alta conversão</strong>, um <strong>portal de conteúdo com CMS próprio</strong> e um <strong>assistente virtual com inteligência artificial</strong>.</p>
    </div>

    <p class="summary">O projeto foi construído com as tecnologias mais avançadas do mercado, garantindo performance excepcional, segurança e escalabilidade. A plataforma está pronta para produção e preparada para crescer junto com a empresa.</p>

    <h3>Visão Geral dos Números</h3>

    <div class="grid-3">
      <div class="stat-box">
        <div class="stat-number">10+</div>
        <div class="stat-label">Páginas Desenvolvidas</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">40+</div>
        <div class="stat-label">Componentes UI</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">60+</div>
        <div class="stat-label">Animações Premium</div>
      </div>
    </div>

    <div class="grid-3" style="margin-top: 15px;">
      <div class="stat-box">
        <div class="stat-number">8</div>
        <div class="stat-label">APIs REST</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">5</div>
        <div class="stat-label">Tabelas no Banco</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">2</div>
        <div class="stat-label">IAs Integradas</div>
      </div>
    </div>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">2</span>
    </div>
  </div>

  <!-- Page 3: Deliverables -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>O Que Foi Entregue</h2>

    <h3>1. Landing Page Institucional Premium</h3>
    <p>Uma landing page sofisticada projetada para maximizar conversões, com design premium em preto e dourado que transmite credibilidade e confiança.</p>

    <h4>Seções Desenvolvidas:</h4>
    <ul>
      <li><strong>Hero Section</strong> — Apresentação impactante com imagem cinematográfica, texto animado e CTAs estratégicos</li>
      <li><strong>Área do Cliente</strong> — Acesso rápido (2ª via, Comprovante IR, App, FAQ)</li>
      <li><strong>Por Que Escolher a SIX</strong> — Missão, visão e valores com design elegante</li>
      <li><strong>Nossos Planos</strong> — Cards interativos para planos Adesão e Empresarial</li>
      <li><strong>Aplicativo SIX Saúde</strong> — Showcase do app com mockup de iPhone</li>
      <li><strong>Prova Social</strong> — +2.500 famílias e depoimentos de clientes</li>
      <li><strong>FAQ Interativo</strong> — Perguntas frequentes em accordion</li>
      <li><strong>Últimas Notícias</strong> — Preview dos artigos do blog</li>
    </ul>

    <h3>2. Página Institucional "Sobre Nós"</h3>
    <ul>
      <li>História da empresa desde 2014</li>
      <li>Timeline de marcos importantes</li>
      <li>Missão, visão e valores</li>
      <li>Apresentação da equipe</li>
      <li>Números e conquistas</li>
    </ul>

    <h3>3. Portal de Notícias e Blog</h3>
    <p>Sistema de blog profissional completo:</p>
    <ul>
      <li>Listagem com artigos em destaque</li>
      <li>Sistema de categorias e filtros</li>
      <li>Busca por título e conteúdo</li>
      <li>Paginação automática</li>
      <li>Sidebar com artigos populares</li>
      <li>Páginas individuais com SEO otimizado</li>
    </ul>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">3</span>
    </div>
  </div>

  <!-- Page 4: CMS & AI -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Sistema de Gestão e IA</h2>

    <h3>4. Painel Administrativo (CMS)</h3>
    <p>Sistema de gerenciamento de conteúdo exclusivo para a equipe SIX Saúde:</p>

    <div class="grid-2">
      <div class="card">
        <h4>Dashboard Principal</h4>
        <ul>
          <li>Estatísticas em tempo real</li>
          <li>Total de postagens e categorias</li>
          <li>5 postagens mais recentes</li>
          <li>Atalhos rápidos</li>
        </ul>
      </div>
      <div class="card">
        <h4>Gestão de Postagens</h4>
        <ul>
          <li>Busca e filtros avançados</li>
          <li>Editor completo de artigos</li>
          <li>Agendamento de publicação</li>
          <li>Indicador de conteúdo IA</li>
        </ul>
      </div>
    </div>

    <h3>5. Gerador de Conteúdo com IA</h3>
    <div class="card card-gold">
      <p><strong>Ferramenta revolucionária integrada ao painel administrativo:</strong></p>
      <ul>
        <li>Geração de artigos completos com Claude (Anthropic)</li>
        <li>Configuração de tom: formal, casual, técnico ou inspiracional</li>
        <li>Seleção de público-alvo: pacientes, empresas, RH ou geral</li>
        <li>Controle de tamanho: curto (~500), médio (~1000) ou longo (~2000 palavras)</li>
        <li>Inclusão de palavras-chave para SEO</li>
        <li>Visualização em tempo real durante geração</li>
      </ul>
      <p style="margin-top: 15px; color: var(--gold);"><strong>Benefício:</strong> Crie conteúdo de qualidade em minutos, mantendo o blog sempre atualizado.</p>
    </div>

    <h3>6. Chat de Suporte com IA</h3>
    <div class="card card-gold">
      <p><strong>Assistente virtual 24/7 integrado ao site:</strong></p>
      <ul>
        <li>Widget flutuante com animação de pulso</li>
        <li>Respostas em tempo real via streaming</li>
        <li>Treinado com informações da SIX Saúde</li>
        <li>Conhece planos, serviços e contatos</li>
        <li>Opção de transferir para WhatsApp</li>
      </ul>
      <p style="margin-top: 15px; color: var(--gold);"><strong>Benefício:</strong> Atendimento instantâneo, captura de leads e redução de carga no suporte.</p>
    </div>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">4</span>
    </div>
  </div>

  <!-- Page 5: Design System -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Design System</h2>

    <h3>Paleta de Cores</h3>

    <div class="color-swatch">
      <div class="color-box" style="background: #0A0A0A;"></div>
      <div class="color-info">
        <div class="color-name">Preto Premium</div>
        <div class="color-hex">#0A0A0A — Sofisticação e credibilidade</div>
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-box" style="background: #F1C10F;"></div>
      <div class="color-info">
        <div class="color-name">Dourado Primário</div>
        <div class="color-hex">#F1C10F — Destaque e premium</div>
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-box" style="background: #F4CA2F;"></div>
      <div class="color-info">
        <div class="color-name">Dourado Assinatura</div>
        <div class="color-hex">#F4CA2F — Variações elegantes</div>
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-box" style="background: #FFFFFF; border: 2px solid #2A2A2A;"></div>
      <div class="color-info">
        <div class="color-name">Branco</div>
        <div class="color-hex">#FFFFFF — Contraste e legibilidade</div>
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-box" style="background: #A8A8A8;"></div>
      <div class="color-info">
        <div class="color-name">Platina</div>
        <div class="color-hex">#A8A8A8 — Textos secundários</div>
      </div>
    </div>

    <h3>Tipografia</h3>
    <div class="grid-2">
      <div class="card">
        <h4 style="font-family: 'Syne', sans-serif; font-size: 18pt;">Syne</h4>
        <p>Fonte display para títulos — elegante e única</p>
        <p style="font-family: 'Syne', sans-serif; font-size: 14pt; color: var(--white);">ABCDEFGHIJKLM</p>
      </div>
      <div class="card">
        <h4 style="font-family: 'Inter', sans-serif; font-size: 18pt;">Inter</h4>
        <p>Fonte corpo para textos — legível e profissional</p>
        <p style="font-family: 'Inter', sans-serif; font-size: 14pt; color: var(--white);">ABCDEFGHIJKLM</p>
      </div>
    </div>

    <h3>Componentes UI</h3>
    <div class="grid-2">
      <ul>
        <li><strong>Buttons</strong> — 4 variantes (primary, secondary, ghost, ghost-gold)</li>
        <li><strong>Cards</strong> — 7 variantes (glass, elevated, gold, premium)</li>
        <li><strong>Badges</strong> — Categorias e status coloridos</li>
        <li><strong>Inputs</strong> — Campos de busca estilizados</li>
      </ul>
      <ul>
        <li><strong>Modals</strong> — Diálogos e confirmações</li>
        <li><strong>Accordions</strong> — FAQ expansível</li>
        <li><strong>Pagination</strong> — Navegação entre páginas</li>
        <li><strong>+30 outros</strong> — Componentes especializados</li>
      </ul>
    </div>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">5</span>
    </div>
  </div>

  <!-- Page 6: Tech Stack -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Tecnologias Utilizadas</h2>

    <h3>Stack Principal</h3>
    <table>
      <tr>
        <th>Tecnologia</th>
        <th>Versão</th>
        <th>Propósito</th>
      </tr>
      <tr>
        <td><strong>Next.js</strong></td>
        <td>16.1.5</td>
        <td>Framework React com App Router</td>
      </tr>
      <tr>
        <td><strong>React</strong></td>
        <td>19.2.3</td>
        <td>Biblioteca de interface</td>
      </tr>
      <tr>
        <td><strong>TypeScript</strong></td>
        <td>5.x</td>
        <td>Tipagem estática para qualidade de código</td>
      </tr>
      <tr>
        <td><strong>Tailwind CSS</strong></td>
        <td>4.x</td>
        <td>Sistema de design e estilização</td>
      </tr>
      <tr>
        <td><strong>Framer Motion</strong></td>
        <td>12.x</td>
        <td>Animações premium</td>
      </tr>
    </table>

    <h3>Banco de Dados e Backend</h3>
    <table>
      <tr>
        <th>Tecnologia</th>
        <th>Propósito</th>
      </tr>
      <tr>
        <td><strong>Neon</strong></td>
        <td>PostgreSQL serverless na nuvem</td>
      </tr>
      <tr>
        <td><strong>Drizzle ORM</strong></td>
        <td>Mapeamento objeto-relacional</td>
      </tr>
      <tr>
        <td><strong>Jose</strong></td>
        <td>Autenticação JWT</td>
      </tr>
      <tr>
        <td><strong>bcryptjs</strong></td>
        <td>Criptografia de senhas</td>
      </tr>
    </table>

    <h3>Inteligência Artificial</h3>
    <table>
      <tr>
        <th>Tecnologia</th>
        <th>Propósito</th>
      </tr>
      <tr>
        <td><strong>Vercel AI SDK</strong></td>
        <td>Streaming de respostas IA</td>
      </tr>
      <tr>
        <td><strong>Claude (Anthropic)</strong></td>
        <td>Geração de conteúdo para blog</td>
      </tr>
      <tr>
        <td><strong>Gemini (Google)</strong></td>
        <td>Chat de suporte ao cliente</td>
      </tr>
      <tr>
        <td><strong>OpenRouter</strong></td>
        <td>Gateway de APIs de IA</td>
      </tr>
    </table>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">6</span>
    </div>
  </div>

  <!-- Page 7: Database -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Estrutura do Banco de Dados</h2>

    <div class="grid-2">
      <div class="card">
        <h4>USERS (Usuários)</h4>
        <pre><code>├── id (UUID)
├── email (único)
├── password_hash
├── name
├── role (editor/admin)
├── avatar_url
└── timestamps</code></pre>
      </div>

      <div class="card">
        <h4>CATEGORIES (Categorias)</h4>
        <pre><code>├── id (UUID)
├── name
├── slug (único)
├── color (hex)
└── created_at</code></pre>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <h4>POSTS (Artigos)</h4>
      <pre><code>├── id (UUID)               ├── author_id → AUTHORS
├── slug (único)            ├── published_at
├── title                   ├── reading_time (minutos)
├── excerpt (resumo)        ├── featured (destaque)
├── content (HTML)          ├── status (draft/published/archived)
├── cover_image             ├── ai_generated (flag)
├── category_id → CATEGORIES└── timestamps</code></pre>
    </div>

    <div class="grid-2">
      <div class="card">
        <h4>AUTHORS (Autores)</h4>
        <pre><code>├── id (UUID)
├── name
├── email (único)
├── role
├── avatar_url
└── created_at</code></pre>
      </div>

      <div class="card">
        <h4>POST_TAGS (Tags)</h4>
        <pre><code>├── id (UUID)
├── post_id → POSTS
└── tag (texto)</code></pre>
      </div>
    </div>

    <h3>APIs Desenvolvidas</h3>
    <table>
      <tr>
        <th>Método</th>
        <th>Rota</th>
        <th>Função</th>
      </tr>
      <tr>
        <td>GET</td>
        <td><code>/api/posts</code></td>
        <td>Listar artigos (paginado, filtros)</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/posts</code></td>
        <td>Criar artigo (autenticado)</td>
      </tr>
      <tr>
        <td>PUT/DELETE</td>
        <td><code>/api/posts/[id]</code></td>
        <td>Atualizar/Excluir artigo</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/ai/generate-post</code></td>
        <td>Gerar conteúdo com IA</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/chat/support</code></td>
        <td>Chat com IA</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/auth/login</code></td>
        <td>Autenticação</td>
      </tr>
    </table>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">7</span>
    </div>
  </div>

  <!-- Page 8: Performance & Security -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Performance, SEO e Segurança</h2>

    <div class="grid-2">
      <div>
        <h3>SEO (Search Engine Optimization)</h3>
        <ul>
          <li><strong>Meta tags completas</strong> — Title, description, keywords</li>
          <li><strong>Open Graph</strong> — Preview rico para redes sociais</li>
          <li><strong>Twitter Cards</strong> — Cards especiais para Twitter/X</li>
          <li><strong>Schema.org</strong> — Dados estruturados (LocalBusiness)</li>
          <li><strong>Sitemap dinâmico</strong> — Atualizado automaticamente</li>
          <li><strong>URLs amigáveis</strong> — Slugs personalizados</li>
        </ul>
      </div>

      <div>
        <h3>Performance Web</h3>
        <ul>
          <li><strong>Next.js 16</strong> — Build otimizado com Turbopack</li>
          <li><strong>Imagens otimizadas</strong> — WebP/AVIF automático</li>
          <li><strong>Lazy loading</strong> — Carregamento sob demanda</li>
          <li><strong>Font swap</strong> — Fontes carregadas otimizadas</li>
          <li><strong>Code splitting</strong> — JavaScript dividido por rota</li>
        </ul>
      </div>
    </div>

    <h3>Segurança</h3>
    <div class="card">
      <p><strong>Headers de segurança configurados:</strong></p>
      <ul>
        <li>X-Content-Type-Options: nosniff</li>
        <li>X-Frame-Options: SAMEORIGIN</li>
        <li>X-XSS-Protection: 1; mode=block</li>
        <li>Referrer-Policy: strict-origin-when-cross-origin</li>
      </ul>
    </div>

    <h3>Acessibilidade (WCAG AAA)</h3>
    <div class="grid-2">
      <ul>
        <li><strong>Contraste 7:1</strong> — Todas as combinações</li>
        <li><strong>Navegação por teclado</strong> — Tab e Enter</li>
        <li><strong>ARIA labels</strong> — Elementos identificados</li>
      </ul>
      <ul>
        <li><strong>HTML semântico</strong> — header, main, nav, footer</li>
        <li><strong>Skip links</strong> — Pular para conteúdo</li>
        <li><strong>prefers-reduced-motion</strong> — Respeito a preferências</li>
      </ul>
    </div>

    <h3>Responsividade</h3>
    <p>Design <strong>mobile-first</strong> testado em:</p>
    <div class="grid-3" style="margin-top: 10px;">
      <div class="stat-box">
        <div class="stat-number" style="font-size: 18pt;">320px</div>
        <div class="stat-label">Mobile</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" style="font-size: 18pt;">768px</div>
        <div class="stat-label">Tablet</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" style="font-size: 18pt;">1440px+</div>
        <div class="stat-label">Desktop / 4K</div>
      </div>
    </div>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">8</span>
    </div>
  </div>

  <!-- Page 9: Checklist -->
  <div class="page">
    <div class="header">
      <img src="${logoDataUrl}" alt="SIX Saúde" class="header-logo">
      <div class="header-title">Documento de Entrega</div>
    </div>

    <h2>Checklist de Entregáveis</h2>

    <ul class="checklist">
      <li><span class="check">✓</span> Landing Page Institucional Premium</li>
      <li><span class="check">✓</span> Página Sobre Nós com Timeline</li>
      <li><span class="check">✓</span> Portal de Blog/Notícias Completo</li>
      <li><span class="check">✓</span> Painel Administrativo (CMS)</li>
      <li><span class="check">✓</span> Gerador de Conteúdo com IA (Claude)</li>
      <li><span class="check">✓</span> Chat de Suporte com IA (Gemini)</li>
      <li><span class="check">✓</span> Páginas Legais (LGPD/Privacidade/Termos/Cookies)</li>
      <li><span class="check">✓</span> Sistema de Autenticação JWT</li>
      <li><span class="check">✓</span> Banco de Dados PostgreSQL (Neon)</li>
      <li><span class="check">✓</span> APIs REST Documentadas</li>
      <li><span class="check">✓</span> Design System Completo</li>
      <li><span class="check">✓</span> 60+ Animações Premium</li>
      <li><span class="check">✓</span> Responsividade Mobile-First</li>
      <li><span class="check">✓</span> Otimização SEO Completa</li>
      <li><span class="check">✓</span> Integração WhatsApp Business</li>
      <li><span class="check">✓</span> Configuração de Deploy (Vercel)</li>
    </ul>

    <h3>Comandos de Manutenção</h3>
    <pre><code># Desenvolvimento
pnpm dev              # Servidor local (localhost:3000)

# Produção
pnpm build            # Build de produção
pnpm start            # Servidor de produção

# Banco de Dados
pnpm db:generate      # Gerar migrações
pnpm db:push          # Aplicar mudanças
pnpm db:seed          # Popular dados iniciais</code></pre>

    <div class="footer">
      <span>SIX Saúde - Documento de Entrega</span>
      <span class="page-number">9</span>
    </div>
  </div>

  <!-- Page 10: Closing -->
  <div class="page" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
    <img src="${logoDataUrl}" alt="SIX Saúde" style="width: 200px; margin-bottom: 50px;">

    <h2 style="border: none; margin: 0 0 30px 0;">Considerações Finais</h2>

    <div class="highlight-box" style="max-width: 600px; text-align: left;">
      <p>A plataforma digital desenvolvida para a SIX Saúde representa um investimento significativo em presença digital moderna e eficiente.</p>
    </div>

    <div style="max-width: 500px; margin-top: 30px;">
      <p><strong style="color: var(--gold);">Com tecnologias de ponta, design premium e recursos de inteligência artificial, o site está preparado para:</strong></p>
      <ul style="text-align: left; margin-top: 20px;">
        <li><strong>Converter visitantes em clientes</strong> através de uma experiência premium</li>
        <li><strong>Reduzir custos de atendimento</strong> com chat inteligente 24/7</li>
        <li><strong>Manter conteúdo atualizado</strong> com geração de artigos por IA</li>
        <li><strong>Escalar com segurança</strong> usando infraestrutura serverless</li>
        <li><strong>Ranquear bem no Google</strong> com SEO otimizado</li>
      </ul>
    </div>

    <div class="gold-line" style="margin: 50px auto;"></div>

    <p style="color: var(--gold); font-family: 'Syne', sans-serif; font-size: 14pt; font-weight: 600;">
      Desenvolvido com excelência para a SIX Saúde
    </p>

    <p style="color: var(--platinum); margin-top: 10px;">
      Estamos à disposição para quaisquer dúvidas, ajustes ou futuras evoluções do projeto.
    </p>

    <p style="color: var(--platinum); margin-top: 40px; font-size: 10pt;">
      Fevereiro de 2026
    </p>
  </div>

</body>
</html>
`;

async function generatePDF() {
  console.log('Iniciando geração do PDF...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  const outputPath = path.join(__dirname, '../SIX_Saude_Documento_Entrega.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  });

  await browser.close();

  console.log(`PDF gerado com sucesso: ${outputPath}`);
}

generatePDF().catch(console.error);

// Work history, newest first. Role titles, summaries, highlight bullets and
// metric labels live in public/locales/{en,ja}/translation.json under
// `experience`, matched by index. `metrics` holds only the language-neutral
// figures; their labels are translated at the same position.
export const experienceData = [
  {
    id: 'duraflame',
    company: 'Duraflame, Inc.',
    start: '2025-01',
    end: null,
    badge: 'current',
    metrics: ['40%', '50K+', '92%'],
    technologies: [
      'GPT-4o',
      'Azure OpenAI',
      'LangGraph',
      'MCP',
      'RAG',
      'BERT',
      'Apache Airflow',
      'Redis',
    ],
  },
  {
    id: 'chemican',
    company: 'Chemican Inc.',
    start: '2021-11',
    end: '2024-12',
    badge: 'data',
    metrics: ['95%', '99.9%', '3'],
    technologies: [
      'Google Cloud',
      'Document AI',
      'BigQuery',
      'dbt',
      'Cloud Run',
      'GitHub Actions',
      'Python',
      'LLMs (Claude, GPT-4, Gemini)',
    ],
  },
  {
    id: 'grab',
    company: 'Grab',
    start: '2016-06',
    end: '2021-10',
    badge: 'backend',
    metrics: [],
    technologies: [
      'Node.js',
      'Go (Golang)',
      'React',
      'PostgreSQL',
      'GraphQL',
      'gRPC',
      'Kafka',
      'Kubernetes',
    ],
  },
];

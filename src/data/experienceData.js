// Work history, newest first. Role titles, summaries, highlight bullets and
// metric labels live in public/locales/{en,ja}/translation.json under
// `experience`, matched by index. `metrics` holds only the language-neutral
// figures; their labels are translated at the same position.
export const experienceData = [
  {
    id: 'apton',
    company: 'Apton Systems, Inc.',
    start: '2025-02',
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
    id: 'regsoft',
    company: 'RegSoft Inc.',
    start: '2022-01',
    end: '2025-01',
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
    id: 'paynex',
    company: 'PayNex Pte. Ltd.',
    start: '2016-08',
    end: '2021-12',
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

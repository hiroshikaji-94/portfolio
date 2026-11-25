import {
  SiApachekafka,
  SiDocker,
  SiGo,
  SiGooglecloud,
  SiKubernetes,
  SiLangchain,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

// Technical Expertise cards. Card titles are translated in the locale files
// under skills.groups.<group id>.items.<item id>; tool names stay as written.
export const skillGroups = [
  {
    id: 'ai',
    items: [
      {
        id: 'llm',
        emoji: '🤖',
        tools: ['GPT-4o', 'Claude', 'Gemini', 'LangGraph', 'MCP'],
      },
      {
        id: 'rag',
        emoji: '🔍',
        tools: ['LlamaIndex', 'Azure AI Search', 'Pinecone', 'Elasticsearch'],
      },
      {
        id: 'dl',
        emoji: '🧠',
        tools: ['PyTorch', 'TensorFlow', 'BERT', 'Hugging Face'],
      },
      {
        id: 'mlops',
        emoji: '📊',
        tools: ['MLflow', 'Azure ML', 'vLLM', 'Power BI'],
      },
    ],
  },
  {
    id: 'data',
    items: [
      {
        id: 'pipelines',
        emoji: '🔄',
        tools: ['Apache Airflow', 'dbt', 'BigQuery', 'Pub/Sub'],
      },
      {
        id: 'databases',
        emoji: '🗄️',
        tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'],
      },
      {
        id: 'cloud',
        emoji: '☁️',
        tools: ['Google Cloud', 'Azure', 'AWS', 'Cloud Run'],
      },
      { id: 'containers', emoji: '📦', tools: ['Docker', 'Kubernetes', 'GKE'] },
    ],
  },
  {
    id: 'software',
    items: [
      {
        id: 'backend',
        emoji: '⚙️',
        tools: ['Python', 'Go', 'Node.js', 'FastAPI', 'Express'],
      },
      {
        id: 'frontend',
        emoji: '⚛️',
        tools: ['React', 'Next.js', 'Tailwind CSS'],
      },
      { id: 'apis', emoji: '🔌', tools: ['REST', 'GraphQL', 'gRPC', 'Kafka'] },
      {
        id: 'devops',
        emoji: '🛠️',
        tools: ['GitHub Actions', 'Jenkins', 'Git', 'CI/CD'],
      },
    ],
  },
];

// Logos in the About section's "Core Technologies" card. `darkColor` replaces
// brand colours that would disappear on the dark theme.
export const coreTech = [
  { name: 'Python', Icon: SiPython, color: '#3776ab', darkColor: '#5a9fd4' },
  { name: 'Go', Icon: SiGo, color: '#00add8' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'React', Icon: SiReact, color: '#149eca', darkColor: '#61dafb' },
  {
    name: 'LangChain',
    Icon: SiLangchain,
    color: '#1c3c3c',
    darkColor: '#7fc8b8',
  },
  { name: 'PyTorch', Icon: SiPytorch, color: '#ee4c2c' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
  {
    name: 'Kubernetes',
    Icon: SiKubernetes,
    color: '#326ce5',
    darkColor: '#5b8def',
  },
  { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285f4' },
  { name: 'Azure', Icon: VscAzure, color: '#0078d4', darkColor: '#3a9be8' },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    color: '#4169e1',
    darkColor: '#6b8cef',
  },
  {
    name: 'Kafka',
    Icon: SiApachekafka,
    color: '#231f20',
    darkColor: '#e2e8f0',
  },
];

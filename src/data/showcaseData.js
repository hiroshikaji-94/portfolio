import {
  FaCartShopping,
  FaCompassDrafting,
  FaLanguage,
  FaPenNib,
  FaRulerCombined,
  FaScaleBalanced,
} from 'react-icons/fa6';

// Portfolio project showcase. The first FEATURED_PROJECT_CUTOFF entries render
// as cards with a screenshot and an `icon`; the rest are listed in the
// "Additional Projects" card.
// Descriptions live in public/locales/{en,ja}/translation.json under `projects`
// and are matched to this list by index, so keep both in the same order.
export const showcaseData = [
  {
    id: crypto.randomUUID(),
    title: 'Writor',
    icon: FaPenNib,
    technologies: ['Bubble.io', 'Astro', 'LLM', 'Generative AI'],
    imageUrl: '/rasters/proj-writor.webp',
    mobileUrl: '/rasters/proj-writor.webp',
    livelink: 'https://writor.ai/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Plan Chat',
    icon: FaCompassDrafting,
    technologies: ['Next.js', 'Three.js', 'Python', 'LLM Agents', 'DXF/DWG'],
    imageUrl: '/rasters/proj-planchat.webp',
    mobileUrl: '/rasters/proj-planchat.webp',
    livelink: 'https://cad.ai-architectures.com/',
  },
  {
    id: crypto.randomUUID(),
    title: 'SpeedLegal',
    icon: FaScaleBalanced,
    technologies: ['Next.js', 'LLM', 'Deep Learning', 'Tailwind CSS'],
    imageUrl: '/rasters/proj-speedlegal.webp',
    mobileUrl: '/rasters/proj-speedlegal.webp',
    livelink: 'https://speedlegal.io/',
  },
  {
    id: crypto.randomUUID(),
    title: 'FloorPlan AI',
    icon: FaRulerCombined,
    technologies: ['Next.js', 'Konva.js', 'Generative AI', 'Tailwind CSS'],
    imageUrl: '/rasters/proj-floorplanai.webp',
    mobileUrl: '/rasters/proj-floorplanai.webp',
    livelink: 'https://www.floorplan-ai.com/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Perci',
    icon: FaCartShopping,
    technologies: ['Next.js', 'LLM', 'Amazon SP-API', 'Tailwind CSS'],
    imageUrl: '/rasters/proj-perci.webp',
    mobileUrl: '/rasters/proj-perci.webp',
    livelink: 'https://perci.ai/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Linnk AI',
    icon: FaLanguage,
    technologies: ['Next.js', 'Vision LLMs', 'Node.js CLI', 'Tailwind CSS'],
    imageUrl: '/rasters/proj-linnk.webp',
    mobileUrl: '/rasters/proj-linnk.webp',
    livelink: 'https://linnk.ai/',
  },
  // Additional Projects: listed as text rows, so they need no screenshot.
  // Add imageUrl and an icon before moving one into the featured cards.
  {
    id: crypto.randomUUID(),
    title: 'AI Topic Explainer',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'LLM'],
    livelink: 'https://ai-topic-explainer-one.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'MeetMind',
    technologies: ['Next.js', 'Groq', 'LLaMA 3.1', 'Whisper', 'Clerk'],
    livelink: 'https://meetmind-kappa.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'ThemeCraft',
    technologies: ['React', 'Create React App', 'OpenAI API'],
    livelink: 'https://themecraft.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'QuizLens',
    technologies: ['React', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'LLM'],
    livelink: 'https://quiz-lens.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'WikiQuiz',
    technologies: ['React', 'Vite', 'REST API', 'LLM'],
    livelink: 'https://ai-wiki-quiz-generator-phi.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'FlashGenius',
    technologies: ['React', 'Tailwind CSS', 'pdf.js', 'jsPDF', 'LLM'],
    livelink: 'https://flash-genius-two.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'AI Quiz Generator',
    technologies: ['Next.js', 'Supabase', 'OpenAI API', 'Tailwind CSS'],
    livelink: 'https://kosidigital.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'AI Recipe Generator',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Gemini'],
    livelink: 'https://ai-recipe-generator-calamo.vercel.app/',
  },
];

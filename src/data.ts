import { Product } from './types';

export const products: Product[] = [
  {
    id: 'gemini-ultra',
    name: 'Gemini Ultra',
    price: 180,
    iconName: 'Sparkles',
    description: '可邀请 5 名家庭成员，专为个人专属',
    features: [
      '完整访问 Gemini Ultra API',
      '多模态 (文字、图片、音频)',
      '25M tokens 上下文窗口'
    ],
    sales: 1243,
    tag: '热门'
  },
  {
    id: 'claude-5x',
    name: 'Claude 5 x',
    price: 298,
    iconName: 'BrainCircuit',
    description: 'Anthropic Claude 深度思考与推理能力',
    features: [
      '深度思考模式',
      '20万 tokens 上下文窗口',
      '高级推理与编程'
    ],
    sales: 2891,
    tag: '畅销'
  },
  {
    id: 'claude-20x',
    name: 'Claude 20 x',
    price: 500,
    iconName: 'Zap',
    description: '面向企业和专业用户的最强 Claude',
    features: [
      '无限深度思考',
      '100万 tokens 上下文窗口',
      '企业级安全防护'
    ],
    sales: 678,
    tag: '专业版'
  },
  {
    id: 'cursor-ultra',
    name: 'Cursor Ultra',
    price: 341,
    iconName: 'Code2',
    description: '无限制的 AI 代码补全，专为开发者打造',
    features: [
      '无限 AI 代码补全',
      '无限慢速请求',
      '10k 次/月快速请求'
    ],
    sales: 4572,
    tag: '本月最畅销'
  },
  {
    id: 'gpt-pro-5x',
    name: 'Gpt Pro 5 x',
    price: 300,
    iconName: 'MessageSquare',
    description: 'OpenAI 旗舰模型，极速响应',
    features: [
      '无限 GPT-4 & GPT-5 访问',
      '1M tokens 上下文窗口',
      '高级联网与代码执行',
      'DALL-E 3 图像生成',
      '自定义 GPT 商店'
    ],
    sales: 1102,
    tag: '超值'
  },
  {
    id: 'gpt-pro-20x',
    name: 'Gpt Pro 20 x',
    price: 520,
    iconName: 'Bot',
    description: 'OpenAI 殿堂级版，适合高频使用者',
    features: [
      '无限 GPT-4 & GPT-5 访问',
      '128k tokens 上下文窗口',
      '高级联网与代码执行',
      'DALL-E 3 图像生成',
      '自定义 GPT 商店'
    ],
    sales: 430,
    tag: '旗舰'
  }
];

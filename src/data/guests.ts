export type Guest = DeepReadonly<{
  name: string;
  locations: string[];
  balance?: string;
  likedDishTraits: string[];
  unlikedDishTraits?: string[];
  likedBeverageTraits: string[];
  type: 'normal' | 'rare' | 'special';
}>;
export const guests = [
  {
    name: '爱丽丝',
    locations: ['魔法森林'],
    balance: '500-800',
    likedDishTraits: ['家常', '高级', '文化底蕴', '甜', '西式'],
    unlikedDishTraits: ['肉', '饱腹', '重油', '猎奇'],
    likedBeverageTraits: ['低酒精', '西洋酒', '现代'],
    type: 'rare',
  },
  {
    name: '八尺大人',
    locations: ['命莲寺'],
    likedDishTraits: ['凉爽', '鲜', '西式', '和风', '适合拍照', '流行·喜爱'],
    likedBeverageTraits: ['低酒精', '可加冰', '西洋酒', '利口酒', '鸡尾酒'],
    type: 'normal',
  },
  {
    name: '白狼天狗',
    locations: ['妖怪之山'],
    likedDishTraits: [
      '肉',
      '重油',
      '饱腹',
      '山珍',
      '鲜',
      '生',
      '咸',
      '招牌',
      '特产',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['中酒精', '高酒精', '烧酒', '清酒'],
    type: 'normal',
  },
  {
    name: '稗田阿求',
    locations: ['人类村落'],
    balance: '500-800',
    likedDishTraits: [
      '和风',
      '甜',
      '文化底蕴',
      '清淡',
      '高级',
      '汤羹',
      '流行·喜爱',
    ],
    unlikedDishTraits: ['咸', '灼热', '重油', '流行·厌恶'],
    likedBeverageTraits: ['可加热', '清酒'],
    type: 'rare',
  },
  {
    name: '豹女',
    locations: ['地灵殿'],
    likedDishTraits: [
      '肉',
      '山珍',
      '海味',
      '重油',
      '高级',
      '生',
      '灼热',
      '特产',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['中酒精', '高酒精', '直饮', '辛'],
    type: 'normal',
  },
  {
    name: '比那名居天子',
    locations: ['博丽神社', '妖怪之山'],
    balance: '2000-3000',
    likedDishTraits: [
      '素',
      '清淡',
      '甜',
      '传说',
      '适合拍照',
      '果味',
      '昂贵',
      '流行·厌恶',
    ],
    unlikedDishTraits: ['肉', '家常', '重油', '流行·喜爱'],
    likedBeverageTraits: ['鸡尾酒', '高酒精'],
    type: 'rare',
  },
  {
    name: '博丽灵梦',
    locations: ['博丽神社', '人类村落', '魔法森林'],
    balance: '150-300',
    likedDishTraits: ['实惠', '饱腹', '甜', '不可思议', '高级', '流行·喜爱'],
    unlikedDishTraits: ['昂贵', '下酒', '流行·厌恶'],
    likedBeverageTraits: ['无酒精', '可加热', '低酒精'],
    type: 'rare',
  },
  {
    name: '橙',
    locations: ['妖怪兽道'],
    balance: '400-600',
    likedDishTraits: ['肉', '水产', '烧烤', '甜', '重油', '流行·喜爱'],
    unlikedDishTraits: ['素', '灼热', '猎奇', '流行·厌恶'],
    likedBeverageTraits: ['水果', '辛'],
    type: 'rare',
  },
  {
    name: '茨木华扇',
    locations: ['人类村落'],
    balance: '400-600',
    likedDishTraits: ['文化底蕴', '家常', '下酒', '和风'],
    unlikedDishTraits: ['实惠', '生', '辣'],
    likedBeverageTraits: ['中酒精', '古典', '直饮'],
    type: 'rare',
  },
  {
    name: '村纱水蜜',
    locations: ['命莲寺'],
    balance: '400-600',
    likedDishTraits: ['咸', '特产', '力量涌现', '鲜', '肉', '高级', '饱腹'],
    unlikedDishTraits: ['素', '小巧', '猎奇', '酸'],
    likedBeverageTraits: ['辛', '高酒精', '可加冰', '西洋酒'],
    type: 'rare',
  },
  {
    name: '道士',
    locations: ['神灵庙'],
    likedDishTraits: [
      '山珍',
      '家常',
      '小巧',
      '清淡',
      '特产',
      '招牌',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['低酒精', '现代', '提神', '苦'],
    type: 'normal',
  },
  {
    name: '地精',
    locations: ['？？？？？', '特殊'],
    likedDishTraits: [
      '凉爽',
      '高级',
      '重油',
      '山珍',
      '灼热',
      '力量涌现',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['清酒', '西洋酒'],
    type: 'normal',
  },
  {
    name: '地狱鸦',
    locations: ['地灵殿'],
    likedDishTraits: [
      '肉',
      '家常',
      '山珍',
      '海味',
      '咸',
      '酸',
      '小巧',
      '燃起来了',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['中酒精', '可加热', '啤酒', '辛', '苦'],
    type: 'normal',
  },
  {
    name: '东风谷早苗',
    locations: ['妖怪之山', '魔法森林'],
    balance: '400-600',
    likedDishTraits: ['和风', '梦幻', '适合拍照', '甜', '家常', '流行·喜爱'],
    unlikedDishTraits: ['猎奇', '生', '重油', '灼热'],
    likedBeverageTraits: [
      '现代',
      '无酒精',
      '水果',
      '清酒',
      '直饮',
      '苦',
      '甘',
      '低酒精',
      '气泡',
    ],
    type: 'rare',
  },
  {
    name: '多多良小伞',
    locations: ['命莲寺'],
    balance: '150-900',
    likedDishTraits: [
      '甜',
      '家常',
      '饱腹',
      '适合拍照',
      '力量涌现',
      '猎奇',
      '不可思议',
      '流行·喜爱',
    ],
    unlikedDishTraits: ['灼热', '汤羹', '辣'],
    likedBeverageTraits: ['水果', '中酒精', '古典', '可加冰'],
    type: 'rare',
  },
  {
    name: '封兽鵺',
    locations: ['命莲寺'],
    balance: '300-500',
    likedDishTraits: [
      '鲜',
      '不可思议',
      '特产',
      '生',
      '肉',
      '招牌',
      '适合拍照',
      '猎奇',
      '流行·厌恶',
    ],
    unlikedDishTraits: ['酸', '西式', '流行·喜爱'],
    likedBeverageTraits: ['烧酒', '古典', '直饮', '可加热'],
    type: 'rare',
  },
  {
    name: '姑获鸟',
    locations: ['地灵殿'],
    likedDishTraits: [
      '水产',
      '家常',
      '清淡',
      '鲜',
      '酸',
      '猎奇',
      '文化底蕴',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['低酒精', '烧酒', '苦', '可加热'],
    type: 'normal',
  },
  {
    name: '古明地觉',
    locations: ['地灵殿'],
    balance: '500-600',
    likedDishTraits: ['小巧', '甜', '梦幻', '特产', '家常', '力量涌现'],
    unlikedDishTraits: ['肉', '山珍', '灼热', '猎奇', '大份'],
    likedBeverageTraits: ['气泡', '提神', '苦', '无酒精'],
    type: 'rare',
  },
  {
    name: '骨女',
    locations: ['旧地狱'],
    likedDishTraits: [
      '素',
      '清淡',
      '生',
      '鲜',
      '凉爽',
      '猎奇',
      '菌类',
      '酸',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['低酒精', '可加热', '啤酒', '水果', '苦'],
    type: 'normal',
  },
  {
    name: '鬼',
    locations: ['旧地狱'],
    likedDishTraits: [
      '肉',
      '高级',
      '传说',
      '下酒',
      '鲜',
      '力量涌现',
      '燃起来了',
      '特产',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['中酒精', '高酒精', '烧酒', '直饮'],
    type: 'normal',
  },
  {
    name: '河城荷取',
    locations: ['妖怪之山'],
    balance: '400-500',
    likedDishTraits: ['高级', '下酒', '咸', '招牌', '水产', '猎奇'],
    unlikedDishTraits: ['素', '文化底蕴', '山珍'],
    likedBeverageTraits: ['直饮', '高酒精', '中酒精', '清酒'],
    type: 'rare',
  },
  {
    name: '河童',
    locations: ['博丽神社', '红魔馆', '魔法森林', '妖怪之山'],
    likedDishTraits: [
      '招牌',
      '大份',
      '高级',
      '小巧',
      '海味',
      '灼热',
      '猎奇',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['甘'],
    type: 'normal',
  },
  {
    name: '黑谷山女',
    locations: ['旧地狱'],
    balance: '250-400',
    likedDishTraits: ['猎奇', '甜', '适合拍照', '生', '鲜', '流行·喜爱'],
    unlikedDishTraits: ['重油', '灼热', '咸'],
    likedBeverageTraits: ['低酒精', '中酒精', '啤酒', '甘'],
    type: 'rare',
  },
  {
    name: '红美铃',
    locations: ['红魔馆'],
    balance: '200-400',
    likedDishTraits: ['中华', '肉', '饱腹', '力量涌现', '流行·喜爱'],
    unlikedDishTraits: ['西式', '猎奇', '果味', '流行·厌恶'],
    likedBeverageTraits: ['提神', '可加热', '古典'],
    type: 'rare',
  },
  {
    name: '魂魄妖梦',
    locations: ['妖怪兽道', '人类村落', '博丽神社', '迷途竹林'],
    balance: '300-400',
    likedDishTraits: ['力量涌现', '家常', '鲜', '清淡'],
    unlikedDishTraits: ['重油', '猎奇'],
    likedBeverageTraits: ['无酒精', '可加热', '水果'],
    type: 'special',
  },
  {
    name: '火焰猫燐',
    locations: ['地灵殿', '旧地狱'],
    balance: '500-600',
    likedDishTraits: ['水产', '鲜', '甜', '梦幻', '海味', '猎奇', '流行·喜爱'],
    unlikedDishTraits: ['生', '灼热'],
    likedBeverageTraits: ['清酒', '水果', '低酒精'],
    type: 'rare',
  },
  {
    name: '霍青娥',
    locations: ['神灵庙'],
    balance: '400-900',
    likedDishTraits: [
      '传说',
      '小巧',
      '甜',
      '特产',
      '素',
      '不可思议',
      '中华',
      '流行·喜爱',
    ],
    unlikedDishTraits: ['饱腹', '重油'],
    likedBeverageTraits: ['低酒精', '清酒', '水果', '现代'],
    type: 'rare',
  },
  {
    name: '僵尸',
    locations: ['神灵庙'],
    likedDishTraits: ['全部'],
    likedBeverageTraits: ['全部'],
    type: 'normal',
  },
  {
    name: '蕾米莉亚',
    locations: ['红魔馆（剧情角色）', '特殊'],
    balance: '',
    likedDishTraits: ['西式', '甜', '生', '高级'],
    unlikedDishTraits: [],
    likedBeverageTraits: ['甘', '西洋酒', '古典', '水果'],
    type: 'special',
  },
  {
    name: '莉格露',
    locations: ['妖怪兽道'],
    balance: '200-400',
    likedDishTraits: ['甜', '生', '肉', '猎奇'],
    unlikedDishTraits: ['素', '清淡', '凉爽'],
    likedBeverageTraits: ['低酒精', '可加冰'],
    type: 'rare',
  },
  {
    name: '灵乌路空',
    locations: ['地灵殿', '旧地狱'],
    balance: '500-800',
    likedDishTraits: ['力量涌现', '重油', '咸', '肉', '辣', '灼热'],
    unlikedDishTraits: ['菌类', '清淡'],
    likedBeverageTraits: ['中酒精', '可加热', '鸡尾酒'],
    type: 'rare',
  },
  {
    name: '露米娅',
    locations: ['妖怪兽道'],
    balance: '150-350',
    likedDishTraits: ['猎奇', '生', '饱腹', '招牌', '肉', '流行·喜爱'],
    unlikedDishTraits: ['下酒', '昂贵', '流行·厌恶'],
    likedBeverageTraits: ['苦', '气泡'],
    type: 'rare',
  },
  {
    name: '蟒蛇精',
    locations: ['妖怪兽道', '旧地狱', '妖怪之山'],
    likedDishTraits: ['肉', '下酒', '山珍', '力量涌现', '流行·喜爱'],
    likedBeverageTraits: ['烧酒', '清酒'],
    type: 'normal',
  },
  {
    name: '谜之人形',
    locations: ['魔法森林'],
    likedDishTraits: [
      '家常',
      '咸',
      '生',
      '猎奇',
      '适合拍照',
      '菌类',
      '小巧',
      '梦幻',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['气泡', '苦', '提神', '水果'],
    type: 'normal',
  },
  {
    name: '魔法使',
    locations: ['魔法森林'],
    likedDishTraits: [
      '素',
      '家常',
      '高级',
      '传说',
      '清淡',
      '西式',
      '鲜',
      '适合拍照',
      '凉爽',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['可加热', '西洋酒', '鸡尾酒', '提神'],
    type: 'normal',
  },
  {
    name: '帕秋莉',
    locations: ['红魔馆', '地灵殿'],
    balance: '600-1000',
    likedDishTraits: ['适合拍照', '西式', '甜', '梦幻', '高级'],
    unlikedDishTraits: ['生', '灼热', '猎奇', '咸'],
    likedBeverageTraits: ['利口酒', '鸡尾酒', '气泡'],
    type: 'rare',
  },
  {
    name: '蓬莱山辉夜',
    locations: ['迷途竹林'],
    balance: '1000-1500',
    likedDishTraits: ['传说', '不可思议', '和风', '文化底蕴', '流行·喜爱'],
    unlikedDishTraits: ['招牌', '大份', '猎奇', '流行·厌恶'],
    likedBeverageTraits: ['清酒', '现代', '古典'],
    type: 'rare',
  },
  {
    name: '琪露诺',
    locations: ['红魔馆', '妖怪之山'],
    balance: '100-200',
    likedDishTraits: ['凉爽', '甜', '适合拍照', '猎奇', '流行·厌恶'],
    unlikedDishTraits: ['昂贵', '文化底蕴', '下酒', '流行·喜爱'],
    likedBeverageTraits: ['水果', '甘', '可加冰'],
    type: 'rare',
  },
  {
    name: '犬走椛',
    locations: ['妖怪之山'],
    balance: '300-400',
    likedDishTraits: ['重油', '肉', '下酒', '山珍', '大份'],
    unlikedDishTraits: ['清淡', '猎奇', '素'],
    likedBeverageTraits: ['中酒精', '高酒精', '直饮'],
    type: 'rare',
  },
  {
    name: '人类男性',
    locations: ['人类村落', '命莲寺', '神灵庙'],
    likedDishTraits: [
      '肉',
      '下酒',
      '和风',
      '咸',
      '鲜',
      '灼热',
      '文化底蕴',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['可加热', '烧酒'],
    type: 'normal',
  },
  {
    name: '人类女性',
    locations: ['人类村落', '博丽神社'],
    likedDishTraits: ['招牌', '水产', '高级', '咸', '鲜', '凉爽', '流行·喜爱'],
    likedBeverageTraits: ['可加冰'],
    type: 'normal',
  },
  {
    name: '人类小孩',
    locations: ['人类村落', '博丽神社', '命莲寺', '神灵庙'],
    likedDishTraits: [
      '招牌',
      '肉',
      '家常',
      '饱腹',
      '中华',
      '咸',
      '甜',
      '凉爽',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['无酒精'],
    type: 'normal',
  },
  {
    name: '人类长者',
    locations: ['人类村落', '博丽神社', '神灵庙'],
    likedDishTraits: ['招牌', '高级', '适合拍照', '灼热', '流行·喜爱'],
    likedBeverageTraits: ['低酒精'],
    type: 'normal',
  },
  {
    name: '森近霖之助',
    locations: ['人类村落'],
    balance: '250-400',
    likedDishTraits: ['鲜', '家常', '饱腹', '流行·喜爱'],
    unlikedDishTraits: ['下酒', '猎奇', '重油', '流行·厌恶'],
    likedBeverageTraits: ['烧酒', '啤酒'],
    type: 'special',
  },
  {
    name: '森之妖精',
    locations: ['魔法森林'],
    likedDishTraits: [
      '凉爽',
      '小巧',
      '甜',
      '梦幻',
      '招牌',
      '家常',
      '和风',
      '中华',
      '鲜',
      '招牌',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['无酒精', '低酒精', '清酒', '甘', '水果'],
    type: 'normal',
  },
  {
    name: '僧侣',
    locations: ['命莲寺'],
    likedDishTraits: ['肉', '家常', '下酒', '力量涌现', '山珍流行·喜爱'],
    likedBeverageTraits: ['中酒精', '高酒精', '古典', '可加热', '烧酒'],
    type: 'normal',
  },
  {
    name: '山佬',
    locations: ['妖怪之山'],
    likedDishTraits: [
      '肉',
      '家常',
      '高级',
      '饱腹',
      '鲜',
      '力量涌现',
      '猎奇',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['高酒精', '直饮', '古典', '烧酒'],
    type: 'normal',
  },
  {
    name: '山童',
    locations: ['妖怪之山'],
    likedDishTraits: [
      '大份',
      '高级',
      '小巧',
      '山珍',
      '灼热',
      '猎奇',
      '招牌',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['苦', '中酒精'],
    type: 'normal',
  },
  {
    name: '上白泽慧音',
    locations: ['人类村落'],
    balance: '400-800',
    likedDishTraits: [
      '清淡',
      '素',
      '家常',
      '和风',
      '中华',
      '文化底蕴',
      '流行·喜爱',
    ],
    unlikedDishTraits: ['重油', '大份', '咸', '流行·厌恶'],
    likedBeverageTraits: ['烧酒', '清酒', '利口酒'],
    type: 'rare',
  },
  {
    name: '矢田寺成美',
    locations: ['魔法森林', '命莲寺'],
    balance: '300-600',
    likedDishTraits: ['特产', '和风', '文化底蕴', '山珍', '清淡'],
    unlikedDishTraits: ['饱腹', '重油'],
    likedBeverageTraits: ['直饮', '古典', '低酒精', '中酒精', '可加冰'],
    type: 'rare',
  },
  {
    name: '水桥帕露西',
    locations: ['旧地狱'],
    balance: '300-400',
    likedDishTraits: ['咸', '鲜', '辣', '酸', '果味', '肉', '流行·厌恶'],
    unlikedDishTraits: ['甜', '流行·喜爱'],
    likedBeverageTraits: ['辛', '无酒精', '直饮', '苦', '可加热'],
    type: 'rare',
  },
  {
    name: '苏我屠自古',
    locations: ['神灵庙'],
    balance: '500-600',
    likedDishTraits: [
      '饱腹',
      '家常',
      '重油',
      '烧烤',
      '力量涌现',
      '招牌',
      '和风',
    ],
    unlikedDishTraits: ['甜', '凉爽'],
    likedBeverageTraits: ['高酒精', '啤酒', '烧酒', '苦'],
    type: 'rare',
  },
  {
    name: '藤原妹红',
    locations: ['迷途竹林'],
    balance: '300-600',
    likedDishTraits: ['果味', '燃起来了', '辣', '灼热'],
    unlikedDishTraits: ['高级', '昂贵', '不可思议'],
    likedBeverageTraits: ['烧酒', '辛', '苦'],
    type: 'rare',
  },
  {
    name: '土蜘蛛',
    locations: ['旧地狱'],
    likedDishTraits: [
      '肉',
      '重油',
      '山珍',
      '饱腹',
      '鲜',
      '甜',
      '生',
      '大份',
      '猎奇',
      '流行·喜爱',
    ],
    likedBeverageTraits: [
      '中酒精',
      '可加冰',
      '利口酒',
      '直饮',
      '甘',
      '苦',
      '现代',
    ],
    type: 'normal',
  },
  {
    name: '物部布都',
    locations: ['神灵庙'],
    balance: '600-900',
    likedDishTraits: [
      '高级',
      '传说',
      '清淡',
      '燃起来了',
      '山珍',
      '和风',
      '流行·喜爱',
    ],
    unlikedDishTraits: ['西式', '生', '流行·厌恶'],
    likedBeverageTraits: ['可加热', '中酒精', '气泡', '直饮'],
    type: 'rare',
  },
  {
    name: '雾雨魔理沙',
    locations: ['任意地点'],
    balance: '3000-5000',
    likedDishTraits: ['和风', '菌类', '传说', '灼热', '重油', '流行·喜爱'],
    unlikedDishTraits: ['猎奇', '流行·厌恶'],
    likedBeverageTraits: ['低酒精', '可加冰'],
    type: 'rare',
  },
  {
    name: '西行寺幽幽子',
    locations: ['红魔馆', '博丽神社', '迷途竹林'],
    balance: '1300-1800',
    likedDishTraits: [
      '传说',
      '大份',
      '肉',
      '水产',
      '高级',
      '饱腹',
      '中华',
      '和风',
    ],
    unlikedDishTraits: ['清淡', '素', '小巧'],
    likedBeverageTraits: ['鸡尾酒', '高酒精', '可加冰'],
    type: 'special',
  },
  {
    name: '仙人',
    locations: ['神灵庙'],
    likedDishTraits: [
      '小巧',
      '果味',
      '素',
      '清淡',
      '高级',
      '梦幻',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['低酒精', '气泡', '甘', '水果', '清酒', '古典'],
    type: 'normal',
  },
  {
    name: '星熊勇仪',
    locations: ['旧地狱', '地灵殿'],
    balance: '600-1000',
    likedDishTraits: [
      '招牌',
      '传说',
      '下酒',
      '燃起来了',
      '和风',
      '大份',
      '力量涌现',
    ],
    unlikedDishTraits: ['素', '猎奇', '小巧'],
    likedBeverageTraits: ['高酒精', '清酒', '古典', '啤酒'],
    type: 'rare',
  },
  {
    name: '鸦天狗',
    locations: ['博丽神社', '红魔馆', '迷途竹林', '妖怪之山'],
    likedDishTraits: ['招牌', '适合拍照', '菌类', '高级', '流行·喜爱'],
    likedBeverageTraits: ['烧酒', '清酒'],
    type: 'normal',
  },
  {
    name: '妖怪狐',
    locations: ['妖怪兽道', '红魔馆', '迷途竹林', '妖怪之山', '旧地狱'],
    likedDishTraits: ['招牌', '肉', '和风', '中华', '小巧', '流行·喜爱'],
    likedBeverageTraits: ['直饮'],
    type: 'normal',
  },
  {
    name: '妖怪狸',
    locations: [
      '妖怪兽道',
      '博丽神社',
      '红魔馆',
      '迷途竹林',
      '魔法森林',
      '妖怪之山',
      '命莲寺',
    ],
    likedDishTraits: ['招牌', '肉', '重油', '咸', '饱腹', '山珍', '流行·喜爱'],
    likedBeverageTraits: ['甘', '辛'],
    type: 'normal',
  },
  {
    name: '妖怪猫',
    locations: [
      '妖怪兽道',
      '博丽神社',
      '红魔馆',
      '迷途竹林',
      '魔法森林',
      '妖怪之山',
      '地灵殿',
    ],
    likedDishTraits: ['招牌', '肉', '凉爽', '海味', '中华', '流行·喜爱'],
    likedBeverageTraits: ['可加冰', '啤酒', '苦'],
    type: 'normal',
  },
  {
    name: '妖怪鼠',
    locations: ['命莲寺'],
    likedDishTraits: ['大份', '果味', '家常', '高级', '梦幻', '流行·喜爱'],
    likedBeverageTraits: ['鸡尾酒', '水果', '甘', '现代', '利口酒'],
    type: 'normal',
  },
  {
    name: '妖怪兔',
    locations: [
      '妖怪兽道',
      '红魔馆',
      '迷途竹林',
      '魔法森林',
      '妖怪之山',
      '地灵殿',
    ],
    likedDishTraits: [
      '招牌',
      '果味',
      '凉爽',
      '家常',
      '咸',
      '鲜',
      '甜',
      '力量涌现',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['无酒精'],
    type: 'normal',
  },
  {
    name: '妖精',
    locations: ['红魔馆', '迷途竹林', '魔法森林'],
    likedDishTraits: [
      '甜',
      '梦幻',
      '适合拍照',
      '果味',
      '特产',
      '菌类',
      '鲜',
      '流行·喜爱',
    ],
    likedBeverageTraits: ['气泡', '直饮', '水果', '甘'],
    type: 'normal',
  },
  {
    name: '伊吹萃香',
    locations: ['博丽神社', '妖怪之山'],
    balance: '600-800',
    likedDishTraits: ['肉', '下酒', '力量涌现', '小巧', '和风', '流行·喜爱'],
    unlikedDishTraits: ['重油', '流行·厌恶'],
    likedBeverageTraits: ['高酒精', '直饮'],
    type: 'rare',
  },
  {
    name: '因幡帝',
    locations: ['迷途竹林'],
    balance: '200-400',
    likedDishTraits: ['小巧', '甜', '传说', '凉爽', '梦幻', '流行·喜爱'],
    unlikedDishTraits: ['山珍', '重油', '猎奇', '流行·厌恶'],
    likedBeverageTraits: ['甘', '无酒精', '水果'],
    type: 'rare',
  },
  {
    name: '左卫门',
    locations: ['人类村落', '博丽神社'],
    likedDishTraits: ['生', '猎奇', '力量涌现', '高级', '流行·喜爱'],
    likedBeverageTraits: ['高酒精'],
    type: 'normal',
  },
  {
    name: '座敷童子',
    locations: ['博丽神社'],
    likedDishTraits: ['招牌', '凉爽', '和风', '山珍', '生', '甜', '流行·喜爱'],
    likedBeverageTraits: ['无酒精', '低酒精'],
    type: 'normal',
  },
] as Guest[];

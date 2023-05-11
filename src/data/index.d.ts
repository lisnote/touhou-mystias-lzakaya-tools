export type Cookware = '烤架' | '料理台' | '油锅' | '蒸锅' | '煮锅';
export type FootFeature =
  | '昂贵'
  | '饱腹'
  | '不可思议'
  | '传说'
  | '高级'
  | '果味'
  | '海味'
  | '和风'
  | '家常'
  | '菌类'
  | '辣'
  | '力量涌现'
  | '凉爽'
  | '猎奇'
  | '梦幻'
  | '清淡'
  | '燃起来了'
  | '肉'
  | '山珍'
  | '烧烤'
  | '生'
  | '实惠'
  | '适合拍照'
  | '水产'
  | '素'
  | '汤羹'
  | '特产'
  | '甜'
  | '文化底蕴'
  | '西式'
  | '下酒'
  | '鲜'
  | '咸'
  | '小巧'
  | '招牌'
  | '中华'
  | '重油'
  | '灼热'
  | '流行·喜爱'
  | '流行·厌恶'
  | '酸'
  | '大份'
  | '全部';
export type BeverageFeature =
  | '低酒精'
  | '甘'
  | '高酒精'
  | '古典'
  | '鸡尾酒'
  | '可加冰'
  | '可加热'
  | '苦'
  | '利口酒'
  | '啤酒'
  | '气泡'
  | '清酒'
  | '烧酒'
  | '水果'
  | '提神'
  | '无酒精'
  | '西洋酒'
  | '现代'
  | '辛'
  | '直饮'
  | '中酒精'
  | '全部';
export type Location =
  | '博丽神社'
  | '地灵殿'
  | '红魔馆'
  | '旧地狱'
  | '迷途竹林'
  | '命莲寺'
  | '魔法森林'
  | '人类村落'
  | '神灵庙'
  | '特殊'
  | '妖怪兽道'
  | '妖怪之山'
  | '红魔馆（剧情角色）'
  | '？？？？？';

export type Beverage = {
  name: String;
  price: number;
  features: BeverageFeature[];
  obtaining: String;
  description: String;
};

export type Dish = {
  name: String;
  cookware: Cookware;
  price: Number;
  ingredients: String[];
  features: FootFeature[];
  missingFeatures: FootFeature[];
  cookingTime: Number;
  unlock: String;
  description: String;
};

export type GuestType = 'normal' | 'rare' | 'special';
export type Guest = {
  name: String;
  locations: Location[];
  balance?: Number[];
  likedDishTraits: FootFeature[];
  unlikedDishTraits?: FootFeature[];
  likedBeverageTraits: BeverageFeature[];
  type: GuestType;
};

export type IngredientType = '海鲜' | '其他' | '肉类' | '蔬菜';
export type Ingredient = {
  name: String;
  type: IngredientType;
  features: FootFeature[];
  relatedFoods: string[];
  description: string;
};

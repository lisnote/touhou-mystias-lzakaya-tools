import { beverages } from './beverages';
import { dishes } from './dishes';
import { ingredients } from './ingredients';
import { guests } from './guests';
import { locations } from './locations';

const data = {
  beverages,
  dishes,
  guests,
  ingredients,
};

export * from './beverages';
export * from './dishes';
export * from './ingredients';
export * from './guests';
export * from './locations';
export * from './index.d';
export { data as default, locations };

import { DeepReadonly as VueDeepReadonly } from 'vue';
declare global {
  type DeepReadonly<T> = VueDeepReadonly<T>;
  type LooseAutocomplete<T extends string> = T | Omit<string, T>;
}

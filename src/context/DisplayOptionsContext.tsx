import { createContext } from 'react';

export interface DisplayOptions {
  showAll: boolean;
  setShowAll(value: boolean): void;
}

export const DisplayOptionsContext = createContext<DisplayOptions>({
  showAll: false,
  setShowAll: (value: boolean) => {},
});

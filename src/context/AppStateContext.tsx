import { createContext } from 'react';

interface CageDefinition {
  total: number;
  size: number;
  inclusions: number[];
  exclusions: number[];
}

export interface AppState {
  definitions: CageDefinition[];
}

export interface AppContext {
  appState: AppState;

  setAppState(value: AppState): void;
}

export const AppStateContext = createContext<AppContext>({
  appState: {
    definitions: [],
  },
  setAppState: (value: AppState) => {},
});

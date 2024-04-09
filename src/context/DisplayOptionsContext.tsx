import { createContext } from 'react';

export interface DisplayOptions {
  groupNum: boolean;

  setGroupNum(value: boolean): void;
}

export const DisplayOptionsContext = createContext<DisplayOptions>({
  groupNum: false,
  setGroupNum: (value: boolean) => {},
});

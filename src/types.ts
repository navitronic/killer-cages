export interface CageDefinition {
  total: number;
  size: number;
}

export interface CageState {
  definition: CageDefinition;
  inclusions: number[];
  exclusions: number[];
  options: CageCandidate[];
}

export interface CageCandidate {
  candidates: number[];
  valid: boolean;
}

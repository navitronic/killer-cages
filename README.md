# Killer Sudoku Cage Calculator

A small web tool for finding valid Killer Sudoku cage combinations. Enter a cage total, cage size, optional disallowed numbers, and optional required numbers to see every matching digit combination.

## Local development

```bash
npm install
npm start
```

The app runs locally with Vite.

## Checks

```bash
npm test
npm run build
npm run build-storybook
npm audit --audit-level=moderate
```

## Deployment

```bash
npm run deploy
```

This builds the app and publishes the `build` directory to GitHub Pages. Generated `build` and `storybook-static` output is ignored and should not be committed.

## Input examples

- Disallowed numbers: `1 2 3`
- Required numbers: `4, 5`
- Mixed separators are accepted: `1, 2 3`

Numbers must be digits from 1 to 9. Cage totals must be from 1 to 45, and cage sizes must be from 1 to 9.

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

The app is served from `https://navitronic.github.io/killer-cages`, so Vite uses `base: '/killer-cages/'`. Pushing to `main` also runs the GitHub Pages workflow, which builds and publishes the `build` directory. Generated `build` and `storybook-static` output is ignored and should not be committed.

## Input examples

- Disallowed numbers: `1 2 3`
- Required numbers: `4, 5`
- Mixed separators are accepted: `1, 2 3`

Numbers must be digits from 1 to 9. Cage totals must be from 1 to 45, and cage sizes must be from 1 to 9.

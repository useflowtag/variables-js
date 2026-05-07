<h1 align="center">Flowtag Variables</h1>
<p align="center">Runtime agnostic client for Flowtag variables</p>

## Installation

```bash
# pnpm
pnpm add @flowtag/variables
# bun
bun add @flowtag/variables
# yarn
yarn add @flowtag/variables
# npm
npm install @flowtag/variables
```

## Usage

```ts
import { createClient } from "@flowtag/variables";

const flowtag = createClient(process.env.FLOWTAG_VARIABLES_TOKEN!);

// Toggle (boolean)
const darkMode = await flowtag.getVariable<boolean>("wkpthnbqafoijselxvudcmrz"); // replace with your variable id

// JSON variable (typed object)
const config = await flowtag.getVariable<{ limit: number }>("zdjylvmocbqsaepxnrfkuthw"); // replace with your variable id
```

## Documentation
You can find it [here](https://docs.flowtag.dev/sdk/js/variables)

## Contributing

Thanks for your interest in contributing to Flowtag! 💛

### Development setup

1. Fork the repo and clone your fork.
2. Install dependencies (pnpm):

    ```bash
    pnpm install
    ```

3. Build the package:

    ```bash
    pnpm build
    ```

### Making changes

* Keep PRs small and focused.
* If you're adding a feature, please include:

  * a brief explanation of the use case
  * tests (when applicable)
  * documentation updates (README/examples) if the public API changes

### Commit & PR guidelines

* Use clear commit messages (e.g. `fix: ...`, `feat: ...`, `docs: ...`).
* Open a PR against the `main` branch.
* In the PR description, include:

  * what changed
  * why it changed
  * how to test it locally

### Reporting bugs / requesting features

* For bugs: include reproduction steps, expected vs actual behavior, and environment details (OS, Node/Bun version, package version).
* For features: describe the problem you're trying to solve and a suggested API (if you have one).

### Code style

* Follow the existing code style and patterns in the repo.
* Keep public APIs stable and well-documented.
* Prefer small, composable functions and readable names over cleverness.

By contributing, you agree that your contributions will be licensed under the project's license.

## License
[useflowtag/variables-js](https://github.com/useflowtag/variables-js) is licensed under [Apache-2.0 License](https://github.com/useflowtag/variables-js/blob/main/LICENSE)

---
© 2026 Flowtag. All rights reserved.

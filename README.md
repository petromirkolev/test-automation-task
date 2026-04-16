# Demo Hosting App - Playwright Automation

This project contains Playwright automated tests for the demo hosting services web application.

## Tech stack

- Playwright
- TypeScript

## Setup

1. Clone the repository

```bash
git clone https://github.com/petromirkolev/test-automation-task.git
```

2. Install dependencies:

```bash
npm install
npx playwright install
```

3. Run tests

### Run all tests:

```bash
npm test
```

### Run tests in headed mode:

```bash
npm run test:headed
```

### Run tests with Playwright UI:

```bash
npm run test:ui
```

### Run tests in debug mode

```bash
npm run test:debug
```

## Notes

- The application requires a demoToken query parameter in the URL.
- Test execution uses a clean browser context to avoid state leakage from localStorage.

## Task coverage

- TC#1 Add an email account: implemented in "tests/email-accounts.spec.ts".
- TC#2 Add an empty email forwarder: implemented in "tests/email-forwarders.spec.ts".

# Demo Hosting App - Playwright Automation

This repository contains a Playwright + TypeScript automation solution for the demo hosting services web application provided in the assignment.

It covers the 2 required scenarios from the task and includes a small amount of focused additional validation coverage around the same features.

## Tech stack

- Playwright
- TypeScript

## Project structure

- "tests/app.spec.ts" – basic app access checks
- "tests/email-accounts.spec.ts" – Email Accounts scenarios
- "tests/email-forwarders.spec.ts" – Email Forwarders scenarios
- "pages/" – Page Object Models
- "fixtures/" – Playwright fixtures for page objects
- "utils/" – shared constants and helpers
- "test-data/" – test input data
- "test-plan.md" – test plan and covered scenarios

## Setup

1. Clone the repository

```bash
git clone https://github.com/petromirkolev/test-automation-task.git
cd test-automation-task
```

2. Install dependencies:

```bash
npm install
npx playwright install
```

"npx playwright install" is required at least once to download browser binaries.

3. Run tests

### Run only the 2 assignment-required test cases (TC#1 and TC#2):

```bash
npm run test:required
```

### Run the full suite:

```bash
npm test
```

### Run tests with Playwright UI:

```bash
npm run test:ui
```

### Run tests in headed mode:

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

## Notes

- The application requires a demoToken query parameter in the URL.
- Test execution uses a clean browser context to avoid state leakage from localStorage.

## Required task coverage

### TC#1 Add an email account

Implemented in tests/email-accounts.spec.ts

Covered flow:

- open app with demo token
- navigate to Email > Accounts
- verify the available domain list
- select site-tools-demo.net
- enter account name
- generate password
- verify password is populated
- create the account
- verify success message
- verify the created account appears in the table

### TC#2 Add an empty email Forwarder

Implemented in tests/email-forwarders.spec.ts

Covered flow:

- open app with demo token
- navigate to Email > Forwarders
- verify the available domain list
- select site-tools-demo.net
- leave fields empty
- click Create
- verify the required field validation for “Forward all messages sent to:”

## Additional coverage

In addition to the 2 required scenarios, the suite includes a few focused validation checks around the same features, such as:

- app access checks
- duplicate email account validation
- invalid email account name checks
- additional forwarder validation checks

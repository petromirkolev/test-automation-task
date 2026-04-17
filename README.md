# Playwright Automation Task - Demo Hosting App

[![Playwright Tests](https://github.com/petromirkolev/test-automation-task/actions/workflows/playwright.yml/badge.svg)](https://github.com/petromirkolev/test-automation-task/actions/workflows/playwright.yml)

This repository contains a Playwright + TypeScript automation solution for the demo hosting services web application provided in the assignment.

It covers the 2 required scenarios from the task and includes a small amount of focused additional validation coverage around the same features.

## Tech stack

- Playwright
- TypeScript

## Project structure

- "tests/app.spec.ts" - Basic app access checks
- "tests/email-accounts.spec.ts" - Email Accounts scenarios
- "tests/email-forwarders.spec.ts" - Email Forwarders scenarios
- "tests/token-validation.spec.ts" - Demo token payload validation checks
- "pages/" - Page Object Models
- "fixtures/" - Playwright fixtures for page objects
- "utils/" - Shared constants and helpers
- "test-data/" - Test input data
- "test-plan.md" - Test plan and covered scenarios

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
- The assignment-provided demo token is used by default.
- The token can optionally be overridden with the DEMO_JWT_TOKEN environment variable.
- Test execution uses a clean browser context to avoid state leakage from localStorage.
- The suite is configured to run across Chromium, Firefox, and WebKit.

## Required task coverage

### TC#1 Add an email account

Implemented in tests/email-accounts.spec.ts

Covered flow:

- Open app with demo token
- Navigate to Email > Accounts
- Verify the available domains in the domain drop-down
- Select site-tools-demo.net
- Enter account name
- Generate password
- Verify password is populated
- Create the account
- Verify account creation success message
- Verify the created account appears in the email accounts list

### TC#2 Add an empty email Forwarder

Implemented in tests/email-forwarders.spec.ts

Covered flow:

- Open app with demo token
- Navigate to Email > Forwarders
- Verify the available domains in the domain drop-down
- Select site-tools-demo.net
- Leave fields empty
- Click Create
- Verify the required field validation for “Forward all messages sent to:”

## Additional coverage

In addition to the 2 required scenarios, the suite includes a few focused validation checks around the same features, such as:

- App access checks
- Demo token payload validation
- Duplicate email account validation
- Invalid email account name checks
- Invalid password checks
- Additional forwarder validation checks

# Playwright Automation Task - Demo Hosting App

[![Playwright Tests](https://github.com/petromirkolev/test-automation-task/actions/workflows/playwright.yml/badge.svg)](https://github.com/petromirkolev/test-automation-task/actions/workflows/playwright.yml)

This repository contains a Playwright + TypeScript automation solution for the demo hosting services web application provided in the assignment.

It covers the 2 required scenarios from the task and includes a small amount of focused additional validation coverage around the same features.

## Tech stack

- Playwright
- TypeScript

## Project structure

- `tests/app.spec.ts` - Basic app access checks
- `tests/email-accounts.spec.ts` - Email Accounts scenarios
- `tests/email-forwarders.spec.ts` - Email Forwarders scenarios
- `tests/token-validation.spec.ts` - Demo token payload validation checks
- `pages/` - Page Object Models
- `fixtures/` - Playwright fixtures for page objects
- `utils/` - Shared constants and helpers
- `test-data/` - Test input data
- `test-plan.md` - Test plan and covered scenarios

## Approach and design choices

- **Page Object Model (POM)** is used to keep page interactions reusable and easier to maintain
- **Playwright fixtures** are used to provide page objects cleanly to tests and reduce repeated setup
- **Stable selector strategy** is preferred, using reliable "data-e2e" locators instead of brittle DOM-dependent selectors
- **Environment variables** are used for base URL and demo token configuration instead of hard-coded values
- **Focused additional coverage** was added only around the same core assignment features, to show validation thinking without overscoping
- **Clean browser context** is used to avoid state leakage between tests

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

3. Create a local environment file

Copy .env.example to .env.

```bash
cp .env.example .env
```

4. Run tests

### Run only the 2 assignment-required test cases (TC#1 and TC#2)

```bash
npm run test:required
```

### Run the full suite

```bash
npm test
```

### Run tests with Playwright UI

```bash
npm run test:ui
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

## Environment variables

The project uses environment variables for configuration instead of hard-coded values.

### Required variables

- **BASE_URL** - The target application URL
- **DEMO_JWT_TOKEN** - The demo JWT token required by the application

### Notes

- `.env.example` is included as a setup template
- `.env` is intended for local use only and should not be committed
- If a required variable is missing, the test run fails early with a clear error message

## Notes

- The application requires a `demoToken` query parameter in the URL.
- The token is loaded from the `DEMO_JWT_TOKEN` environment variable
- The target URL is loaded from the `BASE_URL` environment variable
- Test execution uses a clean browser context to avoid state leakage from localStorage
- The suite is configured to run across Chromium, Firefox, and WebKit

## Required task coverage

### TC#1 Add an email account

Implemented in `tests/email-accounts.spec.ts`

Covered flow:

- Open app with demo token
- Navigate to Email > Accounts
- Verify the available domains in the domain drop-down
- Select `site-tools-demo.net`
- Enter account name
- Generate password
- Verify password is populated
- Create the account
- Verify account creation success message
- Verify the created account appears in the email accounts list

### TC#2 Add an empty email Forwarder

Implemented in `tests/email-forwarders.spec.ts`

Covered flow:

- Open app with demo token
- Navigate to Email > Forwarders
- Verify the available domains in the domain drop-down
- Select `site-tools-demo.net`
- Leave fields empty
- Click Create
- Verify the required field validation for `Forward all messages sent to:`

## Additional coverage

In addition to the 2 required scenarios, the suite includes a few focused validation checks around the same features, such as:

- App access checks
- Demo token payload validation
- Duplicate email account validation
- Invalid email account name checks
- Invalid password checks
- Additional forwarder validation checks

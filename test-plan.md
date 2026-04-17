# Test Plan – Demo Hosting App Automation Task

## Objective

Provide Playwright automation for the required assignment scenarios and a small set of additional relevant validation checks for the same feature area.

## Scope

### Required scope

- TC#1 Add an email account
- TC#2 Add an empty email forwarder

### Additional focused scope

- Application access and demo token validation
- Email account validation checks
- Forwarder validation checks

---

## Environment

- Application: Demo Hosting App
- Entry: URL with "demoToken" query parameter
- Test framework: Playwright
- Language: TypeScript

---

## Covered automated test cases

## 1. Application access and demo token validation

### APP-01 Open application with valid demo token

**Purpose:** Verify the application loads successfully when opened with the provided demo token.

### APP-02 Invalid demo token handling

**Purpose:** Verify application behavior when "demoToken" is not valid.

**Note:** Data-driven invalid token checks are covered in "tests/app.spec.ts".

---

## 2. Email Accounts

### EA-01 Create email account with valid input succeeds

**Purpose:** Cover the required happy path from the assignment.

### EA-02 Duplicate email account name is rejected

**Purpose:** Verify duplicate account creation is not allowed.

### EA-03 Invalid email account name validation

**Purpose:** Verify invalid account name input is rejected.

**Note:** Data-driven email account name validation checks are covered in "tests/email-accounts.spec.ts".

### EA-04 Invalid password validation

**Purpose:** Verify invalid password input is rejected.

**Note:** Data-driven password validation checks are covered in "tests/email-accounts.spec.ts".

---

## 3. Email Forwarders

### EF-01 Add empty email forwarder and verify required field error

**Purpose:** Cover the required negative scenario from the assignment.

### EF-02 Create email forwarder with valid input succeeds

**Purpose:** Verify valid forwarder creation flow.

### EF-03 Forwarder input validation

**Purpose:** Verify invalid forwarder input is rejected.

**Note:** Additional forwarder validation checks are covered in "tests/email-forwarders.spec.ts".

---

## Deliverables

- Playwright + TypeScript project
- Automated tests for the required scenarios
- Focused additional validation coverage
- README with setup and execution steps
- This test plan

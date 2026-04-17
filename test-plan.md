# Test Plan – Demo Hosting App Automation Task

## Objective

Provide Playwright automation for the required assignment scenarios and a small set of additional relevant validation checks for the same feature area.

## Scope

### Required scope

- TC#1 Add an email account
- TC#2 Add an empty email forwarder

### Additional focused scope

- Application access checks
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

## 1. Application access

### APP-01 Open application with valid demo token

**Purpose:** Verify the application loads successfully when opened with the provided demo token.

### APP-02 Open application without token

**Purpose:** Verify application access behavior when "demoToken" is missing.

### APP-03 Open application with malformed token

**Purpose:** Verify application access behavior when "demoToken" is invalid.

---

## 2. Email Accounts

### EA-01 Create email account with valid input succeeds

**Purpose:** Cover the required happy path from the assignment.

**Steps covered:**

1. Open application
2. Navigate to **Email > Accounts**
3. Open **Select Domain**
4. Verify available domains are:
   - "qa-automation-tools.com"
   - "store.qa-automation-tools.com"
   - "parked-qa-automation-tools.com"
   - "site-tools-demo.net"
5. Select "site-tools-demo.net"
6. Enter account name
7. Generate password
8. Verify password is populated
9. Click **Create**
10. Verify success message
11. Verify created account appears in the table

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

**Steps covered:**

1. Open application
2. Navigate to **Email > Forwarders**
3. Open **Select Domain**
4. Verify available domains are:
   - "qa-automation-tools.com"
   - "store.qa-automation-tools.com"
   - "parked-qa-automation-tools.com"
   - "site-tools-demo.net"
5. Select "site-tools-demo.net"
6. Leave inputs empty
7. Click **Create**
8. Verify **Required field** validation for **“Forward all messages sent to:”**

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

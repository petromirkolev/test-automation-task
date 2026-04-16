# Demo Hosting App - Test Plan

## Purpose

This test plan covers the requested automation scope for the demo hosting services web application.

## Scope

1. Application access
2. Email accounts
3. Email forwarders

## Test cases

### Application access

1. Load application with valid demoToken
2. Load application without demoToken
3. Load application with invalid or malformed demoToken

### Email accounts

4. Add an email account with valid input
5. Verify Select Domain dropdown contains only the expected domain values
6. Verify password is populated after clicking Generate
7. Verify success message is shown after account creation
8. Verify created account appears in the Manage Email accounts list
9. Create email account without selecting domain
10. Create email account with empty account name
11. Create email account with invalid account name
12. Create duplicate email account
13. Verify Create button behavior when required fields are incomplete

### Email forwarders

14. Add empty email forwarder and verify Required field error
15. Verify Select Domain dropdown contains only the expected domain values
16. Create forwarder without selecting domain
17. Create forwarder with empty target field
18. Create forwarder with only spaces in target field
19. Create forwarder with invalid target email
20. Create forwarder with valid target email
21. Verify validation message appears on the correct field
22. Verify validation clears after entering valid value
23. Verify Create button behavior when required fields are incomplete

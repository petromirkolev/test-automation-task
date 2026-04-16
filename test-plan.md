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

4. Create an email account with valid input
5. Create an email account without selecting domain
6. Create an email account with empty account name
7. Create an email account with invalid account name
8. Create an email account with empty password
9. Create an email account with invalid password
10. Create duplicate email account

### Email forwarders

11. Add empty email forwarder and verify Required field error
12. Create forwarder without selecting domain
13. Create forwarder with empty target field
14. Create forwarder with only spaces in target field
15. Create forwarder with invalid target email
16. Create forwarder with valid target email
17. Verify validation message appears on the correct field
18. Verify validation clears after entering valid value
19. Verify Create button behavior when required fields are incomplete

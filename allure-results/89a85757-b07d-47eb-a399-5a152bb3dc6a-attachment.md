# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_suite.spec.ts >> test_suite
- Location: tests\test_suite.spec.ts:5:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
```

# Test source

```ts
  1  | import{test} from "@playwright/test"
  2  | import { General } from "../.github/lib/General"
  3  | 
  4  | // Create suite method 
  5  | test('test_suite',()=>{
  6  | 
  7  |     // Add test case methods 
  8  | 
> 9  |     test('TC001_login_logout', async({page})=>{
     |         ^ Error: Playwright Test did not expect test() to be called here.
  10 |     const gen= new General(page)
  11 |     await gen.openapplication();
  12 |     await gen.login();
  13 |     await gen.waitTime();
  14 |     await gen.logout();
  15 |     await gen.waitTime();
  16 |     await gen.closeapplication();
  17 | });
  18 | 
  19 | test('TC002_addemployee', async({page})=>{
  20 |     const gen = new General(page)
  21 |     await gen.openapplication();
  22 |     await gen.login();
  23 |     await gen.waitTime();
  24 |     await gen.addnewemployee();
  25 |     await gen.waitTime();
  26 |     await gen.logout();
  27 |     await gen.closeapplication();
  28 | });
  29 | 
  30 | test('TC_editemp', async({page})=>{
  31 |     const gen = new General(page);
  32 |     await gen.openapplication();
  33 |     await gen.waitTime();
  34 |     await gen.login();
  35 |     await gen.waitTime();
  36 |     await gen.editemployee();
  37 |     await gen.waitTime();
  38 |     await gen.backbutton();
  39 |     await gen.waitTime();
  40 |     await gen.logout();
  41 |     await gen.closeapplication();
  42 | 
  43 | });
  44 | 
  45 | test('TC_deleteemp', async({page})=>{
  46 | const gen= new General(page);
  47 | await gen.openapplication();
  48 | await gen.login();
  49 | await gen.deleteemp();
  50 | await gen.logout();
  51 | await gen.closeapplication();
  52 | 
  53 | });
  54 | });
```
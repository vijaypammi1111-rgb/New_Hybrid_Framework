import{test} from "@playwright/test"
import { General } from "../lib/General"

// Create suite method 
test.describe('test_suite',()=>{

    // Add test case methods 

    test('TC001_login_logout', async({page})=>{
    const gen= new General(page)
    await gen.openapplication();
    await gen.login();
    await gen.waitTime();
    await gen.logout();
    await gen.waitTime();
    await gen.closeapplication();
});

test('TC002_addemployee', async({page})=>{
    const gen = new General(page)
    await gen.openapplication();
    await gen.login();
    await gen.waitTime();
    await gen.addnewemployee();
    await gen.waitTime();
    await gen.logout();
    await gen.closeapplication();
});

test('TC_editemp', async({page})=>{
    const gen = new General(page);
    await gen.openapplication();
    await gen.waitTime();
    await gen.login();
    await gen.waitTime();
    await gen.editemployee();
    await gen.waitTime();
    await gen.backbutton();
    await gen.waitTime();
    await gen.logout();
    await gen.closeapplication();

});

test('TC_deleteemp', async({page})=>{
const gen= new General(page);
await gen.openapplication();
await gen.login();
await gen.deleteemp();
await gen.logout();
await gen.closeapplication();

});
});
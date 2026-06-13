import{test} from "@playwright/test"
import { General } from "../lib/General"

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
    
})
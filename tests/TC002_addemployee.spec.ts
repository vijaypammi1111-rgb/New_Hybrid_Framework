import{test} from "@playwright/test"

import { General } from "../.github/lib/General"

test('TC002_addemployee', async({page})=>{

    const gen = new General(page)
    await gen.openapplication();
    await gen.login();
    await gen.waitTime();
    await gen.addnewemployee();
    await gen.waitTime();
    await gen.logout();
    await gen.closeapplication();
})
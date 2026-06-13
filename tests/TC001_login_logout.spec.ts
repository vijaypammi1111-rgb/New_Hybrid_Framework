import{test} from "@playwright/test"
import { General } from "../lib/General"

test('TC001_login_logout', async({page})=>{

    // Call all the steps methods 

    const gen= new General(page)
    await gen.openapplication();
    await gen.login();
    await gen.waitTime();
    await gen.logout();
    await gen.waitTime();
    await gen.closeapplication();
})
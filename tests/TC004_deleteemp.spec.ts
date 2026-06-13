import{test} from "@playwright/test"
import { General } from "../lib/General"

test('TC_deleteemp', async({page})=>{

const gen= new General(page);
await gen.openapplication();
await gen.login();
await gen.deleteemp();
await gen.logout();
await gen.closeapplication();

})
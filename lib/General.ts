// To provide all re-usable methods or functions related to whole application in General.ts file

import { Global } from "./Global";

export class General extends Global{

    // Open application
    public async openapplication(){
        await this.page.goto(this.url);
        console.log("Application opened");
    }

    // Login
    public async login() {
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.login_button).click();
        console.log("Login completed")    
    }

    //Logout method
    public async logout(){
        await this.page.locator(this.logout_link).click();
        console.log("Logout successfully clicked")
    }

    // Time out method 
    public async waitTime(){
        await this.page.waitForTimeout(3000);
    }

    // Close application
    public async closeapplication(){
        await this.page.close();
    }

    // Add new employee
    public async addnewemployee (){
        const frame= this.page.frameLocator(this.frame);
        await frame.locator(this.add_button).click();
        await frame.locator(this.textbox_lastname).fill(this.lastname);
        await frame.locator(this.textbox_firstname).fill(this.firstname);
        await frame.locator(this.save_button).click();
    }

    // Edit Employee
    public async editemployee(){
        const frame=this.page.frameLocator(this.frame);
        await frame.locator(this.emp_name).nth(12).click();
        await frame.locator(this.edit_button).click();
        await frame.locator(this.edit_fn).fill(this.firstname);
        await frame.locator(this.edit_ln).fill(this.lastname);
        await frame.locator(this.edit_save).click();
    }
    // Click on Back button 
    public async backbutton(){
        const frame= this.page.frameLocator(this.frame);
        await frame.locator(this.back_button).click();
    }

    public async deleteemp(){
        const frame= this.page.frameLocator(this.frame);
        await frame.locator(this.check_box).check();
        await frame.locator(this.delete_button).click();
    }

}

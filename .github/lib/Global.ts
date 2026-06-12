// To provide test data and objects or elements related to whole application in Global.ts file

import {Page, test} from "@playwright/test";
export class Global{
    constructor(public page: Page){
        this.page= page;
    }

    // Test Data
    public url: string= "https://ctcorphyd.com/SureshIT/login.php";
    public username: string= "sureshit";
    public password: string= "sureshit";
    public firstname: string= "Vijay kumar";
    public lastname: string =" bangalore";

    //Objects / elements 
    public textbox_loginname = "//input[@type='text']";
    public textbox_password = "//input[@type='password']";
    public login_button = "//input[@type='Submit']";
    public logout_link = "//a[text()='Logout']";
    public frame = " //iframe[@id='rightMenu']";
    public add_button= "//input[@value='Add']";
    public textbox_firstname= " //input[@name='txtEmpFirstName']";
    public textbox_lastname= "//input[@name='txtEmpLastName']";
    public save_button = "//input[@value='Save']";
    public emp_name= "//a[@target='_self']";
    public edit_button= " //input[@id='btnEditPers']";
    public edit_fn=" //input[@id='txtEmpFirstName']";
    public edit_ln= "//input[@id='txtEmpLastName']";
    public edit_save = "//input[@id='btnEditPers']";
    public back_button = "//input[@value='Back']";
    public check_box = "//input[@value='6393']";
    public delete_button = "//input[@value='Delete']";
}

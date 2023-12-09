import { Selector } from 'testcafe'; 

export default class Page {

    constructor () {
        this.username = Selector("#email");
        this.password = Selector("#password");
        this.loginBtn = Selector("#login .btn-login");
        this.homeBtn = Selector("#navigation .home");
        this.userProfileBtn = Selector("#user .fa-user-circle");
        this.signoutBtn = Selector("#logout");
    }

    async loginUser(t,username,password){
        await t
        .typeText(this.username,username)
        .typeText(this.password,password)
        .click(this.loginBtn)
        .wait(1000)
    }

    async logoutUser(t){
        await t
        .click(this.userProfileBtn)
        .wait(1000)
        .click(this.signoutBtn)
    }
}
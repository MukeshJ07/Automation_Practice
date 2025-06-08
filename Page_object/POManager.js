const { WebpageTitle } = require('../Page_object/WebpageTitle');
const {LoginSignup} = require('../Page_object/LoginSignup');
const {LoginPage} = require('../Page_object/LoginPage');
class POManager {
    constructor(page) {
        this.page = page;
        this.webpagetitle = new WebpageTitle(this.page);
        this.loginsignup = new LoginSignup(this.page);
        this.loginpage= new LoginPage(this.page);
    }

    getWebpageTitle() {
        return this.webpagetitle;
    }
    getLoginSignup(){
        return this.loginsignup;
    }

   getLoginPage() {
        return this.loginpage;
    } 
}

module.exports = { POManager };
const { WebpageTitle } = require('../Page_object/WebpageTitle');
const {LoginSignup} = require('../Page_object/LoginSignup');
class POManager {
    constructor(page) {
        this.page = page;
        this.webpagetitle = new WebpageTitle(this.page);
        this.loginsignup = new LoginSignup(this.page);
       // this.loginPage = new LoginPage(this.page);
    }

    getWebpageTitle() {
        return this.webpagetitle;
    }
    getLoginSignup(){
        return this.loginsignup;
    }

   /* getLoginPage() {
        return this.loginPage;
    } */

}

module.exports = { POManager };
const { WebpageTitle } = require('./WebpageTitle');
class POManager {
    constructor(page) {
        this.page = page;
        this.webpagetitle = new WebpageTitle(this.page);
       // this.loginPage = new LoginPage(this.page);
        // this. = new Cartsection(this.page);
    }

    getWebpageTitle() {
        return this.webpagetitle;
    }

   /* getLoginPage() {
        return this.loginPage;
    } */


    /* getCartsection() {
         return this.cartsection;
     } */
}

module.exports = { POManager };
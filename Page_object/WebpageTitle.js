class WebpageTitle {
    constructor(page) {
        this.page = page;
    }

    async Urlgoto() {
        await this.page.goto("https://automationexercise.com/");
        //Wait for the page load time
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports ={WebpageTitle};
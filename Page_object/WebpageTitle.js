class WebpageTitle {
    constructor(page) {
        this.page = page;
        this.imglocator =  page.locator('img[alt="Website for automation practice"]');
        this.titlelocator = page.getAttribute('img[src="/static/images/home/logo.png"]','alt');
    }

    async Urlgoto() {
        await this.page.goto("https://automationexercise.com/");
        //Wait for the page load time
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports ={WebpageTitle};
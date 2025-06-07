class LoginSignup {
    constructor(page) {
        this.page = page;
        this.signupbutton= page.locator("i.fa.fa-lock");
        this.name= page.getByPlaceholder("Name");
        this.email = page.locator('[data-qa="signup-email"]');
        this.signupbutton2 = page.locator('[data-qa="signup-button"]');
        // Enter Account information Locators
        this.title=page.getByRole('radio', { name: 'Mr.' });
        this.password = page.locator("#password");
        this.Date= page.locator("select#days");
        this.Month= page.locator("select#months");
        this.Year= page.locator("select#years");
        this.checkbox1= page.locator("input#newsletter");
        this.checkbox2= page.locator("input#optin");
        // Address information Locators
        this.First_name=page.locator('[data-qa="first_name"]');
        this.Last_name=page.locator('[data-qa="last_name"]');
        this.Company=page.locator('[data-qa="company"]');
        this.Address = page.locator('[data-qa="address"]');
        this.Address2 = page.locator('[data-qa="address2"]')
        this.Country=page.locator('[data-qa="country"]');
        this.State=page.locator('[data-qa="state"]');
        this.City=page.locator('[data-qa="city"]');
        this.Zipcode=page.locator('[data-qa="zipcode"]');
        this.Mobile_Number=page.locator('[data-qa="mobile_number"]');
        this.createaccount=page.locator('[data-qa="create-account"]');
    }

    async Signup(Datacreation) {
        
        await this.signupbutton.click();
        await this.name.fill(Datacreation.Name);
        await this.email.fill(String(Datacreation.email));
        // Enter Account Information
        await this.signupbutton2.click();
        await this.title.click();
        await this.password.fill(String(Datacreation.password));
        await this.Date.selectOption(String(Datacreation.Date));
        await this.Month.selectOption(Datacreation.Month);
        await this.Year.selectOption(String(Datacreation.Year));
        await this.checkbox1.click();
        await this.checkbox2.click();
            //Address information
        await this.First_name.fill(Datacreation.First_name);
        await this.Last_name.fill(Datacreation.Last_name);
        await this.Company.fill(Datacreation.Company);
        await this.Address.fill(String(Datacreation.Address));
        await this.Address2.fill(Datacreation.Address2);
        await this.Country.selectOption(Datacreation.Country);
        await this.State.fill(Datacreation.State);
        await this.City.fill(Datacreation.City);
        await this.Zipcode.fill(String(Datacreation.Zipcode));
        await this.Mobile_Number.fill(String(Datacreation.Mobile_Number));
        // Create account button click
          await this.createaccount.click();
    }

}
module.exports = { LoginSignup };
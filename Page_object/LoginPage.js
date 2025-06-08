class LoginPage {
  constructor(page,expect) {
    this.page = page;
    this.expect = expect;
    this.signup_login = page.locator("i.fa.fa-lock");
    this.username = page.locator('[data-qa="login-email"]');
    this.password = page.locator('[data-qa="login-password"]');
    this.loginbutton = page.locator('[data-qa="login-button"]');
    this.cartorder1 = page.locator('[data-product-id="2"]');
    this.continue=page.locator("button.btn.btn-success.close-modal.btn-block");
    this.cartorder2 = page.locator('[data-product-id="30"]');
    this.cartbasket= page.locator('[href="/view_cart"]');
    this.orderview=page.locator("td h4");
    this.checkout=page.locator("a.btn.btn-default.check_out");
    this.comment=page.locator("textarea.form-control");
    this.orderplaced = page.locator("a.btn.btn-default.check_out");
    this.CardName= page.locator('[data-qa="name-on-card"]');
    this.CardNumber = page.locator('[data-qa="card-number"]');
    this.CVC=page.locator('[data-qa="cvc"]');
    this.Expiration=page.locator('[data-qa="expiry-month"]');
    this.Year=page.locator('[data-qa="expiry-year"]');
    this.payorder=page.locator('[data-qa="pay-button"]');
  }

  async gotologin(LoginData) {
    await this.signup_login.click();
    await this.username.fill((String)(LoginData.Username));
    await this.password.fill((String)(LoginData.Password));
    await this.loginbutton.click();
  }
  async getCartOrder() {
    await this.cartorder1.nth(0).click();
    await this.continue.click();
    await this.cartorder2.nth(0).click();
   await this.continue.click();
    await this.cartbasket.first().click();
    console.log(await this.orderview.allTextContents());
  }
  async getordercreated(PlaceOrder){
   await this.checkout.click();
   await this.comment.fill(PlaceOrder.textbox);
   await this.orderplaced.click();
   await this.CardName.fill(PlaceOrder.cardname);
   await this.CardNumber.fill(String(PlaceOrder.cardnumber));
   await this.CVC.fill(String(PlaceOrder.cvc));
   await this.Expiration.fill(String(PlaceOrder.Expiration));
   await this.Year.fill(String(PlaceOrder.year));
   await this.payorder.click();
  }
}

module.exports = { LoginPage };
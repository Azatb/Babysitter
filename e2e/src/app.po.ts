import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  login(){
    element(by.id('username')).sendKeys('azatuser'); // skal indsæt key azatuser ind i username feltet
    element(by.id('password')).sendKeys('password');
    element(by.id('btn-login')).click();
  }

  registerSitter(){
    element(by.id('reg-username')).sendKeys('azatuser');
    element(by.id('reg-password')).sendKeys('mypassword');
    element(by.id('name')).sendKeys('Azat Baran');
    element(by.id('gender')).sendKeys('All genders');
    element(by.id('birthDate')).sendKeys('02-04-1987');
    element(by.id('hourlyWage')).sendKeys(120);
    element(by.id('noCriminalRecord')).click();
    element(by.id('noChildRecord')).click();
    element(by.id('address')).sendKeys('Vej nr. 4');
    element(by.id('zipcode')).sendKeys('1234');
    element(by.id('city')).sendKeys('MyCity');
    element(by.id('register-sitter')).click();
  }

  editSitter(){
    element(by.id('username')).sendKeys('edit');
    element(by.id('password')).sendKeys('edit');
    element(by.id('name')).sendKeys('edit');
    element(by.id('gender')).sendKeys('edit');
    element(by.id('birthDate')).clear();
    element(by.id('birthDate')).sendKeys('02-04-1997');
    element(by.id('hourlyWage')).sendKeys(2);
    element(by.id('noCriminalRecord')).click();
    element(by.id('noChildRecord')).click();
    element(by.id('address')).sendKeys('edit');
    element(by.id('zipcode')).clear()
    element(by.id('zipcode')).sendKeys('2222');
    element(by.id('city')).sendKeys('edit');
    element(by.id('save')).click();
  }


}

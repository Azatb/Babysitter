import { browser, by, element } from "protractor";
import { AppPage } from "./app.po";

describe("sitters-list", () =>{
    let page = new AppPage();

    // from start to end

    // 1: Navigate to Login page with GET request
    // 2: Enter username and password. Click login
    // 3: Count the number of Sitters
    // 4: Navigate to Login page
    // 5: Click on 'Register Sitter' and fill out form. Then click 'Register'
    // 6: Enter username and password. Click login
    // 7: Count the number of Sitters and check if there is one extra
    
    it('Create and Read Sitter. login - read - count - reg - login - read - count - compareCount', () =>{
        browser.get('/login');
        page.login()
        element.all(by.css('.example-card')).then(function(elemsBefore){
            let numberOfSittersBefore = elemsBefore.length;
            element(by.id('login')).click();
            element(by.id('show-reg-sitter')).click();
            page.registerSitter();
            page.login();
            element.all(by.css('.example-card')).then(function(elemsAfter) {
                let numberOfSittersAfter = elemsAfter.length;
                expect(numberOfSittersAfter-numberOfSittersBefore).toBe(1);
            });
        });
    });
        // 8: Click on 'Edit' on the new Sitter

    it('Edit the sitter made from last "it" statement. login - edit - save - checkEditedSitter', () =>{
        browser.get('/login');
        page.login();
        var editButtons = element.all(by.id('edit'));
        editButtons.last().click();
        page.editSitter();
        let editedSitter = element.all(by.css('.example-card')).last();
        expect(editedSitter.element(by.id('name')).getText()).toEqual('Azat Baranedit');
        expect(editedSitter.element(by.id('hourlyWage')).getText()).toEqual('Hourly wage: 1202');
        editedSitter.element(by.tagName('mat-panel-title')).click();
        var d = new Date(1997, 4, 2);
        var dateDifference = Date.now() - d.getTime();
        var ageDate = new Date(dateDifference);
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        expect(editedSitter.element(by.id('age')).getText()).toEqual('Age: ' + age);
        expect(editedSitter.element(by.id('address')).getText()).toEqual('Address: Vej nr. 4edit');
        expect(editedSitter.element(by.id('zipcodeCity')).getText()).toEqual('Zipcode and city: 2222, MyCityedit');
        expect(editedSitter.element(by.id('noCriminalRecord')).getText()).toEqual('Criminal Record: NO');
        expect(editedSitter.element(by.id('noChildRecord')).getText()).toEqual('Inappropiate: NO');
    });
    it('Delete the sitter made from last "it" statement. login - read - count - delete - read - count - compareCount', () =>{ 
        browser.get('/login');
        page.login();
        element.all(by.css('.example-card')).then(function(elemsBefore){
            let numberOfSittersBefore = elemsBefore.length;
            element.all(by.css('.example-card')).last().element(by.id('delete')).click();
            element.all(by.css('.example-card')).then(function(elemsAfter) {
                let numberOfSittersAfter = elemsAfter.length;
                expect(numberOfSittersBefore-numberOfSittersAfter).toBe(1);
            });
        });
    });
});

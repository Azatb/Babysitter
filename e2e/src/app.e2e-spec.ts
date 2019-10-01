import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let appPage: AppPage; // 
                    

  beforeEach(() => {
    appPage = new AppPage(); // instancier objektet
  });

  it('should display welcome message', () => {
    appPage.navigateTo(); 
    expect(appPage.getParagraphText()).toEqual('Velkommen til KEA - Find A Sitter.');
  });
});

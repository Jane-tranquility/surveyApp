import { SurveyAppPage } from './app.po';

describe('survey-app App', () => {
  let page: SurveyAppPage;

  beforeEach(() => {
    page = new SurveyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { checkForURL } from './nameChecker'


describe("test for valid url", ()=> {
    const formInput = {
        url : 'https://www.wikipedia.org/'
    }
    test('should return valid url', ()=> {
        expect(checkForURL(formInput)).toBeTruthy;
    });
})
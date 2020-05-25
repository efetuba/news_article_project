import { checkForUrl } from './nameChecker'
describe('Test the function "checkForURL()" should be a function' , () => {
    test('should return function to be TRUE ', () => {
        expect(typeof checkForUrl).toBe("function");
    });
});

describe("Test for valid url", ()=> {
    const formInput = "https://www.wikipedia.org";
    test('should return valid url', ()=> {
        const response=checkForUrl(formInput);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
})
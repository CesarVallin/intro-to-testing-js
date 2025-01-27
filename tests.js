// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', () => {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when executed', () => {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', () => {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed', () => {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when executed w/o an input (undefined)', () => {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed boolean true or false', () => {
        expect(sayHello(true || false)).toBe("Hello, World!");
    });
    // it('should return "Hello, World!" when passed boolean false', () => {
    //     expect(sayHello(false)).toBe("Hello, World!");
    // });
});
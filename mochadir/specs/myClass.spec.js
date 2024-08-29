// specs/myClass.spec.js
import { expect } from 'chai';
import MyClass from '../src/myClass.js';

const myObj = new MyClass();

describe("Test Suit", function() {
    it("Test the add method", function() {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });
});

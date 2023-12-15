import {Calculator} from './testservice';
describe('calculator',()=> {
    it('should add 2 numbers', ()=>{
        const service = new Calculator();
        expect(service.add(4,2)).toBe(6);
    });
    it('should subtract 2 numbers', ()=>{
        const service = new Calculator();
        expect(service.subtract(4,2)).toBe(2);
    })
    it('should multiply 2 numbers', ()=>{
        const service = new Calculator();
        expect(service.multiply(4,2)).toBe(8);
    })
    it('should divide 2 numbers', ()=>{
        const service = new Calculator();
        expect(service.divide(4,2)).toBe(2);
    })
});




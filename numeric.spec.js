import { numeric as numPyrate } from './'

describe('uuidv4', () => {
    it('should be different when invoked two times in a row', () => {
        expect(numPyrate.uuidv4() === numPyrate.uuidv4()).toBeFalsy()
    })
    it('should follow the xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx template', () => {
        const mock = numPyrate.uuidv4()
        expect(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(mock)).toBeTruthy()
    })
})

describe('validate cpf', () => {
    it('should return true for valid cpfs', () => {
        expect(numPyrate.cpf.validateCPF('93549281021')).toBeTruthy()
    })
    it('should return false for invalid cpfs', () => {
        expect(numPyrate.cpf.validateCPF('34549284521')).toBeFalsy()
    })
})

describe('validate cnpj', () => {
    it('should return true for valid cnpjs', () => {
        expect(numPyrate.cnpj.validateCNPJ('18.837.197/0001-83')).toBeTruthy()
    })
    it('should return false for invalid cnpjs', () => {
        expect(numPyrate.cnpj.validateCNPJ('47.372.635/4756-32')).toBeFalsy()
    })
})

describe('normalize local currency', () => {
    it('should switch , for .', () => {
        expect(numPyrate.normalizeLocalCurrency('20,000.04')).toEqual(20000.04)
        expect(numPyrate.normalizeLocalCurrency('634,100.04')).toEqual(634100.04)
    })
    it('should switch . for ,', () => {
        expect(numPyrate.normalizeLocalCurrency('20.000,04')).toEqual(20000.04)
        expect(numPyrate.normalizeLocalCurrency('734.100,04')).toEqual(734100.04)
    })
})

describe('interval', () => {
    it('should return default interval', () => {
        expect(numPyrate.interval()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
    it('should work with start limit', () => {
        expect(numPyrate.interval(5)).toEqual([5, 6, 7, 8, 9, 10])
    })
    it('should respect both bounds', () => {
        expect(numPyrate.interval(10, 18)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18])
    })
    it('should respect both bounds and step', () => {
        expect(numPyrate.interval(25, 40, 5)).toEqual([25, 30, 35, 40])
    })
})

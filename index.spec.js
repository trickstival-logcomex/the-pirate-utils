import * as pirate from './'

describe('Truthy join', () => {
    it('should ignore falsy values between strings', () => {
        expect(pirate.truthyJoin(['Hey', undefined, 'You'], ', ')).toEqual('Hey, You')
    })
    it('should concat when only truthy values are passed with default space separator', () => {
        expect(pirate.truthyJoin(['Hey', 'Man'])).toEqual('Hey Man')
    })
})

describe('Any', () => {
    it('should return true when at least one condition is truthy', () => {
        expect(pirate.any('a', true, '', false, [])).toBeTruthy()
    })
    it('should return false when all conditions are falsy', () => {
        expect(pirate.any(undefined, NaN, '', false)).toBeFalsy()
    })
})

describe('Maybe', () => {
    it('should return undefined when passed a non-object/null', () => {
        expect(pirate.maybe(null, 'test')).toBeUndefined()
    })
    it('should return undefined when no second parameter is passed', () => {
        expect(pirate.maybe({ hey: 'guys' })).toBeUndefined()
    })
    it('should return undefined for empty objects', () => {
        expect(pirate.maybe({}, 'test')).toBeUndefined()
    })
    it('should return shallow properties correctly', () => {
        expect(pirate.maybe({ hey: 'guys' }, 'hey')).toEqual('guys')
    })
    it('should return deeply nested properties correctly', () => {
        const mock = { first: { second: { third: 'thirdValue' } } }
        expect(pirate.maybe(mock, 'first.second.third')).toEqual('thirdValue')
    })
    it('should return undefined when accessing non-existing deep properties', () => {
        expect(pirate.maybe({ first: { } }, 'first.second.third')).toBeUndefined()
    })
})

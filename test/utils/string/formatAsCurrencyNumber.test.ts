import { CountryCodes } from 'src/constants/CountryCode';
import { Currencies } from 'src/constants/Currency';
import { formatAsCurrencyNumber } from 'src/utils/string/formatAsCurrencyNumber';

describe('formatAsCurrencyNumber util', () => {
    it('should return an empty string if null is passed', () => {
        const result = formatAsCurrencyNumber(null);
        expect(result).toBe('');
    });

    it('should return an empty string if undefined is passed', () => {
        const result = formatAsCurrencyNumber(undefined);
        expect(result).toBe('');
    });

    it('should return an empty string if not a number is passed', () => {
        const result = formatAsCurrencyNumber('asdasd');
        expect(result).toBe('');
    });

    it('should return an empty string if fraction options are incorrect', () => {
        const result = formatAsCurrencyNumber('100', { minimumFractionDigits: 5, maximumFractionDigits: 2 });
        expect(result).toBe('');
    });

    it('should format string number as currency', () => {
        const result = formatAsCurrencyNumber('100');
        expect(result).toBe('$100');
    });

    it('should leave extra decimals if minimum digits is passed', () => {
        const result = formatAsCurrencyNumber('100', { minimumFractionDigits: 5 });
        expect(result).toBe('$100.00000');
    });

    it('should cut decimals if maximum digits passed is lower than number decimals', () => {
        const result = formatAsCurrencyNumber('100.123456', { maximumFractionDigits: 3 });
        expect(result).toBe('$100.123');
    });

    it('should format currency properly for us country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.US });
        expect(result).toBe('$123,456.2');
    });

    it('should format currency properly for mx country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.MX });
        expect(result).toBe('$123,456.2');
    });

    it('should format currency properly for ar country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.AR });
        expect(result).toBe('$123.456,2');
    });

    it('should format currency properly for uy country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.UY });
        expect(result).toBe('$123.456,2');
    });

    it('should format currency properly for pe country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.PE });
        expect(result).toBe('S/123.456,2');
    });

    it('should format currency properly for br country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.BR });
        expect(result).toBe('R$123.456,2');
    });

    it('should format currency properly for cl country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.CL });
        expect(result).toBe('$123.456,2');
    });

    it('should format currency properly for co country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.CO });
        expect(result).toBe('$123.456,2');
    });

    it('should format currency properly for py country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.PY });
        expect(result).toBe('₲123.456,2');
    });

    it('should render currency correctly when currency is passed and is different than the one used in the country', () => {
        const result = formatAsCurrencyNumber('123456.2', { country: CountryCodes.MX, currency: Currencies.USD });
        expect(result).toBe('USD$123,456.2');
    });

    it('should format number as currency', () => {
        const result = formatAsCurrencyNumber(100);
        expect(result).toBe('$100');
    });
});

import { CountryCodes } from 'src/constants/CountryCode';
import { formatAsCountryNumber } from 'src/utils/string/formatAsCountryNumber';

describe('formatAsCountryNumber util', () => {
    it('should return an empty string if null is passed', () => {
        const result = formatAsCountryNumber(null);
        expect(result).toBe('');
    });

    it('should return an empty string if undefined is passed', () => {
        const result = formatAsCountryNumber(undefined);
        expect(result).toBe('');
    });

    it('should return an empty string if not a number is passed', () => {
        const result = formatAsCountryNumber('asdasd');
        expect(result).toBe('');
    });

    it('should return an empty string if fraction options are incorrect', () => {
        const result = formatAsCountryNumber('100', { minimumFractionDigits: 5, maximumFractionDigits: 2 });
        expect(result).toBe('');
    });

    it('should format string number as formatted number', () => {
        const result = formatAsCountryNumber('100');
        expect(result).toBe('100');
    });

    it('should leave extra decimals if minimum digits is passed', () => {
        const result = formatAsCountryNumber('100', { minimumFractionDigits: 5 });
        expect(result).toBe('100.00000');
    });

    it('should cut decimals if maximum digits passed is lower than number decimals', () => {
        const result = formatAsCountryNumber('100.123456', { maximumFractionDigits: 3 });
        expect(result).toBe('100.123');
    });

    it('should format number properly for us country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.US });
        expect(result).toBe('123,456.2');
    });

    it('should format number properly for mx country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.MX });
        expect(result).toBe('123,456.2');
    });

    it('should format number properly for ar country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.AR });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for uy country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.UY });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for pe country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.PE });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for br country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.BR });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for cl country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.CL });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for co country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.CO });
        expect(result).toBe('123.456,2');
    });

    it('should format number properly for py country', () => {
        const result = formatAsCountryNumber('123456.2', { country: CountryCodes.PY });
        expect(result).toBe('123.456,2');
    });

    it('should format number as formatted number', () => {
        const result = formatAsCountryNumber(100);
        expect(result).toBe('100');
    });
});

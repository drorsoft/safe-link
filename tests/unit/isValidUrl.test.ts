import { describe, expect, it } from 'vitest';
import { isValidUrl } from '../../src/utils/isValidUrl';

describe('Is valid Url', () => {
    describe('Happy path', () => {
        it('should return false for an invalid URL', () => {
            const url = 'invalid_url';
            expect(isValidUrl(url)).toBe(false);
        });
        it('should return true for a URL without protocol', () => {
            const url = 'www.example.com';
            expect(isValidUrl(url)).toBe(true);
        });
    });
    describe('Unhappy path', () => {
        it('should return false for an empty URL', () => {
            const url = '';
            expect(isValidUrl(url)).toBe(false);
        });
        it('should throw if gets an object', () => {
            const url = { url: 'www.example.com' };
            expect(() => isValidUrl(url)).toThrow();
        });
        it('should throw if gets a function', () => {
            const url = () => ({ url: 'www.example.com' });
            expect(() => isValidUrl(url)).toThrow();
        });

    });

});

import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen   } from '@testing-library/react';

import { AppTextInput } from '../../src/components/AppTextInput';


describe('App button', () => {
    it('types in the input correctly', async () => {
        render(<AppTextInput id={'abc'}  label={'input'} /> );
        const input : HTMLInputElement = screen.getByRole('input');
        fireEvent.input(input, { target: { value: 'test' } });
        expect( input.value).toBe('test');
        expect(input.disabled).toBe(false);
    });
    it('does not types in the input if disabled', async () => {
        render(<AppTextInput id={'abc'} disabled label={'input'} /> );
        const input : HTMLInputElement = screen.getByRole('input');
        expect(input.disabled).toBe(true);
    });



});


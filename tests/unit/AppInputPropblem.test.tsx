import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen  } from '@testing-library/react';


describe('App button Problem', () => {
    it('types in the input correctly', async () => {
        render(<input type={'text'} disabled={true}/> );
        const input : HTMLInputElement = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'hello' } });
        expect( input.value).toBe('hello');
    });
    it('does not types in the input if disabled', async () => {
        render(<input type={'text'} disabled={true}/> );
        const input : HTMLInputElement = screen.getByRole('textbox');
        // userEvent.input(input, { target: { value: 'test' } });
        expect( input.value).toBe(''); // this fails
    });
});


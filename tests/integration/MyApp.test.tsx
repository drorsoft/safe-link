import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import { checkDomainData } from '../../src/api/checkDomainData';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../../src/App';


vi.mock('../../src/api/checkDomainData.js');

describe('App tests', () => {
    beforeEach( () => {
        (checkDomainData as Mock).mockClear();
    });
    it('Should show that valid url is valid', async() => {
        (checkDomainData as Mock).mockResolvedValue({
            'isMalicious': false,
        });
        render(<App />);

        fireEvent.change(screen.getByPlaceholderText('Enter a URL'), {
            target: { value: 'www.safeurl.com' },
        });
        fireEvent.click(screen.getByText('Check URL'));

        await waitFor(() => {
            const isSafe: HTMLElement | null = screen.getByText('Is Safe');
            expect(isSafe).not.toBeNull();
        });
    });

});

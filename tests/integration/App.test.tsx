import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { beforeEach, describe, expect, test, vi, Mock } from 'vitest';
import { checkDomainData } from '../../src/api/checkDomainData.js';
import App from '../../src/App.js';


vi.mock('../../src/api/checkDomainData.js');

describe('Application', () => {
    beforeEach(() => {
        (checkDomainData as Mock).mockClear();
    });
    test('App', async () => {

        (checkDomainData as Mock).mockResolvedValue({
            isMalicious: false,
        });

        render(<App />);

        fireEvent.change(screen.getByPlaceholderText('Enter a URL'), {
            target: { value: 'www.safeurl.com' },
        });
        fireEvent.click(screen.getByText('Check URL'));

        await waitFor(() => {
            expect(screen.getByText('safeurl.com')).not.toBe(null);
            expect(screen.getByText('Is Safe')).not.toBe(null);
        });
    });

});

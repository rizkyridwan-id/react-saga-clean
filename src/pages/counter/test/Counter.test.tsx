import { describe, it, expect } from 'vitest';

import { render } from '@testing-library/react';
import { Counter } from '..';

describe('render', () => {
  it('renders the main page', async () => {
    const helloWorld = await render(<Counter />).findByText(/Hello World/);
    expect(helloWorld).toBeTruthy();
  });
});

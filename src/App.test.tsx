import { describe, it, expect } from 'vitest';

import { render } from '@testing-library/react';
import App from './App';

describe('render', () => {
  it('renders the main page', async () => {
    const helloWorld = await render(<App />).findByText(/Hello World/);
    expect(helloWorld).toBeTruthy();
  });
});

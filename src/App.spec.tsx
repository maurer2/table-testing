import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('ControlledInput', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});

import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends RenderOptions {}

export function renderWithProviders(
  ui: React.ReactElement,
  { ...renderOptions }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => (
    <MemoryRouter>{children}</MemoryRouter>
  );
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

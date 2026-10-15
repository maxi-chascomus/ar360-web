import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(window, 'URL', {
  writable: true,
  value: class {
    constructor(url) {
      this.href = url;
    }
  },
});
import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act } from 'react-dom/test-utils';

describe('useConter', () => {
  test('should the initail value', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should the initail value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { intialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test('should incrment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test('should incrment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});

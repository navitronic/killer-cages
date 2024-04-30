import { useList } from './useList';
import { CageDefinition } from './context/AppStateContext';
import { act, renderHook } from '@testing-library/react';

it('does things', () => {
  const { result } = renderHook(() =>
    useList<CageDefinition>([
      {
        total: 1,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
      {
        total: 2,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
    ]),
  );

  expect(result.current[0]).toEqual([
    {
      total: 1,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
    {
      total: 2,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
  ]);

  act(() => {
    result.current[1].removeAt(0);
  });

  expect(result.current[0]).toEqual([
    {
      total: 2,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
  ]);
});

it('does more things', () => {
  const { result } = renderHook(() =>
    useList<CageDefinition>([
      {
        total: 1,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
      {
        total: 2,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
      {
        total: 3,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
      {
        total: 4,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
    ]),
  );

  act(() => {
    result.current[1].removeAt(2);
  });

  expect(result.current[0]).toEqual([
    {
      total: 1,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
    {
      total: 2,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
    {
      total: 4,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
  ]);
});

it('does even more things', () => {
  const { result } = renderHook(() =>
    useList<CageDefinition>([
      {
        total: 2,
        size: 1,
        inclusions: [],
        exclusions: [],
      },
    ]),
  );

  act(() => {
    result.current[1].insertAt(0, {
      total: 1,
      size: 1,
      inclusions: [],
      exclusions: [],
    });
  });

  expect(result.current[0]).toEqual([
    {
      total: 1,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
    {
      total: 2,
      size: 1,
      inclusions: [],
      exclusions: [],
    },
  ]);
});

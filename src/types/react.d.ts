declare module 'react' {
  export * from 'react';

  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly any[]): T;
  export function useMemo<T>(factory: () => T, deps: readonly any[]): T;
  export function useReducer<R extends React.Reducer<any, any>, I>(
    reducer: R,
    initialArg: I,
    init?: (arg: I) => React.ReducerState<R>
  ): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
  export function useContext<T>(context: React.Context<T>): T;
  export function useLayoutEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useImperativeHandle<T, R extends T>(
    ref: React.Ref<T>,
    init: () => R,
    deps?: readonly any[]
  ): void;
  export function useDebugValue<T>(value: T, format?: (value: T) => any): void;
  export function useId(): string;
  export function useTransition(): [boolean, (callback: () => void) => void];
  export function useDeferredValue<T>(value: T): T;
  export function useSyncExternalStore<T>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => T,
    getServerSnapshot?: () => T
  ): T;
  export function useInsertionEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
} 
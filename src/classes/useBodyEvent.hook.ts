/// <reference lib="dom" />
import { useEffect, useCallback, useDebugValue } from 'react';

/**
 * 
 * @param type a type that would work if you were trying to add the event directly to document.body
 * @param listener the listener function whose code the user would like to run
 * @param deps a list of dependencies that will trigger an update the internal handler.
 */
export default function useBodyHook<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void, deps: unknown[]): void {
  // Debugger values.
  useDebugValue(`${type}(${deps.join(',')})`);
  // Create a callback of the listener that only updates on dependency updates
  const handler = useCallback(listener, deps);
  // Call this effect whenever the hook mounts / the handler value updates.
  useEffect(() => {
    document.body.addEventListener(type, handler);
    return () => {
      // Make sure we are removing the handler.
      document.body.removeEventListener(type, handler);
    };
  }, [handler]);
}
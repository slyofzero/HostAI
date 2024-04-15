import { useShowInstances } from "./useShowInstances";

export function useGlobalStates() {
  const showInstancesStates = useShowInstances();

  return { ...showInstancesStates };
}

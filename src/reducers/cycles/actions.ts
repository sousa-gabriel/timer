import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
  REMOVE_CYCLE_FROM_HISTORY = "REMOVE_CYCLE_FROM_HISTORY",
  REPEAT_CYCLE_FROM_HISTORY = "REPEAT_CYCLE_FROM_HISTORY",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}

export function removeCycleFromHistoryAction(cycleId: string) {
  return {
    type: ActionTypes.REMOVE_CYCLE_FROM_HISTORY,
    payload: {
      deletedCycleId: cycleId,
    },
  };
}

export function repeatCycleFromHistoryAction(cycleId: string) {
  return {
    type: ActionTypes.REPEAT_CYCLE_FROM_HISTORY,
    payload: {
      deletedCycleId: cycleId,
    },
  };
}

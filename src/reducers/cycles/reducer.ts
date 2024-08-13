/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
  deletedCycleId: string | null;
}

export function cyclesReducers(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }
    case ActionTypes.REMOVE_CYCLE_FROM_HISTORY: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === action.payload.deletedCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cycles.splice(currentCycleIndex, 1);
        draft.activeCycleId = null;
      });
    }
    case ActionTypes.REPEAT_CYCLE_FROM_HISTORY: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === action.payload.deletedCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        const cycleToRepeat = draft.cycles[currentCycleIndex];
        const newCycle: Cycle = {
          ...cycleToRepeat,
          id: String(new Date().getTime()),
          startDate: new Date(),
          interruptedDate: undefined,
          finishedDate: undefined,
        };

        draft.cycles.push(newCycle);
        draft.activeCycleId = newCycle.id;
      });
    }
    default:
      return state;
  }
}

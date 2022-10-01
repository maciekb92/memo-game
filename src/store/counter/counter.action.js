import { createAction } from "../reducer.utils"
import COUNTER_ACTION_TYPES from "./counter.types";

export const setCounterValue = (counterValue) =>
    createAction(COUNTER_ACTION_TYPES.SET_COUNTER_VALUE, counterValue);

const MAX_VALUE = 'MAX-VALUE';
const START_VALUE = 'START-VALUE';
const INCREASE_START_VALUE = 'INCREASE-START-VALUE';
const SET_START_VALUE_FOR_COUNTER = 'SET-START-VALUE-FOR-COUNTER';
const RESET_START_VALUE_FOR_COUNTER = 'RESET-START-VALUE-FOR-COUNTER';
const textForStartValueCounter = `Enter value and press 'set'`;
const textForStartValueCounterError = 'Incorrect value!';


type ActionsType =
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setStartValueForCounterAC>
    | ReturnType<typeof increaseStartValueAC>
    | ReturnType<typeof resetStartValueForCounterAC>

export type StateType = {
    startValueForCounter: string | number
    startValue: number
    maxValue: number
    error: boolean | string
    disableSetting: boolean
}


const initialState = {
    startValueForCounter: textForStartValueCounter,
    startValue: 0,
    maxValue: 0,
    error: false,
    disableSetting: false
}

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {

    switch (action.type) {

        case MAX_VALUE: {

            if (action.maxNum < 0 || action.maxNum < state.startValue ||
                action.maxNum === state.startValue || state.startValue < 0) {
                return {
                    ...state,
                    error: textForStartValueCounterError,
                    disableSetting:  true,
                    maxValue: action.maxNum
                };
            }else if (action.maxNum > 0 || action.maxNum > state.startValue) {
                return {
                    ...state,
                    startValueForCounter: textForStartValueCounter,
                    error: false,
                    disableSetting: false,
                    maxValue: action.maxNum,
                };
            } else  return state;
        }
        case START_VALUE: {
            if (action.startNum < 0 || action.startNum > state.maxValue
               || action.startNum === state.maxValue) {
                return {
                    ...state,
                    error: textForStartValueCounterError,
                    disableSetting: true,
                    startValue: action.startNum
                };
            } else if (state.startValue > 0 || state.startValue < state.maxValue){
                return {
                    ...state,
                    startValueForCounter: textForStartValueCounter,
                    error: false,
                    disableSetting: false,
                    startValue: action.startNum
                }
            }else return state

        }
        case SET_START_VALUE_FOR_COUNTER: {
            return {
                ...state,
                startValueForCounter: state.startValue,
                disableSetting: true
            }
        }
        case INCREASE_START_VALUE: {
            return  {
                ...state,
                startValueForCounter: (typeof state.startValueForCounter === 'number')
                    ? state.startValueForCounter + 1 : state.startValueForCounter
            }
        }
        case RESET_START_VALUE_FOR_COUNTER: {
            return {
                ...state,
                startValueForCounter: state.startValue
            }
        }
        default :
            return state;
    }
}

export const setMaxValueAC = (maxNum: number) => ({type: MAX_VALUE, maxNum} as const);
export const setStartValueAC = (startNum: number) =>  ({type: START_VALUE, startNum} as const);
export const setStartValueForCounterAC = () => ({type: SET_START_VALUE_FOR_COUNTER} as const);
export const increaseStartValueAC = () => ({type: INCREASE_START_VALUE} as const);
export const resetStartValueForCounterAC = () => ({type: RESET_START_VALUE_FOR_COUNTER} as const);
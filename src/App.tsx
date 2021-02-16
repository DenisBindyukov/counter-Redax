import React from 'react';
import './App.css';
import SettingCounter from "./Component/SettingCounter/SettingCounter";
import {AppRootStateType} from "./State/store";
import {
    setMaxValueAC,
    setStartValueForCounterAC,
    setStartValueAC,
    StateType,
    increaseStartValueAC, resetStartValueForCounterAC
} from "./State/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Counter} from "./Component/Counter/Counter";

function App() {

    const stateCounter = useSelector<AppRootStateType, StateType>(state => state.counterReducer);
    const dispatch = useDispatch();

    const maxValueHandler = (num: number) => {
        dispatch(setMaxValueAC(num));
    };

    const startValueHandler = (num: number) => {
        dispatch(setStartValueAC(num));
    }
    const ResetValueForCounterHandler = () => {
        dispatch(setStartValueForCounterAC());
    }
    const increaseStartValue = () => {
        dispatch(increaseStartValueAC());
    }
    const resetStartValueForCounter = () => {
        dispatch(resetStartValueForCounterAC());
    }


    return (
        <div>
            <div className="Counter">
                <Counter maxValue={stateCounter.maxValue}
                         startValue={stateCounter.startValue}
                         startValueForCounter={stateCounter.startValueForCounter}
                         increaseStartValue={increaseStartValue}
                         resetStartValue={resetStartValueForCounter}
                         error={stateCounter.error}/>
            </div>
            <div className="SettingCounter">
                <SettingCounter startValue={stateCounter.startValue}
                                maxValue={stateCounter.maxValue}
                                disableSetting={stateCounter.disableSetting}
                                error={stateCounter.error}
                                startValueHandler={startValueHandler}
                                maxValueHandler={maxValueHandler}
                                ResetValueForCounterHandler={ResetValueForCounterHandler}/>

            </div>

        </div>

    );
}

export default App;

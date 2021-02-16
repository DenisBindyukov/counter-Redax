import React, {ChangeEvent} from 'react';
import style from './SettingCounter.module.css'
import ButtonSetting from "./ButtonForSetting/ButtonForSetting";

type CounterType = {
    startValue: number
    maxValue: number
    disableSetting: boolean
    error: boolean | string
    startValueHandler: (num: number) => void
    maxValueHandler: (num: number) => void
    ResetValueForCounterHandler: () => void
}

const SettingCounter: React.FC<CounterType> = (props) => {

    // const onChangeForMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.maxValueHandler(Number(e.currentTarget.value));
    // };
    // const onChangeForStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.startValueHandler(Number(e.currentTarget.value));
    //
    // };

    return (
        <>
            <div className={style.display_style}>
                <div className={style.max_value}>
                    <span>max value:</span> <input className={`${props.error ? style.error : ''} `}
                                                   type={'number'}
                                                   value={props.maxValue}
                                                   onChange={ (e) =>
                                                       props.maxValueHandler(Number(e.currentTarget.value))}

                />
                </div>
                <div>
                    <span>start value:</span> <input className={`${props.error ? style.error : ''} `}
                                                     type={'number'}
                                                     value={props.startValue}
                                                     onChange={(e) =>
                                                         props.startValueHandler(Number(e.currentTarget.value))}/>
                </div>
            </div>
            <ButtonSetting valueDisableButton={props.disableSetting}
                           ResetValueForCounterHandler={props.ResetValueForCounterHandler}/>
        </>
    );
}

export default SettingCounter;
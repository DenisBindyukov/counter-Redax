import React from 'react';
import style from './ButtonComponent.module.css';

type ButtonType = {
    increaseStartValue: () => void
    resetStartValue: () => void
    maxValue: number
    startValue: number
    startValueForCounter: number | string


}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <div className={style.button_style}>
        <button onClick={ props.increaseStartValue } className={style.button_style_size}
                disabled={ (props.startValueForCounter === props.maxValue)
                            ? true
                            : typeof props.startValueForCounter === 'string' ? true : false}>inc</button>
        <button onClick={props.resetStartValue}  className={style.button_style_size}
                disabled={ props.startValue === props.startValueForCounter
                           ? true
                           : typeof props.startValueForCounter === 'string' ? true : false}>reset</button>



        </div>
    );
}

export default Button;
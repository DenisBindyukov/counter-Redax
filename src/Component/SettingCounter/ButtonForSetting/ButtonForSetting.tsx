import React from 'react';
import style from './ButtonForSetting.module.css';

type ButtonType = {
    ResetValueForCounterHandler: () => void
    valueDisableButton: boolean
}

const ButtonForSetting: React.FC<ButtonType> = (props) => {
    return (
        <div className={style.button_style}>
            <button onClick={props.ResetValueForCounterHandler}
                    className={style.button_style_size}
                    disabled={props.valueDisableButton}>
                set
            </button>

        </div>
    );
}

export default ButtonForSetting;
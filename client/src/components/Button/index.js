import React from "react";
import classNames from 'classnames';

import '../../css/Button.css';

const Button = (props) => {

    const { children, outline, primary, fab, className, onClick, disabled, type } = props;

    const classes = classNames('button', className, {
        'button--outline': outline && !primary,
        'button--outline-primary': outline && primary,
        'button--primary': !outline && primary,
        'button--disabled': disabled,
        'button--fab-primary': fab && primary,
    });


    return <button type={type} disabled={disabled} className={classes} onClick={onClick}>{children}</button>
}

export default Button;
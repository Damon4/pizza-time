import React from 'react';
import classes from './index.module.scss';

interface Props {
    children?: React.ReactNode;
    active?: boolean;
}

const Container: React.FC<Props> = (props) => {
    const {children} = props
    return <div className={classes.Container}>{children}</div>
}

export default Container;

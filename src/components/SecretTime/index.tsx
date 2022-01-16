import React from 'react';
import classes from './index.module.scss'

type Props = {
    show?: boolean,
    onClose: () => void,
}

export const SecretTime: React.FC<Props> = ({show, onClose}) => {
    return <div className={classes.SecretTime}>
        <div className={classes.SecretTime__close} onClick={() => onClose()}>X</div>
        <div className={classes.SecretTime__content}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kNs-bU4qlj8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    </div>
}

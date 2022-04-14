import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './ErrorModel.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = props => {
    return (<Card className={styles.modal}>
        <header className={styles.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={styles.content}>
            <p className={styles.message}>
                {props.message}
            </p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>)
}

const ErrorModal = (props) => {
    return (
        <>
            {/* <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p className={styles.message}>
                        {props.message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card> */}

            {/* Use React Portal */}

            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={props.onConfirm}></Backdrop>,
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm}
                    ></ModalOverlay>,
                    document.getElementById('overlay-root')
                )
            }
        </>
    )
}

export default ErrorModal
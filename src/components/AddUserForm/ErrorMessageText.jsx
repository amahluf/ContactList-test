import React from 'react'

const ErrorMessageText = (props) => {
    return (
        <div className="error-message-text">
            {props.children}
        </div>
    )
}
export default ErrorMessageText;
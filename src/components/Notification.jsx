/* eslint-disable react/prop-types */
export function Notification({ message, className }) { 

    if(message === null){
        return null
    }


    return (
        <div className={`alert ${className} text-center`} role="alert" id="container-error">
            <strong>  {message} </strong>
        </div>
    )
}
import { React, useRef } from "react";


// implementing the useRef hook to focus the input field when the button is clicked
export default function InputFocus() {
    const focusInput = useRef(null);
    function handleFocus() {
        focusInput.current.focus()
    }
    return (
        <div>
            <input style={{margin: "35px auto 3px auto"}} type="text" ref={focusInput} />
            <button onClick={handleFocus}>focus input</button>
        </div>
    )
}
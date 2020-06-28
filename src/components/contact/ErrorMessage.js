import React from "react";

function ErrorMessage({ children }) {
    return (
        <div class="formErrors">{children}</div>
    );
}

export default ErrorMessage;

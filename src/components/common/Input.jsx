import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = ({
    name,
    type = "text",
    placeholder = "",
    autoFocus = false,
    className = "",
    ...rest
}) => (
    <div>
        <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
            <Field
                className={`outline-none px-4 py-2 ${className}`}
                type={type}
                placeholder={placeholder}
                name={name}
                autoFocus={autoFocus}
                {...rest}
            />
        </div>
        <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm"
        />
    </div>
);

export default Input;

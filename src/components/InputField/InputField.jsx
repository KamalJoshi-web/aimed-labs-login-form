import React, { useId, forwardRef } from "react";

const InputField = forwardRef(
  ({ label, helperText, type = "text", className, ...props }, ref) => {
    const id = useId();

    return (
      <div className={className}>
        {label && <label htmlFor={id}>{label}</label>}

        <input type={type} ref={ref} {...props} id={id} />
        {helperText && <p>{helperText}</p>}
      </div>
    );
  }
);

export default InputField;

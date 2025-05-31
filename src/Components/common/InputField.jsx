import React from "react";

const InputField = ({ label, type = "text", value, onChange }) => (
  <div>
    <label>{label}</label><br />
    <input type={type} value={value} onChange={onChange} required /><br />
  </div>
);

export default InputField;

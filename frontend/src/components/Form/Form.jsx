import PropTypes from "prop-types";
import React, { useState } from "react";
import "./form.css";

export default function Form({
  title,
  buttonTitle,
  fields,
  subimitFn,
  haveCancel,
  onCancelFn,
  cancelTitle,
}) {
  const [inputs, setInputs] = useState({});

  const onHandleSubimit = () => {
    subimitFn(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();

    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form id="form-id" class="form-container" onSubmit={(e) => e.preventDefault()}>
      <h1 className="form-title">{title}</h1>

      {fields.map(({ type, placeholder, name }) => {
        return (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="form-input"
            onChange={handleInputChange}
            required
          />
        );
      })}

      <div className="form-buttons">
        <button
          className="form-button-submit"
          type="submit"
          onClick={onHandleSubimit}
        >
          {buttonTitle}
        </button>

        {haveCancel ? (
          <button className="form-button-cancel" onClick={onCancelFn}>
            {cancelTitle}
          </button>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  subimitFn: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

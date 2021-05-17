import PropTypes from "prop-types";
import React from "react";

export default function InputText({
  handleInputChange,
  onHandleSubimit,
  buttonTitle,
  fistInputPlaceholder,
  fistInputName,
  secondInputPlaceholder,
  secondInputName,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={fistInputPlaceholder}
        name={fistInputName}
        className="form-input"
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        placeholder={secondInputPlaceholder}
        name={secondInputName}
        className="form-input"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={onHandleSubimit}>
        {buttonTitle}
      </button>
    </div>
  );
}

InputText.propTypes = {
  handleInputChange: PropTypes.array.isRequired,
  onHandleSubimit: PropTypes.array.isRequired,
};

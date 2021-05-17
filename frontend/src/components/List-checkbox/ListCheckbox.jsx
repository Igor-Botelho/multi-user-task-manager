import PropTypes from "prop-types";
import React from "react";
import "./listCheckbox.css";

export default function ListCheckbox({ intens, onChangeFn, fnDelete, fnEdit }) {
  return (
    <div>
      {intens.map(
        ({ name, completed, description, creationDate, finishDate }, index) => {
          return (
            <div className="list-container">
              <label className="card-item tooltip">
                <input
                  type="checkbox"
                  placeholder={name}
                  name={index}
                  onChange={onChangeFn}
                  checked={completed}
                  required
                />
                {name}
                <span class="tooltiptext">{` ${
                  description > 0 ? `description: ${description}` : ""
                } creationDate: ${creationDate}  ${
                  finishDate ? `finishDate: ${finishDate}` : ""
                }`}</span>
              </label>
              {!completed ? (
                <i
                  class="far fa-trash-alt list-icon"
                  onClick={() => fnDelete(index)}
                />
              ) : (
                <></>
              )}

              {!completed ? (
                <i
                  class="fas fa-edit list-icon"
                  onClick={() => fnEdit(index)}
                />
              ) : (
                <></>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}

ListCheckbox.propTypes = {
  intens: PropTypes.array.isRequired,
  onChangeFn: PropTypes.func.isRequired,
};

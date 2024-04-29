import { useId } from "react";
import PropTypes from "prop-types";
import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  const finedId = useId();
  return (
    <div className={css.filter}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        id={finedId}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

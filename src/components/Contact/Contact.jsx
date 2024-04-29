import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import css from "./Contact.module.css";
export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.listItemContainer}>
        <span className={css.listItemPice}>
          <FaUser /> <p className={css.contactName}>{name} </p>
        </span>
        <span className={css.listItemPice}>
          <FaPhone />
          <p>{number}</p>
        </span>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}
Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

import { FaPhone } from "react-icons/fa6";
import { HiMiniUser } from "react-icons/hi2";
const Contact = () => {
  return (
    <li>
      <div>
        <span>
          <FaPhone />
        </span>
        <span>
          <HiMiniUser />
        </span>
      </div>
      <button>Delete</button>
    </li>
  );
};
export default Contact;

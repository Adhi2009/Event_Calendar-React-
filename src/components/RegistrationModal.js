import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  ticket: "General"
};

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const RegistrationModal = ({ event, onClose }) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration successful for ${event.name}`);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <button type="button" className="modal-close" onClick={onClose}>×</button>
        <h2>Register for Event</h2>
        <p>{event.name}</p>

        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Ticket Type
          <select name="ticket" value={form.ticket} onChange={handleChange}>
            <option>General</option>
            <option>Premium</option>
            <option>Student</option>
          </select>
        </label>

        <button className="button button-primary button-wide">Register</button>
      </form>
    </div>
  );
};

export default RegistrationModal;

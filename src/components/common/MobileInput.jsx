import { Field, ErrorMessage } from "formik";

const MobileInput = ({ name, placeholder, disabled = false }) => (
  <div className="mb-4">
    <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
      <span className="bg-gray-200 text-gray-600 px-4 flex items-center select-none">
        +91
      </span>
      <Field
        aria-label={placeholder}
        className="flex-grow px-4 py-2 outline-none text-black"
        placeholder={placeholder}
        type="tel"
        name={name}
        disabled={disabled}
      />
    </div>
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);

export default MobileInput;

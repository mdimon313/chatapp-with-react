const Input = ({ type, placeholder, icon, ...res }) => {
  return (
    <div className="input_wrap">
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          required
          {...res}
        />
        <span className="input_icons">{icon}</span>
      </div>
    </div>
  );
};

export default Input;

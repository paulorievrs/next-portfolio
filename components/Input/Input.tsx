import style from "./input.module.scss";

type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register?: any;
  error?: string;
};

export default function Input({
  label,
  type,
  name,
  placeholder,
  register,
  error = ""
}: InputProps) {
  return (
    <div className={style.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${style.input} ${error ? style.inputError : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

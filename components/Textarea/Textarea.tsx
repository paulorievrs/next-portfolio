import style from "./textarea.module.scss";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  rows?: number;
  register?: any;
  error?: string;
};

export default function TextArea({
  label,
  name,
  placeholder,
  rows = 10,
  register,
  error = ""
}: InputProps) {
  return (
    <div className={style.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`${style.input} ${error ? style.inputError : ""}`}
        rows={rows}
        {...register(name)}
      ></textarea>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

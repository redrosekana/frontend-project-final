// types
import { SendEmailInputProps } from "../types/SendEmailInputTypes";

function SendEmailInput({
  type,
  placeholder,
  name,
  register,
  required,
  pattern,
}: SendEmailInputProps) {
  return (
    <input
      className="w-full rounded-lg p-3 mb-1 text-lg text-gray-700 outline-none bg-slate-50 border-slate-300 focus:border-blue-600 focus:ring-1"
      type={type}
      placeholder={placeholder}
      {...register(name, { required, pattern })}
    />
  );
}

export default SendEmailInput;

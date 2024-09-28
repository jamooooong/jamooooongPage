export function InputLarge({ label, placeholder, name }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-base font-bold text-gray_01 mb-2">{label}</label>

      <input
        placeholder={placeholder}
        className="w-full text-gray_02 text-base border-b-2 p-4 h-80 placeholder:my-auto"
        name={name}
      ></input>
    </div>
  );
}

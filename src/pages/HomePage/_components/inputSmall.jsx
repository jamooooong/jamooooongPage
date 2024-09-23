export function InputSmall({ label, placeholder }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-base font-bold text-gray_01 mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full text-gray_02 text-base border-b-2 p-4"
      />
    </div>
  );
}

import Image from "next/image";

const Input = ({ type, placeholder, icon }) => {
  return (
    <div className="bg-gray-200 border border-gray-400 rounded-[45px] flex items-center">
      <span className="pt-3 pb-2 px-5">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-r-[45px] bg-gray-200 outline-none font-karla placeholder:text-gray-600"
      />
    </div>
  );
};

export default Input;

const TextArea = ({ placeholder }) => {
  return (
    <textarea
      rows={10}
      placeholder={placeholder}
      className="bg-gray-200 border border-gray-400 rounded-[15px] outline-none px-6 py-5 resize-none placeholder:text-gray-600"
    />
  );
};

export default TextArea;

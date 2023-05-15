export default function Button({ yellow, text, onClick }) {
  const blueBtn =
    "bg-powder-blue hover:bg-steel-blue text-navy-blue hover:text-off-white px-12 py-3.5";
  const yellowBtn = "bg-yellow hover:bg-light-yellow text-navy-blue px-7 py-2";
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl text-xl font-medium drop-shadow-custom ${
        yellow ? yellowBtn : blueBtn
      }`}
    >
      {text}
    </button>
  );
}

const CardDetails = ({card, closeModal}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-[3px] flex justify-center items-center z-40">
      <div className="w-110 h-110 bg-amber-800 flex flex-col">
        <h2 className="text-6xl text-white">{card.title}</h2>
        <h2 className="text-6xl text-white">{card.style}</h2>
        <h2 className="text-6xl text-white">{card.size}</h2>
        <button
          className="p-2 bg-red-500 text-white w-20 rounded-2xl"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default CardDetails;
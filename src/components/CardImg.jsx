const CardImg = ({ img, title, style, size }) => {
  return (
    <div className="relative overflow-hidden fadeIn">
      <div className="">
        <img
          className="rounded-md max-md:object-cover max-md:w-20 max-md:h-20"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-200 text-sm mt-2 mb-4">
            {style} • {size}
          </p>
          <button className="p-1.5 text-xs text-[#be195c] bg-white hover:bg-[#f6eaef] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardImg;

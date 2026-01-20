
const CardImg = ({ img, title, style, size, onToggle}) => {

  return (
    <div className="relative overflow-hidden fadeIn">
      <div className="">
        <img
          className="rounded-md max-md:object-cover  max-md:h-[40vh]"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-4xl">{title}</h3>
          <p className="text-gray-200 text-xl mt-2 mb-4">
            {style} • {size}
          </p>

        </div>
      </div>

    </div>
  );
};

export default CardImg;

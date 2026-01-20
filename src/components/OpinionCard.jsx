const OpinionCard = ({text, name}) => {
  return (
    <div className="lg:w-[22vw] bg-[#9d174d] grid grid-rows-4 rounded-2xl h-44">
      <p className="italic text-gray-200 row-span-3 m-5">"{text}"</p>
      <div className="flex items-center gap-2 p-4 ">
        <div className="w-6 h-1 bg-white"></div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default OpinionCard
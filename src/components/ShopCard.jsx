import { Store } from "lucide-react";
const ShopCard = ({ img, title, style, price }) => {
  return (
    <>
      <div className="w-[22vw] h-[40vh] border-1 border-[#ddd] dark:border-[#e75c93] rounded-md p-2 hover:shadow-xl transition-shadow duration-200 max-md:w-[88vw] max-md:h-[50vh]">
        <img src={img} alt="" className="rounded-xl h-[65%] w-full" />
        <h2 className="mt-4 text-xl text-[#821943] dark:text-gray-200">
          {title}
        </h2>
        <p className="text-[#ba3167] dark:text-[#ec78a6]">{style}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#e62d77] text-[1.2rem] font-semibold dark:text-[#e44584]">
            {price}
          </p>
          <a
            href=""
            className="bg-[#e62d77] text-white p-2 rounded-xl flex gap-2 hover:brightness-95 "
          >
            {" "}
            {<Store></Store>} Ver en tienda
          </a>
        </div>
      </div>
    </>
  );
}

export default ShopCard
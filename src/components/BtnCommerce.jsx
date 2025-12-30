import { ShoppingBag } from "lucide-react";
const BtnCommerce = () => {
  return (
    <>
      <a
        href="#"
        target="_blank"
        className="flex gap-4 border-1 border-white p-2 rounded-md bg-[#e62d77] text-white hover:brightness-90"
      >
        <ShoppingBag color="#fff" /> Comprar Arte
      </a>
    </>
  );
};

export default BtnCommerce;

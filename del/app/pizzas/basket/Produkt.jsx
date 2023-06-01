import Image from "next/image";

const Product = () => {
  return (
    <>
    <div className="flex justify-center items-center">

      <Image
        className="mx:auto object-contain text-center"
        src="/img/pizzas/sea.jpg"
        width={100}
        height={100}
        alt="pizza"
      /></div>
      <div className="mt-4 px-6">
        <div className="flex  items-center justify-between text-[26px]">
          <h3>Pizza name:</h3>
          <h3>Price:</h3>{" "}
        </div>
      </div>
      <button className="bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800">
        Delete
      </button>
    </>
  );
};
export default Product;

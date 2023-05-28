
 'use client';
import { useState } from "react";


const CardId = async ({promise}) => {
     const [quantity, setQuantity] = useState(1);
//      const router = useRouter();
//   const path = router.query.id
const pizzaData = await promise;
    console.log('pizzaId', pizzaData)
//   const router = useRouter();
//   const { id } = router.query;
//   console.log('id',id)
//   const { title, price, desc, img } = router.query;
   const handleClick = () => {
  setQuantity(quantity + 1);
};
    return (
  <ul>
      {pizzaData.map(({_id,title, price, desc, img }) => (
        <li key={_id}>
  
    <div className="flex w-full items-center justify-center ">
          
          <Image src={img} width={600} height={300} alt="pepperoni pizza" />

          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center">
            <h2 className="underline text-2xl font-bold">{title}</h2>
            <p className="ordinal text-xl ">Price: {price}€</p>
            <p>{desc}</p>
            </div>
               <div className="">
          {/* <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          /> */}
          <button className="" onClick={handleClick}>
            Add to Cart
          </button>
          </div>
                </div>
                </li>
         ))}
    </ul>
    )
}
export default CardId
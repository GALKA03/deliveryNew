import Image from "next/image"
import Link from "next/link"

const PizzasCard = ({ pizza }) => {

    return (
        
       <li className="mb-10">
       <div className="flex w-9/12 flex-col items-center justify-center ">
      <Link href={`/pizzas/${pizza.id}`}>
            <Image src={pizza.img} width={400} height={300} alt="peperoni pizza" />
          
        </Link>
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">{pizza.title}</h2>
                    <p className="ordinal text-lg ">Price:{pizza.prices}€</p>
                    <p>{ pizza.desc}</p>
       </div>
        </div>
      </li>

    )
}
export default PizzasCard
      {/* <li className="mb-10">
       <div className="flex w-9/12 flex-col items-center justify-center ">
          <Image src="/img/pizzas/peperoni.jpg" width={300} height={300} alt="peperoni pizza"/>
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">Peperoni pizza</h2>
          <p className="ordinal text-lg ">Price:8</p>
          <p>pomodoro, mozzarella, salame piccante, uovo, zucchine e grana</p>
       </div>
        </div>
      </li>
      <li >
   <div className="flex w-9/12 flex-col items-center justify-center ">
          <Image src="/img/pizzas/salyami.jpg" width={200} height={200} alt="Salsichia pizza"/>
          <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center" >
                  <h2 className=" underline text-xl font-semibold">Salsichia</h2>
          <p className="ordinal text-lg ">Price:9</p>
          <p>tomato, mozzarella, anchovies and oregano</p>
         </div>
        </div>
      </li> */}
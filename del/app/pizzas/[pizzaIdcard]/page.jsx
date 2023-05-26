
// import axios from 'axios'
// import { useRouter } from 'next/router';
import Image from 'next/image';



export const getPizzas = async (pizzaIdcard)=> {
  try {
    let res = await fetch(`http://localhost:3000/api/pizzas/${pizzaIdcard}`)
    if (!res.ok) {
      throw new Error('fetch error')
    }
  
    return  res.json()  
    } catch (error) { console.log(error)}
}

const PizzaId = async ({params:{pizzaIdcard}}) => {
  const pizza= await getPizzas(pizzaIdcard);
  
  return (
  
    <div className="flex w-full items-center justify-center ">
     
      <Image src={pizza.img} width={600} height={300} alt="pepperoni pizza" />

      <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center">
        <h2 className="underline text-2xl font-bold">{pizza.title}</h2>
        <p className="ordinal text-xl ">Price: {pizza.price}€</p>
        <p>{pizza.desc}</p>
      </div>
    </div>
  );
};

export default PizzaId;

// export async function generateStaticParams() {
//   const pizzas = await getPizzas()
//   return pizzas.results.map((pizza) => ({
//     slug: pizza.slug
//   }));
// }
// export async function generateStaticParams() {
//   const pokes = await getPokemons();
//   return pokes.results.map((p) => ({ name: p.name }));
// }
// export async function generateStaticParams() {
//   const pizzas = await fetch('http://localhost:3000/api/pizzas/').then((res) => res.json());
 
//   return pizzas.map((pizza) => ({
//     slug: pizza.slug,
//   }));
// }
//  <ul>
//       {pizza.map(({ img, title, price, desc }) => {
//         <li key={_id} >
//         <div className="flex w-full items-center justify-center ">
     
//           <Image src={img} width={600} height={300} alt="pepperoni pizza" />

//           <div className="border-2 border-yellow-700 w-full flex flex-col items-center justify-center">
//             <h2 className="underline text-2xl font-bold">{title}</h2>
//             <p className="ordinal text-xl ">Price: {price}€</p>
//             <p>{desc}</p>
//           </div>
//         </div>
//       </li>
//       })}
//       </ul>
// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(
//     `http://localhost:3000/api/pizzas/${params.id}`
//   );
//   return {
//     props: {
//       pizza: res.data,
//     },
//   };
// };

// export default Pizza;


// export const getServerSideProps = async ({params}) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/products/&{params}`);
//     const pizzas = await res.json();
//     console.error('pizzas', pizzas);
//     return {
//       props: {
//         pizzas,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         pizzas: [], // Return an empty array or handle the error case accordingly
//       },
//     };
//   }
// };
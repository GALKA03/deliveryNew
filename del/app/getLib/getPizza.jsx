


// const getPizza = async (id) => {
//   try {
//     let res = await fetch(`http://localhost:3000/api/pizzas/${id}`, { cache: 'no-store' });
//     if (!res.ok) {
//       throw new Error("Failed to fetch data for id");
//     }
//     const pizza = await res.json();
//     return pizza;
//   } catch (error) {
//     console.log(error);
//     throw error; // Re-throw the error to handle it outside of this function if needed
//   }
// };

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   try {
//     const pizza = await getPizza(id);
//     return pizza
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true, // Return a 404 page if the data fetching fails
//     };
//   }
// }

// export default getPizza;




// async function getPizza(id) {

//   try {
//     let res = await fetch(`http://localhost:3000/api/pizzas/${id}`);
//     console.log('fetchPizza res', res);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data for id");
//     }
//     const pizza = await res.json();
//     return pizza
//   } catch (error) { console.log(error)}
// }
// export default getPizza
// const getPizza = async ()=> {
//     try {
//         let res= await fetch(`http://localhost:3000/api/pizzas/${id}`)
//         if (!res.ok) {
//         throw new Error('failed to fetch data id')
//     }
//       return res.json()
//     } catch (error) { console.log(error)}
// }
// export default getPizza
//  async function generateStaticParams() {
//   // Fetch pizzas from your API or elsewhere
//   const pizzas = await fetch('http://localhost:3000/api/pizzas/').then((res) => res.json());

//   // Map over the pizzas to extract each slug
//   const paths = pizzas.map((pizza) => {
//     const { slug } = pizza; // Extract the slug from the pizza object
//     return { params: { slug } };
//   });

//   // Return the array of paths for use in getStaticPaths
//   return paths;
// }
// export default generateStaticParams


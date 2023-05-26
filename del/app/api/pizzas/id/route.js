import Pizzas from "@/models/Pizzaz";
import dbConnect from "@/mongoose/mongoose";

export async function GET(request) {
  await dbConnect();

  try {
    const { id } = request.query;
      const pizza = await Pizzas.findById(id);
      console.log(pizza)
    if (pizza) {
      return new Response(JSON.stringify(pizza));
    }

    return new Response(null, { status: 404 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

// export async function getStaticPaths() {
//   // fetch all pizzas from the database
//   await dbConnect();
//   const pizzas = await Pizzas.find({}, '_id');

//   // Get the paths we want to pre-render based on pizzas
//   const paths = pizzas.map((pizza) => ({
//     params: { id: pizza._id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   return { paths, fallback: true };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // fetch the pizza with the given ID from the database
//   await dbConnect();
//   const pizza = await Pizzas.findById(params.id);

//   // Pass pizza data to the page via props
//   return { props: { pizza: JSON.parse(JSON.stringify(pizza)) } };
// }

// export async function GET(request) {
//   await dbConnect();

//   try {
//     const { id } = request.query;
//       const pizza = await Pizzas.findById(id);
//       console.log(pizza)
//     if (pizza) {
//       return new Response(JSON.stringify(pizza));
//     }

//     return new Response(null, { status: 404 });
//   } catch (error) {
//     return new Response(null, { status: 500 });
//   }
// }

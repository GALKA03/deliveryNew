import Pizzas from "@/models/Pizzaz";

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

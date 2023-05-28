import { NextResponse } from "next/server"


export async function GET(request) {
  
  return NextResponse.json({message:"hello pizza page"})
}



// export async function PATCH(request,{params}) {
//     await dbConnect();
//     try {
//       const { id } = params
//       const { pizza, error } = await Pizzas({ id })
//       if (error) throw new Error(error)
//       return NextResponse.json({pizza}, {status:200})
//      } catch(error) {
//         return NextResponse.json({error: error.message}, {status:500})
//     }
// const id= params.id
//     const { searchParams } = request.next.Url
//     const sort = searchParams.get('sort')
//   return NextResponse.json({message:" Hello id", id, sort}, {status: 201})
// }
// export async function GET(request) {
//   await dbConnect();

//   try {

//       const pizza = await Pizzas.findById(id);
//       console.log('pizzaApiId',pizza)
//     if (pizza) {
//       return new Response(JSON.stringify(pizza));
//     }

//     return new Response(null, { status: 404 });
//   } catch (error) {
//     return new Response(null, { status: 500 });
//   }
// }

export async function PUT(request) {
  await dbConnect();

  try {
    const data = await request.json();

    const updatedPizza = await Pizzas.findByIdAndUpdate(data.id, data, {
      new: true,
    });
    if (updatedPizza) {
      return new Response(JSON.stringify(updatedPizza));
    }
    return new Response(null, { status: 404 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(request) {
  await dbConnect();

  try {
    const data = await request.json();

    const deletedPizza = await Pizzas.findByIdAndDelete(data.id);

    if (deletedPizza) {
      return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 404 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
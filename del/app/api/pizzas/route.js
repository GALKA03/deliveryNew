import dbConnect from "../../../mongoose/mongoose";
import Pizzas from "../../../models/Pizzaz";
import { NextResponse } from "next/server"



// Export the create, read, update, and delete functions
export async function POST(request) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse the JSON body from the client request
    const data = await request.json();

    // Create a new pizza in the database with the given data
    const newPizza = new Pizzas(data);
    console.log('pizzas',newPizza)
    await newPizza.save();

    // Respond with a 201 Created status code and the new pizza object
    return new Response(JSON.stringify(newPizza), { status: 201 });
  } catch (error) {
    // If there was an error saving the pizza to the database, respond with a 500 Internal Server Error status code
    return new Response(null, { status: 500 });
  }
}

export async function GET(request) {
  let response;
  try {
    // Connect to the database
    await dbConnect();

    // Find all pizzas in the database and return them
    const pizzas = await Pizzas.find();
    console.log('pizzas', pizzas);

    response = new Response(JSON.stringify(pizzas));
  } catch (error) {
    console.error('Error getting pizzas:', error);
    response = new Response(null, { status: 500 });
  }

  return response;
}
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


// export async function GET(request) {
//   await dbConnect();

//   try {
//     const { id } = request.query;

//     if (!id || typeof id !== 'string' || id.trim().length === 0) {
//       return new Response(null, { status: 400 });
//     }

//     const pizza = await Pizzas.findById(id);

//     if (pizza) {
//       return new Response(JSON.stringify(pizza));
//     }

//     return new Response(null, { status: 404 });
//   } catch (error) {
//     return new Response(null, { status: 500 });
//   }
// }



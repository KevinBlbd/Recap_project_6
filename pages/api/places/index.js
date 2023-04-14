// import { places } from "../../../lib/db";
import dbConnect from "../../../db/connect";
// import useSWRMutation from "swr/mutation";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  // Spot.create(spotData);

  if (request.method === "POST") {
    const placeData = request.body;
    await Place.create(placeData);
    return response.status(200).json(placeData);
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      const place = new Place(placeData);
      await place.save();
      return response.status(201).json({ status: "Place created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json(place);
  }
}

// POST method

//     if (request.method === "POST") {
//     try {
//       const productData = request.body;
//       await Product.create(productData);
// }

// -------

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const products = await Product.find();
//     return response.status(200).json(products);
//   }

// back up --------

// if (request.method === "GET") {
//   const spots = await Place.find();
//   return response.status(200).json(spots);
// }

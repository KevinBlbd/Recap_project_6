import Spot from "../../../../db/models/Place.js";
import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place.js";
// import useSWRMutation from "swr/mutation";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();
  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      return response.status(200).json(place);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    const updatePlace = request.body;

    await Place.findByIdAndUpdate(id, { $set: updatePlace });
    return response
      .status(200)
      .json({ status: `Place ${id} successfully update.` });
  }
}

//   const place = await Place.findById(id);

//   if (!place) {
//     return response.status(404).json({ status: "Not found" });
//   }

//   response.status(200).json(place);
// }

// ----back up ----

// const spot = await Spots.findById(id);

// if (!spot) {
//   return response.status(404).json({ status: "Not found" });
// }

// response.status(200).json(spot);
// }

import Spot from "../../../../db/models/Place.js";
import dbConnect from "../../../../db/connect";
import Spots from "../../../../db/models/Place.js";
// import useSWRMutation from "swr/mutation";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  // if (!id) {
  //   return;
  // }

  const spot = await Spots.findById(id);

  if (!spot) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(spot);
}

// ----back up ----

// const spot = await Spots.findById(id);

// if (!spot) {
//   return response.status(404).json({ status: "Not found" });
// }

// response.status(200).json(spot);
// }

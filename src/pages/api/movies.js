//Based on this tutorial: https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/
//Unused

import clientPromise from "../../lib/mongodb"

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray()
    res.json(movies)
  } catch (e) {
    console.error(e)
  }
}

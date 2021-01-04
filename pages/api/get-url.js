import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase()
  
  const surl = req.query.surl
  console.log('short URL', surl)
  
  const url = await db
    .collection('urls')
    .findOne({
      surl
    })

  console.log('url found?', url)

  res.json(url)
}

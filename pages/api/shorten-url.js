import { customAlphabet } from 'nanoid'
import { connectToDatabase } from "../../util/mongodb"

const nanoid = customAlphabet('0123456789urlshorty', 8)

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405)
    return res.json({
      error: 'only POST requests are accepted here'
    })
  }

  const { db } = await connectToDatabase()
  const url = req.body.url
  let noCollision, surl, document
  
  // generate unique ID
  // make sure no collisions
  // respond with shortened url ID
  console.log('shorten this original URL : ', url)
  while (!noCollision) {
    document = {
      url,
      surl: nanoid()
    }

    try {
      const result = await db
        .collection('urls')
        .insertOne(document)
      
      noCollision = true
      console.log('insert result', result) 
    } catch (e) {
      console.log(e)
      // collision error gets here
      // TODO - another type of db insert error could also get here
    }
  }

  res.json(document)
}

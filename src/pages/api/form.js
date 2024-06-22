import {MongoClient} from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const document = req.body

    try {
      await client.connect();
      const database = client.db('empreendedorismo');
      const collection = database.collection('pessoas');
      const result = await collection.insertOne(document)

      document._id = result.insertedId

      res.status(200).json(document);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}

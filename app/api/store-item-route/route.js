import { MongoClient } from 'mongodb';

export async function GET(req) {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI_ITEMS);
    const db = client.db();
    const itemscollection = db.collection('storeItems'); 

    const data = await itemscollection.find({}).toArray();

    client.close();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
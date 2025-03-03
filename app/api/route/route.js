import { MongoClient } from 'mongodb';

export async function POST(req) {
    try {
        const { contactData, orderData } = await req.json();
        if(contactData) {
            const newContact = {
                ...contactData,
                id: (Math.random() * 1000).toString(),
            };
    
                const client = await MongoClient.connect(process.env.MONGODB_URI_CONTACT);
                const db = client.db();
    
                const contactsCollection = db.collection('newContacts');
    
                const result = await contactsCollection.insertOne(newContact);

    
                return new Response(
                    JSON.stringify({ message: 'Contact inserted!'}),
                    {status: 201, headers: {'Content-Type': 'application/json'}}
                );
        } if (orderData) {
            const newOrder = {
                ...orderData,
                id: (Math.random() * 1000).toString(),
            };
    
                const client = await MongoClient.connect(process.env.MONGODB_URI_ORDER);
                const db = client.db();
    
                const ordersCollection = db.collection('newOrders');
    
                const result = await ordersCollection.insertOne(newOrder);
    
                return new Response(
                    JSON.stringify({ message: 'Order inserted!'}),
                    {status: 201, headers: {'Content-Type': 'application/json'}}
                );
        }
    } catch (error) {
        console.error('Error inserting contact or order:', error);
        return new Response(
            JSON.stringify({error: 'Something went wrong'}),
            {status: 500, headers: {'Content-type': 'application/json'}}
        );
    }
}

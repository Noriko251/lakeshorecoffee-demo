import fs from 'fs/promises';


export async function POST(req) {
  try {
    const { orderData, contactData } = await req.json(); 

    if(orderData) {
      const newOrder = {
        ...orderData,
        id: (Math.random() * 1000).toString(),
      };
      const orders = await fs.readFile('src/data/orders.json', 'utf8');
      const allOrders = JSON.parse(orders);
      allOrders.push(newOrder);
      await fs.writeFile('src/data/orders.json', JSON.stringify(allOrders));

      return new Response(
        JSON.stringify({ message: 'Order created!' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if(contactData) {
      const newContact = {
        ...contactData,
        id: (Math.random() * 1000).toString(),
      };
      const contacts = await fs.readFile('src/data/contacts.json', 'utf8');
      const allContacts = JSON.parse(contacts);
      allContacts.push(newContact);
      await fs.writeFile('src/data/contacts.json', JSON.stringify(allContacts));

      return new Response(
        JSON.stringify({ message: 'We received a message!' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error creating order or message:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
import sql from 'better-sqlite3';

const db = sql('items.db');

export async function getItems() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return db.prepare('SELECT * FROM items').all();
}

export function getItem(slug) {
    return db.prepare('SELECT * FROM items WHERE slug = ?').get(slug);
}
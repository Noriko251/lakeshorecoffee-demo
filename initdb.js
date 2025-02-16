const sql = require('better-sqlite3');
const db = sql('items.db');

const shopItems = [
    {
        slug: "standard-blend",
        name: "Standard Blend",
        price: "19.99",
        description: "Brazilian based coffee. Perfect balance of bitterness and acidity.",
        image: "/StandardBlend.png"
    },
    {
        slug: "classic-blend",
        name: "Classic Blend",
        price: "19.99",
        description: "Columbian based coffee mixed with Brazil and mocha.",
        image: "/ClassicBlend.png"
    },
    {
        slug: "dark-blend",
        name: "Dark Blend",
        price: "19.99",
        description: "Dark and rich blend mixed with Mandheling and Guatemala.",
        image: "/DarkBlend.png"
    },
    {
        slug: "lakeshore-coffee-mug-lightblue",
        name: "Lakeshore Coffee Mug (Light Blue)",
        price: "23.00",
        description: "Limited-edition Lakeshore Coffee collectible mug. Dishwasher and microwave-safe.",
        image: "/WhiteCoffeeMugLightBlue.png"
    },
    {
        slug: "lakeshore-coffee-mug-lightbrown",
        name: "Lakeshore Coffee Mug (Light Brown)",
        price: "23.00",
        description: "Limited-edition Lakeshore Coffee collectible mug. Dishwasher and microwave-safe.",
        image: "/WhiteCoffeeMugLightBrown.png"
    }
]

db.prepare(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        price INTEGER NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
        )
`).run();

async function initData() {
    const stmt = db.prepare(`
        INSERT INTO items VALUES (
        null,
        @slug,
        @name,
        @price,
        @description,
        @image
    )
`);

for (const item of shopItems) {
    stmt.run(item);
}
}

initData();
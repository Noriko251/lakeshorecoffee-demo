import Link from "next/link";
import classes from './page.module.css';
import ShopItemsGrid from "@/components/shop-items-grid/shop-items-grid";
import { getItems } from '@/lib/items';
import { Suspense } from "react";

async function Items() {
    const items = await getItems();

    return <ShopItemsGrid items={items} />
}


export default function ShopPage() {
    

    return (
        <>
            <header className={classes.header}>
                <h2>Online Store</h2>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching items...</p>}>
                    <Items />
                </Suspense>
            </main>
        </>
    )
}
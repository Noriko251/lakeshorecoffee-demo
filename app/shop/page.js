'use client'

import classes from './page.module.css';
import ShopItemsGrid from "@/components/shop-items-grid/shop-items-grid";
import { Suspense, useEffect, useState } from "react";

function Items() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/store-item-route');
            if(!response.ok) throw new Error("Failed to fetch items.");
            const data = await response.json();
            setItems(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }

      };
      
      useEffect(() => {
        fetchData();
      }, []);

      if (isLoading) return <p className={classes.loading}>Fetching items...</p>;
      if (error) return <p className={classes.error}>Error: {error}</p>;

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
'use client'

import classes from './page.module.css';
import ItemDetail from '@/components/item-detail.js/item-detail';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ItemDetailFetchData() {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('/api/store-item-route');
            if(!response.ok) throw new Error("Failed to fetch items.");
            const items = await response.json();
            const selectedItem = await items.find((item) => item.slug === params.itemSlug);
            setItem(selectedItem);
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

    return <ItemDetail item={item} />
}
import { getItem } from '@/lib/items';
import classes from './page.module.css';
import Image from 'next/image';
import { currencyFormatter } from '@/src/util/formatting';
import { notFound } from 'next/navigation';
import ItemDetailAction from '@/components/item-detail-action/item-detail-action';
import Link from 'next/link';
import Button from '@/components/UI/button';
import Arrow from '@/assets/ArrowLightBlue.png'

export default function ItemDetailsPage({params}) {
    const item = getItem(params.itemSlug)
    
    if (!item) {
        notFound();
    }

    return (
        <>
            <main className={classes.itemDetail}>
                <div className={classes.itemImageWrapper}>
                    <Image className={classes.itemImage} src={item.image} alt={item.name} width={400} height={400}/>
                </div>
                <div className={classes.itemInfoWrapper}>
                    <div className={classes.itemInfo}>
                        <h1>{item.name}</h1>
                        <p className={classes.price}>{currencyFormatter.format(item.price)}</p>
                        <ItemDetailAction item={item}/>
                        <p className={classes.description} dangerouslySetInnerHTML={{
                            __html: item.description,
                            }}
                        ></p>
                    </div>
                    <Link className={classes.backToShop} href="/shop">
                        <Image className={classes.arrow} src={Arrow} alt='back to shop' width={40} height={40}/>
                        <Button textOnly >Go Back To Shop</Button>
                    </Link>
                    
                    </div>
            </main>
        </>
    );
}
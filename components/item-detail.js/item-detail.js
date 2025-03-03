import Image from "next/image";
import ItemDetailAction from "../item-detail-action/item-detail-action";
import Link from "next/link";
import Button from "../UI/button";
import { currencyFormatter } from '@/src/util/formatting';
import Arrow from '@/assets/ArrowLightBlue.png';
import classes from "./item-detail.module.css";

export default function ItemDetail ({item}) {
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
    )
}
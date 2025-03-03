import classes from './cart-item.module.css';
import { currencyFormatter } from '@/src/util/formatting';
import Image from 'next/image';
import trashImg from '@/assets/Trash.png';
import Link from 'next/link';

export default function CartItem({ 
    image,
    name, 
    quantity, 
    price,
    subtotal,
    slug,
    onIncrease,
    onDecrease,
    deleteItem,
}) {

    return (
        <li className={classes.cartItem}>
            <div className={classes.cartItemWrapper}>
                <Link href={`/shop/${slug}`}>
                    <Image className={classes.itemImage} src={image} alt={name} width={50} height={50} unoptimized/>
                </Link>
                <div className={classes.itemDetailActionsWrapper}>
                    <Link href={`/shop/${slug}`}>
                        <div className={classes.itemDetail}>
                            <p className={classes.name}>{name}</p>
                            <p className={classes.price}>{currencyFormatter.format(price)}</p>
                        </div>
                    </Link>
                    <div className={classes.cartItemActions}>
                        <div className={classes.quantityActions}>
                            <button className={classes.counterButton} type="button" onClick={onDecrease}>-</button>
                            <span>{quantity}</span>
                            <button className={classes.counterButton} type="button" onClick={onIncrease}>+</button>
                            <button type="button" onClick={deleteItem} className={classes.trashButton}>
                                <Image className={classes.trash} src={trashImg} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes.subtotal}>{currencyFormatter.format(subtotal)}</p>
        </li>
    )
}
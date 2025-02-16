import classes from "./shop-items-grid.module.css";
import ShopItem from "./shop-item";


export default function ShopItemsGrid({ items }) {
    return (
        <ul className={classes.items}>
            {items.map((item) => (
                <li className={classes.li} key={item.id}>
                    <ShopItem item={item} />
                </li>
            ))}
        </ul>
    );
}
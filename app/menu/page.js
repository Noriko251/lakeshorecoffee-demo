import classes from './page.module.css'
import Image from 'next/image'
import CoffeeImg from '@/assets/Coffee.jpeg'
import FoodImg from '@/assets/CinnamonRolls.jpeg'

export default function MenuPage() {
    return (
        <>
            <header className={classes.header}>
                <h2>Menu</h2>
            </header>
            <main>
                <div className={classes.drinkMenu}>
                    <Image className={classes.coffeeImg} src={CoffeeImg} alt="Coffee image"/>
                    <div className={classes.drinkMenuWrapper}>
                        <div className={classes.columnHeader}>
                            <p className={classes.columnHeaderDrink}>Drink</p>
                        </div>
                        <hr className={classes.hr}/>
                        <div className={classes.menuList}>
                            <ul>
                                <li>
                                    <p className={classes.manuName}>Today&apos;s Coffee</p>
                                    <p>$2.80</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Cappuccino</p>
                                    <p>$4.50</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Latte</p>
                                    <p>$4.80</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Decaf Coffee</p>
                                    <p>$3.00</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Hot Chocolate</p>
                                    <p>$4.00</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Earl Grey Tea</p>
                                    <p>$3.50</p>
                                </li><li>
                                    <p className={classes.manuName}>Rosehip Tea</p>
                                    <p>$4.00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.foodMenu}>
                    <div className={classes.foodMenuWrapper}>
                        <div className={classes.columnHeader}>
                            <p className={classes.columnHeaderFood}>Food</p>
                        </div>
                        <hr className={classes.hr}/>
                        <div className={classes.menuList}>
                            <ul>
                                <li>
                                    <p className={classes.manuName}>Cinnamon Roll</p>
                                    <p>$3.80</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Banana Bread</p>
                                    <p>$2.80</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Today&apos;s Muffin</p>
                                    <p>$3.50</p>
                                </li>
                                <li>
                                    <p className={classes.manuName}>Today&apos;s Cookie</p>
                                    <p>$2.80</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image className={classes.foodImg} src={FoodImg} alt="Food image"/>
                </div>
            </main>
        </>
    )
}
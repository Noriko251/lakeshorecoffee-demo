import classes from "./page.module.css";
// 
import Link from 'next/link';
import Image from "next/image";

import bigLogoImg from '@/assets/LakeshoreCoffeeLogo.png';
import arrowImg from '@/assets/Arrow.png';
import ImageSlideshow from "@/components/image-slideshow/image-slideshow";
import CoffeeImg from '@/assets/Coffee.jpeg'
import FoodImg from '@/assets/CinnamonRolls.jpeg'

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.logoContainer}>
          <div className={classes.mainLogo}>
            <Image className={classes.logoImg} src={bigLogoImg} alt="Lakeshore Coffee big logo" />
          </div>
          <div className={classes.mainLinks}>
            <Link className={classes.link} href="/menu">Our Menu
              <Image className={classes.arrowImg} src={arrowImg} alt="Menu Arrow" />
            </Link>
            <Link className={classes.link} href="/shop">Online Store
              <Image className={classes.arrowImg} src={arrowImg} alt="Menu Arrow" />
            </Link>
          </div>
      </div>
      <div className={classes.slideshowContainer}>
        <ImageSlideshow />
      </div>
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
  );
}

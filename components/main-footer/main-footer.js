import Link from "next/link";
import Image from "next/image";
import classes from './main-footer.module.css'
import logoImg from '@/assets/LakeshoreCoffeeNoBackground.png';

export default function MainFooter () {
    return (
        <footer className={classes.footer}>
            <Link className={classes.logo} href="/">
                <Image className={classes.img} src={logoImg} alt="Lakeshore Coffee logo" />
            </Link>
            <div className={classes.company}>
                <h3 className={classes.companyName}>Lakeshore Coffee</h3>
                <p className={classes.address}>2230 lakeshore blvd west, Suite 111, </p>
                <p className={classes.address}>Etobicoke, ON M8V 0B2</p>
                <p className={classes.phone}>Phone: 111-111-1111</p>
                <p className={classes.copyright}>© 2024 Lakeshore Coffee</p>
            </div>
        </footer>
    );
}
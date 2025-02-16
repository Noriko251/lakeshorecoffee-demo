import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";
import { CartContextProvider } from "@/src/store/CartContext";
import { UserProgressContextProvider } from "@/src/store/UserProgressContext";
import CartModule from "@/components/cart-module/cart-module";
import ThankYouModule from "@/components/thankyou-module/thankyou";
import Sidebar from "@/components/sidebar/sidebar";
import ResponseModule from "@/components/contact-response/contact-response";

export const metadata = {
  title: "Lakeshore Coffee & Fresh Cinnamon Rolls",
  description: "Lakeshore Coffee Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProgressContextProvider>
          <CartContextProvider>
            <Sidebar className="sidebar"/>
              <MainHeader />
                {children}
                <CartModule />
                <ResponseModule />
                <ThankYouModule />
              <MainFooter />
          </CartContextProvider>
        </UserProgressContextProvider>
      </body>
    </html>
  );
}

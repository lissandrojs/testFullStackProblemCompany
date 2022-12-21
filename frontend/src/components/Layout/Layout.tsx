import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import React, {ReactNode} from "react";
import IChildren from "../../interfaces/IChildren";




const Layout = ({children }:IChildren) => {
  return (
    <div >
      <Header />
      <div >
        <div>
            {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
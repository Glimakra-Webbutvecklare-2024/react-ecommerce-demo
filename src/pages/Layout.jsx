import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


function Layout(props) {
    return ( <>
        <Header/>
        { /* Huvudinnehåll ska ligga here */ }
        {props.children}
        <Footer/>
    </>);
}

export default Layout;
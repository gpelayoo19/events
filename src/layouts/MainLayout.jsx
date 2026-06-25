import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <WhatsAppButton
                phonenumber="573016985605"
                message="Hola, me gustaría solicitar una cotización"
            />
            <Footer />
        </>
    );
};

export default MainLayout;
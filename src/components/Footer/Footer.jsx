
const Footer = () => {
    return (
        <footer>
            <div className="footer footer-center p-10">
                <aside>
                    <p className="text-4xl font-bold">
                        Gadget Heaven
                    </p>
                    <p className="text-xl">Leading the way in cutting-edge technology and innovation.</p>
                </aside>
            </div>
            <div className="footer bg-base-200 text-base-content p-10 justify-evenly">
                <nav>
                    <h6 className="footer-title opacity-100 text-center">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Carrers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
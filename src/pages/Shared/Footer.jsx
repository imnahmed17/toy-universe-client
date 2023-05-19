import { GiRobotHelmet } from 'react-icons/gi';

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-20 p-10 bg-base-200 text-base-content">
                <div>
                    <div>
                        <div className='md:flex justify-center'>
                            <GiRobotHelmet style={{ color: '#00BFFF' }} size={70} />
                        </div>
                        <p className="font-bold tracking-wide text-xl text-gray-600">Toy Universe</p>
                    </div>
                    <p>Toy Universe Ltd.<br/>Providing reliable toy products since 2010</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                    <a className="link link-hover">Developers</a>
                </div> 
                <div>
                    <span className="footer-title">Social Media</span> 
                    <a className="link link-hover">Facebook</a> 
                    <a className="link link-hover">Twitter</a> 
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">LinkedIn</a>
                </div> 
                <div>
                    <span className="footer-title">Contact Us</span> 
                    <a className="link link-hover">123 Toy Street, East Berne</a> 
                    <a className="link link-hover">555-555-5555</a>
                    <a className="link link-hover">info@toyuniverse.com</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 border-t bg-base-200 text-base-content border-base-300">
                <div>
                    <p>Copyright © 2023 - All right reserved by Toy Universe Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
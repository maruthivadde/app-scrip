import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import './index.css'

const About = () =>(
    <div className='about-container'>
        <div className='about-first-card'>
         <div className='about-1'>
            <h1 className='about-a'>BE THE FIRST TO KNOW</h1>
            <p className='about-b'>Sing up for updates from mettā muse.</p>
            <div className='about-input'>
                <input type='email' placeholder='Enter your e-mail' className='input-container'/>
                <button className='button' type='button'>SUBSCRIBE</button>
            </div>
         </div>
         <div className='about-2'>
            <h1 className='about-a'>CONTACT US</h1>
            <h2 className='about-b'>+44 221 133 5360</h2>
            <h2 className='about-b'>customercare@mettamuse.com</h2>
            <h1 className='about-a'>CURRENCY</h1>
            <h2 className='about-c'><img src="https://res.cloudinary.com/manimar/image/upload/v1713614794/pngwing.com_hqlk6w.png" alt='usa' className='usa-img'/>USA</h2>
            <p className='about-bb'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
         </div>
        </div>
        <hr/>
        <div className='about-second-card'>
            <div className='card-1'>
                <h1 className='about-a'>mettā muse</h1>
                <p className='about-b'>About Us</p>
                <p className='about-b'>Stories</p>
                <p className='about-b'>Artisans</p>
                <p className='about-b'>Boutques</p>
                <p className='about-b'>Contact Us</p>
                <p className='about-b'>EU Compliances Docs</p>
            </div>
            <div className='card-2'>
                <h1 className='about-a'>QUICK LINKS</h1>
                <p className='about-b'>Orders & Shipping</p>
                <p className='about-b'>Join/Login as a Seller</p>
                <p className='about-b'>Payment & Pricing</p>
                <p className='about-b'>Return & Refunds</p>
                <p className='about-b'>FAQs</p>
                <p className='about-b'>Privacy Policy</p>
                <p className='about-b'>Terms & Conditions</p>
            </div>
            <div className='card-3'>
                <h1 className='about-a'>FOLLOW US</h1>
                <div className="follow-icons">
                <div className="link"><FaSquareInstagram/></div>
                    <div className="link"><FaLinkedin/></div>
                </div>
                <h2 className='about-a'>mettā muse ACCEPTS</h2>
                <div className="pay-cards">
                    <div className="pay-container">
                    <img src="https://res.cloudinary.com/manimar/image/upload/v1713618426/7123945_logo_pay_google_gpay_icon_aahmtf.png" alt="google pay" className="pay-icon"/>
                    </div>
                    <div className="pay-container">
                        <img src="https://res.cloudinary.com/manimar/image/upload/v1713618268/1322427_card_master_master_card_master_card_new_logo_method_icon_ytervr.png" alt="master caed" className="pay-icon" />
                    </div>
                    <div className="pay-container">
                        <img src="https://res.cloudinary.com/manimar/image/upload/v1713618252/4375034_logo_paypal_icon_t80270.png"
                        className="pay-icon" 
                        alt="pay pal"/>
                    </div>
                    <div className="pay-container">
                        <img src="https://res.cloudinary.com/manimar/image/upload/v1713618499/345580_american_express_amex_billing_credit_card_payment_icon_fkhesv.png"
                        alt="amex"
                        className="pay-amex"
                        />
                    </div>
                    <div className="pay-container">
                        <img src="https://res.cloudinary.com/manimar/image/upload/v1713618301/4373138_apple_logo_logos_pay_icon_tzgq67.png"
                         alt="apple pay"
                         className="pay-icon"
                         />
                    </div>
                    <div className="pay-container">
                        <img src="https://res.cloudinary.com/manimar/image/upload/v1713618381/Screenshot_13_uxdyjr.png"
                        alt="o pay"
                        className="pay-o"
                        />
                    </div>
                </div>
            </div>

        </div>
    </div>
)

export default About
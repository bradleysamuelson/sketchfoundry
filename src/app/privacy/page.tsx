import Image from 'next/image'
// import styles from '../page.module.css'

import Link from 'next/link'
import logo from '../img/logo.svg';
import logoWhite from '../img/logo-white.svg';

export default function Privacy() {
	const currentDate = new Date();
    const Year = currentDate.getFullYear().toString();
	return (
		<div className='page-content'>
			<header className="app-header">
                <div className='app-header-left'>
                    <span className='logo-container'>
                        <Link href='/'>
							<Image
								src={logo}
								height={100}
								width={229}
								alt="Sketch Foundry"
							/>
						</Link>
                    </span>
                </div>
                <div className='app-header-right'>
                    <div className='nav-privacy'>
                        <a className='nav-link' href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc'>Login</a>
                    </div>
                </div>
                
            </header>
			<main>
			<div className='privacy-content'>
                    <h1>Privacy Policy</h1>
                    <p>
                        We do not sell or share any information that is collected from visitors of this site. 
                        Information is collected via cookies, which may log data regarding your visit such as your 
                        IP address and the name and/or location of your internet provider. The visitor may opt to 
                        enter additional information (such as name, and e-mail address) to submit some features of 
                        the stie. This information is only used in the context of these features and is not retained 
                        for any other purposes. Visitors may block cookie usage via their personal browser settings, 
                        but it may disable some functionality of the site.
                    </p>
                    <p>
                        When you subscribe or buy something from our store, we receive some personal information. 
                        This can include name, email address, and shipping address. As we said, we won’t sell or 
                        share this information. Email and shipping addresses will only be used to deliver requested 
                        products or services. We use Stripe for payment processing so we never receive or have access to your 
                        credit card information. To manage your account with Stripe, please&nbsp;
                         <a href="https://billing.stripe.com/p/login/5kAg02gK05eheI03cc">click here</a>. 
                        If you have any questions or comments on the above policies, feel free 
                        to <a href='mailto:info@sketchfoundry.co'>contact us</a>.
                    </p>
                </div>
			</main>
			<footer>
                <div className='footer-content'>
                    <div className='footer-left'>
						<Link href='/'>
							<Image
								src={logoWhite}
								height={70}
								width={160}
								alt="Sketch Foundry"
								className='footer-logo'
							/>
						</Link>
						<div className='copyright'>&copy; {Year} Bradley Samuelson</div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-right-col'>
                            {/* <a href='#' className='footer-link'>About Sketch Foundry</a> */}
                            {/* <a href='/#pricing' className='footer-link'>Pricing</a> */}
                            
                            <a href='mailto:info@sketchfoundry.co' className='footer-link'>Contact</a>
                        {/* </div>
                        <div className='footer-right-col'> */}
                            <a href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc' className='footer-link'>Client Login</a>
                            {/* <a href='#' className='footer-link'>Terms</a> */}
                            {/* <a href='#' className='footer-link'>Privacy</a> */}
                        </div>  
                        
                    </div>
                    <div className="ml-embedded" data-form="oFO9GB"></div>                      
                </div>
                
            </footer>
		</div>
	)
	}

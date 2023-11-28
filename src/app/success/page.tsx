import Image from 'next/image'

import Link from 'next/link'
import logo from '../img/logo.svg';
import logoWhite from '../img/logo-white.svg';

export default function Success() {
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
                <section className='section-benefits'>
                    <div className='success-container'>
                        <h3>Thanks for subscribing!</h3>
                        <p>A payment to Sketch Foundry will appear on your statement.</p>
                        <h4>What happens next?</h4>
                        <p>
                            You’ll soon receive an email with links to your request board and info on how to get started.
    If you need to manage your subscription, you can do that <a href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc' target='_blank'>here</a>.
                        </p>
                        <p>
                            We can’t wait to make cool stuff with you!
                        </p>
                    </div>
                </section>
                    
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
                            {/* <a href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc' className='footer-link'>Client Login</a> */}
                            {/* <a href='#' className='footer-link'>Terms</a> */}
                            {/* <a href='#' className='footer-link'>Privacy</a> */}
                        </div>                        
                    </div>
                </div>
                
            </footer>
		</div>
	)
	}

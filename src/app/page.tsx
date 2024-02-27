'use client'
import React from 'react';
import cx from 'classnames';
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Slider from "react-slick";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Rive from '@rive-app/react-canvas';

import { Portfolio } from './portfolio';

import styles from './page.module.css'
import logo from './img/logo.svg'
import logoAnimated from './img/sketchfoundry-logo.gif'
import logoWhite from './img/logo-white.svg';
import divider1 from './img/divider1.svg';
import divider2 from './img/divider2.svg';
import divider3 from './img/divider3.svg';
import hiw1 from './img/how_it_works_1.gif';
import hiw2 from './img/how_it_works_2.gif';
import hiw3 from './img/how_it_works_3.gif';
import gnome1 from './img/stats/stats-intro-gnome.gif';
import gnomeBrain from './img/stats/stats-brain-gnome.gif';
import gnomeEngage from './img/stats/stats-gnome-engage.gif';
import gnomeBook from './img/stats/stats-book-gnome.gif';
import gnomeChart from './img/stats/stats-chart-gnome.gif';
import gnomeShelf from './img/stats/stats-shelf-gnome.gif';

export default function Home() {
	const [faqOpen, setfaqOpen] = React.useState<string>('');
    const [currentImage, setCurrentImage] = React.useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = React.useState<boolean>(false);
    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);
    const currentDate = new Date();
    const Year = currentDate.getFullYear().toString();
	// @ts-ignore
	const openLightbox = React.useCallback((event: any, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };

	React.useEffect(() => {
    
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });
    
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

	  const handleSetActive = (to: any) => {
        console.log(to);
        setMobileNavOpen(false);
    };

    const faqClick = (n: any) => {
        return () => {
            if (n === faqOpen) {
                setfaqOpen('')
            } else {
                setfaqOpen(n)
            }
        };
    }
    const mobileIconClick = () => {
        return () => {
            setMobileNavOpen(!mobileNavOpen);
        };
    }

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
	return (
		<div className='page-content'>
			<header className="app-header">
                <div className='app-header-left'>
                    <span className='logo-container'>
                        {/* <img src={logo} alt="Sketch Foundry" className='header-logo' /> */}
						<Image
							src={logoAnimated}
							height={100}
							width={229}
							alt="Sketch Foundry"
						/>
                    </span>
                </div>
                <div className='app-header-right'>
                    <div className={cx('nav', {'open' : mobileNavOpen})}>
                        <ScrollLink 
                            className='nav-link'
                            activeClass="active" 
                            to="benefits" 
                            spy={true} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 
                            onSetActive={handleSetActive}
                            role='button'
                        >Benefits</ScrollLink>
                        <ScrollLink 
                            className='nav-link'
                            activeClass="active" 
                            to="latestwork" 
                            spy={true} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 
                            onSetActive={handleSetActive}
                        >Recent Work</ScrollLink>
                        <ScrollLink 
                            className='nav-link'
                            activeClass="active" 
                            to="pricing" 
                            spy={true} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 
                            onSetActive={handleSetActive}
                        >Pricing</ScrollLink>
                        <ScrollLink 
                            className='nav-link'
                            activeClass="active" 
                            to="faq" 
                            spy={true} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 
                            onSetActive={handleSetActive}
                        >FAQ</ScrollLink>
                        <a className='nav-link' href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc'>Login</a>
                    </div>
                    <div className='mobile-nav'>
                        <button className={cx('mobile-nav-menu', {'open': mobileNavOpen})} onClick={mobileIconClick()}><span></span></button>
                    </div>
                </div>
                
            </header>
			<main>
				<section className='section-masthead'>
					<div className='home-image-bg'></div>
                    <div className='masthead-content'>
                        <h1><span>Custom Illustration</span> For <span>Connoisseurs of Creativity</span></h1>
                        <h2>Get custom illustrations for all of your projects with one simple subscription. <br />Pause or cancel at any time.</h2>
                        {/* <ScrollLink 
                            className='btn btn-secondary'
                            to="pricing" 
                            spy={false} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 
                        >Pricing Plans</ScrollLink> */}
                        
                        <ScrollLink
                            className='rive-btn-pricing-container'
                            to="pricing" 
                            spy={false} 
                            smooth={true} 
                            offset={-110} 
                            duration={700} 

                        >
                            <Rive
                                src="/rive/price-button.riv"
                                stateMachines="PricingPlans"
                            />
                        </ScrollLink>
                        
                    </div>
				</section>

				<div className='divider-container'>
                    <img src={divider1} alt='' ></img>
                </div>

				<Element name="stats">
                    <section className='section-stats'>
                        <Slider {...sliderSettings}>
                            <div className='stat-container stat-intro'>
                                {/* <img src={gnome1} alt="" className='stat-intro-gnome' /> */}
								<Image
									src={gnome1}
									height={400}
									width={206}
									className='stat-intro-gnome'
									alt="Gnome"
								/>
								<div className='stat-text-container cartoon-font-solid'>
                                    <div className='stat-intro-text'>
                                        But why should you use <span>illustration</span> in your project?
                                    </div>
                                    <div className='stat-text-2'>
                                        I'll tell you why... with <span>stats</span>!
                                    </div>
                                    <div className='stat-text-small'>
                                        (click the arrow for the stats)
                                    </div>
                                </div>
                            </div>
                            <div className='stat-container stat-intro'>
                                <div className='stat-text-container cartoon-font-solid'>
                                    <div className='stat-text stat-text-1'>
                                        <span className='text-highlight'>90%</span> of the information processed by the brain is <span>visual</span> 
                                    </div>
                                    <div className='stat-text-2'>
                                        and visuals are processed <span>60,000X faster</span> in the brain than text.
                                    </div>
                                </div>
								<Image
									src={gnomeBrain}
									height={400}
									width={272}
									className='stat-intro-gnome'
									alt="Information"
								/>
                                {/* <img src={gnomeBrain} alt="" className='stat-intro-gnome' /> */}
                            </div>
                            <div className='stat-container stat-intro'>
                                {/* <img src={gnomeEngage} alt="" className='stat-intro-gnome' /> */}
                                <Image
									src={gnomeEngage}
									height={400}
									width={341}
									className='stat-intro-gnome'
									alt="Engagement"
								/>
								<div className='stat-text-container cartoon-font-solid'>
                                    <div className='stat-text stat-text-1'>
                                        Posts with graphic images have <span>650% higher engagement</span> than content with just text.
                                    </div>
                                </div>
                            </div>
                            <div className='stat-container stat-intro'>
                                <div className='stat-text-container cartoon-font-solid'>
                                    
                                    <div className='stat-text-2'>
                                        Research has found that 
                                    </div>
                                    <div className='stat-text stat-text-1'>
                                        <span className='text-highlight'>including color visuals</span> <br />
                                        with your article or newsletter <span className='text-highlight'>increases</span> the willingness to read by up to <span className='text-highlight'>80%</span>.
                                    </div>
                                </div>
								<Image
									src={gnomeBook}
									height={400}
									width={220}
									className='stat-intro-gnome'
									alt="Reading"
								/>
                                {/* <img src={gnomeBook} alt="" className='stat-intro-gnome' /> */}
                            </div>
                            <div className='stat-container stat-intro'>
                                {/* <img src={gnomeChart} alt="" className='stat-intro-gnome' /> */}
                                <Image
									src={gnomeChart}
									height={400}
									width={231}
									className='stat-intro-gnome'
									alt="Illustrations perform the best"
								/>
								<div className='stat-text-container cartoon-font-solid'>
                                    
                                    <div className='stat-text stat-text-1'>
                                        A survey of marketers has found that <span className='text-highlight'>original graphics</span> like illustrations and infographics <span className='text-highlight'>outperform</span> all other types of visual content.
                                    
                                    </div>
                                    <div className='stat-text-small'>
                                        Stock photos and clipart perform the worst. 
                                    </div>
                                </div>
                            </div>
                            <div className='stat-container stat-intro'>
                                <div className='stat-text-container cartoon-font-solid'>
                                    
                                    <div className='stat-text-2'>
                                        A study has found that
                                    </div>
                                    <div className='stat-text stat-text-1'>
                                        people following directions with illustrations do <span className='text-highlight'>323% better</span> than when directions only include text.
                                    
                                    
                                       
                                    </div>
                                </div>
								<Image
									src={gnomeShelf}
									height={400}
									width={382}
									className='stat-intro-gnome'
									alt="Following Directions"
								/>
                                {/* <img src={gnomeShelf} alt="" className='stat-intro-gnome' /> */}
                            </div>
                        </Slider>
                    </section>
                </Element>

                <Element name="benefits">
                    <section className='section-benefits'>
                        <h3>What makes a Sketch Foundry Subscription worth your cash?</h3>
                        <ul className='benefits-list'>
                            <li>Custom illustrations made just for your project.</li>
                            <li>Make as many illustration requests as you want and keep track of them on your own board.</li>
                            <li>Quick turnaround times.</li>
                            <li>Unlimited revisions.</li>
                            <li>Flexibility! Pause or cancel at any time.</li>
                            <li>Licensing options to fit your needs (including full buyout for unlimited use).</li>
                        </ul>
                        <div className='button-container'>
                            <ScrollLink 
                                className='btn btn-primary'
                                to="pricing" 
                                spy={false} 
                                smooth={true} 
                                offset={-110} 
                                duration={700} 
                            >See Pricing Plans</ScrollLink>
                        </div>
                    </section>
                </Element>
				
				<div className='divider-container'>
					<Image
						src={divider1}
						fill
						alt="-"
					/>
                </div>

				<Element name="latestwork">
                    <section className='section-latest-work'>
                        <h3>Recent Work</h3>
                        <div className='portfolio-container'>
                            <Gallery 
								photos={Portfolio} 
								onClick={openLightbox} 
							/>

                        </div>
                    </section>
                </Element>

				<div className='divider-container'>
					<Image
						src={divider2}
						fill
						alt="-"
					/>
                </div>

				<Element name="howitworks">
                    <section className='section-how-it-works'>
                        <h3>How It Works</h3>
                        <div className='how-it-works-container'>
                            <div className='how-it-works-1'>
                                {/* <img src={hiw1} alt='' /> */}
								<Image
									src={hiw1}
									width={230}
									height={300}
									alt="Project Board"
								/>
								<div className='how-it-works-copy-container'>
									<div className='how-it-works-number'>1</div>
                                	<p>You get access to your own project tracking board where you can create as many requests as you want.</p>
								</div>
                            </div>
                            <div className='how-it-works-2'>
                                {/* <img src={hiw2} alt='' /> */}
								<Image
									src={hiw2}
									width={286}
									height={300}
									alt="Work in progress"
								/>
								<div className='how-it-works-copy-container'>
									<div className='how-it-works-number'>2</div>
                                	<p>Your highest priority request will get worked on immediately, with unlimited revisions until it’s perfect!</p>
								</div>
							</div>
                            <div className='how-it-works-3'>
                                {/* <img src={hiw3} alt='' /> */}
								<Image
									src={hiw3}
									width={249}
									height={300}
									alt="Complete"
								/>
								<div className='how-it-works-copy-container'>
									<div className='how-it-works-number'>3</div>
                                	<p>Once complete, we’ll move on to your next request right away.</p>
								</div>
							</div>
                        </div>
                        <div className='how-it-works-notes'>
                        All notes, communication, revisions, etc are done asynchronously on your board so you don’t have to spend time in meetings.
                        </div>
                    </section>
                </Element>

				<div className='divider-container'>
					<Image
						src={divider3}
						fill
						alt="-"
					/>
                </div>

				<Element name="scope">
                    <section className='section-scope'>
                        <h3>What can you get?</h3>
                        <ul className='offerings-list'>
                            <li>Editorial Illustrations for websites, magazines, or newsletters</li>
                            <li>Character Designs</li>
                            <li>Infographics</li>
                            <li>Cover Artwork</li>
                            <li>Sequential Art <span>(multi-panel pages have a longer turnaround time)</span></li>
                            <li>Illustrated Icons</li>
                            <li>Mascots</li>
                            <li>Illustrated Maps</li>
                            <li>Custom Avatars</li>
                            <li>Persona Images</li>
                            <li>Promotional or Marketing Graphics</li>
                        </ul>
                    </section>
                </Element>

				<div className='divider-container'>
					<Image
						src={divider1}
						fill
						alt="-"
					/>
                </div>


				<Element name="pricing">
                    <section className='section-pricing'>
                        
                        <h3>Subscription Plans</h3>
                        <div className='pricing-options-container'>
                            <div className='pricing-option'>
                                <h4>Standard</h4>
                                <div className='pricing-details'>
                                    <div className='price'>$999 /month</div>
                                    <div className='price-original'>$1,199 /month</div>

                                    <div className='button-container'>
                                        <a href="https://buy.stripe.com/14k29n2Gk1g42jKbIL" target='_blank' className='btn btn-primary'>Sign Up</a>
                                    </div>
                                    <p>Details:</p>
                                    <ul>
                                        <li>Unlimited illustration requests</li>
                                        <li>One active request at a time</li>
                                        <li>48 to 72 hour delivery</li>
										<li>Unlimited revisions</li>
                                        <li>Unlimited users</li>
                                        <li>Easy credit card payment</li>
                                        <li>Pause or cancel anytime</li>
                                        {/* <li>Types of work included:
                                            <ul>
                                                <li>Editorial Illustration</li>
                                                <li>Spot illustration</li>
                                                <li>Infographics</li>
                                                <li>Illustrated icons</li>
                                                <li>Illustrated maps</li>
                                                <li>Character design</li>
                                                <li>Mascots</li>
                                                <li>Sequential art (comics or comic strips – longer delivery times based on number of panels)</li>
                                            </ul>
                                        </li> */}
                                        <li><strong>Standard limited license (max 2 uses)</strong></li>
                                    </ul>

                                </div>
                            </div>
                            <div className='pricing-option'>
                                <h4>Premium</h4>
                                <div className='pricing-details'>
                                    <div className='price'>$1,999 /month</div>
                                    <div className='price-original'>$2,999 /month</div>
                                    <div className='button-container'>
                                        <a href="https://buy.stripe.com/00gg0d2GkaQE9McdQU" target='_blank' className='btn btn-primary'>Sign Up</a>
                                    </div>
                                    <p>Details:</p>
                                    <ul>
                                        <li>Unlimited illustration requests</li>
                                        <li>One active request at a time</li>
                                        <li>48 to 72 hour delivery</li>
										<li>Unlimited revisions</li>
                                        <li>Unlimited users</li>
                                        <li>Easy credit card payment</li>
                                        <li>Pause or cancel anytime</li>
                                        {/* <li>Types of work included:
                                            <ul>
                                                <li>Editorial Illustration</li>
                                                <li>Spot illustration</li>
                                                <li>Infographics</li>
                                                <li>Illustrated icons</li>
                                                <li>Illustrated maps</li>
                                                <li>Character design</li>
                                                <li>Mascots</li>
                                                <li>Sequential art (comics or comic strips – longer delivery times based on number of panels)</li>
                                            </ul>
                                        </li> */}
                                        <li>
											<strong>Full Buyout unlimited license (you own the artwork and can use it for whatever you want)
											</strong>
										</li>
                                    </ul>

                                </div>
                            </div>
							<div className='pricing-option pricing-option-single'>
								<h4>Want to try it out?</h4>
									
								<div className='pricing-details'>
									<div className='price'>$350 /Illustration</div>
										<p>
											If you're not quite ready to get all of the benefits of a 
											monthly subscription, you can try out the service with a 
											single illustration. 

										</p>
									
										<p>Details:</p>
										<ul>
											<li>One single illustration (excludes sequential art).</li>
											<li>Three rounds of revisions.</li>
											<li>Standard limited license (max 2 uses)</li>
										</ul>
								</div>
								<div className='button-container'>
									<a href="https://buy.stripe.com/aEUbJX80EbUI8I8146" target='_blank' className='btn btn-primary'>Get Started</a>
                                </div>
								
							</div>
                        </div>
						<div className='book-call-container'>
								<h4>Need More Info?</h4>
								<div className='book-call-content'>
									<p>If you have specific questions that I can help answer, feel free to <a href="mailto:info@sketchfoundry.co">drop an email</a>. <br /><br />
									If you need more help I'd be happy to jump on a quick 10 or 15 minute call.</p>
									<div className='button-container'>
										<a href="https://calendly.com/sketchfoundry/sketch-foundry-intro" className='btn btn-primary' target='_blank'>Book a Call</a>
									</div>
								</div>
							</div>
                    </section>
                </Element>
				
				<div className='divider-container'>
					<Image
						src={divider2}
						fill
						alt="-"
					/>
                </div>

				<Element name="faq">
                    <section className='section-faq'>
                        <h3>Frequently Asked Qs</h3>
                        <div className='faq-container'>
                            <div className='question-container' onClick={faqClick('0')}>
                                <div className={cx('question', {'open': faqOpen === "0"})}>
                                    Can't I just get AI to make art for me?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "0"})}>
                                    You could do that. You could also just use clipart or grab images from the internet. 
                                    Those are very impersonal options and most of the time your users can tell the difference.
                                    AI is just a tool, not a partner. I'll partner with you to make sure you get what you need.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('1')}>
                                <div className={cx('question', {'open': faqOpen === "1"})}>
                                    Is it really unlimited?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "1"})}>
                                    You can make as many requests as you want. I'll work on your highest priority request
                                    right away. Once that request is done, I'll move on to the next highest priority. So 
                                    that process keeps going and the only limits to it are time and how complicated your request is.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('2')}>
                                <div className={cx('question', {'open': faqOpen === "2"})}>
                                    How do I request illustrations?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "2"})}>
                                    When you sign up, you'll get access to your own Trello board to track your requests. 
                                    You can create a new card on the board and enter in all the details for your request.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('3')}>
                                <div className={cx('question', {'open': faqOpen === "3"})}>
                                    What is the turnaround time?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "3"})}>
                                    The real answer to this is "it depends". The typical process is that you'll get a sketched thumbnail within 
                                    around 1 business day. Once that's approved it could take a couple days to get your finished artwork to you. 
                                    Obviously more detailed or complicated requests will take a bit longer. 
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('4')}>
                                <div className={cx('question', {'open': faqOpen === "4"})}>
                                    Can you match our illustration style?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "4"})}>
                                    Mostly likely, yes. If you want to be sure before you sign up, you can send me an email
                                    at <a href='mailto:info@sketchfoundry.co'>info@sketchfoundry.co</a>
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('5')}>
                                <div className={cx('question', {'open': faqOpen === "5"})}>
                                    Who are the illustrators?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "5"})}>
                                    Hi, I'm Brad. I'll be your illustrator today. At the moment, Sketch Foundry is an illustration studio of one.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('6')}>
                                <div className={cx('question', {'open': faqOpen === "6"})}>
                                    What medium do you use?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "6"})}>
                                    In order to deliver in a timely fashion, most requests are done digitally.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('7')}>
                                <div className={cx('question', {'open': faqOpen === "7"})}>
                                    Can I get the original artwork?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "7"})}>
                                    Because I work mostly digitally, the original artwork is all digital.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('8')}>
                                <div className={cx('question', {'open': faqOpen === "8"})}>
                                    What if I don’t like the illustration?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "8"})}>
                                    To make sure we're on the same page, I'll give you a quick sketch of your illustration
                                    before taking it to final rendering. But the benefit of this workflow is that you can request 
                                    as many changes as you want until we get it perfect.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('9')}>
                                <div className={cx('question', {'open': faqOpen === "9"})}>
                                    What if I just need one drawing?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "9"})}>
                                    You can pause your subscription whenever you want and the time left in your month will remain
                                    yours until you have more work and resume your subscription. When you resume, you won't be 
                                    charged again until your time runs out.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('10')}>
                                <div className={cx('question', {'open': faqOpen === "10"})}>
                                    Can I use the illustration wherever I want?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "10"})}>
                                    If you subscribe to the Premium plan, then yes! You'll get a full buyout license, which means you 
                                    own the artwork and can use it however you want. If you're on
                                    the Standard plan, you get a license for two uses of the artwork.
                                </div>
                            </div>
                            <div className='question-container' onClick={faqClick('11')}>
                                <div className={cx('question', {'open': faqOpen === "11"})}>
                                    Can I get a refund if I don’t like the service?
                                </div>
                                <div className={cx('answer', {'open': faqOpen === "11"})}>
                                    I don't offer refunds at this time, however you can pause or cancel your subscription at any time.
                                </div>
                            </div>
                        </div>
                    </section>
                </Element>


			</main>
			<footer>
                <div className='footer-content'>
                    <div className='footer-left'>
                        {/* <img src={logoWhite} alt='Sketch Foundry' className='footer-logo' /> */}
                        <Image
							src={logoWhite}
							height={70}
							width={160}
							alt="Sketch Foundry"
							className='footer-logo'
						/>
						<div className='copyright'>&copy; {Year} Bradley Samuelson</div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-right-col'>
                            {/* <a href='#' className='footer-link'>About Sketch Foundry</a> */}
                            <ScrollLink 
                                className='footer-link'
                                activeClass="active" 
                                to="pricing" 
                                spy={true} 
                                smooth={true} 
                                offset={-110} 
                                duration={700} 
                                onSetActive={handleSetActive}
                            >Pricing</ScrollLink>
                            <a href='mailto:info@sketchfoundry.co' className='footer-link'>Contact</a>
                        </div>
                        <div className='footer-right-col'>
                            <a href='https://billing.stripe.com/p/login/5kAg02gK05eheI03cc' className='footer-link'>Client Login</a>
                            {/* <a href='#' className='footer-link'>Terms</a> */}
                            {/* <RouterLink to='/privacy' className='footer-link'>Privacy</RouterLink> */}
							<Link href="/privacy" className='footer-link'>Privacy</Link>
                        </div>                        
                    </div>
                    <div className="ml-embedded" data-form="oFO9GB"></div>
                </div>
                
            </footer>
			{/* @ts-ignore */}
			<ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
					// @ts-ignore
                    views={Portfolio.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
		</div>
	)
}

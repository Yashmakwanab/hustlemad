"use client"
import React, { useState, useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'antd'

const menuItems = [
    {
        label: 'Home',
        subMenuItemsUrl: ['/'],
    },
    {
        label: 'Comapany',
        subMenuItems: ['Our Story', 'Who We Are', 'People', 'Careers'],
        subMenuItemsUrl: ['/about#OurStory', '/about#WhoWeAre', '/about#People', '/about#Careers'],
    },
    {
        label: 'Build a Box',
        subMenuItemsUrl: ['/'],
    },
    {
        label: 'Our Clients',
        subMenuItemsUrl: ['/'],
    },
    {
        label: 'Partners',
        subMenuItems: ['Tap List', 'Food Menu', 'Bakery'],
        subMenuItemsUrl: ['/tap-list', '/food', '/bakery'],
    },
    {
        label: 'Web3 & Communities',
        subMenuItemsUrl: ['/'],
    },
    {
        label: 'Latest Works',
        subMenuItemsUrl: ['/'],
    },
]
const menuItemsMob = [
    {
        label: 'Home',
        subMenuItemsUrl: ['/'],
    },
    {
        label: 'About',
        subMenuItems: ['Our Story', 'Who We Are', 'People', 'Careers'],
        subMenuItemsUrl: ['/about#OurStory', '/about#WhoWeAre', '/about#People', '/about#Careers'],
    },
    {
        label: 'Visit',
        subMenuItems: ['Calendar', 'Reservations', 'Book an Event', 'FAQs'],
        subMenuItemsUrl: ['/visit#calendar', 'https://resy.com/cities/chi/guinness-open-gate-brewery', '/book-event', '/contact#faqs'],
    },
    {
        label: 'Food & Beer',
        subMenuItems: ['Tap List', 'Food Menu', 'Bakery'],
        subMenuItemsUrl: ['/tap-list', '/food', '/bakery'],
    },
]
const Header = ({ setHeader }) => {
    const [height, setHeight] = useState(0)
    const [show, setShow] = useState(false)
    const [showDesktop, setShowDesktop] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(Array(menuItemsMob.length).fill(false))
    const [activeMenuIndex, setActiveMenuIndex] = useState(null)
    const [activeHeader, setActiveHeader] = useState(0)
    const [activeHeaderIndex, setActiveHeaderIndex] = useState(null)

    const [windowWidth, setWindowWidth] = useState(0)

    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions)
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    useEffect(() => {
        if (windowWidth >= 1024) {
            setShow(false)
        }
    })

    const toggleSubMenu1 = (index) => {
        const updatedSubMenu = showSubMenu.map((value, i) => (i === index ? !value : false))
        setShowSubMenu(updatedSubMenu)
        setActiveHeader(index)
    }
    const headerActiveColor = (index) => {
        setActiveHeader(index)
    }

    useEffect(() => {
        if (show) {
            document.body.classList.add('overheader')
        } else {
            document.body.classList.remove('overheader')
        }
    }, [show])

    const conversionWorksScript = () => {
        const wndw = window
        wndw.dataLayer = wndw.dataLayer || []
        wndw.dataLayer.push({
            event: 'customEvent',
            eventAction: 'Social network',
            eventLabel: 'URL',
            'gtm.uniqueEventId': 37152,
        })
    }

    const toggleSubMenu = (index) => {
        if (activeMenuIndex === index) {
            setActiveMenuIndex(null)
        } else {
            setActiveMenuIndex(index)
            setActiveHeaderIndex(index)
        }
    }

    return (
        <>
            <header
                className={`main-header z-[999] mx-auto flex min-h-[77px] w-full max-w-[1920px] justify-center lg:block  ${show ? 'mx-auto' : ''
                    }`}
            >
                {/* desktop */}
                <div className="flex hidden w-full justify-center lg:inline-flex">
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Link href={`/`} legacyBehavior>
                                    <a target="" className="mr-[5px] py-6 cursor-pointer">
                                        <Image
                                            src="/images/landingPage/mainLogo.svg"
                                            alt="Logo"
                                            layout='fixed'
                                            width={148}
                                            height={78} />
                                    </a>
                                </Link>
                                {menuItems.map((menuItem, index) => (
                                    <button
                                        key={`menu-item-${index}`}
                                        className={`font-salt z-99 relative flex cursor-pointer items-center pr-[27px] lg:px-[8px] text-center font-ttNormsPro text-[17px] font-[411] leading-[85%] tracking-[-0.025em]  lg:pr-[25px] lg:pl-[5px] spbp:px-[25px] lg:text-[19px] ${activeMenuIndex === index ? 'active-header' : ''
                                            }`}
                                        onClick={() => {
                                            toggleSubMenu(index)
                                            setShowDesktop(true)
                                        }}
                                        tabIndex={0}
                                        onMouseEnter={() => {
                                            setShowDesktop(true)
                                            toggleSubMenu(index)
                                        }}
                                        onMouseLeave={() => {
                                            setShowDesktop(false)
                                            toggleSubMenu(index)
                                        }}
                                    >
                                        {menuItem.label}
                                        {menuItem.subMenuItems && showDesktop === true && activeHeaderIndex === index && (
                                            <div className="absolute top-24 pt-5">
                                                <div className="box-arrow left-0 flex !min-h-[200px] !w-[253px] flex-col rounded-[8px] !bg-black !p-[20px] !pb-[1px]">
                                                    {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                                        <div
                                                            key={`${index}-${subIndex}`}
                                                            className={`!mb-[36px] cursor-pointer !rounded font-ttNormsPro text-[22px] !text-[19px] font-[411] leading-[16px] tracking-[-0.025em] !text-[white] hover:underline focus:!outline focus:outline-white ${activeMenuIndex === index ? 'active-header' : ''
                                                                }`}
                                                            onClick={() => {
                                                                setShowDesktop(false)
                                                                toggleSubMenu(index)
                                                            }}
                                                        >
                                                            <Link
                                                                legacyBehavior
                                                                href={`${menuItem.subMenuItemsUrl[subIndex]}`}
                                                                className="!mb-[36px] !rounded focus:outline focus:outline-white"
                                                            >
                                                                <a target="" className="flex h-[29px] items-center px-[12px] py-[5px]">
                                                                    {subMenuItem}
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="flex">
                                <Button type="primary" htmlType="submit" className='bg-[#0F143A] py-3 px-7 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[20px] font-[500] text-center'>
                                    Submit Request
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div
                    className={`relative z-[9999] inline-block w-full w-full lg:hidden`}
                >
                    <div className="flex flex-col">
                        <div className="flex h-[77px] items-center justify-between">
                            <Link href={`/`} legacyBehavior>
                                <a target="" className='cursor-pointer !mt-[6px] !h-[72px] !w-[136px]'>
                                    <Image
                                        src="/images/landingPage/mainLogo.svg"
                                        alt="Logo"
                                        layout='fixed'
                                        height={72}
                                        width={136} />
                                </a>
                            </Link>
                            {!show && (
                                <button
                                    onClick={() => {
                                        setShow(true)
                                        setHeader(true)
                                    }}
                                    className="text-[39px] "
                                >
                                    <RxHamburgerMenu />
                                </button>
                            )}
                            {show && (
                                <button
                                    onClick={() => {
                                        setShow(false)
                                        setHeader(false)
                                    }}
                                    className="text-[39px] "
                                >
                                    <MdOutlineClose />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {show && (
                    <div
                        className={`fixed absolute top-0 left-0 z-[999] inline-block flex h-[100vh] w-full w-full justify-start bg-black pt-4 pb-2  lg:hidden lg:pl-8 ${show ? 'bg-SwishMob1 bg-gradient mx-auto mt-0 bg-cover  bg-center bg-no-repeat' : ''
                            }`}
                    >
                        <div className="mt-[110px] flex w-full px-[40px] flex-col overflow-y-auto [&>*:first-child]:mt-[50px]">
                            {menuItemsMob.map((menuItem, index) => (
                                <React.Fragment key={index}>
                                    <button
                                        className="flex w-full cursor-pointer items-center text-start font-knockout text-[61px] font-medium uppercase leading-[72px] tracking-[-0.025em] "
                                        onClick={() => {
                                            toggleSubMenu1(index)
                                            headerActiveColor(index)
                                            if (menuItem.label === 'Home') {
                                                setShow(false)
                                                setHeader(false)
                                                location.href = '/'
                                            }
                                        }}
                                    >
                                        {menuItem.label === 'Home' ? (
                                            <Link href={'/'} legacyBehavior>
                                                <a target="" href="/" onClick={() => setShow(false)} tabIndex={-1}>
                                                    <span className='sr-only'>{menuItem.label}</span>
                                                    <div
                                                        onClick={() => setShow(false)}
                                                        className={activeHeader === index ? 'text-[#B9965B]' : ''}
                                                    >
                                                        {menuItem.label}
                                                    </div>
                                                </a>
                                            </Link>
                                        ) : (
                                            <div className='flex'>
                                                <span className='sr-only'>{menuItem.label}</span>
                                                <div className={activeHeader === index ? 'text-[#B9965B]' : ''}>
                                                    {menuItem.label}</div>
                                                <div className='text-end ml-4 mt-[6px]'>
                                                    <Image
                                                        src="/images/Event/downArrow.svg"
                                                        alt="downArrow"
                                                        layout='fixed'
                                                        height={41}
                                                        width={50} />
                                                </div>

                                            </div>

                                        )}
                                    </button>
                                    {menuItem.subMenuItems && showSubMenu[index] && (
                                        <div className="mt-[35px] mb-[30px]">
                                            {menuItem.subMenuItems &&
                                                showSubMenu[index] &&
                                                menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                                    <div
                                                        className={`mb-[27px] flex w-full cursor-pointer items-center text-start font-ttNormsPro text-[30px] font-[411] leading-[85.842%] tracking-[-0.025em] `}
                                                        key={subIndex}
                                                        onClick={() => {
                                                            setShow(false)
                                                            setHeader(false)
                                                        }}
                                                    >
                                                        <span className='sr-only'>{subMenuItem}</span>
                                                        <Link href={`${menuItem.subMenuItemsUrl[subIndex]}`} legacyBehavior>
                                                            {subMenuItem !== "Reservations" ?
                                                                <a target="">
                                                                    {subMenuItem}
                                                                </a>
                                                                :
                                                                <a target="blank" className='flex'>
                                                                    {subMenuItem}
                                                                    <div className='ml-4'>
                                                                        <Image
                                                                            src="/images/Header/externalLinkIcon.png"
                                                                            alt="downArrow"
                                                                            layout='fixed'
                                                                            className='ml-2'
                                                                            height={22}
                                                                            width={22} />
                                                                    </div>
                                                                </a>
                                                            }
                                                        </Link>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                            <Link href={`/contact#faqs`} legacyBehavior>
                                <a
                                    target=""
                                    onClick={() => {
                                        setShow(false)
                                        setActiveHeader(21)
                                        setHeader(false)
                                    }}
                                >
                                    <div
                                        className="flex w-full cursor-pointer items-center text-start font-knockout text-[61px] font-medium uppercase leading-[72px] tracking-[-0.025em] "
                                        onClick={() => {
                                            setShow(false)
                                            setActiveHeader(21)
                                        }}
                                    >
                                        <span className='sr-only'>Faqs</span>
                                        <div className={activeHeader === 21 ? 'text-[#B9965B]' : ''}>Faqs</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href={`/contact`} legacyBehavior>
                                <a
                                    target=""
                                    onClick={() => {
                                        setShow(false)
                                        setActiveHeader(22)
                                        setHeader(false)
                                    }}
                                >
                                    <div
                                        className={`flex w-full cursor-pointer items-center text-start font-knockout text-[61px] font-medium uppercase leading-[72px] tracking-[-0.025em] `}
                                        onClick={() => {
                                            setShow(false)
                                            setActiveHeader(22)
                                        }}
                                    >
                                        <span className='sr-only'>Contact US</span>
                                        <div className={activeHeader === 22 ? 'text-[#B9965B]' : ''}>Contact US</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href={`/#newsLetterSection`} legacyBehavior>
                                <a
                                    target=""
                                    href="/#newsLetterSection"
                                    onClick={() => {
                                        setShow(false)
                                        setActiveHeader(23)
                                        setHeader(false)
                                    }}
                                >
                                    <div
                                        className="flex w-full cursor-pointer items-center text-start font-knockout text-[61px] font-medium uppercase leading-[72px] tracking-[-0.025em] "
                                        onClick={() => {
                                            setShow(false)
                                            setActiveHeader(23)
                                        }}
                                    >
                                        <span className='sr-only'>NEWSLETTER</span>
                                        <div className={activeHeader === 23 ? 'text-[#B9965B]' : ''}>NEWSLETTER</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href={`/about#Careers`} legacyBehavior>
                                <a
                                    target=""
                                    onClick={() => {
                                        setShow(false)
                                        setActiveHeader(24)
                                        setHeader(false)
                                    }}
                                >
                                    <div
                                        className={`flex w-full cursor-pointer items-center text-start font-knockout text-[61px] font-medium uppercase leading-[72px] tracking-[-0.025em] `}
                                        onClick={() => {
                                            setShow(false)
                                            setActiveHeader(24)
                                        }}
                                    >
                                        <span className='sr-only'>careers</span>
                                        <div className={activeHeader === 24 ? 'text-[#B9965B]' : ''}>careers</div>
                                    </div>
                                </a>
                            </Link>
                            <div className="mt-[50px] flex items-center justify-start pb-[200px] ">
                                <a href="https://www.facebook.com/guinnessbrewerychi" onClick={conversionWorksScript} target="_blank" className="mr-[23px] cursor-pointer">
                                    <Image
                                        src="/images/Header/fbMob.png"
                                        alt="Facebook Logo"
                                        layout='fixed'
                                        height={41}
                                        width={16} />
                                </a>
                                <a href="https://www.instagram.com/guinnessbrewerychi/" onClick={conversionWorksScript} target="_blank" className='mx-[23px] cursor-pointer'>
                                    <Image
                                        src="/images/Header/instaMob.png"
                                        alt="Instagram Logo"
                                        layout='fixed'
                                        height={41}
                                        width={41} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header

import React, { useRef, useState } from 'react'
import { BackArrow } from '@/icons/BackArrow'
import { ForwerdArrow } from '@/icons/ForwerdArrow'
import { InboxIcon } from '@/icons/InboxIcon'
import { LinkdinIcon } from '@/icons/LinkdinIcon'
import { Phone } from '@/icons/Phone'

const employeesDetail = [
    { firstName: "James", lastName: "Hiddleston", currentTitle: "Machine Learning Engineer", location: "San Francisco By Area", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior Machine Learning Engineer at Google October ", experienceSecond: "Junior Machine Learning Engineer at spotify June", education: "Standerd University,M.S., Computer science October" },
    { firstName: "John", lastName: "Doe", currentTitle: "Website Developer ", location: " United Kingdom", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior Website Developer at Google October ", experienceSecond: "Junior Website Developer at spotify June", education: "Standerd University,M.S., Computer science October" },
    { firstName: "Joel B.", lastName: "Oglesby", currentTitle: "PHP Laravel Developer", location: "United State", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior PHP Laravel Developer at Google October ", experienceSecond: "Junior PHP Laravel Developer at spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { firstName: "Carles Gil", lastName: "Zambrano", currentTitle: "Frontend Developer - React Js", location: "American", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior MFrontend Developer - React Js at Google October ", experienceSecond: "Junior Frontend Developer - React Js spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { firstName: "Bru León", lastName: "Delgado", currentTitle: "Frontend Developer - Next Js", location: "New Zealand", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior Frontend Developer - Next Js at Google October ", experienceSecond: "Junior MFrontend Developer - Next Js at spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { firstName: "Richard", lastName: "Bachman", currentTitle: "Front-End Developer (UI / UX)", location: "San Francisco By Area", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "Senior Front-End Developer (UI / UX) at Google October ", experienceSecond: "Junior Front-End Developer (UI / UX) at spotify June", education: "Standerd University,M.S., Computer science October" },
    { firstName: "Mark", lastName: "Twain", currentTitle: "Python Developer", location: "San Francisco By Area", phoneNumber: "", personalEmail: "", linkedIn: "", experienceFirst: "SeniorPython Developer at Google October ", experienceSecond: "Junior Python Developer at spotify June", education: "Standerd University,M.S., Computer science October" },
]

export const Gallary = () => {
    const scroll = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
    //Slide click
    const slide = (shift) => {
        scroll.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
        if (
            Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <=
            scroll.current.offsetWidth
        ) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };
    const scrollCheck = () => {
        setscrollX(scroll.current.scrollLeft);
        if (
            Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <=
            scroll.current.offsetWidth
        ) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-[100vh] bg-[#eeeee4]'>
            <div className='relative flex justify-center w-[700px]'>
                <div className="card flex items-center overflow-scroll scroll-smooth w-[700px] group/item" ref={scroll} onScroll={scrollCheck}>
                    {employeesDetail.map((employee, index) => (
                        <div key={index} >
                            <div class="mt-3 bg-white pl-14 pb-5 rounded-lg w-[700px] border-[#e7e7e8] boredr-1 ">
                                <div className='py-5 '>
                                    <div className='flex items-center '>
                                        <h3 class='text-lg font-semibold text-[#262c4a] mr-3'>
                                            {employee.firstName} {employee.lastName}
                                        </h3>
                                        <a href={employee.phoneNumber }>
                                            <Phone />
                                        </a>
                                        <div className='ml-3 mr-3 border-r-2 w-10'>
                                            <a href={employee.personalEmail}>
                                                <InboxIcon />
                                            </a>
                                        </div>
                                        <a href={employee.linkedIn}>
                                            <LinkdinIcon />
                                        </a>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-sm font-normal text-[#262c4a]'>
                                            {employee.currentTitle}
                                        </p>
                                        <div className='w-1 h-1 bg-[#ededed] rounded-full mx-5'></div>
                                        <p className='text-[#bdbdbf]'>{employee.location}</p>
                                    </div>
                                </div>
                                <div className='border-b border-[#ececec] w-[100%]' />
                                <div class="pt-5 pr-14">
                                    <div className='flex'>
                                        <div className='text-[#262c4a] font-medium text-base mr-10'>Experience</div>
                                        <div className='relative'>
                                            <div className="before:content-[''] before:bg-[#ededed] before:absolute before:left-[-3px] before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full"></div>
                                            <div className="before:content-[''] before:bg-[#ededed] before:absolute before:left-[1px] before:top-[20px] before:w-[1px] before:h-[calc(100%_-_40px)]"></div>

                                            <div className="before:content-[''] before:bg-[#ededed] before:absolute before:left-[-3px] before:bottom-[8px] before:w-[10px] before:h-[10px] before:rounded-full"></div>
                                            <div className='flex items-center'>
                                                <div className='bg-[#ededed] flex justify-center items-center  w-[20px] h-[20px] rounded-full p-1.5 m-1 mx-4'>
                                                    <img src="/images/code.jpeg" alt='img' className='w-[20px] absolute rounded-full h-[20px]' />
                                                </div>
                                                <p class="text-sm text-[#4e4b61] w-[350px] text-ellipsis truncate whitespace-nowrap">
                                                    {employee.experienceFirst}
                                                </p>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='bg-[#ededed] flex justify-center items-center  w-[20px] h-[20px] rounded-full p-1.5 m-1 mx-4'>
                                                    <img src="/images/codeingImage.webp" alt='img' className='w-[20px] absolute rounded-full h-[20px]' />
                                                </div>
                                                <p class="text-sm text-[#4e4b61] w-[350px] text-ellipsis truncate whitespace-nowrap">
                                                    {employee.experienceSecond}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2 pr-14">
                                    <div className='flex'>
                                        <div className='text-[#262c4a] font-medium text-base mr-12'>Education</div>
                                        <div className='relative'>
                                            <div className="before:content-[''] before:bg-[#ededed] before:absolute before:left-[-3px] before:bottom-[8px] before:w-[10px] before:h-[10px] before:rounded-full"></div>
                                            <div className='flex items-center'>
                                                <div className='bg-[#ededed] flex justify-center items-center  w-[20px] h-[20px] rounded-full p-1.5 m-1 mx-4'>
                                                    <img src="/images/dev.webp" alt='img' className='w-[20px] absolute rounded-full h-[20px]' />
                                                </div>
                                                <p class="text-sm text-[#4e4b61] w-[350px] text-ellipsis truncate whitespace-nowrap">
                                                    {employee.education}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {scrollX !== 0 && (
                        <button
                            className="bg-[#00000099] rounded-full p-1 absolute left-3 top-[50%] invisible group-hover/item:visible"
                            onClick={() => slide(-700)}
                        >
                            <BackArrow />
                        </button>
                    )}
                    {!scrollEnd && (
                        <button
                            className="bg-[#00000099] rounded-full p-1  absolute invisible group-hover/item:visible right-3 top-[50%]"
                            onClick={() => slide(+700)}
                        >
                            <ForwerdArrow />
                        </button>
                    )}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

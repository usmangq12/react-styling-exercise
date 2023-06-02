import { BackArrow } from '@/icons/BackArrow'
import { ForwerdArrow } from '@/icons/ForwerdArrow'
import { InboxIcon } from '@/icons/InboxIcon'
import { LinkdinIcon } from '@/icons/LinkdinIcon'
import { Phone } from '@/icons/Phone'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const employeeDetail = [
    { first_name: "James", last_name: "Hiddleston", current_title: "Machine Learning Engineer", location: "San Francisco By Area", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior Machine Learning Engineer at Google October ", experience_second: "Junior Machine Learning Engineer at spotify June", education: "Standerd University,M.S., Computer science October" },
    { first_name: "John", last_name: "Doe", current_title: "Website Developer ", location: " United Kingdom", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior Website Developer at Google October ", experience_second: "Junior Website Developer at spotify June", education: "Standerd University,M.S., Computer science October" },
    { first_name: "Joel B.", last_name: "Oglesby", current_title: "PHP Laravel Developer", location: "United State", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior PHP Laravel Developer at Google October ", experience_second: "Junior PHP Laravel Developer at spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { first_name: "Carles Gil", last_name: "Zambrano", current_title: "Frontend Developer - React Js", location: "American", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior MFrontend Developer - React Js at Google October ", experience_second: "Junior Frontend Developer - React Js spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { first_name: "Bru León", last_name: "Delgado", current_title: "Frontend Developer - Next Js", location: "New Zealand", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior Frontend Developer - Next Js at Google October ", experience_second: "Junior MFrontend Developer - Next Js at spotify Jul", education: "Standerd University,M.S., Computer science October" },
    { first_name: "Richard", last_name: "Bachman", current_title: "Front-End Developer (UI / UX)", location: "San Francisco By Area", phone_number: "", personal_email: "", linkedIn: "", experience_first: "Senior Front-End Developer (UI / UX) at Google October ", experience_second: "Junior Front-End Developer (UI / UX) at spotify June", education: "Standerd University,M.S., Computer science October" },
    { first_name: "Mark", last_name: "Twain", current_title: "Python Developer", location: "San Francisco By Area", phone_number: "", personal_email: "", linkedIn: "", experience_first: "SeniorPython Developer at Google October ", experience_second: "Junior Python Developer at spotify June", education: "Standerd University,M.S., Computer science October" },
]

export const Gallary = () => {
    const scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-[100vh] bg-[#eeeee4]'>
            <div className='relative flex justify-center w-[700px]'>
                <div className="card flex items-center overflow-scroll scroll-smooth w-[700px] group/item" ref={scrl} onScroll={scrollCheck}>
                    {employeeDetail.map((employee, index) => (
                        <div key={index} >
                            <div class="mt-3 bg-white pl-14 pb-5 rounded-lg w-[700px] border-[#e7e7e8] boredr-1 ">
                                <div className='py-5 '>
                                    <div className='flex items-center '>
                                        <h3 class='text-lg font-semibold text-[#262c4a] mr-3'>
                                            {employee.first_name} {employee.last_name}
                                        </h3>
                                        <a href={employee.phone_number }>
                                            <Phone />
                                        </a>
                                        <div className='ml-3 mr-3 border-r-2 w-10'>
                                            <a href={employee.personal_email}>
                                                <InboxIcon />
                                            </a>
                                        </div>
                                        <a href={employee.linkedIn}>
                                            <LinkdinIcon />
                                        </a>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-sm font-normal text-[#262c4a]'>
                                            {employee.current_title}
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

                                                    {employee.experience_first}
                                                </p>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='bg-[#ededed] flex justify-center items-center  w-[20px] h-[20px] rounded-full p-1.5 m-1 mx-4'>
                                                    <img src="/images/codeingImage.webp" alt='img' className='w-[20px] absolute rounded-full h-[20px]' />
                                                </div>
                                                <p class="text-sm text-[#4e4b61] w-[350px] text-ellipsis truncate whitespace-nowrap">
                                                    {employee.experience_second}
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
                    {!scrolEnd && (
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

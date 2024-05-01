import React from 'react'
import { Footer as CustomFooter} from "flowbite-react"
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"

function Footer() {
    return (
        <CustomFooter container className='bg-edit-blue mt-auto'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 mb-2">
                    <div>
                        <CustomFooter.Brand
                            href="https://digitalnadalmacija.hr/"
                            src="src/assets/logos/DDalm_footer.png"
                            alt="Digitalna Dalmacija Logo"
                            name=""
                            className='w-44 h-auto'
                        />
                    </div>
                    <div className="flex justify-evenly w-6/12 items-center text-white">
                        <div>
                            <CustomFooter.LinkGroup col>
                                <CustomFooter.Link className="mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]" href='https://digitalnadalmacija.hr/o-nama'>O nama</CustomFooter.Link>
                            </CustomFooter.LinkGroup>
                        </div>
                        <div>
                            <CustomFooter.LinkGroup col>
                                <CustomFooter.Link className="mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]" href="https://digitalnadalmacija.hr/novosti">Novosti</CustomFooter.Link>
                            </CustomFooter.LinkGroup>
                        </div>
                        <div>
                            <CustomFooter.LinkGroup col>
                                <CustomFooter.Link className="mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]" href="https://digitalnadalmacija.hr/edukacije">Digitalne vještine</CustomFooter.Link>
                            </CustomFooter.LinkGroup>
                        </div>
                        <div>
                            <CustomFooter.LinkGroup col>
                                <CustomFooter.Link className="mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]" href="https://digitalnadalmacija.hr/zajednica">Tech zajednica</CustomFooter.Link>
                            </CustomFooter.LinkGroup>
                        </div>
                        <div>
                            <CustomFooter.LinkGroup col>
                                <CustomFooter.Link className="mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]" href="https://digitalnadalmacija.hr/itposlovanje">Startup ekosustav</CustomFooter.Link>
                            </CustomFooter.LinkGroup>
                        </div>
                    </div>
                </div>
                <CustomFooter.Divider className='mb-2' />
                <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
                    <CustomFooter.Copyright href="#" by="Splitsko-dalmatinska Županija™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <CustomFooter.Icon className='hover:text-[#2E4485] text-2xl transition-colors ease-in-out duration-300' href="https://www.facebook.com/ictzupanija/" icon={BsFacebook} />
                        <CustomFooter.Icon className='hover:text-[#B11D71] text-2xl transition-colors ease-in-out duration-300' href="https://www.instagram.com/digitalnadalmacija/" icon={BsInstagram} />
                        <CustomFooter.Icon className='hover:text-[#0D62A6] text-2xl transition-colors ease-in-out duration-300' href="https://linkedin.com/company/digitalnadalmacija/" icon={BsLinkedin} />
                        <CustomFooter.Icon className='hover:text-[#FB0006] text-2xl transition-colors ease-in-out duration-300' href="https://www.youtube.com/channel/UCJocgtiq6W4bFdRCGxTDoTg/videos" icon={BsYoutube} />
                    </div>
                </div>
            </div>
        </CustomFooter>
    )
}

export default Footer
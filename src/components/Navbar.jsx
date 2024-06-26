import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'

import logo from '../assets/logos/DDalm-Logo-AB.svg'
import ToggleButton from './ui/ToggleButton'

function Navbar() {
    const {isAdmin} = useContext(AdminContext)
    const location = useLocation()
    console.log(location)


    return (
        <nav className='bg-edit-blue sticky h-16 flex justify-between items-center'>
            <div className='flex items-center h-full'>
                <Link className='h-full flex items-center' to={"/"}>
                    <img src='src/assets/logos/DDalm_footer.png' alt='logo' style={{height: 'calc(100% - 10px)'}} className='pl-1' />
                </Link>
            </div>

            <div className='flex justify-end items-center font-mina'>
                <ul className='flex items-center text-white'>
                    <li className={`${location.pathname === "/" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        <Link to={"/"}>Naslovnica</Link>
                    </li>
                    <li className={`${location.pathname === "/workshops" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        <Link to={"/workshops"}>Radionice</Link>
                    </li>
                    <li className={`${location.pathname === "/lecturers" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s`}>
                        <Link to={"/lecturers"}>Predavači</Link>
                    </li>
                    <li className={`${location.pathname === "/administration" || location.pathname === "/administration/workshopsAdmin" || location.pathname === "/administration/organizationsAdmin" || location.pathname === "/administration/lecturersAdmin" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        {isAdmin && <Link to={"/administration"}>Administracija</Link>}
                    </li>
                </ul>
                <ToggleButton />
            </div>
        </nav>
    )
}

export default Navbar
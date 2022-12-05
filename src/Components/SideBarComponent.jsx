import React from "react";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { BsFillPersonFill, BsFillBookmarkFill, BsThreeDots } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate();
    const pathName = window.location.pathname;

    return (
        <div className="border-r h-screen w-1/6 p-5 fixed">
            <p className="font-zen text-blue-500 font-bold text-[24px] cursor-pointer" >POSTY</p>

            <div className="flex mt-5 cursor-pointer" onClick={() => {
                if (pathName !== '/home') {
                    navigate('/home');
                }
            }}>
                <AiFillHome className={`mt-[12px] mr-2 text-[22px] ${pathName === '/home' && 'text-blue-500'}`} />
                <p className={`text-[21px] py-2 ${pathName === '/home' && 'text-blue-600'}`}>Home</p>
            </div>

            <div className="flex mt-2 cursor-pointer" onClick={() => {
                if (pathName !== '/profile') {
                    navigate('/profile');
                }
            }}>
                <BsFillPersonFill className={`mt-[12px] mr-2 text-[22px] ${pathName === '/profile' && 'text-blue-500'}`} />
                <p className={`text-[21px] py-2 ${pathName === '/profile' && 'text-blue-600'}`}>Profile</p>
            </div>

            <div className="flex mt-2 cursor-pointer">
                <IoIosNotifications className="mt-[12px] mr-2 text-[22px]" />
                <p className="text-[21px] py-2">Notification</p>
            </div>

            <div className="flex mt-2 cursor-pointer">
                <BsFillBookmarkFill className="mt-[12px] mr-2 text-[22px]" />
                <p className="text-[21px] py-2">Bookmark</p>
            </div>

            <div className="absolute bottom-3 flex">
                <img className="w-[60px] h-[60px] rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="ml-2">
                    <p className="font-medium">Vikri Agung</p>
                    <p className="text-[14px] text-slate-400">@Vikri</p>
                </div>

                <Menu>
                    <MenuButton
                        as={Button}
                        variant="teal"
                        size="md"
                        color="whiteAlpha"
                        style={{ width: '3px', padding: '0px' }}
                        className='mx-auto ml-[50px]'
                    >
                        <BsThreeDots className="mt-1" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Setting</MenuItem>
                        <MenuItem >
                            <p className="text-red-500 font-medium" onClick={() => navigate('/')}> Log Out</p>
                        </MenuItem>
                    </MenuList>
                </Menu>

            </div>
        </div>
    )
}

export default SideBar;
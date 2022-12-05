import React from "react";
import SideBar from "../Components/SideBarComponent";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    WrapItem,
    Textarea,
    CircularProgress
} from '@chakra-ui/react'
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { VscReply, VscHeart } from "react-icons/vsc";


const PostDetails = () => {


    return (
        <div className="w-full h-screen overflow-x-hidden">
            <div className="w-3/4 min-h-screen mx-auto flex">
                {/* Side Bar */}
                <SideBar />

                {/* Pos Detailt Component */}
                <div className="ml-[284px] w-1/2 pt-5 border-r">
                    <div className="h-[42px] px-2">
                        <p className="font-medium text-[18px]">Post Detail</p>
                    </div>

                    <div className="border-t border-b py-3">
                        {/* Avatar */}
                        <div className="flex justify-between">
                            <div className="flex pl-3 pt-3">
                                <img
                                    className="w-[50px] h-[50px] rounded-full object-cover"
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                                <div className="ml-2 flex">
                                    <div>
                                        <p className="font-medium">Vikri Agung</p>
                                        <p className="text-[11px] text-slate-400">@Vikri</p>
                                    </div>

                                    <div className="pl-1 pt-1">
                                        <p className="text-slate-400 text-[11px]">Posted a day ago</p>
                                    </div>

                                </div>
                            </div>

                            <WrapItem>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="link"
                                        size="md"
                                        color="whiteAlpha"
                                        style={{ width: '3px', padding: '0px' }}
                                        className='mx-auto ml-[50px]'
                                    >
                                        <BsThreeDots className="mr-3 mt-2 text-[24px] cursor-pointer hover:border hover:rounded-full hover:bg-white" />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Share</MenuItem>
                                        <MenuItem ><p className="text-red-500 font-medium">Delete</p> </MenuItem>
                                    </MenuList>
                                </Menu>
                            </WrapItem>

                        </div>

                        {/* post */}
                        <div className="px-5 mt-5">
                            <p>Ini caption disini</p>
                            <img
                                src="https://images.unsplash.com/photo-1580746453801-37b0bc56f3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                                alt="post_detail.png"
                                className="w-[500px] mt-2 object-contain rounded-2xl"
                            />
                        </div>

                        <div className="flex justify-between w-3/4 px-3 py-5 ml-8">
                            <VscReply className="cursor-pointer hover:text-blue-500" />
                            <VscHeart className="cursor-pointer hover:text-blue-500" />
                            <BsBookmark className="cursor-pointer hover:text-blue-500" />
                        </div>


                    </div>

                    {/* State */}
                    <div className="border-b flex px-5 py-3">
                        <p className="font-medium mr-2">3 <span className="text-slate-400">Replies</span></p>
                        <p className="font-medium mr-2">3 <span className="text-slate-400">Likes</span></p>
                    </div>

                    {/* Comments */}
                    <div className="border-b border-slate-100 pb-3">
                        <div className="ml-3 pt-3">
                            <div className="ml-3">
                                <p className="font-medium">Vikri Agung <span className="text-slate-400 text-[12px] font-light">a day ago</span></p>
                                <p className="text-[11px] text-slate-400">Replying to @Vikri</p>
                                <p> foto terbaik yang pernah saya lihat</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-slate-100 pb-3">
                        <div className="ml-3 pt-3">
                            <div className="ml-3">
                                <p className="font-medium">Azzam Gibran <span className="text-slate-400 text-[12px] font-light">a day ago</span></p>
                                <p className="text-[11px] text-slate-400">Replying to @Vikri</p>
                                <p> foto terbaik yang pernah saya lihat</p>
                            </div>
                        </div>
                    </div>

                    {/* Comment Box */}
                    <div className="py-2">
                        <Textarea
                            placeholder={`Write your comment here`}
                            size='sm'
                            resize='none'
                            border='none'
                            _focusVisible={{ outline: `1px solid  white` }}
                            maxLength='200'
                        // onChange={(e) => {
                        //     setCaption(e.target.value)
                        // }}
                        />

                        <div className="flex justify-end">
                            <CircularProgress className="text-end py-2" value='0' color='blue.400' min={0} max={200} size='18px' />
                            <button className="w-[100px] z-10 mb-3 h-[32px] mx-5 hover:brightness-110 bg-blue-500 text-white font-medium rounded-full">Post</button>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default PostDetails;
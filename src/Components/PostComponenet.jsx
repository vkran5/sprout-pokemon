import React from "react";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { VscReply, VscHeart } from "react-icons/vsc";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    WrapItem
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { API_URL } from "../helper";

const PostComponent = (props) => {

    const navigate = useNavigate();
    const { caption, date, image, profile_img, username, fullname } = props.post

    console.log(API_URL);

    return (
        <div>
            {/* Post 1*/}
            <div className="border-b py-3">
                {/* Avatar */}
                <div className="flex justify-between">
                    <div className="flex pl-3 pt-3">
                        <img
                            className="w-[50px] h-[50px] rounded-full object-cover"
                            src={API_URL + profile_img}
                            alt=""
                        />
                        <div className="ml-2">
                            <p className="font-medium">{fullname}</p>
                            <p className="text-[11px] text-slate-400">@{username}</p>
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

                {/* Content */}
                <div className="ml-16">
                    <div className="pl-2">
                        <p>{caption}</p>
                        <img
                            className="object-contain w-[424px] rounded-lg my-2 cursor-pointer"
                            src={API_URL + image}
                            alt="post.png"
                            onClick={() => navigate('/post_detail')}
                        />
                    </div>

                    <div>
                        <p className="text-[10px] pl-2 mt-2 text-slate-400">{date}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between w-3/4 px-3 py-2">
                        <VscReply className="cursor-pointer hover:text-blue-500" />
                        <VscHeart className="cursor-pointer hover:text-blue-500" />
                        <BsBookmark className="cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;
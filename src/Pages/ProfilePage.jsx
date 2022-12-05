import React, { useEffect, useState } from "react";
import PostComponent from "../Components/PostComponenet";
import SideBar from "../Components/SideBarComponent";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from "axios";
import { API_URL } from "../helper";
import Cookies from "js-cookie";


const ProfilePage = () => {

    const [ownPost, setOwnPost] = useState([]);

    let token = Cookies.get('postyLog');

    const getOwnPost = async () => {
        try {
            let res = await axios.get(API_URL + '/post/get_own_post', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setOwnPost(res.data);


        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOwnPost();
    }, [])

    return (
        <div className="w-full h-screen overflow-x-hidden">
            <div className="w-3/4 min-h-screen mx-auto flex">
                {/* Side Bar */}
                <SideBar />

                <div className="ml-[284px] w-1/2 pt-5 border-r">
                    <div className="pb-5 border-b px-2">
                        <p className="font-medium text-[18px]">Profile</p>
                    </div>

                    <div className="pb-4">
                        <div className="flex items-center pl-3 pt-3 my-10">
                            <img
                                className="w-[100px] h-[100px] rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <div className="ml-2">
                                <p className="font-medium">Vikri Agung</p>
                                <p className="text-[11px] text-slate-400">@Vikri</p>
                                <div>
                                    <button className="bg-slate-200 hover:brightness-110 font-medium px-2 py-1 rounded mr-2 mt-2">Edit profile</button>
                                    <button className="bg-slate-200 hover:brightness-110 font-medium px-2 py-1 rounded mt-2">Verify Account</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Tabs isFitted variant='enclosed' colorScheme='teal'>
                        <TabList mb='1em'>
                            <Tab>Post</Tab>
                            <Tab>Liked</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div >
                                    {
                                        ownPost.map((val, idx) => {
                                            return (
                                                <PostComponent key={idx} post={val} />
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {/* <div >
                                    <PostComponent />
                                </div> */}
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
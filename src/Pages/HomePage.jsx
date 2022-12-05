import React, { useEffect, useState } from "react";
import PostComponent from "../Components/PostComponenet";
import RightBar from "../Components/RighBarComponent";
import SideBar from "../Components/SideBarComponent";
import { Textarea, Box } from '@chakra-ui/react'
import { AiOutlinePicture } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { CircularProgress, CircularProgressLabel, useToast, Spinner } from '@chakra-ui/react'
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../helper";
import InfiniteScroll from "react-infinite-scroll-component";


const HomePage = () => {

    const [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [caption, setCaption] = useState('');
    const [captionLimit, setCaptionLimit] = useState(0);
    const [captionIndicator, setCaptionIndicator] = useState('blue.500');
    const [image, setImage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const token = Cookies.get('postyLog');

    console.log(selectedImage);
    console.log(image);

    const getPosts = async () => {
        try {
            let res = await axios.get(API_URL + `/post/get_all_post/${offset * 3}/3`);
            setPosts(res.data)
            // console.log();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [offset])


    const addImage = (e) => {
        if (e.target.files[0]) {
            if (e.target.files[0].size > 4048576) {
                toast({
                    title: 'File uploaded is too big',
                    description: 'Max size is 1 MB',
                    position: 'top',
                    status: 'error',
                    duration: 3000,
                    isClosable: true
                })
            } else {
                setImage(e.target.files[0]);
                const reader = new FileReader();
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0])
                }

                reader.onload = (readEvent) => {
                    setSelectedImage(readEvent.target.result)
                }
            }
        } else {
            toast({
                title: 'Wrong file format',
                description: 'Your file format is not supported',
                position: 'top',
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    };

    useEffect(() => {
        setCaptionLimit(caption.length);

        if (caption.length >= 200) {
            setCaptionIndicator('red.400')
        } else if (caption.length >= 150) {
            setCaptionIndicator('orange.400')
        } else {
            setCaptionIndicator('blue.500')
        }

    }, [caption]);

    const onPost = () => {
        let formData = new FormData();
        formData.append('data', JSON.stringify({
            caption
        }));

        formData.append('image', image);

        axios.post(API_URL + '/post', formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                setImage('');
                setCaption('')
                setSelectedImage(null)
                setLoading(false)
                getPosts();
            }).catch(err => {
                console.log(err);
            })

    };

    return (
        <div className="w-full h-screen overflow-x-hidden">
            <div className="w-3/4 min-h-screen mx-auto flex">
                {/* Side Bar */}
                <SideBar />

                {/* Post Component */}
                <div className="ml-[284px] w-1/2 pt-5 border-r">
                    <div className="pb-5 border-b px-2">
                        <p className="font-medium text-[18px]">Home</p>
                    </div>

                    <div className="border-b ">
                        <div className="flex pl-3 pt-3">
                            <img
                                className="w-[50px] h-[50px] rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <div className="ml-2">
                                <p className="font-medium">Vikri Agung</p>
                                <p className="text-[11px] text-slate-400">@Vikri</p>
                            </div>
                        </div>

                        <div className="mx-4 border-b">
                            <Textarea
                                placeholder={`What's happening?`}
                                size='sm'
                                resize='none'
                                border='none'
                                _focusVisible={{ outline: `0px solid  white` }}
                                maxLength='200'
                                onChange={(e) => {
                                    setCaption(e.target.value)
                                }}
                                value={caption}
                            />

                            {/* Untuk gambar */}
                            {
                                image &&
                                <div className="py-2">
                                    <VscError
                                        className="relative top-7 left-2 text-white cursor-pointer"
                                        onClick={() => {
                                            setImage('');
                                            setSelectedImage(null)
                                        }}
                                    />

                                    <img
                                        className="w-[250px] rounded-2xl"
                                        src={selectedImage}
                                        alt="PosterImg"
                                    />
                                </div>
                            }


                            {/* Character inidicator */}
                            <div className='p-3 flex justify-end'>
                                <CircularProgress className="text-end" value={captionLimit} color={captionIndicator} min={0} max={200} size='24px' />
                            </div>
                        </div>

                        <div className="py-3 flex justify-end">
                            <Box borderWidth="0px" overflow="hidden" className="text-center p-3">
                                <div className="wrapper relative bottom-2 left-3">
                                    <input
                                        type="file"
                                        id="file-input"
                                        onChange={addImage}
                                    />
                                    <label htmlFor="file-input">
                                        <AiOutlinePicture size={24} className="inline text-blue-500" />
                                    </label>
                                </div>
                            </Box>

                            <button
                                className={`w-[100px] h-[32px] mx-5 hover:brightness-110 bg-blue-500 text-white font-medium rounded-full 
                                ${!image && !caption ? 'cursor-not-allowed' : ''}`}
                                onClick={() => {
                                    if (caption && image) {
                                        setLoading(true)
                                        setTimeout(() => {
                                            onPost();
                                        }, 1500)
                                    }
                                }}
                            >
                                {loading ? <Spinner size='xs' /> : 'Post'}
                            </button>
                        </div>
                    </div>



                    <div >
                        {
                            posts.map((val, idx) => {
                                return (
                                    <PostComponent key={idx} post={val} />
                                )
                            })
                        }
                    </div>

                </div>

                {/* Dummy Component */}
                <RightBar />
            </div>


        </div>
    )
}

export default HomePage;
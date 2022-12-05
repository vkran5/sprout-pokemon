import React, { useEffect, useState } from "react";
import {
    FormControl,
    Input,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    InputGroup,
    InputRightAddon,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { VscError } from "react-icons/vsc";
import axios from "axios";
import { API_URL, COOKIE_EXP } from "../helper";
import Cookies from "js-cookie";

const LoginPage = () => {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formType, setFormType] = useState('password')
    const [showPassword, setShowPassword] = useState(false);
    const [emailRecovery, setEmailRecovery] = useState('');
    const [emailRecoveryStatus, setEmailRecoveryStatus] = useState(null);

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const getUsers = async () => {
        try {
            let res = await axios.get(API_URL + '/auth/get_all_user');
            setUsers(res.data.users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [])

    const btnSignIn = async () => {
        try {
            let res = await axios.post(API_URL + '/auth/login', {
                username,
                password
            })

            if (res.data.success) {
                console.log(res.data.token);
                Cookies.set('postyLog', res.data.token, { expires: COOKIE_EXP });
                delete res.data.token
                navigate('/home')
            }

        } catch (error) {
            console.log(error);
        }
    };

    const btnRequestPassword = async () => {
        try {
            let findIdx = users.findIndex(val => val.email === emailRecovery);

            if (findIdx >= 0 && emailRecovery) {

                let res = await axios.post(API_URL + '/auth/send_reset_password', {
                    email: emailRecovery
                })

                if (res.data.success) {
                    onClose();
                    setEmailRecoveryStatus(true);
                    setEmailRecovery('');
                    Cookies.set('postyRecovery', res.data.token, { expires: COOKIE_EXP });
                    toast({
                        title: 'Email has been sent',
                        description: "Please check your email box",
                        status: 'success',
                        position: 'top',
                        duration: 4000,
                        isClosable: true,
                    })
                }

            } else {
                setEmailRecoveryStatus(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const btnShowPassword = () => {
        if (formType === 'password' && showPassword === false) {
            setFormType('text');
            setShowPassword(true);
        } else {
            setFormType('password');
            setShowPassword(false);
        }
    };

    const passwordRecoveryModal = (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className="text-blue-500">Password recovery</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <p className="py-b">Please insert your email!</p>
                            <Input
                                placeholder='your@mail.com'
                                size='md'
                                onChange={(e) => {
                                    setEmailRecovery(e.target.value)
                                }}

                            />

                            {
                                !emailRecoveryStatus &&
                                <div className="mx-auto flex">
                                    <VscError className=' mt-[4px] mr-1 text-red-600 text-[18px]' />
                                    <p className=" text-red-600">Email not found </p>
                                </div>
                            }

                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <button
                            className="bg-blue-500 h-[42.5px] w-[64px] rounded-lg text-white font-medium hover:brightness-110"
                            onClick={btnRequestPassword}
                        >
                            Send
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

    return (
        <div className="h-screen pt-[100px]">
            <div className="w-3/4 mx-auto px-8 py-5">
                <h1 className="font-zen font-medium text-[42px] pl-2 pb-5">User Login</h1>

                <div className="flex justify-between">
                    <div id="login" className="w-1/2 px-3">
                        <div>
                            <p className="font-zen text-[21px] text-slate-500 pt-2 border-b pb-4">Registered user</p>
                            <p className=" text-slate-500 pt-2 font-medium">If you have an account, sign in with your email or username</p>
                        </div>

                        <div id="form" className="pt-5">
                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Email or Username <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <Input
                                        className="py-4" type='email'
                                        _focusVisible={{ outline: `2px solid #3b82f6` }}
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                    />
                                </FormControl>
                            </div>

                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Password <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <InputGroup>
                                        <Input
                                            type={formType}
                                            _focusVisible={{ outline: `2px solid #3b82f6` }}
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        <InputRightAddon className="bg-white">
                                            {showPassword ?
                                                <FiEyeOff className="text-blue-500 cursor-pointer" onClick={btnShowPassword} />
                                                :
                                                <FiEye className="text-blue-500 cursor-pointer" onClick={btnShowPassword} />}
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    className={`w-[120px] h-[52px] mt-2 hover:text-white bg-blue-500 border rounded-lg text-white font-medium
                                ${username.length === 0 || password.length === 0 ? 'cursor-not-allowed' : 'hover:brightness-110'}`}
                                    onClick={btnSignIn}
                                >
                                    Sign in
                                </button>

                                <p
                                    className="text-blue-500 font-medium cursor-pointer"
                                    onClick={onOpen}
                                >
                                    Forgot Password?
                                    {passwordRecoveryModal}
                                </p>
                            </div>

                            <p className="text-red-500 font-medium mt-4">* Required fields</p>
                        </div>
                    </div>

                    <div id="Register" className="px-3 w-3/5">
                        <div>
                            <p className="font-zen text-[21px] text-slate-500 pt-2 border-b pb-4">Unregistered User</p>
                            <p className=" text-slate-500 pt-2 font-medium">Creating an account allows you to interact with other user and gain some fun experiences on our site</p>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center gap-4">
                                <button
                                    className="w-[150px] h-[52px] mt-2 hover:brightness-110 hover:text-white bg-blue-500 border rounded-lg text-white font-medium"
                                    onClick={() => navigate('/register')}
                                >
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
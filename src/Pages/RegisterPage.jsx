import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputGroup,
    InputRightAddon,
    Input,
    Spinner
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { API_URL } from "../helper";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";


const RegisterPage = () => {

    const [usersData, setUsersData] = useState([]);

    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formType, setFormType] = useState('password');
    const [confirmFormType, setConfirmFormType] = useState('password');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [usernameIndicator, setUsernameIndicator] = useState('');
    const [emailIndicator, setEmailIndicator] = useState('');
    const [passwordIndicator, setPasswordIndicator] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(null);

    console.log(usersData);

    const getAllUser = async () => {
        try {
            let res = await axios.get(API_URL + '/auth/get_all_user');
            setUsersData(res.data.users);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUser();
    }, []);

    useEffect(() => {
        if (username.length > 0 && username.length < 5) {
            setUsernameIndicator('invalid');

        } else {
            let idx = usersData.findIndex(val => val.username === username.toLocaleLowerCase());
            if (idx > -1) {
                setUsernameIndicator('used');
                return;
            }

            setUsernameIndicator('valid');
        }

    }, [username])

    useEffect(() => {
        if (email) {
            if (email.includes('@') && email.includes('.co')) {
                let idx = usersData.findIndex(val => val.email === email);
                if (idx > -1) {
                    setEmailIndicator('used');
                    return;
                };

                setEmailIndicator('valid');
                return;

            } else {
                setEmailIndicator('invalid');
                return;

            }
        }

        setEmailIndicator('');

    }, [email])

    useEffect(() => {

    }, [password]);

    useEffect(() => {
        const medium = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (password) {
            if (password.match(strong)) {
                setPasswordIndicator('strong');
                return;
            }

            if (password.match(medium)) {
                setPasswordIndicator('medium');
                return;
            }

            if (password.length > 5) {
                setPasswordIndicator('weak');
                return;
            }
        }

        setPasswordIndicator('')

    }, [password])

    const btnSignUp = async () => {

        try {
            if (!email || !username || !password || !confirmPassword || !fullname || password.length < 6 || usernameIndicator === 'invalid' || emailIndicator === 'invalid' || usernameIndicator === 'used' || emailIndicator === 'used' || password !== confirmPassword) {
                setTimeout(() => {
                    setRegisterSuccess(false);
                    setLoading(false);
                }, 2000)

            } else {
                let res = await axios.post(API_URL + '/auth/register', {
                    username,
                    fullname,
                    email,
                    password
                })

                if (res.data.success) {
                    setTimeout(() => {
                        setUsername('');
                        setEmail('');
                        setFullname('');
                        setPassword('');
                        setConfirmPassword('');
                        setRegisterSuccess(true);
                        setLoading(false);
                    }, 2000);
                } else {
                    setTimeout(() => {
                        setUsername('');
                        setEmail('');
                        setFullname('');
                        setPassword('');
                        setConfirmPassword('');
                        setRegisterSuccess(true);
                        setLoading(false);
                    }, 2000);
                }

            }
        } catch (error) {
            console.log(error);
        }


    }

    const btnShowConfirmPassword = () => {
        if (confirmFormType === 'password' && showConfirmPassword === false) {
            setConfirmFormType('text');
            setShowConfirmPassword(true);
        } else {
            setConfirmFormType('password');
            setShowConfirmPassword(false);
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
    }

    const navigate = useNavigate();

    return (
        <div className="h-screen pt-[100px]">
            <div className={`${registerSuccess !== null ? 'flex' : 'hidden'}
            ${registerSuccess ? ' bg-green-200' : 'bg-red-200'} h-[40px] w-screen absolute top-[82px] items-center `} >

                {
                    registerSuccess ?
                        <div className="w-3/4 px-10 mx-auto flex">
                            <AiFillCheckCircle className=' mt-[2px] mr-2 text-green-600 text-[18px]' />
                            <p className="w-1/2">Congratulation your account succesfully created check email to verify.</p>
                        </div>
                        :
                        <div className="w-3/4 px-10 mx-auto flex">
                            <VscError className=' mt-[2px] mr-2 text-red-600 text-[18px]' />
                            <p className="w-1/2">Registration failed, please check your from! </p>
                        </div>
                }

            </div>
            <div className="w-3/4 mx-auto px-8 py-5">
                <div>
                    <h1 className="font-zen font-medium text-[42px] pb-1">Create New Account</h1>
                    <p className="w-[500px] ml-1 font-zen text-[21px] text-slate-500 pt-2 border-b pb-4">Sign Up</p>
                </div>

                <div className="flex justify-between">
                    <div id="Signup" className="w-1/2 px-3">
                        <div id="form" className="pt-5">
                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Username <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <Input
                                        className="py-4" type='text'
                                        _focusVisible={{ outline: `2px solid #3b82f6` }}
                                        placeholder='5+ characters'
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                    />
                                </FormControl>

                                {
                                    usernameIndicator === 'invalid' ?
                                        <p className="text-red-500 font-medium text-[12px]">Minimum length of this field must be equal 5 or greater than 5 characters</p>
                                        :
                                        usernameIndicator === 'used' &&
                                        <p className="text-red-500 font-medium text-[12px]">Username already exist</p>
                                }
                            </div>

                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Fullname <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <Input
                                        className="py-4" type='text'
                                        _focusVisible={{ outline: `2px solid #3b82f6` }}
                                        placeholder={'User fullname '}
                                        value={fullname}
                                        onChange={(e) => {
                                            setFullname(e.target.value)
                                        }}
                                    />
                                </FormControl>
                            </div>

                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Email <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <Input
                                        type='text'
                                        _focusVisible={{ outline: `2px solid #3b82f6` }}
                                        placeholder='user@mail.co'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                </FormControl>

                                {
                                    emailIndicator === 'invalid' ?
                                        <p className="text-red-500 font-medium text-[12px]">Please insert in email format</p>
                                        :
                                        emailIndicator === 'used' &&
                                        <p className="text-red-500 font-medium text-[12px]">Email already exist</p>
                                }
                            </div>

                            <p className="text-red-500 font-medium mt-4">* Required fields</p>
                        </div>
                    </div>

                    <div id="Register" className="px-3 w-1/2">
                        <div id="form" className="pt-4">
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
                                            placeholder='6+ characters'
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

                            <div id="password-indicator" className={`h-[42px] w-[438px] relative bottom-[2px] rounded-lg
                            ${passwordIndicator === 'weak' ? 'bg-weak ' :
                                    passwordIndicator === 'medium' ? 'bg-medium' :
                                        passwordIndicator === 'strong' ? 'bg-strong' :
                                            'bg-slate-200'
                                }`} >
                                <p className={`p-2 font-medium `}>
                                    Password Strength
                                    {passwordIndicator === 'weak' ? ': Weak ' :
                                        passwordIndicator === 'medium' ? ': Medium' :
                                            passwordIndicator === 'strong' && ': Strong'
                                    }
                                </p>
                            </div>
                            {
                                password.length > 0 && password.length < 6 &&
                                <p className="text-red-500 font-medium text-[12px]">Minimum length of this field must be equal 6 or greater than 6 characters</p>
                            }

                            <div className="w-3/4 py-2">
                                <p className="font-medium pb-2">Confirm Password <span className="text-red-500">*</span></p>
                                <FormControl>
                                    <InputGroup>
                                        <Input
                                            type={confirmFormType}
                                            _focusVisible={{ outline: `2px solid #623bea` }}
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }}
                                            placeholder='Re-type password'
                                        />
                                        <InputRightAddon className="bg-white">
                                            {showConfirmPassword ?
                                                <FiEyeOff className="text-blue-500 cursor-pointer" onClick={btnShowConfirmPassword} />
                                                :
                                                <FiEye className="text-blue-500 cursor-pointer" onClick={btnShowConfirmPassword} />}
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>

                                {
                                    password !== confirmPassword && confirmPassword.length > 0 &&
                                    <p className="text-red-500 font-medium text-[12px]">Make sure that your confirm password match with password</p>
                                }
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                className={`w-[150px] h-[52px] mt-2  hover:text-white bg-blue-500 border rounded-lg text-white font-medium
                                ${!email || !username || !password || !confirmPassword || !fullname || password.length < 6 || usernameIndicator === 'invalid' || emailIndicator === 'invalid' || usernameIndicator === 'used' || emailIndicator === 'used' || password !== confirmPassword ? 'cursor-not-allowed' : 'hover:brightness-110'}`}
                                onClick={() => {
                                    setLoading(true);
                                    btnSignUp();
                                }}
                            >
                                {loading ? <Spinner size='sm' /> : 'Sign up'}
                            </button>

                            <p className="font-medium text-blue-500 mt-2 cursor-pointer" onClick={() => navigate('/login')}>Login</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
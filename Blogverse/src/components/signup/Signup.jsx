import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Input, Logo } from '../index.components';
import service from '../../appwrite/appwrite.config';
import authServices from '../../appwrite/auth';
import { login } from '../../store/features/authSlice';





function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("");
        try {
            console.log(data);
            const userDataResponse = await authServices.createAccount(data);
            if (userDataResponse) {
                const userData = await authServices.getCurrentUser();
                if (userData) {
                    dispatch(login(userData))
                }
                navigate("/")
            }
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}><Logo /></div>
            <h2 className='text-center text-2xl font-bold leading-tight '>Signup to create a account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && (<p className=' text-bold-600 mt-8 text-center ' >{error}</p>)}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label="username: "
                        placeholder="Enter Your username"
                        {...register("name", {
                            required: true
                        })}
                    />

                    <Input
                        label="Email: "
                        placeholder='Enter your Email'
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) || "Please enter a valid email address",
                            },
                        })}
                    />

                    <Input
                        label="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true
                        })}
                    />

                    <Button
                        type='submit'
                        className='w-full'
                    >Create Account</Button>

                </div>
            </form>
        </div>
    )
}

export default Signup

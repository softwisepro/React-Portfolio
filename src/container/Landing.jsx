import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import Leftbar from '../components/Leftbar';
import { useNavigate } from "react-router-dom";
import Rightbar from '../components/Rightbar';

export const Landing = () => {
    const [toggleLeftbar, setToggleLeftbar] = useState(false);

    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }


    return (
        <div className='flex md:flex-row flex-col w-full h-screen justify-between items-center top-0 mx-auto overflow-hidden bg-gray-100'>

            <div className='hidden md:flex md:w-2/6 w-4/5 h-screen bg-white p-5 overflow-y-auto md:overflow-y-hidden'>
                <Leftbar />
            </div>


            <div className='flex flex-col gap-y-10 md:w-2/3 h-screen w-full'>
                <div className='border'>
                    <div className='md:hidden flex gap-2 w-full justify-between items-center p-5'>
                        <AiOutlineMenu fontSize={30} className='cursor-pointer m-2' onClick={() => setToggleLeftbar(true)} />
                        <h1 onClick={handleClick}>CodedByMe</h1>
                    </div>
                </div>
                <div className='w-full h-full md:overflow-y-auto overflow-y-hidden'>
                    <Rightbar />
                </div>
            </div>



            {toggleLeftbar && (
                <div className='absolute flex flex-col overflow-hidden h-screen left-0 w-4/6 bg-white z-10 transition-all'>
                    <div className='p-3'>
                        <AiFillCloseCircle fontSize={20} className='float-right cursor-pointer' onClick={() => setToggleLeftbar(false)} />
                    </div>
                    <Leftbar closeToggle={setToggleLeftbar} />
                </div>
            )}
        </div>
    )
}

export default Landing
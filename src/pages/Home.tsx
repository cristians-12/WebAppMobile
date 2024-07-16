import { CalendarIcon } from '@radix-ui/react-icons'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React, { useState } from 'react'
import { Button } from 'react-day-picker'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <h1 className='text-red-600 bg-slate-500'>Registrate</h1>

            <Link to="/about">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M26.047 12.197c-1.828 0-2.844 1.355-3.057 2.824h6.147c-.167-1.401-1.157-2.819-3.089-2.819zm-3.011 4.83c.313 1.541 1.589 2.624 3.376 2.624c.963 0 2.359-.359 3.176-1.219l1.568 1.803c-1.416 1.479-3.536 1.901-4.984 1.901c-3.521 0-6.265-2.543-6.265-6.147c0-3.375 2.525-6.156 6.093-6.156c3.448 0 6 2.64 6 6.136v1.02h-8.964zm-8.651 5.104v-7.589c0-1.296-.579-2.047-1.787-2.047c-1.083 0-1.801.781-2.287 1.344v8.317H7.176v-7.599c0-1.303-.552-2.041-1.756-2.041c-1.083 0-1.833.781-2.291 1.344v8.317H-.002V10.01h3.136v1.531c.531-.615 1.733-1.677 3.609-1.677c1.667 0 2.796.699 3.301 2.12c.703-1.015 2-2.12 3.88-2.12c2.271 0 3.589 1.344 3.589 3.948v8.324h-3.136l.005-.011z" />
                    </svg>
                </figure>
            </Link>
            <Navbar />
        </div>

    )
}

export default Home
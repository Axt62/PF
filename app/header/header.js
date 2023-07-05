"use client"
import React from 'react'
import link from 'next/link'

export default function header() {
    return (
        <header class="bg-slate-500">
            <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
                <a class="flex items-center mb-4 font-medium text-white title-font md:mb-0">
                    Antoine Leconte
                </a>
                <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto text-white">
                    <a link href="/" class="mr-5 font-medium hover:text-gray-900">Home</a>
                    <a link href="/cv" class="mr-5 font-medium hover:text-gray-900">CV</a>
                    <a link href="/contact" class="font-medium hover:text-gray-900">Contact</a>
                </nav>
                <div class="items-center h-full">
                    <a href="https://www.2itechacademy.com/campus-lille/" target="_blank" class="mr-5 font-medium text-white hover:text-gray-900">2i Academy</a>
                    <a href="mailto:antoine.leconte9462@gmail.com"
                        class="px-4 py-2 text-xs font-bold text-white transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                        Send me a Mail
                    </a>
                </div>
            </div>
        </header>
    )
}



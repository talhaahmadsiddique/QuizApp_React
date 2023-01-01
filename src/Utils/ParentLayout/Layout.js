import React from 'react'
import { styles } from '../Styles/Styles'

const Layout = ({children}) => {
    return (
        <div className='main-container flex flex-col gap-10 items-center h-screen max-w-[1440px] w-[90%] mx-auto my-10 overflow-hidden' style={styles.mainScreenStyle}>
            {/* Main Screen */}
            <div className='font-extrabold text-2xl flex flex-col'>
                <h1>Quiz App</h1>
            </div>

            {/* Rest of the content */}
            <div className='bg-teal-700 w-[50%] flex justify-center h-80 p-10 rounded-2xl'>
                {children}
            </div>
        </div>
    )
}

export default Layout
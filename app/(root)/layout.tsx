import MobileNav from '@/components/shared/Mobilenav'
import SideBar from '@/components/shared/Sidebar'
import React from 'react'

const Layput = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        <SideBar/>
        <MobileNav/>
        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layput
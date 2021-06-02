import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [scroll, setScroll ] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll',()=> {
            if(window.scrollY > 100) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])
    return (
        <div className={`nav ${scroll && 'nav_scroll'}`}>
            <img  
                className='logo'
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='netflix'
            />
            <img  
                className='avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='avatar'
            />
        </div>
    )
}

export default Nav

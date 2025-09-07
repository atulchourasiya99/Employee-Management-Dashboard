// import React, { useState } from 'react'

const Header = (props) => {

    // const [username, setUsername] = useState('')

    // if (!data) {
    //     setUsername('Admin')
    // } else {
    //     setUsername(data.firstName)
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedUser', JSON.stringify({}))
        props.changeUser('')
        // window.location.reload()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> Atul </span></h1>
            <button className='bg-red-500 text-lg font-medium text-white py-2 px-5 rounded-small' onClick={logOutUser}>Logout</button>
        </div>
    )
}

export default Header

import React from 'react'


export default function Home() {
    const handleLogout = () => {
        localStorage.removeItem("@user")
        window.location.reload();
    }

    return (
        <div>
            Home
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

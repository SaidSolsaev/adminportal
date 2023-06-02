import React from 'react'


export default function Home() {
    const handleLogout = () => {
        localStorage.removeItem("@user")
        window.location.reload();
    }

    const handleNav = () => {
        window.location.assign("/dashboard")
    }

    return (
        <div>
            Home
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleNav}>dashboard</button>

        </div>
    )
}

import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = ({profileInfo}) => {
    return (
        <div className="profileinfo__container">
            <img src={profileInfo.avatar_url} alt={profileInfo.login}/>
            <span className='profileinfo__username'>{profileInfo.login}</span>
            <a href={profileInfo.html_url} target='_blank' rel='noreferrer'>Github Profile Link</a>
                        
        </div>
    )
}

export default ProfileInfo

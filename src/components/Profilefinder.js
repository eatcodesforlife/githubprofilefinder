import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { NotFound } from './NotFound'
import ProfileInfo from './ProfileInfo'
import SearchBox from './SearchBox'
import './Profilefinder.css'

const Profilefinder = () => {

    const [ user, setUser ] = useState('')
    const [ profileInfo, setProfileInfo ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isError, setIsError ] = useState(false)

    const gitHubUserName = (e) => {
        e.preventDefault()
        const userName = e.target.value
        setUser(userName)
    }

    useEffect(() => {
        const url = user === '' 
                ? 'https://api.github.com/users/octocat'
                : `https://api.github.com/users/${user}`        
      
        const getProfileInfo = async () => {
            const res = await fetch(url)
            return res
        }

        getProfileInfo()
        .then( res => {
             if( res.status >= 200 && res.status <= 299 ){
                setIsError(false)
                return res.json()
            }else{
                setIsLoading(false)
                setIsError(true)
            }            
        })
        .then( user => {
            setIsLoading(false)
            setProfileInfo(user)
        })
    }, [user])


    return (
        <div className='github__profile__finder'>
            <div className="github__profile__finder__header">
                <h2>Github Profile Finder</h2>
                <SearchBox onChange={gitHubUserName}/>
            </div>
            <div className="github__profile__finder__main">
                { isLoading && <Loading />}
                { isError && <NotFound /> }  
                { !profileInfo || <ProfileInfo profileInfo={profileInfo}/> }
            </div>
        </div>
    )
}

export default Profilefinder

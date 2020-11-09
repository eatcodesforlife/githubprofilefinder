import React from 'react'
import './SearchBox.css'
const SearchBox = ({...props}) => {
    return (
        <form onChange={props.onChange}>
            <div className="github__profile__finder__form__control">
                <label htmlFor="search__github__user">Enter GitHub Username : </label>
                <input type="search" name="search__github__user" id="search__github__user"/>
            </div>
        </form>
    )
}

export default SearchBox

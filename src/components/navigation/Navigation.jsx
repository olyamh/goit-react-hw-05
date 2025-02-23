import { NavLink } from "react-router-dom";
// import s from '.../src/App.css'

const Navigation=()=>{
    return (
        <div className="nav">
            <NavLink className='link' to="/" >Home</NavLink>
            <NavLink className='link'to="/movies" >Movies</NavLink>
        </div>
    )
}

export default Navigation;
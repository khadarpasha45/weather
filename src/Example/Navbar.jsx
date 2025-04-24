import React from "react"
import './Sample.css'
const Navbar = () =>{
    return(
        <div>
            <select>
                <option>Breakfast</option>
                <option>Idly</option>
                <option>puri</option>
                <option>eggs</option>
                <option>salad</option>
            </select>
            <select>
                <option>lunch</option>
                <option>Biryani</option>
                <option>Meals</option>
                <option>Fried rice</option>
                <option>noodles</option>
            </select>
            <select>
                <option>Snacks</option>
                <option>salads</option>
                <option>Samosa</option>
                <option>curd rice</option>
                <option>Fried rice</option>
            </select>
            <p>WWW.kmitCanteen.com</p>
        </div>
    )
}

export default Navbar;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Add = ({ handleAddMovie }) => {
    const [newMovie, setNewMovie] = useState({
        id: Math.random(),
        title: "",
        description: "",
        posterURL: "",
        rate: 0
    })
    const mySubmitHandler = (e) => {
        e.preventDefault();
        handleAddMovie(newMovie);
        setNewMovie({
            id: "",
            title: "",
            description: "",
            posterURL: "",
            rate: ""
        })

    }
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className="section">
            <div className="login-wrap">
                <div className="login-html">

                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">فيلم جديد</label>
                    <div className="login-form">
                        <div className="sign-up-htm">
                            <div className="group">
                                <label for="user" className="label">Title</label>
                                <input type="text" className="input" name="title" onChange={handleChange} />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Description</label>
                                <input type="text" className="input" name="description" onChange={handleChange} />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">PosterURL</label>
                                <input type="url" className="input"  name="posterURL" onChange={handleChange} />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Rate</label>
                                <input type="number" className="input" name="rate" onChange={handleChange} />
                            </div>
                            <div className="group" style={{ display: "flex" }}>
                              <Link to="/">
                                <button style={{ width: 200, marginRight: "90px" }} type='submit' className="button" onClick={mySubmitHandler}>Save Changes</button></Link>
                                <Link to="/"><button style={{ width: 100 }} className="button">Close</button></Link>

                            </div>
                            <div className="hr"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add

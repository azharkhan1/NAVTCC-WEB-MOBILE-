import React from "react";
import { Link } from "react-router-dom";



export default function Tweets() {
    return (
        <div>
            <h2>
                Tweets
                </h2>
            <div>
                <ul>
                    <li>
                        <Link to="about">About us</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                </ul>
            </div>
            These are my Tweets
            {
                [1, 2, 3, 4, 5, 67].map((value, index) => {
                    return (
                        <div key={index}>
                            {value}
                        </div>
                    )
                })
            }
        </div>
    )
}
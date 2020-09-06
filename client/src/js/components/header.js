import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearToken } from '../utils/local-storage'

import { Link } from 'react-router-dom';

const user = null

const Header = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const signout = () => {
        clearToken();

        dispatch({
            type: 'CLEAR_AUTH_USER'
        })

        dispatch({
            type: 'CLEAR_AUTH_TOKEN'
        })

        history.replace({ pathname: "/login" })
    }

    return (
        <header className="">
            <nav className="common-container py-3">
                <ul className="flex justify-between">
                    <li>
                        <Link className="font-black f1 text-dark" to="/">Volaverunt</Link>
                    </li>
                    {
                        user ?
                            (
                                <li className="flex flex-col align-start">
                                    <div className="flex justify-center items-center">
                                        <i className="w-13 h-13 br-50 bg-yellow shadow-1"></i>
                                        <div className="flex flex-col ml-2 text-dark">
                                            <span className="font-bold f4">{user.username}</span>
                                            <Link className="underline f6 mt-1 cursor-pointer" to="/dashboard/">Dashboard</Link>
                                            <a className="underline f6 mt-1 cursor-pointer" onClick={signout}>Sign out</a>
                                        </div>
                                    </div>
                                </li>
                            ) :
                            (
                                <li>
                                    <Link className="btn" to="/login">Sign in</Link>
                                </li>
                            )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
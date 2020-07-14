import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout" >
            <div className="box-layout__box">
                <h1 className="box-layout__title">title</h1>
                <p>subtitle</p>
                <button className="button" onClick={startLogin} >Login with Google</button>
            </div>
        </div>
    )
}

const matchDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, matchDispatchToProps)(LoginPage)
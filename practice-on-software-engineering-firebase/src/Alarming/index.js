import React, { Component } from 'react'
import { firebaseApp } from '../services/firestore'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        const messaging = firebaseApp.messaging()
        messaging.requestPermission().then(() => {
            return messaging.getToken()
        }).then(token => {
            console.log('Token : ', token)
        }).catch(() => {
            console.log('error');
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}


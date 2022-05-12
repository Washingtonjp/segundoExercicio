import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../environments'
import axios from 'axios'
import ListUser from './ListUser'


function Customer(props) {

    const URL = `${baseUrl}/customer`
    const [user, setUser] = useState([])
const [states, setStates] = useState([]) 

    useEffect(() => {
        getUser()
        getStates()
    }, [])


    
    const getStates = () => {
        axios.get('http://localhost:8080/states')
            .then((response) => {
                setStates(response.data)
            })
    }
    const getUser = () => {
        axios.get(`${URL}`)
            .then((response) => {
                setUser(response.data)
            })
    }

    const update = (user) => {
        if (user.name === '') {
            return
        }
        axios.put(`${URL}/${user.id}`, user)
            .then((response) => {
                getUser()
            })
    }

    const deleteUser = (id) => {
        axios.delete(`${URL}/${id}`)
            .then((response) => {
                getUser()
            })
    }

    return (
        <ListUser
            list={user}
            delete={deleteUser}
            update={update}
            state={ states} />
    )




}

export default Customer;
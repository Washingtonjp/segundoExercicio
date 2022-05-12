import React from 'react'
import Header from '../../components/template/Header'
import {Container} from 'react-bootstrap'
import Customer from '../../components/customer/Customer'
function User(props) {

    return(
        <>
        <Header/>
        <Container>
            <Customer/>
            
        </Container>
        
        </>
    )
}

export default User
import React, { useState } from 'react'
import {
    ListGroup, Row,
    Col, Button, Container, Modal, Alert, Form
} from 'react-bootstrap'
import { AiFillCheckCircle } from "react-icons/ai";
function ListUser(props) {

    const users = props.list || [] 
    const state = props.state || []
    const [usuario, setUsuario] = useState({})
    console.log(state)
    const [show, setShow] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);


    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    const listUser1 = () => {
        return users.map((user) => {
            return (
                <ListGroup.Item key={user.id}>
                    <Row className="itemTask">
                        <Col xs={6} md={8}>
                            ID : {user.id}
                        </Col>
                        <Col xs={6} md={8}>
                            NOME: {user.name}
                        </Col>

                        <Col xs={6} md={8}>
                            IDADE: {user.age}
                        </Col>

                        <Col xs={6} md={8}>
                            CPF:  {user.document}
                        </Col>

                        <Col xs={6} md={8}>
                            TELEFONE : {user.tel}
                        </Col>

                        <Col xs={6} md={8}>
                            UF:  {user.state}
                        </Col>
                        <Col>

                            <Button className="mx-3" variant="secondary"
                                onClick={() => {
                                    setUsuario(user)
                                    handleShowEdit()
                                }}>
                                Editar
                            </Button>
                            <Button className="mx-3" variant="danger"
                                onClick={() => {
                                    setUsuario(user)
                                    handleShow()
                                }}>
                                Deletar
                            </Button>
                        </Col>
                    </Row>

                </ListGroup.Item>
            )
        })
    }

    return (
        <>
            <Container>
                {
                    successDelete
                        ?
                        <Alert key='success' variant='success'>
                            <AiFillCheckCircle size="30" /> Item apagado com suceso
                        </Alert>
                        :
                        ''
                }
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {listUser1()}
                        </ListGroup>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Excluir Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Deseja deletar Cliente: <strong>{usuario.name}</strong></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => {
                            props.delete(usuario.id)
                            handleClose()
                            setSuccessDelete(true)
                            setTimeout(
                                () => {
                                    setSuccessDelete(false)
                                }, 3000)
                        }}>
                            Apagar
                        </Button>
                    </Modal.Footer>
                </Modal>


                {/* //modal edit */}
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar setUsuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Nome do usuario</Form.Label>
                            <Form.Control type="text" placeholder=""
                                value={usuario.name}
                                onChange={event => setUsuario({ ...usuario, name: event.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Idade do usuario</Form.Label>
                            <Form.Control type="text" placeholder=""
                                value={usuario.age}
                                onChange={event => setUsuario({ ...usuario, age: event.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder=""
                                value={usuario.document}
                                onChange={event => setUsuario({ ...usuario, document: event.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder=""
                                value={usuario.tel}
                                onChange={event => setUsuario({ ...usuario, tel: event.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select
                                onChange={(event) => { setUsuario ({ ...usuario, state: event.target.value }) }}>
                                <option>Selecione um estado</option>
                                {
                                    state.map((item) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                        <Button variant="success" onClick={() => {
                            props.update(usuario)
                            handleCloseEdit()
                        }
                        }>
                            Editar
                        </Button>
                    </Modal.Footer>
                </Modal>









            </Container>
        </>

    )
}

export default ListUser




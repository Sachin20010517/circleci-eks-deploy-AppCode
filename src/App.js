import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css"; // Link to custom CSS for styling

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            list: [],
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };

            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list,
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);

        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            this.setState({
                list: updatedTodos,
            });
        }
    };

    render() {
        return (
            <div
                className="app-container"
                style={{
                    backgroundImage: `url('/images/background.jpg')`,
                    backgroundSize: "cover",
                    minHeight: "100vh",
                    color: "white",
                }}
            >
                <Container>
                    <Row className="header-row">
                        <div className="app-title">
                            Welcome to Sachin's TODO LIST
                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={{ span: 5, offset: 4 }}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Add item . . ."
                                    size="lg"
                                    value={this.state.userInput}
                                    onChange={(item) =>
                                        this.updateInput(item.target.value)
                                    }
                                    aria-label="Add something"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup>
                                    <Button
                                        variant="dark"
                                        className="add-button"
                                        onClick={() => this.addItem()}
                                    >
                                        ADD
                                    </Button>
                                </InputGroup>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 5, offset: 4 }}>
                            <ListGroup>
                                {this.state.list.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <ListGroup.Item
                                                className="todo-item"
                                            >
                                                {item.value}
                                                <span>
                                                    <Button
                                                        className="action-button"
                                                        variant="light"
                                                        onClick={() =>
                                                            this.deleteItem(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        className="action-button"
                                                        variant="light"
                                                        onClick={() =>
                                                            this.editItem(index)
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </span>
                                            </ListGroup.Item>
                                        </div>
                                    );
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

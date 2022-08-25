import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    // body: "",
    // brand: "",
    // calories: "",
    // category: "",
    // contain: "",
    // image: "",
    // ingredient: "",
    // nutrition: "",
    // piece: "",
    // price: "",
    // sale: "",
    // storing: "",
    // title: "",
    // weight: "",
    // completed: false,
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todo-body ">body</Label>
              <Input
                type="text"
                id="todo-body"
                name="body"
                value={this.state.activeItem.body}
                onChange={this.handleChange}
                placeholder="Enter  body"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-brand">brand</Label>
              <Input
                type="text"
                id="todo-brand"
                name="brand"
                value={this.state.activeItem.brand}
                onChange={this.handleChange}
                placeholder="Enter brand"
              />
            </FormGroup>
            <FormGroup>
              <FormGroup>
                <Label for="todo-calories">calories</Label>
                <Input
                  type="number"
                  id="todo-calories"
                  name="calories"
                  value={this.state.activeItem.calories}
                  onChange={this.handleChange}
                  placeholder="Enter calories"
                />
              </FormGroup>
              <Label for="todo-contain">contain</Label>
              <Input
                type="text"
                id="todo-contain"
                name="contain"
                value={this.state.activeItem.contain}
                onChange={this.handleChange}
                placeholder="Enter  contain"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">image</Label>
              <Input
                type="text"
                id="todo-image"
                name="image"
                value={this.state.activeItem.image}
                onChange={this.handleChange}
                placeholder="Enter Image URl"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">ingredient</Label>
              <Input
                type="text"
                id="todo-ingredient"
                name="ingredient"
                value={this.state.activeItem.ingredient}
                onChange={this.handleChange}
                placeholder="Enter ingredient"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">nutrition</Label>
              <Input
                type="text"
                id="todo-nutrition"
                name="nutrition"
                value={this.state.activeItem.nutrition}
                onChange={this.handleChange}
                placeholder="Enter nutrition"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-price">price</Label>
              <Input
                type="number"
                id="todo-price"
                name="price"
                value={this.state.activeItem.price}
                onChange={this.handleChange}
                placeholder="Enter  price"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="sale"
                  checked={this.state.activeItem.sale}
                  onChange={this.handleChange}
                />
                Sale
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">storing</Label>
              <Input
                type="text"
                id="todo-storing"
                name="storing"
                value={this.state.activeItem.storing}
                onChange={this.handleChange}
                placeholder="Enter storing"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-title">Title</Label>
              <Input
                type="text"
                id="todo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter  Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-title">Weight</Label>
              <Input
                type="text"
                id="todo-weight"
                name="weight"
                value={this.state.activeItem.weight}
                onChange={this.handleChange}
                placeholder="Enter  weight"
              />
            </FormGroup>
            {/* <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

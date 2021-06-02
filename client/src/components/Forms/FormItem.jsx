import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import { withUser } from "../../components/Auth/withUser";
import { AuthContext } from "../Auth/AuthProvider";
import Button from "../Base/Button";
import "../../styles/form.css";
import axios from "axios";


class ItemForm extends Component {
  state = {};

  handleChange = (event) => {
    console.log("Wax On Wax Off");
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      category: this.state.category,
      quantity: this.state.quantity,
      location: this.state.location,
      description: this.state.description,
      image: this.state.image,
      contact: this.state.contact,
    };
    axios.post("http://localhost:4444/api/items", newItem).then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log("Wax On Wax Off");

    // In order to send back the data to the client, since there is an input type file you have to send the
    // data as formdata.
    // The object that you'll be sending will maybe be a nested object, in order to handle nested objects in our form data
    // Check out the stackoverflow solution below : )

    // Nested object into formData by user Vladimir "Vladi vlad" Novopashin @stackoverflow : ) => https://stackoverflow.com/a/42483509
  };

  handlePlace = (place) => {
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(place);
  };

  render() {
    return (
      <div className="ItemForm-container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              id="name"
              className="input"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="What are you giving away ?"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select id="category" name="category" defaultValue="-1">
              <option value="-1" disabled>
                Select a category
              </option>
              <option value="Plant">Plant</option>
              <option value="Kombucha">Kombucha</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input name="quantity" value={this.state.quantity} className="input" id="quantity" type="number" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete onSelect={this.handlePlace} />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="text-area"
              placeholder="Tell us something about this item"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input name="image" className="input" id="image" type="file" />
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input name="contact" type="checkbox" value={this.state.email} onChange={this.handleChange} />
              {this.email}
            </div>
            <input name="contact" type="checkbox" value={this.state.phoneNumber} onChange={this.handleChange}/>
            {this.phoneNumber} 
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <Button className="btn-submit">Add Item</Button>
        </form>
      </div>
    );
  }
}

export default withUser(ItemForm);

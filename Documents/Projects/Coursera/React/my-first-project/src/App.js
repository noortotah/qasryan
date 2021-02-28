import React, { Component } from "react";
import Person from "./Persons/Person";
import CharComponent from "./playaround/CharComponent";
import ValidationComponent from "./playaround/ValidationComponent";
import UserInput from "./users/UserInput";
import UserOutput from "./users/UserOutput";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Noor", age: 30 },
      { id: 2, name: "Fares", age: 4 },
      { id: 3, name: "baby", age: 1 },
    ],
    userName: "this is My initial userName",
    randomText: ""
  };

  switchHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: "Noor Totah", age: 30 },
        { id: 2, name: "Fares Totah", age: 4 },
        { id: 3, name: "baby Totah", age: 1 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Noor ", age: 30 },
        { name: event.target.value, age: 4 },
        { name: "baby", age: 1 },
      ],
    });
  };
  changeUserNameHandler = (event) => {
    console.log("here in changeUSerName");
    this.setState({
      userName: event.target.value,
    });
  };

  deletePerson = (person) => {
    console.log("deletePerson", person);
    this.setState({
      persons: this.state.persons.filter(
        (inPerson) => person.id !== inPerson.id
      ),
    });
  };

  render() {
    let persons = <h5>no users in this place</h5>;

    if (this.state.persons.length) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <div key={person.id} className="p-2">
                <h6>
                  {person.name} -- {person.age}
                </h6>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto mt-5">
              <img className="mx-auto d-flex" src="logo192.png" alt="logo" />
              <UserInput
                changeUserName={this.changeUserNameHandler}
                initialName={this.state.userName}
              ></UserInput>
              <UserOutput userName={this.state.userName}></UserOutput>
            </div>
          </div>

          <div className="row">
            <div className="col-6 mx-auto mt-5">
              <h3>Users List</h3>
              {this.state.persons.length ? (
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.persons.map((val, index) => (
                        <Person
                          key={index}
                          name={val.name}
                          age={val.age}
                          function={this.switchHandler}
                          change={this.changeNameHandler}
                          delete={() => this.deletePerson(val)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h5 className="p-4">No Users</h5>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-6 mx-auto mt-5">{persons}</div>
          </div>


          <div className="row">
            <div className="col-6 mx-auto mt-5">
              <div className="form-group">
                <label>Enter Text (minimum 5)</label>
                <input type="text"
                  className="form-control" value={this.state.randomText}  onChange={(event) => { this.setState({randomText: event.target.value})}} />
              </div>
              <ValidationComponent length={this.state.randomText.length}></ValidationComponent>

              {
                this.state.randomText.split('').map( (char, index) => {
                  return <CharComponent key={index} className="CharComponent" char={char}></CharComponent>
                })
              }

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

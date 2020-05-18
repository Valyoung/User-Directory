import React, { Component, Search, List } from 'react';
import API from '../src/utils/API';
import Form from '../src/components/Form';
import Table from '../src/components/Table';

class Container extends Component {
  state = {
    getUsers: '',
    sortby: '',
    results: []
  };

  queryEmployees = query => {
    API.getUsers(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
    };

    componentDidMount() {
    this.queryEmployees('');
  }

  handleInputChange = event => {
    const name = event.target.id;
    if (name === 'lastname') {
      this.setState({ sortby: 'lastname' });
    }
    if (name === 'firstname') {
      this.setState({ sortby: 'firstname'});
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.queryEmployees(this.state.getUsers);
  };

  render() {
    return (
      <div>
        <Search
          getUsers={this.state.getUsers}
          sortby={this.state.sortby}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          />
          <List sortby={this.state.sortby} results={this.state.results} />
      </div>
    );
  }
}

function App() {
  return <Container>
            <Form />
            <Table />
        </Container>;

};

export default App;
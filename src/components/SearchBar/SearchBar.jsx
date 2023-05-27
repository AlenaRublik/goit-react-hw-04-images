import { Component } from 'react';
import {
  Input,
  Button,
  Form,
  Header,
  SearchFormLabel,
} from './SearchBar.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = { value: '' };

  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      this.setState({ searchQuery: '' });
      toast.info('Enter yor search request.');
      return;
    }
    this.props.handleSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" aria-label="search">
            <SearchFormLabel>Search</SearchFormLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </Form>
      </Header>
    );
  }
}

export default SearchBar;

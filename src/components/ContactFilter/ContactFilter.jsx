import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterWrap, FilterLabel, FilterInput } from './ContactFilter.styled';

export class ContactFilter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };
  render() {
    const { value, onFilter } = this.props;
    return (
      <FilterWrap>
        <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          value={value}
          onChange={onFilter}
          placeholder="Enter name to search"
        />
      </FilterWrap>
    );
  }
}

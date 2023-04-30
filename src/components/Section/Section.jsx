import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionStyle, SectionTitle } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <SectionStyle>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionStyle>
    );
  }
}

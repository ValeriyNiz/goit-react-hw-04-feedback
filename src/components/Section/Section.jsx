import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = props => {
  return (
    <section className={styles.section}>
      <h2 className={styles.statistics}>{props.title}</h2>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;

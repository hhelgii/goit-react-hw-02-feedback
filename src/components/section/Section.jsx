import React from 'react';
import propTypes from 'prop-types';
import css from "./section.module.css"
export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};

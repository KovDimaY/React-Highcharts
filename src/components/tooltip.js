import React from 'react';
import PropTypes from 'prop-types';

//possible position of tooltip
const TOP = 'top';
const RIGHT = 'right';
const BOTTOM = 'bottom';
const LEFT = 'left';

export default function Tooltip(props) {
  const {
    text,
    addClass,
    position = BOTTOM,
    hoverElement = <span className="help__icon">?</span>,
  } = props;

  const defaultWrapperClass = ['help'];
  defaultWrapperClass.push(position);

  if (addClass) {
    defaultWrapperClass.push(addClass);
  }

  const wrapperClasses = defaultWrapperClass.join(' ');

  return (
    <div className={wrapperClasses}>
      {hoverElement}
      <div className="help__content">
        <span className="help__text">{text}</span>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.node.isRequired,
  hoverElem: PropTypes.node,
  addClass: PropTypes.string,
  position: PropTypes.oneOf([TOP, RIGHT, BOTTOM, LEFT]),
};

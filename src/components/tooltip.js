import React from 'react';

//possible position of tooltip
export const TOP = 'top';
export const RIGHT = 'right';
export const BOTTOM = 'bottom';
export const LEFT = 'left';

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

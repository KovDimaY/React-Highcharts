import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

export default class SketchColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        hex: this.props.color || '#7ED321',
      },
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    if (typeof this.props.onChangeColor === 'function') {
      this.props.onChangeColor(this.props.identificator, color);
    }
    this.setState({ color });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${this.state.color.hex}`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    const defaultColors = [
      '#D0021B',
      '#F5A623',
      '#F8E71C',
      '#8B572A',
      '#7ED321',
      '#417505',
      '#BD10E0',
      '#9013FE',
      '#4A90E2',
      '#50E3C2',
      '#B8E986',
      '#000000',
      '#4A4A4A',
      '#9B9B9B',
      '#FFFFFF',
    ];

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
              disableAlpha={true}
              presetColors={this.props.presetColors || defaultColors}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

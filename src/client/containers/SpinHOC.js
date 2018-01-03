import React, { Component } from 'react'

const makeSpinner = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isHovered: false
      }
    }

    handleHover() {
      console.log('hello world')
      this.setState({ isHovered: !this.state.isHovered })
    }

    render() {
      const { isHovered } = this.state

      const compStyle = isHovered ? { transform: 'rotate(360deg)', transition: 'all 0.3s ease-in-out 0s' } : { margin: '110 100 100 100', transition: 'all 0.3s ease-in-out 0s' }
      return (
        <WrappedComponent style={compStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} {...this.props} />
      )
    }
  }
}
export default makeSpinner

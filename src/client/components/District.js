import React from 'react'
import { connect } from 'react-redux'

const District = ({ district }) => (
  <div>
    {console.log('district is', district)}
    <h1>Your District is: <span>{district}</span></h1>
  </div>
)

const mapStateToProps = (state) => {
  return {
    district: state.district
  }
}

export default connect(mapStateToProps)(District)

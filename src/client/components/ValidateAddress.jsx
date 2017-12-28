import React from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

const ValidateAddress = ({ address }) => {

  return (
    <div>

      { address ? <div>
        <h3>Now you need to confirm this address we found okay?</h3>
        <h1>{address}</h1>
        <div style={{ display: 'flex', width: 500, justifyContent: 'space-between' }}>
          <FlatButton
            primary={true}
            backgroundColor="#13A0C6"
            hoverColor="#86D7EC"
              >YES</FlatButton>
          <FlatButton
            secondary={true}
            backgroundColor="#13A0C6"
            hoverColor="#86D7EC"
              >NO</FlatButton>
        </div>
      </div>
      : <h1>It seems like we didn't find an address for you.. How did you get here?</h1>
    }
    </div>
  )
}

const mapStateToProps = state => ({address: state.voters})

export default connect(mapStateToProps)(ValidateAddress)

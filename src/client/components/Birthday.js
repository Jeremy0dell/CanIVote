import React from 'react'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'
import makeSpinner from '../containers/SpinHOC'

const Birthday = () => {

  const monthInfo = [
    {value: "01", primaryText: 'Jan'},
    {value: "02", primaryText: 'Feb'},
    {value: "03", primaryText: 'Mar'},
    {value: "04", primaryText: 'Apr'},
    {value: "05", primaryText: 'May'},
    {value: "06", primaryText: 'Jun'},
    {value: "07", primaryText: 'Jul'},
    {value: "08", primaryText: 'Aug'},
    {value: "09", primaryText: 'Sept'},
    {value: "10", primaryText: 'Oct'},
    {value: "11", primaryText: 'Nov'},
    {value: "12", primaryText: 'Dec'},
  ]

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Field
          name="month"
          component={SelectField}
          hintText="Month"
          floatingLabelText="Month"
          maxHeight={300}
          style={{ width: 100, marginRight: 15 }}
        >
        {
          monthInfo.map((month, idx) => <MenuItem key={idx} value={month.value} primaryText={month.primaryText} />)
        }
        </Field>
        <Field
          name="day"
          component={TextField}
          hintText="Day"
          floatingLabelText="Day"
          validate={value => (parseInt(value) !== NaN && parseInt(value) < 32 ? undefined : 'Invalid')}
          style={{ width: 40, marginRight: 15 }}
        />
        <Field
          name="year"
          component={TextField}
          hintText="Year"
          floatingLabelText="Year"
          style={{ width: 80 }}
        />
      </div>
    </div>
  )
}

const spinBirthday = makeSpinner(Birthday)

export default spinBirthday

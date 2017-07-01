import React from 'react'
import { partial, property, map, includes } from 'lodash'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField/TextField'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setValue, reset } from '../../../reducer/customer/new/index'


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        float: 'left',
        marginLeft: 20,
        width: 1,
        color: '#ccc'
    }
};
const textStyle = {
    padding: '0 10px'
}
const raisedButton = {
    flex: 1,
    margin: '50px 12px'
}
const NewForm = ({ setValue: _setValue }) => (<div>
    <TextField
        name="name"
        hintText="请输入姓名"
        floatingLabelText="姓名"
        onChange={(e) => _setValue('name', e.target.value)}
        fullWidth
        floatingLabelStyle={textStyle}
        inputStyle={textStyle}
        hintStyle={textStyle}
    />
    <div style={{
        display: 'flex',
        padding: '25px 10px 5px'
    }}
    >
        <span style={{ flex: 1, color: 'rgba(0, 0, 0, 0.3)' }} >
            性别
        </span>
        <RadioButtonGroup name="gender" onChange={(e, v) => _setValue('gender', v)}>
            <RadioButton
                value={0}
                label="男"
                style={styles.radioButton}
            />
            <RadioButton
                value={1}
                label="女"
                style={styles.radioButton}
            />
        </RadioButtonGroup>
    </div>
    <Divider />
    <TextField
        name="tel"
        hintText="请输入电话号码"
        floatingLabelText="电话号码"
        onChange={(e) => _setValue('mobile_tel', e.target.value)}
        fullWidth
        floatingLabelStyle={textStyle}
        inputStyle={textStyle}
        hintStyle={textStyle}
    />
    <TextField
        name="remark"
        hintText="请输入客户装修偏好和其他基本情况"
        floatingLabelText="描述说明"
        onChange={(e) => _setValue('remark', e.target.value)}
        fullWidth
        multiLine
        rowsMax={5}
        floatingLabelStyle={textStyle}
        inputStyle={textStyle}
        hintStyle={textStyle}
    />
    <div style={{
        display: 'flex',
        textAlign: 'center'
    }}
    >
        <RaisedButton label="重置" style={raisedButton} />
        <RaisedButton label="确定" primary style={raisedButton} />
    </div>
</div>)

export default compose(
    connect(
        createSelector(
            [
                property('person.customer.newCustomer'),
            ],
            (form) => {
                return { ...form }
            }
        ),
        partial(bindActionCreators, {
            setValue, reset
        })
    ),
    withHandlers({
        push: props => (src) => () => props.history.push(src)
    }),
    lifecycle({
        componentDidMount() {
            this.props.reset()
        }
    })
)(NewForm)
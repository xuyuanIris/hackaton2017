import React from 'react'
import TextField from 'material-ui/TextField/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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
const NewForm = () => (<div>
    <TextField
        name="name"
        hintText="请输入姓名"
        floatingLabelText="姓名"
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
        <RadioButtonGroup name="gender" defaultSelected="not_light" >
            <RadioButton
                value="男"
                label="男"
                style={styles.radioButton}
            />
            <RadioButton
                value="女"
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
        fullWidth
        floatingLabelStyle={textStyle}
        inputStyle={textStyle}
        hintStyle={textStyle}
    />
    <TextField
        name="tel"
        hintText="请输入客户装修偏好和其他基本情况"
        floatingLabelText="描述说明"
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
export default NewForm;
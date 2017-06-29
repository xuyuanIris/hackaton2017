import React from 'react'
import TextField from 'material-ui/TextField/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        float: 'left',
        marginLeft: 20,

        width: 1
    },
};
const NewForm = () => (<div>
    <TextField
        name="name"
        hintText="请输入姓名"
        floatingLabelText="姓名"
        fullWidth
    />
    <div style={{
        display: 'flex',
        padding: '25px 0px 5px'
    }}
    >
        <span style={{ flex: 1, color: 'rgba(0, 0, 0, 0.3)' }} >
            性别
        </span>
        <RadioButtonGroup name="gender" defaultSelected="not_light" label="xx">
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
    />
</div>)
export default NewForm;
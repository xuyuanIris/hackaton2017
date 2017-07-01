import React from 'react'
import style from 'styled-components'
import Top from './../../../js/top'
import Body from './../orders/body'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const Man = style.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url('/img/man-icon.jpg') no-repeat;
    background-size: 100% 100%;    
`
const BlueText = style.span`
    color: #448aff;
    margin-left: 5px;
`
const Line = style.div`
    line-height: 25px;
    padding: 0 15px;
    font-size: 14px;
    & > span{
        margin-right: 5px;
    }
`

const detailOrder = () => (<div>
    <Top title="订单详情" />
    <Body>
        <Line>
            <Man />
            <span>张俊</span>
            <span>13825623256</span>
        </Line>
        <Line>
            <span>推客：</span>
            <BlueText>戴敏</BlueText>
            <BlueText>18956895689</BlueText>
        </Line>
        <Stepper activeStep={1}>
          <Step>
            <StepLabel style={{
                padding: 0,
            }}
            >
                <p>待跟进</p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{
                padding: 0,
            }}
            >
                <p>跟进中</p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{
                padding: 0,
            }}
            >
                <p>已交易</p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{
                padding: 0,
            }}
            >
                <p>已结佣</p>
            </StepLabel>
          </Step>
        </Stepper>
    </Body>
</div>)
export default detailOrder
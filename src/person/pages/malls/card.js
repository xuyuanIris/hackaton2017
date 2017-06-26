import React from 'react';
import { Card, CardActions, CardMedia, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import style from 'styled-components'

const Img = style.img.attrs({
    alt: 'logo',
}) `
    width: 100%;
`
const CardExampleWithAvatar = () => (
    <Card>
        <CardHeader
            title="中信国际装修"
            actAsExpander
            showExpandableButton
        />
        <CardMedia
            overlay={<CardTitle subtitle="您最信赖的装修公司" />}
        >
            <Img src="/img/logo.jpg" />
        </CardMedia>
        <CardText expandable>
            <span>
                这是该公司的具体描述可以被收起和展开
            </span>
        </CardText>
        <CardActions expandable>
            <FlatButton label="详情" />
            <FlatButton label="推荐" />
        </CardActions>
    </Card>
);

export default CardExampleWithAvatar;
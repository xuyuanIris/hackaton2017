import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey500, redA700 } from 'material-ui/styles/colors';

const ListExampleMessages = (props) => {
    const { src, name, remark, tel, amount, onClick } = props
    return (<div onClick={onClick}>
        <ListItem
            leftAvatar={<Avatar src={src} />}
            primaryText={name}
            secondaryText={
                <p>
                    <span style={{ color: grey500 }}>
                        {remark}
                    </span>
                    <br />
                    <span style={{ color: redA700, fontSize:18 }}>{amount}</span>
                </p>
            }
            secondaryTextLines={2}
        />
        <Divider inset />
    </div>)
};

export default ListExampleMessages;
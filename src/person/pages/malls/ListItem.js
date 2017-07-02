import React from 'react';
import { ListItem } from 'material-ui/List';
import AddBox from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey500, redA700, blue700, green700 } from 'material-ui/styles/colors';

const ListExampleMessages = (props) => {
    const { src, name, remark, amount, commission, onClick } = props
    return (<div onClick={onClick}>
        <ListItem
            leftAvatar={<Avatar src={src} />}
            rightIcon={<AddBox color={blue700} style={{size:24}} />}
            primaryText={name}
            secondaryText={
                <p>
                    <span style={{ color: grey500 }}>
                        {remark}
                    </span>
                    <br />
                    <span style={{ color: redA700, fontSize: 18, marginRight: 2 }}>{amount}</span>
                    <i style={{ color: blue700, fontSize: 13, marginLeft: 2 }}>佣：{commission}</i>
                </p>
            }
            secondaryTextLines={2}
        />
        <Divider inset />
    </div>)
};

export default ListExampleMessages;
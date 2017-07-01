import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';

const ListExampleMessages = ({ src, name, remark, tel }) => (
    <div>
        <ListItem
            leftAvatar={<Avatar src={src} />}
            primaryText={name}
            secondaryText={
                <p>
                    <span style={{ color: darkBlack }}>
                        {remark}
                    </span>
                    <br />
                    联系电话：{tel}
                </p>
            }
            secondaryTextLines={2}
        />
        <Divider inset />
    </div>
);

export default ListExampleMessages;
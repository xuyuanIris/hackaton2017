import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconButtonElement = (
    <IconButton
        touch
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);
const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const ListExampleMessages = () => (
    <div>
        <ListItem
            leftAvatar={<Avatar src="/img/ok-128.jpg" />}
            rightIconButton={rightIconMenu}
            primaryText="国际装修"
            secondaryText={
                <p>
                    <span style={{ color: darkBlack }}>
                        你最好的装修公司
                    </span>
                    <br />
                    联系电话：100-39-039584
                </p>
            }
            secondaryTextLines={2}
        />
        <Divider inset />
    </div>
);

export default ListExampleMessages;
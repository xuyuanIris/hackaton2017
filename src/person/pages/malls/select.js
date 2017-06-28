import React from 'react';
import Select from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectExampleWithAvatar = () => (
    <Select value={3}>
        <MenuItem value={1} primaryText="1" />
        <MenuItem value={2} primaryText="2" />
        <MenuItem value={3} primaryText="3" />
        <MenuItem value={4} primaryText="4" />
        <MenuItem value={5} primaryText="5" />
    </Select>
);

export default SelectExampleWithAvatar;
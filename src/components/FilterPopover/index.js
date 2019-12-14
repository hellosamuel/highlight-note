import React, { useState } from 'react';
import {
  Popover,
  List,
  ListItem,
  TextField,
} from '@material-ui/core';

const FilterPopover = ({ open, location, category, applyResult }) => {
  const [value, setValue] = useState('')
  const handleValue = e => { setValue(e.currentTarget.value) }
  const handleClick = e => { applyResult(e.currentTarget.id) }

  return (
    <Popover
      open={open}
      anchorPosition={location}
      anchorReference="anchorPosition"
    >
      <List>
        <ListItem>
          <TextField
            fullWidth
            placeholder="Filter"
            value={value}
            onChange={handleValue}
          />
        </ListItem>
        {category.map(({ id, name }) => (
          <ListItem
            key={id}
            id={name}
            button
            onClick={handleClick}
          >
            {name}
          </ListItem>
        ))}
      </List>

    </Popover>
  )
}

export default FilterPopover
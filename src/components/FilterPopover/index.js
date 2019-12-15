import React, { useState } from 'react';
import {
  Popover,
  List,
  ListItem,
  TextField,
} from '@material-ui/core';

const FilterPopover = ({ open, location, category, applyResult }) => {
  const [value, setValue] = useState('')
  const [list, setList] = useState(category)
  const handleValue = e => {
    const { value } = e.currentTarget
    setValue(value)

    const updatedList = value.length
      ? list.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
      : category
    setList(updatedList)
  }
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
        {list.map(({ id, name }) => (
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
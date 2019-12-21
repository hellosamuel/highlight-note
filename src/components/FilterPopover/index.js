import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
  Popover,
  List,
  ListItem,
  TextField, Typography,
} from '@material-ui/core';
import ColorHash from 'color-hash';

const colorHash = new ColorHash()

const useStyles = makeStyles(theme => ({
  highlightText: {
    padding: theme.spacing(0.25, 0.5),
  },
}));

const FilterPopover = ({ open, location, category, initialValue, applyResult }) => {
  const classes = useStyles()
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
        {initialValue &&
          <ListItem>
            <Typography
              className={classes.highlightText}
              component="span"
              style={{ background: colorHash.hex(initialValue) }}
            >
              {initialValue}
            </Typography>
          </ListItem>
        }
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
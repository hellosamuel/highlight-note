import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
  Popover,
  List,
  ListItem,
  ListItemSecondaryAction,
  TextField,
  Typography,
  Icon,
  IconButton,
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

  const handleList = name => {
    setList(
      [
        ...category,
        {
          id: category[category.length - 1].id + 1,
          name
        }
      ]
    )
  }

  const handleValue = e => {
    const { value } = e.currentTarget
    setValue(value)

    const updatedList = value.length
      ? list.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
      : category
    setList(updatedList)
  }

  return (
    <Popover
      open={open}
      onClose={() => applyResult()}
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
            <ListItemSecondaryAction>
              <IconButton onClick={() => applyResult(initialValue)}>
                <Icon>delete</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        }
        <ListItem>
          <TextField
            fullWidth
            placeholder="Filter"
            value={value}
            onChange={handleValue}
          />
          <ListItemSecondaryAction>
            <IconButton
              disabled={list.length}
              onClick={() => handleList(value)}
            >
              <Icon>add</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {list.map(({ id, name }) => (
          <ListItem
            key={id}
            id={name}
            button
            disabled={name === initialValue}
            selected={name === initialValue}
            onClick={e => applyResult(e.currentTarget.id)}
          >
            {name}
          </ListItem>
        ))}
      </List>

    </Popover>
  )
}

export default FilterPopover
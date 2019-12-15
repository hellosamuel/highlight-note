import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

import { data, category } from '../../config'

import HighlightText from '../HighlightText'
import FilterPopover from "../../components/FilterPopover";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Main = ({ title }) => {
  const classes = useStyles()
  const [list, setList] = useState(data)
  const [filterOpen, setFilterOpen] = useState(false)
  const [location, setLocation] = useState({})

  const handleMouseUp = () => {
    const selection =  getSelection()
    if (selection.toString().trim()) {
      const { right, top } = selection.getRangeAt(0).getClientRects()[0]
      setFilterOpen(true)
      setLocation({ left: right + 5, top })
    }
  }

  const applyResult = result => {
    setFilterOpen(false)
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
      <HighlightText
        data={list}
        onMouseUp={handleMouseUp}
      />
      {filterOpen &&
        <FilterPopover
          open={filterOpen}
          location={location}
          category={category}
          applyResult={applyResult}
        />
      }
    </Paper>
  )
}

export default Main
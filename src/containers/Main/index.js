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
  const [selectedData, setSelectedData] = useState({})

  const handleClick = e => {
    // TODO edit highlight, remove highlight
    // const { right, top } = e.currentTarget.getClientRects()[0]
    // setLocation({ left: right + 5, top })
    // setFilterOpen(true)
  }

  const handleMouseUp = e => {
    const selection = getSelection()
    const word = selection.toString().trim()
    const { anchorNode, anchorOffset, focusNode, focusOffset } = selection
    if (anchorNode.parentNode.dataset.offset !== focusNode.parentNode.dataset.offset) {
      alert('There is already highlighted word in selected section')
      return
    }

    if (word) {
      const { right, top } = selection.getRangeAt(0).getClientRects()[0]
      const isReverse = anchorOffset > focusOffset
      const anchor = isReverse ? focusNode : anchorNode
      setSelectedData({
        originTextId: parseInt(e.currentTarget.dataset.id, 10),
        word,
        originOffset: parseInt(anchor.parentNode.dataset.offset, 10),
        anchorOffset: isReverse ? focusOffset : anchorOffset,
      })
      setLocation({ left: right + 5, top })
      setFilterOpen(true)
    }
  }

  const applyResult = result => {
    const { originTextId, word, originOffset, anchorOffset } = selectedData
    const { id, text } = list.find(({ id }) => originTextId === id)
    const offset = originOffset + anchorOffset
    const startPart = text.slice(0, offset)
    const targetPart = `<${word}::${result}>`
    const endPart = text.slice(offset + word.length)
    setList(prevList => prevList.map(row => {
      if (row.id === id) {
        return ({ ...row, text: `${startPart}${targetPart}${endPart}` })
      }
      return row
    }))
    setSelectedData({})
    setFilterOpen(false)
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
      <HighlightText
        data={list}
        handleClick={handleClick}
        handleMouseUp={handleMouseUp}
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
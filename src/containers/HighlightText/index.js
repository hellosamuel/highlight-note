import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import FilterPopover from '../../components/FilterPopover';

const HighlightText = ({ data, category }) => {
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
    <>
      {list.map(({ id, text }) => (
        <Typography
          key={id}
          gutterBottom
          onMouseUp={handleMouseUp}
        >
          {text}
        </Typography>
      ))}
      {filterOpen &&
        <FilterPopover
          open={filterOpen}
          location={location}
          category={category}
          applyResult={applyResult}
        />
      }
    </>
  )

}

export default HighlightText
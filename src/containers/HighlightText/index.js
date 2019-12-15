import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Tooltip, Typography} from '@material-ui/core';
import ColorHash from 'color-hash';

import { preReg, afterReg } from '../../config'

const colorHash = new ColorHash()

const useStyles = makeStyles(theme => ({
  highlightText: {
    padding: theme.spacing(0.25, 0.5),
  },
}));

const HighlightText = ({ data, ...handleEvent }) => {
  const classes = useStyles()

  return (
    <>
      {data.map(({ id, text }) => {
        let offset = 0
        const highlightedText = text.split(preReg).reduce((acc, val) => {
          if (preReg.test(val)) {
            const [origin, word, category] = [...val.matchAll(afterReg)][0]
            acc.push(
              <Tooltip key={offset} title={category}>
                <Typography
                  className={classes.highlightText}
                  component="span"
                  style={{ background: colorHash.hex(category) }}
                >
                  {word}
                </Typography>
              </Tooltip>
            )
            offset += origin.length
          } else if (val) {
            acc.push(
              <Typography key={offset} component="span">
                {val}
              </Typography>
            )
            offset += val.length
          }
          return acc
        }, [])

        return (
          <Typography key={id} gutterBottom {...handleEvent}>
            {highlightedText}
          </Typography>
        )
      })}
    </>
  )

}

export default HighlightText
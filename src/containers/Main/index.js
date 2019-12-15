import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

import { data, category } from '../../config'

import HighlightText from '../HighlightText'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Main = ({ title }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
      <HighlightText data={data} category={category} />
    </Paper>
  )
}

export default Main
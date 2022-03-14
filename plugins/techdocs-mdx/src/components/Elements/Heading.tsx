/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    '&:not(:first-child)': {
      marginTop: theme.spacing(4),
    },
  },
}));

const H1 = ({ id, children }: JSX.IntrinsicElements['h1']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h3" component="h1">
      {children}
    </Typography>
  );
};

const H2 = ({ id, children }: JSX.IntrinsicElements['h2']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h4" component="h2">
      {children}
    </Typography>
  );
};

const H3 = ({ id, children }: JSX.IntrinsicElements['h3']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h5" component="h3">
      {children}
    </Typography>
  );
};

const H4 = ({ id, children }: JSX.IntrinsicElements['h4']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h6" component="h4">
      {children}
    </Typography>
  );
};

const H5 = ({ id, children }: JSX.IntrinsicElements['h5']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h6" component="h5">
      {children}
    </Typography>
  );
};

const H6 = ({ id, children }: JSX.IntrinsicElements['h6']) => {
  const classes = useStyles();
  return (
    <Typography id={id} className={classes.root} variant="h6" component="h6">
      {children}
    </Typography>
  );
};

export { H1 as h1, H2 as h2, H3 as h3, H4 as h4, H5 as h5, H6 as h6 };

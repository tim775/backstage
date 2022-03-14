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

import React, { HTMLAttributes, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import clsx from 'clsx';
import { makeStyles, Paper } from '@material-ui/core';
import { useApi, appThemeApiRef } from '@backstage/core-plugin-api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1.5),
    background: theme.palette.background.paper,
    '& .linenumber': {
      minWidth: 'auto !important',
      marginRight: theme.spacing(1.5),
      boxShadow: `inset -0.05rem 0 ${theme.palette.text.secondary}`,
    },
    '& .string': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.success.light
          : theme.palette.success.dark,
    },
    '& .number': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.error.light
          : theme.palette.error.dark,
    },
    '& .keyword': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
    },
    '& .function, & .special, & .constant': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark,
    },
    '& .comment, & .generic, & .variable, & .operator, & .punctuation': {
      color: theme.palette.text.secondary,
    },
  },
  rootInline: {
    background: theme.palette.background.paper,
  },
}));

const Code = ({ className = '', children }: JSX.IntrinsicElements['code']) => {
  const classes = useStyles();

  const themeApi = useApi(appThemeApiRef);
  const themeId = themeApi.getActiveThemeId();
  const match = /language-(\w+)/.exec(className);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lineNumbers =
      ref.current?.querySelectorAll<HTMLElement>('.linenumber');
    if (!lineNumbers?.length) return;
    const lastLineNumber = lineNumbers[lineNumbers.length - 1];
    const lastLineNumberStyle = getComputedStyle(lastLineNumber);
    for (const lineNumber of lineNumbers) {
      lineNumber.style.width = lastLineNumberStyle.width;
    }
  }, []);

  return match ? (
    <Paper ref={ref} elevation={0}>
      <SyntaxHighlighter
        component="code"
        language={match[1]}
        useInlineStyles={false}
        fact="syntaxhighlighter"
        className={clsx(className, classes.root)}
        style={themeId === 'dark' ? okaidia : coy}
        children={String(children).replace(/\n$/, '')}
        showLineNumbers
      />
    </Paper>
  ) : (
    <code className={clsx(className, classes.rootInline)}>{children}</code>
  );
};

export { Code as code };

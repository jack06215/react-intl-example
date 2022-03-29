import { defineMessages, defineMessage } from 'react-intl'

defineMessages({
  foo: {
    id: 'foo',
    defaultMessage: 'foo',
    description: 'bar',
  },
})

defineMessage({
  id: 'single',
  defaultMessage: 'single message',
  description: 'header',
})
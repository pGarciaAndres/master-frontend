import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/vue'
import Avatar from './Avatar.vue'

test('Should render Open AI logo', () => {
  render(Avatar, {
    props: {
      sender: 'ai'
    }
  })

  screen.debug()
  expect(screen.getByLabelText('OpenAI Logo')).toBeTruthy()
})

test('Should render User logo', () => {
  render(Avatar, {
    props: {
      sender: 'user'
    }
  })

  expect(screen.getByLabelText('User Logo')).toBeTruthy()
})

test('Should not render OpenAI or User logo', () => {
  render(Avatar, {
    props: {
      sender: 'system'
    }
  })

  expect(screen.queryByLabelText('OpenAI Logo')).toBeFalsy()
  expect(screen.queryByLabelText('User Logo')).toBeFalsy()
})

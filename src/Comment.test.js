import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render text', () => {
    const wrapper = render(<Comment c={{comment: 'test'}} />)
    expect(wrapper.text()).toBe('test')
})

it('should render empty', () => {
    const wrapper = render(<Comment c={{comment: ''}} />)
    expect(wrapper.text()).toBe('vazio')
})
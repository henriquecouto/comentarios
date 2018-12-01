import React from 'react'
import {
    shallow
} from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
    it('should handle change in textarea', () => {
        const wrapper = shallow(<NewComment />)
        const event = {
            target: {value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)

        expect(wrapper.state().newComment).toBe('test')
    })

    it('should call sendComment on button click', () => {
        const addComment = jest.fn()
        const wrapper = shallow(<NewComment addComment={addComment} />)
        const event = {
            target: {value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')
        expect(addComment).toBeCalledWith('test')
        expect(addComment.mock.calls[0][0]).toBe('test')
        expect(wrapper.state().newComment).toBe('')
    })
})
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Select',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

const optList = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

export const SelectDefault = Template.bind({})
SelectDefault.args = {
  placeholder: 'Select',
  title: 'Select',
  options: optList,
  isMulti: false
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  placeholder: 'Multi Select',
  title: 'Multi Select',
  options: optList,
  isMulti: true
}

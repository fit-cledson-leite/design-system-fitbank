import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './'

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Primary',
  onClick: () => {}
}

export const PrimaryWithIconLeft = Template.bind({})
PrimaryWithIconLeft.args = {
  children: 'Primary',
  icon: 'home',
  onClick: () => {}
}

export const PrimaryWithIconRight = Template.bind({})
PrimaryWithIconRight.args = {
  children: 'Primary',
  icon: 'home',
  iconRight: true,
  onClick: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  icon: 'home',
  type: 'secondary',
  onClick: () => {}
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Tertiary',
  icon: 'home',
  type: 'tertiary',
  onClick: () => {}
}

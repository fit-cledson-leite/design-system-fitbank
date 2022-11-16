import { Typography } from '../../Typography'
import React, { useState } from 'react'
import * as Styled from './styles'

interface RadioProps {
  option: string
  checked?: boolean
  onclick: (value: string) => void
}

export const InputItem = ({ option, checked, onclick }: RadioProps) => {
  return (
    <Styled.Container data-testid='radio-container'>
      <Styled.Radio data-testid='radio' checked={checked} onClick={() => onclick(option)}>
        <Styled.RadioChild data-testid='radio-child' checked={checked} />
      </Styled.Radio>
      <Typography data-testid='radio-text' variant='body'>
        {option}
      </Typography>
    </Styled.Container>
  )
}
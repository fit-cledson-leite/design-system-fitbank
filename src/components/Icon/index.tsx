import React from 'react'
import { Home } from './icons/Home'

interface IconsProps {
  name:
    | 'adress'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowUp'
    | 'authorization'
    | 'calendar'
    | 'cancel'
    | 'card'
    | 'cardMulti'
    | 'changeAccount'
    | 'cnh'
    | 'details'
    | 'Device'
    | 'done'
    | 'download'
    | 'edit'
    | 'email'
    | 'enterprise'
    | 'favorite'
    | 'favoriteAdd'
    | 'favoriteRemove'
    | 'filter'
    | 'Frame 202'
    | 'Frame 203'
    | 'home'
    | 'link'
    | 'money'
    | 'moneyln'
    | 'moneyNotes'
    | 'moneyOut'
    | 'moneyTransfer'
    | 'moneyTransferSMS'
    | 'onboardingCard'
    | 'onboardingSMS'
    | 'options'
    | 'payment'
    | 'pin'
    | 'pix'
    | 'plus'
    | 'qrCode'
    | 'qrCodeIn'
    | 'qrCodeOut'
    | 'receipt'
    | 'refresh'
    | 'rg'
    | 'scheduled'
    | 'select-all'
    | 'sendMoney'
    | 'setup'
    | 'share'
    | 'ticketPayment'
    | 'toggleOff'
    | 'toggleOn'
    | 'topup'
    | 'trash'
    | 'upload'
    | 'user'
    | 'userBank'
    | 'userGroup'
    | 'userSearch'
    | 'withdrawMoney'
}

export const Icon: React.FC<IconsProps> = ({ name }) => {
  switch (name) {
    case 'home':
      return <Home data-testid='home' />

    default:
      return <div />
  }
}

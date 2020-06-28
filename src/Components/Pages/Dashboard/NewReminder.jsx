import React from 'react'
import Input from '../../Custom/Input'
import CreateReminderForm from '../../Custom/CreateReminderForm'
import DashboardMenu from '../../Custom/DashboardMenu'


export default function NewReminder() {
  return (
    <div>
      <DashboardMenu />
      <CreateReminderForm />
    </div>
  )
}

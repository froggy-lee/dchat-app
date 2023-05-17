import React from 'react'
import ActionMessage from '/src/components/BoxMessage/ActionMessage'

const message = {
  type: 'user',
  text: 'sadsads asd asd asd sad as da dsad asd sa das dsad asd sad sad as dasd as dsa dasd a sd sad asd sad sad asd asd sadas dasd sad sad asd asd asd asd as das d'
}

function test() {
  return (
    <div>
      <ActionMessage message={message} />
    </div>
  )
}

export default test

import React from 'react'

import { Frame, useEditor } from '@craftjs/core'

interface FrameProps {
  data: any
  standaloneServer: boolean
}

const FrameEditor: React.FC<FrameProps> = ({ data }) => {
  const { actions } = useEditor()

  actions.deserialize(data)

  return (
    <div className="page-container">
      <Frame />
    </div>
  )
}

interface EditorProps {
  data: any
  standaloneServer: boolean
}

const Editor: React.FC<EditorProps> = ({ data, standaloneServer }) => {
  return (
    <FrameEditor data={data} standaloneServer={standaloneServer} />
  )
}
export default Editor

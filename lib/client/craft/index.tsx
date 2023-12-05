import React from 'react'

import Editor from './editor/Editor'
import CustomEditor from './editor/CustomEditor';

import './styles/app.css'

interface ContentProviderBaseProps {
  data: any
  standaloneServer: boolean
}

const ContentProviderBase: React.FC<ContentProviderBaseProps> = ({ data, standaloneServer }) => {
  return (
    <div className="h-full h-screen">
      <Editor data={data} standaloneServer={standaloneServer} />
    </div>
  )
}

const CustomContentProviderBase: React.FC<ContentProviderBaseProps> = ({ data, standaloneServer }) => {
  return (
    <div className="h-full h-screen">
      <CustomEditor data={data} standaloneServer={standaloneServer} />
    </div>
  )
}

interface ContentProviderProps {
  data: any
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ data }) => (
  <ContentProviderBase data={data} standaloneServer={false} />
)

export const CustomContentProvider: React.FC<ContentProviderProps> = ({ data }) => (
  <CustomContentProviderBase data={data} standaloneServer={false} />
)

export const ContentProviderReact: React.FC<ContentProviderProps> = () => (
  <ContentProviderBase data={null} standaloneServer={true} />
)
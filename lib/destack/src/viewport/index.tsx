import { useEditor } from '@craftjs/core'
import cx from 'classnames'
import React, { useEffect } from 'react'

import { Header } from './Header'
// import { Sidebar as RightSidebar } from './RightSidebar'
import { Toolbox as LeftSidebar } from './LeftSidebar'

export const Viewport: React.FC = ({ children }) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  useEffect(() => {
    if (!window) {
      return
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*',
      )

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true
        })
      }, 200)
    })
  }, [setOptions])

  return (
    <div className="viewport">
      <div className={cx(['flex h-full overflow-hidden flex-row w-full fixed'])}>
        <LeftSidebar />
        <div className="page-container flex flex-1 h-full flex-col">
          <Header />
          <div
            className={cx([
              'craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto',
              {},
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center pt-8">{children}</div>
            <div className={'flex items-center justify-center w-full pt-6 text-xs text-gray-400'}>
              <a href="https://www.netlify.com">This site is powered by Netlify</a>
            </div>
          </div>
        </div>
        {/* <RightSidebar /> */}
      </div>
    </div>
  )
}

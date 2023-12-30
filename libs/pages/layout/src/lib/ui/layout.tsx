import {PropsWithChildren} from 'react'

export default function LayoutPage({ children }: PropsWithChildren) {
  return (
    <main className="h-screen bg-grey-500">
      <div className="">{ children }</div>
    </main>
  )
}
import {PropsWithChildren, useEffect} from 'react'
import LayoutPage from '../ui/layout'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@draco/store'
import {fetchUser} from '@draco/domains/users'

export function Layout ({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <LayoutPage>
      { children }
    </LayoutPage>
  )
}
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { getUserState } from '@draco/domains/users'
import { useEffect } from 'react'

export function useRedirectIfLogged() {
  const navigate = useNavigate()

  const user = useSelector(getUserState)

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/")
    }
  }, [navigate, user])
}
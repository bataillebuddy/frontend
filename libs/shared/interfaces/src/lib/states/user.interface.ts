import { UserEntity } from '../entity'

export interface UserState {
  user?: UserEntity
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
}
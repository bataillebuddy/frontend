import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from '@reduxjs/toolkit'
import {UserEntity, UserState} from '@draco/interfaces'
// eslint-disable-next-line @nx/enforce-module-boundaries
import {RootState} from '@draco/store'
import {apiClient} from "@draco/api-client";

export const USER_KEY = 'user'

export const userAdapter = createEntityAdapter<UserEntity>()

export const fetchUser = createAsyncThunk('user/fetch', async (): Promise<UserState | undefined> => {
  try {
    const response = await apiClient.get<UserEntity>('/authentication/me').build()

    return {
      user: response.data,
      isLoading: false,
      isAuthenticated: true,
      token: null
    }
  } catch (err) {
    return undefined
  }
})
export const initialUserState: UserState = {
  isAuthenticated: false,
  isLoading: false,
  token: null
}

export const userSlice = createSlice({
  name: USER_KEY,
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload?.user
        state.isLoading = false
        state.isAuthenticated = !!action.payload?.user?.id
      })
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

export const getUserState = (root: RootState) => root[USER_KEY]
export const selectUser = createSelector(getUserState, (state) => state)
import { createStore } from 'vuex'
import user, { UserProps } from './modules/user'


export interface GlobalDataProps {
  user: UserProps;
}

const store = createStore({
  modules: {
    user
  }
})

export default store

import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'
import axios from "@/plugins/axios"


export const state = () => ({
  isAuth: false,
  id:'',
  uid:'',
  displayName: '',
  email: '',
  photoURL: '',
  intro:''
})
export const mutations = {
  setSignInState(state, user) {
    state.isAuth = !!user
    state.id =  user && user.id || ''
    state.uid = user && user.uid || ''
    state.email = user && user.email || ''
    state.displayName = user && user.displayName || ''
    state.photoURL = user && user.photoURL || ''
    state.intro = user && user.intro || ''
  }
}
export const actions = {
  async signInMail({ commit },{address,password}) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(address,password)
      .then(res => {
      const user = {
            email: res.user.email,
            name: res.user.displayName,
            uid: res.user.uid,
            photo:'',
            intro:""
          };
          axios.get('v1/users', {params: {uid: res.user.uid}}).then(res => {
            if(!(res.data)){
              axios.post('v1/users',{ user })
            }
          })
          axios.get('v1/users', {params: {uid: res.user.uid}}).then(res => {
          commit('setSignInState', res.data);
            console.log(res.data)
          })
            this.$router.push("/");
          
      })
      .catch(error => {
        if (error.code === 'auth/popup-closed-by-user') {
          // Do nothing.
        } else {
          // any
        }
      })
  },
  async signInGoogle({ commit }) {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
      const user = {
            email: res.user.email,
            name: res.user.displayName,
            uid: res.user.uid,
            photo: res.user.photoURL,
            intro:""
          };
          axios.get('v1/users', {params: {uid: res.user.uid}}).then(res => {
            if(!(res.data)){
              axios.post('v1/users',{ user })
            }
          })
          axios.get('v1/users', {params: {uid: res.user.uid}}).then(res => {
          console.log(res)
          console.log(res.data)
          commit('setSignInState', res.data);
          })
            this.$router.push("/");
          
      })
      .catch(error => {
        if (error.code === 'auth/popup-closed-by-user') {
          // Do nothing.
        } else {
          // any
        }
      })
  },
  async signOut({ commit }) {
    await firebase
      .auth()
      .signOut()
      .then(res => {
        commit('setSignInState', false)
      })
  },
  async checkAuth({ commit }) {
    await auth().then(user => commit('setSignInState', user))
  },
}
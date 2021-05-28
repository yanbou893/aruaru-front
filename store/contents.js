import axios from "@/plugins/axios"
import firebase from '@/plugins/firebase'
import 'firebase/storage';

export const state = () => ({
    app:[]
})
 
export const mutations = {
    maincontnents(state,value) {
        state.app = value
        
    },
    contentsbody(state,value) {
        axios.post('v1/apps',{value})
    },
}
export const actions = {
 uploadImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // firestorage にファイルをアップロード
      const firestorage = firebase.storage()
      const uploadTask = firestorage
        .ref('images/' + payload.name)
        .put(payload.file)
        .then(snapshot => {
           // アップロード完了処理。URLを取得し、呼び出し元へ返す。
           snapshot.ref.getDownloadURL().then(url => {
             resolve(url)
           })
         })
      
    })
  }
}
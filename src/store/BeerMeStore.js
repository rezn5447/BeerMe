import {
  LoginButton,
  AccessToken,
  LoginManager
} from 'react-native-fbsdk';
import {observable} from 'mobx';
import {observer, action} from 'mobx-react/native';
import {createAutoSubscriber} from 'firebase-nest';

import firebase from 'react-native-firebase';
import MobxFirebaseStore from 'mobx-firebase-store';


const stadiums_subkey = 'stadiums';


export default class BeerMeStore extends MobxFirebaseStore {
  @observable color = 'blue';
  @observable stadiums = [];
  @observable seat = {Section: '', Row: '', Seat: ''};

  @observable stadiumSelected = '';
  @observable currentUser = {};

  constructor(config) {
    const store = new MobxFirebaseStore(firebase.database().ref());
      super(store.fb)
  }

  resolveFirebaseQuery(sub) {
		return this.fb.child(stadiums_subkey)
	}

  getStadiums(){
    return this.getData(stadiums_subkey)
  }


  setUser(user){
    this.currentUser = user
    console.log(this.currentUser.email)
  }

  facebookLogin() {

  }
  signIn({email, password}) {
    return firebase.auth(this.fbApp).signInWithEmailAndPassword(email, password);
  }



  createUser({email, password}) {
    return firebase.auth(this.fbApp).createUserWithEmailAndPassword(email, password);
  }


  signOut() {
    return firebase.auth(this.fbApp).signOut();
  }


  allStadiumsSubs(){
    return [{
        subKey: stadiums_subkey,
        asList: true,
        transformChild: (val) => Object.assign({}, val, {id: val, name: val}),
        onData: (type, snapshot) => console.log('got data: ', type, 'myMsgs', snapshot.val())
    }];
  }

  allStoresSubs(){
    return [{
        subKey: stadiums_subkey,
        asList: true
    }];
  }
}

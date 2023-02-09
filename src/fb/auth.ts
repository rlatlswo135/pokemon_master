import {
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    UserCredential,
    deleteUser,
    signOut,
} from 'firebase/auth';
import _ from 'lodash';
import { app } from '@fb';
import { getDocuments } from './store';

export const fbAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const getUsers = () => fbAuth.currentUser;

export const googleLogin = async (): Promise<UserCredential> => {
    try {
        const result = await signInWithPopup(fbAuth, googleProvider);
        const token = GoogleAuthProvider.credentialFromResult(result);
        return result;
    } catch (err: any) {
        const credential = GoogleAuthProvider.credentialFromError(err);
        throw new Error(err.code);
    }
};

export const signOutAuth = async () => {
    try {
        const currentUser = getUsers();
        if (currentUser) {
            const result = await signOut(fbAuth);
        }
    } catch (err) {
        console.error(err);
    }
};

export const deleteAuth = async () => {
    try {
        const currentUser = getUsers();
        if (currentUser) {
            const result = deleteUser(currentUser);
        }
    } catch (err) {
        console.error(err);
    }
};

// **************************
export const checkExistUser = async (uid: string) => {
    try {
        const data = await getDocuments('data');
        const isExist = _.includes(Object.keys(data), uid);
        return isExist;
    } catch (err: any) {
        throw new Error(err.code);
    }
};
// 구글로그인 -> 계정 -> recoil에 박음 or firestore에

// 그래서 setDoc전에 uid id가진 doc있으면 set안하게 수정해야하잖어

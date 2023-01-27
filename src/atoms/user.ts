import { atom } from 'recoil';

type UserState = {
    displayName: string;
    photoURL: string;
    uid: string;
};

export const userState = atom<UserState>({
    key: '_user',
    default: {
        displayName: '',
        photoURL: '',
        uid: '',
    },
});

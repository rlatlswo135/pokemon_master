import { atom } from 'recoil';
import { v1 } from 'uuid';

type UserState = {
    displayName: string;
    photoURL: string;
    uid: string;
};

export const userState = atom<UserState>({
    key: `_user/${v1()}`,
    default: {
        displayName: '',
        photoURL: '',
        uid: '',
    },
});

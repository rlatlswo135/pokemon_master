import {
    getFirestore,
    WithFieldValue,
    collection,
    DocumentData,
    doc,
    updateDoc,
    setDoc,
    getDocs,
    getDoc,
    deleteDoc,
} from 'firebase/firestore';
import { app } from '@/firebase';

export const fbStore = getFirestore(app);
type Collection = 'data';

export const getDocuments = async (colName: Collection) => {
    try {
        const ref = collection(fbStore, colName);
        const result = await getDocs(ref);
        const returnData: any = {};
        result.forEach((item) => {
            returnData[item.id] = item.data();
        });
        return returnData;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.code);
    }
};

export const getDocument = async <T>(
    colName: Collection,
    docId: string
): Promise<T | undefined> => {
    try {
        const ref = doc(fbStore, colName, docId);
        const result = await getDoc(ref);
        return result.data() as T;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.code);
    }
};

export const setDocument = async (
    colName: Collection,
    docId: string,
    data: WithFieldValue<DocumentData>
) => {
    try {
        const ref = doc(fbStore, colName, docId);
        const result = await setDoc(ref, data);
        return result;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.code);
    }
};

export const updateDocument = async (
    colName: Collection,
    docId: string,
    data: WithFieldValue<DocumentData>
) => {
    try {
        const ref = doc(fbStore, colName, docId);
        const result = await updateDoc(ref, data);
        return result;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.code);
    }
};

export const deleteDocument = async (colName: Collection, docId: string) => {
    try {
        const ref = doc(fbStore, colName, docId);
        const result = await deleteDoc(ref);
        return result;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.code);
    }
};

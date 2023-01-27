import { collection, doc, DocumentData, onSnapshot } from 'firebase/firestore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { fbStore } from '@/firebase/store';

export const useCollectionState = <T>(
    colName: any,
    init: T[]
): [T[], Dispatch<SetStateAction<T[]>>] => {
    const [docs, setDocs] = useState<T[]>(init);
    const ref = collection(fbStore, colName);

    useEffect(() => {
        onSnapshot(ref, (snapshot) => {
            const result = snapshot.docs.map((item) => ({
                ...item.data(),
                docId: item.id,
            })) as T[];
            setDocs(result);
        });
    }, []);

    return [docs, setDocs];
};

export const useDocState = <T>(
    colName: any,
    docId: string,
    init: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [docData, setDocData] = useState<T>(init);

    if (!docId) {
        return [docData, setDocData];
    }

    const ref = doc(fbStore, colName, docId);

    useEffect(() => {
        onSnapshot(ref, (snapshot: DocumentData) => {
            setDocData(snapshot.data());
        });
    }, []);

    return [docData, setDocData];
};

/*
5분마다 저장 및 저장버튼 따로 두자

이유는 firestore로하면 코인얻을때마다 set 등 요청이 너무많이감
*/

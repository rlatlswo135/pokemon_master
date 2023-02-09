import React from 'react';
import Link from 'next/link';
import { Container } from '@components/common';

export const HowView = () => {
    return (
        <>
            {/* 가림막 */}
            <div className="w-full absolute top-0 h-[100%] opacity-60 z-50" />
            <Container>
                <div className="bg-sub w-full h-full flex justify-center items-center text-3xl flex-col">
                    <p className="font-bold">
                        상단 <span className="text-yellow-500">노란색</span>{' '}
                        버튼을 클릭하면 재화를 얻으며 확률적으로 큰 재화를
                        얻습니다.
                    </p>
                    <p className="mt-8 font-bold">
                        상단 store에서 빵을 뽑아보세요.
                    </p>
                    <p className="mt-8 font-bold">
                        그후 <span className="text-pink-400">분홍색</span>{' '}
                        가방버튼을 눌러 빵을 연뒤 pokepedia를 채워보세요.
                    </p>
                    <button
                        type="button"
                        className="absolute top-[80%] z-50 p-4 bg-gold rounded-2xl hover:bg-red-200"
                    >
                        <Link href="/">Go back</Link>
                    </button>
                </div>
            </Container>
        </>
    );
};

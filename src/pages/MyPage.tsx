/* eslint-disable global-require */
import React from 'react';

export const MyPage = () => {
    return (
        <div
            id="myPage"
            className="bg-stone-500/90 w-screen h-screen min-h-full min-w-full p-24"
        >
            <div className="w-full h-full flex">
                <section id="profile_img" className="h-full w-1/4 border-2">
                    <img
                        src={require('../assets/profile.png')}
                        className="w-full h-full"
                        alt="이미지를 불러올수 없습니다."
                    />
                </section>
                <section
                    id="profile"
                    className="border-2 border-red-200 w-full"
                >
                    모은숫자 확률 및 이름 등등 정보적기
                </section>
            </div>
        </div>
    );
};

/* eslint-disable global-require */
import React from 'react';
import { Container } from 'components/common/Container';

export const MyPage = () => {
    return (
        <Container className="py-60" color="bg-stone-500/90" id="myPage">
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
        </Container>
    );
};

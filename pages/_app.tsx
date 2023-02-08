/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MyBag, Save, Header } from '../src/components';
import '../global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>포켓몬 스티커</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
            <MyBag />
            <Save />
        </RecoilRoot>
    );
}

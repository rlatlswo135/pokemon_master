/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, Loading } from '@components/common';
import { PrivateRouter, MyBag, Save, Header } from '@components';
import '../global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const noPrivate = useMemo(() => ['/', '/how'], []);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };

        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);
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
            {loading ? (
                <Container>
                    <Loading />
                </Container>
            ) : noPrivate.includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <PrivateRouter>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </PrivateRouter>
                    <MyBag />
                    <Save />
                </>
            )}
        </RecoilRoot>
    );
}

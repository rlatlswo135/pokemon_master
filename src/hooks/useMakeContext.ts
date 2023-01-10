import React, { Context, useContext } from 'react';

export const useMakeContext = <T>(context: Context<T>): T => {
    const contextDefined = useContext(context);

    if (!contextDefined) {
        throw new Error('context must within Provider');
    }
    return contextDefined;
};

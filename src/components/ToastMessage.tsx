'use client'
import React, { useEffect, useState } from 'react';

export enum ToastPosition {
    Bottom,
    Top,
    TopLeft,
    BottomLef
}

type ToastProps =
    {
        message: string;
        position?: ToastPosition;
    }

const ToastMessage = ({ message, position = ToastPosition.Top }: ToastProps) => {
    return (
        <>
            {position == ToastPosition.Top ?
                (
                    <div className={`fixed flex bg-rust py-2 px-4 rounded-md text-white text-center top-4 right-4 gap-4 z-50 toast show`}>
                        <p>{message}</p>
                    </div>
                ) : (<></>)}
            {position == ToastPosition.Bottom ?
                (
                    <div className={`fixed flex bg-rust py-2 px-4 rounded-md text-white text-center bottom-4 right-4 gap-4 z-50 toast show`}>
                        <p>{message}</p>
                    </div>
                ) : (<></>)}
        </>
    );
};

export default ToastMessage;

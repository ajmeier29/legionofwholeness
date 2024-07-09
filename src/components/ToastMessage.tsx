'use client'
import React, { useEffect, useState } from 'react';

type ToastProps =
    {
        message: string;
    }

const ToastMessage = ({ message }: ToastProps) => {
    return (
        <>
            <div className={`fixed flex bg-rust py-2 px-4 rounded-md text-white text-center top-4 right-4 gap-4 z-50 toast show`}>
                <p>{message}</p>
            </div>
        </>
    );
};

export default ToastMessage;

'use client'
import React, { createContext, useState, ReactNode } from 'react';

// Define the context value type
interface SubscribeContextType {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubscribeContext = createContext<SubscribeContextType>({
    showModal: false,
    setShowModal: () => { },
});

interface SubscribeProviderProps {
    children: ReactNode; // Use ReactNode type for children prop
}

const SubscribeProvider: React.FC<SubscribeProviderProps> = ({ children }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <SubscribeContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </SubscribeContext.Provider>
    );
};

export { SubscribeContext, SubscribeProvider };

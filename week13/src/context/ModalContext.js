import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
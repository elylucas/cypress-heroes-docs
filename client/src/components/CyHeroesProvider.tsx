import React, { useState } from 'react';
import { User } from '../models';
import Modal from './Modal';

interface ModalContext {
  modal?: React.ReactNode;
  setModal: (modal: React.ReactNode) => void;
  user?: User;
  setUser: (user?: User) => void;
}

export const CyHeroesContext = React.createContext<ModalContext>({} as any);

interface CyHeroesProviderProps extends React.PropsWithChildren {}

const CyHerosProvider: React.FC<CyHeroesProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<React.ReactNode>();
  const [user, setUser] = useState<User>();


  return (
    <CyHeroesContext.Provider value={{ modal, setModal, user, setUser }}>
      {children}
      <Modal
        component={modal}
        open={!!modal}
        onClose={() => setModal(undefined)}
      />
    </CyHeroesContext.Provider>
  );
};

export default CyHerosProvider;

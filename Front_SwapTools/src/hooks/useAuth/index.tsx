// useAuth.tsx
import { useContext } from 'react';
import { AuthContext } from './provider';

export const useAuth = () => {
    return useContext(AuthContext);
};
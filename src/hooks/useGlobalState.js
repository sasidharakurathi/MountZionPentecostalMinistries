// src/hooks/useGlobalState.js
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

// 3. Create a Custom Hook to consume the Context
const useGlobalState = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider');
    }

    return context;
};

export default useGlobalState;

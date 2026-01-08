import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load auth state from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('userData');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUserData(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Login function
    const login = (email, password) => {
        // TODO: Replace with actual API call
        // For now, this is a mock implementation
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockToken = 'mock_token_' + Date.now();
                    const mockUser = {
                        email,
                        name: email.split('@')[0],
                        id: 'user_' + Date.now()
                    };

                    setToken(mockToken);
                    setUserData(mockUser);
                    localStorage.setItem('authToken', mockToken);
                    localStorage.setItem('userData', JSON.stringify(mockUser));

                    resolve({ success: true, user: mockUser });
                } else {
                    reject({ success: false, message: 'Invalid credentials' });
                }
            }, 1000); // Simulate network delay
        });
    };

    // Logout function
    const logout = () => {
        setToken(null);
        setUserData(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
    };

    // Register function
    const register = (name, email, password) => {
        // TODO: Replace with actual API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (name && email && password) {
                    const mockToken = 'mock_token_' + Date.now();
                    const mockUser = {
                        email,
                        name,
                        id: 'user_' + Date.now()
                    };

                    setToken(mockToken);
                    setUserData(mockUser);
                    localStorage.setItem('authToken', mockToken);
                    localStorage.setItem('userData', JSON.stringify(mockUser));

                    resolve({ success: true, user: mockUser });
                } else {
                    reject({ success: false, message: 'All fields are required' });
                }
            }, 1000);
        });
    };

    const value = {
        token,
        userData,
        loading,
        isAuthenticated: !!token,
        login,
        logout,
        register
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

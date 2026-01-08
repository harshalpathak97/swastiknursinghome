import { createContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        if (!isSupabaseConfigured) {
            console.warn('⚠️ Supabase not configured - authentication disabled');
            setLoading(false);
            return;
        }

        checkUser();

        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    // Check if user is logged in
    const checkUser = async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
        } catch (error) {
            console.error('Error checking user:', error.message);
        } finally {
            setLoading(false);
        }
    };

    // Sign up function
    const register = async (name, email, password) => {
        if (!isSupabaseConfigured) {
            throw { success: false, message: 'Authentication is not configured. Please contact support.' };
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name: name,
                    }
                }
            });

            if (error) throw error;

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Registration error:', error.message);
            throw { success: false, message: error.message };
        }
    };

    // Login function
    const login = async (email, password) => {
        if (!isSupabaseConfigured) {
            throw { success: false, message: 'Authentication is not configured. Please contact support.' };
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Login error:', error.message);
            throw { success: false, message: error.message };
        }
    };

    // Logout function
    const logout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    // Login with Google
    const loginWithGoogle = async () => {
        if (!isSupabaseConfigured) {
            throw { success: false, message: 'Authentication is not configured. Please contact support.' };
        }

        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.hostname === 'localhost' 
            ? `${window.location.origin}/`
            : 'https://swastiknursinghome.org/'
                }
            });

            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('Google login error:', error.message);
            throw { success: false, message: error.message };
        }
    };

    const value = {
        user,
        userData: user ? {
            email: user.email,
            name: user.user_metadata?.name || user.user_metadata?.full_name || user.email?.split('@')[0],
            id: user.id
        } : null,
        loading,
        isAuthenticated: !!user,
        token: user ? 'supabase-auth' : null,
        login,
        logout,
        register,
        loginWithGoogle,
        isSupabaseConfigured
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

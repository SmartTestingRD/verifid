import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { pt } from '../locales/pt';
import { fr } from '../locales/fr';
import { el } from '../locales/el';
import { tr } from '../locales/tr';

const LanguageContext = createContext();

const translations = { en, es, pt, fr, el, tr };

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default english

    const t = (key) => {
        return translations[language][key] || key;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

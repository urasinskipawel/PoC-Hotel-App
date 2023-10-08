import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RoleContextProps {
	userRole: string | null;
	setRole: (role: string) => void;
}

interface RoleProviderProps {
	children: ReactNode;
}

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
	const [userRole, setUserRole] = useState<string | null>(null);

	const setRole = (role: string) => {
		setUserRole(role);
	};

	return <RoleContext.Provider value={{ userRole, setRole }}>{children}</RoleContext.Provider>;
};

export const useRole = (): RoleContextProps => {
	const context = useContext(RoleContext);
	if (!context) throw new Error('useRole must be used within an RoleProvider');
	return context;
};

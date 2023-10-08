import React from 'react';

interface currentUserRole {
	role: string;
	access: string[];
}

interface RoleProviderProps {
	children: React.ReactNode;
}

const currentRole = {
	role: '',
	access: [],
};

export const RoleContext = React.createContext<currentUserRole | any>(currentRole);

export function RoleProvider({ children }: RoleProviderProps) {
	return <RoleContext.Provider value={currentRole}>{children}</RoleContext.Provider>;
}

import React, { SetStateAction, useState } from 'react';

interface currentUserRole {
    role?: string
}

interface RoleProviderProps {
    children: React.ReactNode
}

const currentRole = {
  role: 'boss'
}

export const RoleContext = React.createContext<currentUserRole | any>(currentRole)

export function RoleProvider({ children } : RoleProviderProps ) {

  return (
    <RoleContext.Provider value={currentRole}>
        {children}
    </RoleContext.Provider>
  )
}
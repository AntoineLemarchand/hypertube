'use client';

import { redirect } from 'next/navigation';
import React from 'react'

export function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const isAuthenticated = true

    if (!isAuthenticated) {
      redirect('/login')
    }

    return <Component {...props} />
  }
}


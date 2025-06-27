"use client";

// import { ReactNode } from "react";
import { signOut } from 'aws-amplify/auth';

interface ButtonProps {
  className?: string;
}

export const SignOutButton = ({ className }: ButtonProps) => {

  const onSignOut = async () => {
    // alert("Signing out...");
    await signOut(); // This will trigger the sign-out process
    // Add your sign-out logic here, e.g., using Amplify Auth}
  }

  return (
    <button
      className={className}
      onClick={onSignOut}
    >
      Sign Out
    </button>
  );
};

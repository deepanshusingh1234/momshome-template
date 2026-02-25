"use client";

import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

export default function Login() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <LoginModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSuccess={() => {
                console.log("Login successful");
            }}
        />
    );
}
'use client';

import dynamic from "next/dynamic";

// Dynamically import the FloatingScooter to avoid SSR issues
const FloatingScooter = dynamic(() => import("@/components/floating-scooter"), { ssr: false });

export default function ScooterAnimationWrapper() {
    return (
        <div role="complementary" aria-label="Διαδραστικό παιχνίδι ενημέρωσης">
            <FloatingScooter />
        </div>
    );
} 
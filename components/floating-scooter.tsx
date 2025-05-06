'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import QRCode from 'react-qr-code';

// Type for each scooter
type Scooter = {
    id: string;
    position: number;
    direction: 'ltr' | 'rtl';
    height: number;
    speed: number;
    lastTimestamp: number;
};

// Type for score animation
type ScoreAnimation = {
    id: string;
    position: number;
    height: number;
    value: number;
    opacity: number;
    scale: number;
    startTime: number;
};

// Update this URL with your actual WhatsApp group link
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ElYTWOD8jWp8rKkdCZDNAr";

// Constants for animation
const BASE_SPEED = 50; // pixels per second
const SCORE_ANIMATION_DURATION = 1500; // ms

export default function FloatingScooter() {
    const [scooters, setScooters] = useState<Scooter[]>([]);
    const [scoreAnimations, setScoreAnimations] = useState<ScoreAnimation[]>([]);
    const [removedCount, setRemovedCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [gameActive, setGameActive] = useState(true);
    const [animationsDisabled, setAnimationsDisabled] = useState(false);

    // Ref to store window width for calculations
    const windowWidth = useRef(typeof window !== 'undefined' ? window.innerWidth : 1000);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            windowWidth.current = window.innerWidth;
        };

        // Check for user's preference for reduced motion
        const prefersReducedMotion = typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setAnimationsDisabled(true);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handler to remove a scooter when clicked or activated via keyboard
    const handleScooterActivation = (id: string, position: number, height: number) => {
        // Remove the scooter
        setScooters(prevScooters => prevScooters.filter(scooter => scooter.id !== id));

        // Increment the removed count
        setRemovedCount(prev => {
            const newCount = prev + 1;

            // Create score animation
            const newAnimation: ScoreAnimation = {
                id: Math.random().toString(36).substring(2, 9),
                position,
                height,
                value: newCount,
                opacity: 1,
                scale: 1,
                startTime: performance.now()
            };
            setScoreAnimations(prev => [...prev, newAnimation]);

            // Announce the score for screen readers
            announceForScreenReader(`Πατίνι απομακρύνθηκε. Βαθμολογία: ${newCount} από 10`);

            // Check if we reached 10 removed scooters
            if (newCount === 10) {
                setShowPopup(true);
                setGameActive(false); // Stop the game
                // Clear any remaining scooters
                setScooters([]);
                // Announce completion for screen readers
                announceForScreenReader('Συγχαρητήρια! Έχετε απομακρύνει 10 πατίνια. Ανοίγει παράθυρο με το σύνδεσμο για το WhatsApp Group.');
            }

            return newCount;
        });
    };

    // Screen reader announcement function
    const announceForScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.setAttribute('role', 'status');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);

        // Remove after announcement
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };

    // Toggle animations function
    const toggleAnimations = () => {
        setAnimationsDisabled(!animationsDisabled);
        if (animationsDisabled) {
            setGameActive(true);
            announceForScreenReader('Οι κινούμενες εικόνες ενεργοποιήθηκαν');
        } else {
            setGameActive(false);
            setScooters([]);
            announceForScreenReader('Οι κινούμενες εικόνες απενεργοποιήθηκαν');
        }
    };

    useEffect(() => {
        // Don't run animations if disabled
        if (animationsDisabled) {
            setScooters([]);
            return;
        }

        // Animation frame ID for cleanup
        let animationId: number;
        let lastAddTime = 0;

        // Function to add a new scooter
        const addScooter = (timestamp: number) => {
            // Don't add new scooters if game is not active
            if (!gameActive) return;

            const now = timestamp || performance.now();

            // Check if enough time has passed to add a new scooter
            if (now - lastAddTime > (Math.random() * 1600) + 400) {
                const direction = Math.random() > 0.5 ? 'ltr' : 'rtl';
                const height = Math.floor(Math.random() * 40) + 60; // Between 60-100% of screen height (bottom 40%)
                const speedVariation = ((Math.random() * 1) + 1.5); // Random speed multiplier

                const newScooter: Scooter = {
                    id: Math.random().toString(36).substring(2, 9), // Generate a random ID
                    position: direction === 'ltr' ? -10 : 110, // Start position based on direction (percentage)
                    direction,
                    height,
                    speed: BASE_SPEED * speedVariation,
                    lastTimestamp: now,
                };

                setScooters(prev => [...prev, newScooter]);
                lastAddTime = now;
            }
        };

        // Animation function to move all scooters
        const animateScooters = (timestamp: number) => {
            // Add new scooters based on time
            addScooter(timestamp);

            // Animate score numbers
            setScoreAnimations(prev =>
                prev
                    .map(anim => {
                        const elapsed = timestamp - anim.startTime;
                        const progress = Math.min(elapsed / SCORE_ANIMATION_DURATION, 1);

                        return {
                            ...anim,
                            opacity: 1 - progress,
                            scale: 1 - (progress * 0.5),
                            height: anim.height - (progress * 15) // Move upward slightly
                        };
                    })
                    // Remove completed animations
                    .filter(anim => timestamp - anim.startTime < SCORE_ANIMATION_DURATION)
            );

            // Move existing scooters
            setScooters(prevScooters =>
                prevScooters
                    .map(scooter => {
                        // Calculate elapsed time since last update
                        const deltaTime = (timestamp - scooter.lastTimestamp) / 1000; // in seconds

                        // Calculate new position based on constant speed in pixels, converted to percentage
                        const pixelsToMove = scooter.speed * deltaTime;
                        const percentageToMove = (pixelsToMove / windowWidth.current) * 100;

                        // Apply movement based on direction
                        const step = scooter.direction === 'ltr' ? percentageToMove : -percentageToMove;

                        return {
                            ...scooter,
                            position: scooter.position + step,
                            lastTimestamp: timestamp
                        };
                    })
                    // Filter out scooters that have moved off screen
                    .filter(scooter => {
                        if (scooter.direction === 'ltr') {
                            return scooter.position <= 110;
                        } else {
                            return scooter.position >= -10;
                        }
                    })
            );

            animationId = requestAnimationFrame(animateScooters);
        };

        // Start the animation
        animationId = requestAnimationFrame(animateScooters);

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [gameActive, animationsDisabled]); // Add animationsDisabled as a dependency

    // If animations are disabled, provide alternative method to complete the game
    if (animationsDisabled && !showPopup) {
        return (
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4" role="region" aria-label="Μικροπαιχνίδι πατινιών">
                <div className="bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-xs">
                    <p className="mb-2">Κινούμενα πατίνια: {removedCount}/10</p>
                    <button
                        onClick={() => handleScooterActivation('static', 50, 70)}
                        className="bg-yellow-500 text-black p-2 rounded mr-2 focus:outline-yellow-300"
                        aria-label="Πάτησε για να απομακρύνεις ένα πατίνι"
                    >
                        Απομάκρυνε πατίνι
                    </button>
                    <button
                        onClick={toggleAnimations}
                        className="bg-blue-500 text-white p-2 rounded focus:outline-yellow-300"
                        aria-label="Ενεργοποίηση κινούμενων εικόνων"
                    >
                        Ενεργοποίηση animations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Animations toggle button - always visible */}
            <button
                onClick={toggleAnimations}
                className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-lg focus:outline-yellow-300"
                aria-label={animationsDisabled ? "Ενεργοποίηση κινούμενων εικόνων" : "Απενεργοποίηση κινούμενων εικόνων"}
            >
                {animationsDisabled ? "Ενεργοποίηση animations" : "Απενεργοποίηση animations"}
            </button>

            {/* Screen reader only status message */}
            <div className="sr-only" role="status" aria-live="polite">
                {removedCount > 0 ? `Έχετε απομακρύνει ${removedCount} από 10 πατίνια` : ''}
            </div>

            {/* Floating scooters - accessible with keyboard and touch */}
            {scooters.map(scooter => (
                <div
                    key={scooter.id}
                    className="fixed z-50 cursor-pointer"
                    style={{
                        left: `${scooter.position}vw`,
                        top: `${scooter.height}vh`,
                        transform: scooter.direction === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)',
                    }}
                    onClick={() => handleScooterActivation(scooter.id, scooter.position, scooter.height)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleScooterActivation(scooter.id, scooter.position, scooter.height);
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Πατίνι. Πάτησε για να το απομακρύνεις"
                >
                    <Image
                        src="/lime.png"
                        alt="Πατίνι"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            ))}

            {/* Score animations - hidden from screen readers */}
            {scoreAnimations.map(anim => (
                <div
                    key={anim.id}
                    className="fixed z-50 pointer-events-none font-bold text-yellow-400"
                    style={{
                        left: `${anim.position}vw`,
                        top: `${anim.height}vh`,
                        opacity: anim.opacity,
                        transform: `scale(${anim.scale})`,
                        fontSize: '2rem',
                        textShadow: '0 0 5px rgba(0,0,0,0.8)',
                        transition: 'opacity 0.1s, transform 0.1s'
                    }}
                    aria-hidden="true"
                >
                    {anim.value}
                </div>
            ))}

            {/* Popup that appears when 10 scooters are removed */}
            {showPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="popup-heading"
                >
                    <div className="bg-white text-green-800 p-8 rounded-lg max-w-md mx-4 text-center">
                        <h2
                            id="popup-heading"
                            className="text-xl font-bold mb-4"
                        >
                            Συγχαρητήρια, έδιωξες 10 πατίνια και βρήκες το WhatsApp Group μας. Μπες πατώντας εδώ:
                        </h2>

                        <div className="flex flex-col gap-4 items-center justify-center">
                            <a
                                href={WHATSAPP_GROUP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition focus:outline-yellow-300"
                                aria-label="Μπες στο WhatsApp Group"
                            >
                                Μπες στο group
                            </a>

                            <div className="text-lg font-medium mt-2">ή σκανάροντας το QR</div>

                            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200">
                                <QRCode
                                    value={WHATSAPP_GROUP_URL}
                                    size={150}
                                    className="mx-auto"
                                    aria-label="QR code για το WhatsApp Group"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="block w-full text-gray-600 mt-6 hover:text-gray-800 focus:outline-yellow-300"
                            aria-label="Κλείσιμο παραθύρου"
                        >
                            Κλείσιμο
                        </button>
                    </div>
                </div>
            )}
        </>
    );
} 
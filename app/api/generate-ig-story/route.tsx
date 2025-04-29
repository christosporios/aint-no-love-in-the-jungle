import React from "react"
import { type NextRequest, NextResponse } from "next/server"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const titleLine1 = searchParams.get("titleLine1") || "Δεν υπάρχει αγάπη"
        const titleLine2 = searchParams.get("titleLine2") || "στη ζούγκλα"
        const subtitle = searchParams.get("subtitle") || "Προστασία του δημόσιου χώρου της Αθήνας"
        const url = searchParams.get("url") || "aintnoloveinthejungle.gr"

        // Load the background image
        const imageData = await fetch(new URL("/public/athens-jungle.png", import.meta.url)).then((res) =>
            res.arrayBuffer(),
        )

        // Convert to base64
        const base64Image = `data:image/png;base64,${Buffer.from(imageData).toString("base64")}`

        // Generate the image
        return new ImageResponse(
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    height: "1920px",
                    backgroundColor: "#166534",
                    position: "relative",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                {/* Container for image and fade effect */}
                <div style={{
                    width: "100%",
                    height: "50%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "-4px", // Remove any gap
                }}>
                    <img
                        src={base64Image}
                        style={{
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                    {/* Gradient overlay at bottom of image */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "30%",
                            background: "linear-gradient(to bottom, transparent, #166534)",
                            zIndex: 1,
                        }}
                    />
                </div>

                {/* Text section with green background */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        padding: "40px 40px 80px 40px",
                        backgroundColor: "#166534",
                        textAlign: "center",
                        position: "relative",
                        flex: 1,
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "30px",
                    }}>
                        <span
                            style={{
                                fontSize: "80px",
                                fontWeight: "bold",
                                color: "#facc15",
                                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                                maxWidth: "900px",
                                lineHeight: "1.1",
                            }}
                        >
                            {titleLine1}
                        </span>
                        <span
                            style={{
                                fontSize: "80px",
                                fontWeight: "bold",
                                color: "#facc15",
                                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                                maxWidth: "900px",
                                lineHeight: "1.1",
                            }}
                        >
                            {titleLine2}
                        </span>
                    </div>
                    <h2
                        style={{
                            fontSize: "40px",
                            color: "white",
                            maxWidth: "800px",
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        {subtitle}
                    </h2>

                    {/* URL at the bottom */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "30px",
                            fontSize: "36px",
                            fontWeight: "bold",
                            color: "white",
                            opacity: "0.9",
                        }}
                    >
                        {url}
                    </div>
                </div>
            </div>,
            {
                width: 1080,
                height: 1920,
            },
        )
    } catch (error) {
        console.error(error)
        return new NextResponse("Error generating image", { status: 500 })
    }
} 
import { type NextRequest, NextResponse } from "next/server"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title") || "Δεν Υπάρχει Αγάπη στη Ζούγκλα"
    const subtitle = searchParams.get("subtitle") || "Προστασία του δημόσιου χώρου της Αθήνας"

    // Load the background image
    const imageData = await fetch(new URL("/public/athens-jungle.png", import.meta.url)).then((res) =>
      res.arrayBuffer(),
    )

    // Generate the image
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "1080px",
          height: "1920px",
          backgroundColor: "#166534",
          backgroundImage: `url(data:image/png;base64,${Buffer.from(imageData).toString("base64")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, transparent 30%, rgba(22, 101, 52, 0.9) 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "#facc15",
              marginBottom: "20px",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
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

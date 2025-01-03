import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers)
    const theme = request.cookies.get("theme")

    console.log(requestHeaders.get("Authorization"));
    console.log(theme)

    return new Response('<h1>Profile Apis</h1>', {
        headers: {
            "Content-type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}
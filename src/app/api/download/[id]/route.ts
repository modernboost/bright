import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
	//stream image or video from server
	console.log("streaming startted");

	//stream back to front
	// response.headers.set("content-type", "image/png");

	const responseStream = await axios.get(
		"http://localhost:5186/api/Assets/stream/" + params.id,
		{
			responseType: "stream",
		}
	);
	console.log(responseStream.data);
	const response = new NextResponse(responseStream.data);
	// response.headers.set(
	// 	"Cache-Control",
	// 	"public, max-age=840000000, s-maxage=840000000, immutable"
	// );

	// response.headers.set("Accept-Ranges", "bytes");

	return response;
}

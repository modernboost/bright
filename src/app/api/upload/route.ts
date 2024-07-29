import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const form = await req.formData();

	const response = await axios
		.post("http://localhost:5186/api/Assets/upload?userId=1", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.catch((error) => {
			console.log("Error: ", error);
		});
	return NextResponse.json({ id: response.data.id });
}

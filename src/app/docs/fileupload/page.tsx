"use client";
import FileUpload from "@/components/FileUpload/FileUpload";
import Player from "@/components/Player/Player";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Test() {
	const [previewRef, setPreviewRef] = useState(
		<Player srcType={"auto"} src={"/api/download/100"} />
	);
	const [transport, setTransport] = useState("dash");
	let CancelToken = axios.CancelToken;

	let source = CancelToken.source();
	console.log("rerendering");

	async function fileUpload({ files, setUploadProgress }) {
		CancelToken = axios.CancelToken;
		source = CancelToken.source();
		console.log({ files });
		const formData = new FormData();

		for (const file of files) {
			formData.append("file", file);
		}

		try {
			setUploadProgress(1);
			const response = await axios.post("/api/upload", formData, {
				cancelToken: source.token,
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress(progressEvent) {
					setUploadProgress(progressEvent.progress * 100);
				},
			});
			setUploadProgress(100);
			setPreviewRef(
				<Player srcType={"auto"} src={"/api/download/" + response.data.id} />
			);
			return response.data.id;
		} catch (error) {
			console.log("Error:", error);
		}
		return () => {
			if (source)
				source.cancel("Request canceled because component unmounted.");
		};
	}
	function cancelUpload() {
		if (source) source.cancel("Request canceled because component unmounted.");
	}
	function deletFile(uploadedUrl) {
		//ToDo
	}

	// setPreviewRef(<Player srcType={"auto"} src={"/api/download/100"} />);
	return (
		<FileUpload
		    name="content"
			defaultFile='100'
			PreviewComponenet={previewRef}
			onDelete={deletFile}
			onCancel={cancelUpload}
			onFileSelect={fileUpload}
		/>
	);
}

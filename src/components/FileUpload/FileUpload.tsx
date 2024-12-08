"use client";
import { ReactNode, useState } from "react";
import styles from "./FileUpload.module.css";
import { Button } from "../index.ts";

export default function FileUpload({
	onFileSelect,
	multiple = false,
	name,
	accept,
	onCancel,
	defaultFile,
	onDelete,
	PreviewComponenet,
	accessType = "public",
	accessName = "contentType",
}: {
	defaultFile?: string;
	multiple?: boolean;
	accept?: string;
	PreviewComponenet: ReactNode;
	onFileSelect: (event: Event) => {};
	onCancel: () => {};
	onDelete: () => {};
	name: string;
	accessType?: "public" | "private";
	accessName?: string;
}) {
	const [uploading, setUploading] = useState<boolean>(false);
	const [uploadedUrl, setUploadedUrl] = useState<string | undefined>(
		defaultFile
	);
	const [size, setSize] = useState(undefined);
	const [duration, setDuration] = useState(undefined);
	const [uploadProgress, setUploadProgress] = useState<Number>(0);

	async function fileChange(event) {
		setUploadedUrl("");
		setUploading(true);

		if (onFileSelect) {
			try {
				if (event.target.files[0]?.type?.startsWith("video")) {
					setDuration(getVideoDuration(event.target.files[0]));
				}
				setSize(event.target.files[0]);
				const temp = await onFileSelect({
					files: event.target.files,
					accessType,
					accessName,
					setUploadProgress,
				});
				setUploadedUrl(temp);
			} catch (error) {
				reset();
			}
		}

		setUploading(false);
	}
	async function deleteFile() {
		await onDelete(uploadedUrl);
		reset();
	}
	async function cancelUpload() {
		await onCancel();
		reset();
	}

	function reset() {
		setUploadedUrl(undefined);
		setUploadProgress(0);
		setUploading(false);
	}
	function getVideoDuration(file) {
		let duration = 0;
		const video = document.createElement("video"); // Create a video element
		const videoURL = URL.createObjectURL(file); // Create a temporary object URL

		video.src = videoURL; // Set the video source
		video.preload = "metadata"; // Only load metadata
		// When metadata is loaded, retrieve duration
		video.addEventListener("loadedmetadata", () => {
			duration = video.duration; // Get the duration in seconds
			URL.revokeObjectURL(videoURL);
		});
		return duration;
	}

	return (
		<div className={styles.fileUpload}>
			{/* <input type='text' hidden readOnly value={access} name={accessName} /> */}
			<input
				type='text'
				hidden
				readOnly
				value={uploadedUrl ?? ""}
				name={name}
			/>
			<input type='text' hidden readOnly value={size ?? ""} name='file_size' />
			<input
				type='text'
				hidden
				readOnly
				value={duration ?? ""}
				name='video_duration'
			/>
			<Preview
				PreviewComponenet={PreviewComponenet}
				multiple={multiple}
				uploadedUrl={uploadedUrl}
			/>
			<Progress uploadProgress={uploadProgress} />

			<Uploading uploading={uploading} />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "0.5em",
				}}
			>
				{!uploading && (
					<Button
						type='button'
						style={{
							position: "relative",
						}}
					>
						{uploadedUrl ? "Change" : "Select a File"}
						<input
							style={{
								width: "100%",
								height: "100%",
								position: "absolute",
								top: 0,
								left: 0,
								opacity: "0",
							}}
							multiple={multiple}
							type='file'
							accept={accept}
							onChange={fileChange}
						/>
					</Button>
				)}
				{uploadedUrl && (
					<Button type='button' onClick={deleteFile}>
						Delete
					</Button>
				)}
				{uploading && (
					<Button type='button' onClick={cancelUpload}>
						Cancel
					</Button>
				)}
			</div>
		</div>
	);
}

function Preview({
	multiple,
	uploadedUrl,
	PreviewComponenet,
}: {
	multiple: boolean;
	uploadedUrl: null | string | string[];
	PreviewComponenet: ReactNode;
}) {
	if (!uploadedUrl) return;
	if (PreviewComponenet)
		return (
			<div className='previrew' style={{ width: "100%" }}>
				{PreviewComponenet}
			</div>
		);

	let items = null;

	if (multiple) {
		items = uploadedUrl?.map((url, i) => <img key={i} src={url} alt='alt' />);
	} else {
		items = <img src={uploadedUrl.toString()} alt='alt' />;
	}

	return <div>{items}</div>;
}

function Uploading({ uploading }: { uploading: boolean }) {
	console.log({ uploading });
	if (!uploading) return;
	return <div>Uploading</div>;
}

function Progress({ uploadProgress }: { uploadProgress: Number }) {
	if (uploadProgress == 100) return;
	if (uploadProgress == 0) return;

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "1.5rem",
				padding: "0",
				background: "#ddd",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					transition: "width ease-in-out 1000ms",
					position: "absolute",
					left: 0,
					width: `${uploadProgress}%`,
					margin: "0",
					height: "100%",
					background: "#1c82ee",
				}}
			/>
			<span
				style={{
					position: "absolute",
					fontSize: "small",
				}}
			>
				{Math.round(uploadProgress)}%
			</span>
		</div>
	);
}

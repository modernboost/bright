"use client";
import { ReactNode, useState, useEffect } from "react";
import styles from "./FileUpload.module.css";
import { Button } from "../index.ts";
import IconTrash from "./IconTrash";
import IconReplace from "./IconReplace";
import IconAdd from "./IconAdd";
import IconCancel from "./IconCancel";

export default function FileUpload({
	browsLabel,
	removeLabel,
	cancelLabel,
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
	browsLabel?: string;
	removeLabel?: string;
	cancelLabel?: string;
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
	const [fileName, setFileName] = useState(undefined);
	const [uploadProgress, setUploadProgress] = useState<Number>(0);

	async function fileChange(event) {
		setUploadedUrl("");
		setUploading(true);

		if (onFileSelect) {
			try {
				if (event.target.files[0]?.type?.startsWith("video") || event.target.files[0]?.type?.startsWith("audio")) {
					setVideoDuration(event.target.files[0]);
				}
				setSize(event.target.files[0]?.size);
				setFileName(event.target.files[0]?.name);
				const response = await onFileSelect({
					files: event.target.files,
					accessType,
					accessName,
					setUploadProgress,
				});
				setUploadedUrl(response);
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
	function setVideoDuration(file) {
		let duration = 0;
		const video = document.createElement("video"); // Create a video element
		const videoURL = URL.createObjectURL(file); // Create a temporary object URL

		video.src = videoURL; // Set the video source
		video.preload = "metadata"; // Only load metadata
		// When metadata is loaded, retrieve duration
		video.addEventListener("loadedmetadata", () => {
			setDuration(video.duration); // Get the duration in seconds
			URL.revokeObjectURL(videoURL);
		});
	}
	useEffect(() => {
		console.log({ duration });
	}, [duration]);

	return (
		<div className={styles.fileUpload}>
			{/* <input type='text' hidden readOnly value={access} name={accessName} /> */}
			<input hidden readOnly value={uploadedUrl ?? ""} name={name} />
			<input type='text' hidden readOnly value={size ?? ""} name='file_size' />
			<input hidden readOnly value={duration ?? ""} name='file_length' />
			<input hidden readOnly value={fileName ?? ""} name='file_name' />
			<Preview
				PreviewComponenet={PreviewComponenet}
				multiple={multiple}
				uploadedUrl={uploadedUrl}
			/>
			{uploading && <Progress uploadProgress={uploadProgress} />}

			<div className='flex justify-center items-center gap-2 text-lg font-bold'>
				{!uploading && (
					<>
						<Button
							className='bg-sky-500 p-2 rounded-md  hover:bg-sky-700 text-white relative'
							type='button'
							color='primary'
						>
							{/* {uploadedUrl ? (
								<IconReplace />
							) : (
								<div className='flex gap-1'>
									<IconAdd />
									<div>Browse</div>
								</div>
							)} */}
							<div className='flex gap-1'>
								<IconAdd />
								<div className='text-sm'>
									{browsLabel ? browsLabel : "Browse"}
								</div>
							</div>
							<input
								className='absolute w-full h-full top-0 left-0 opacity-0 '
								multiple={multiple}
								type='file'
								accept={accept}
								onChange={fileChange}
							/>
						</Button>
						{uploadedUrl && (
							<Button
								className=' bg-sky-500 p-2 rounded-md hover:bg-sky-700 hover:text-red-500 text-white'
								type='button'
								onClick={deleteFile}
							>
								<div className='flex gap-1 text-sm'>
									<IconTrash />
									<div className='text-sm'>
										{removeLabel ? removeLabel : "Remove"}
									</div>
								</div>
							</Button>
						)}
					</>
				)}

				{uploading && (
					<Button
						type='button'
						className='bg-sky-500 p-2 rounded-md hover:bg-sky-700 hover:text-red-500 text-white'
						onClick={cancelUpload}
					>
						<div className='flex gap-1'>
							<IconCancel />
							<div className='text-sm'>
								{cancelLabel ? cancelLabel : "Cancel"}
							</div>
						</div>
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
		return <div className='previrew w-full'>{PreviewComponenet}</div>;

	let items = null;

	if (multiple) {
		items = uploadedUrl?.map((url, i) => <img key={i} src={url} alt='alt' />);
	} else {
		items = <img src={uploadedUrl.toString()} alt='alt' />;
	}

	return <div>{items}</div>;
}

function Progress({ uploadProgress }: { uploadProgress: Number }) {
	if (uploadProgress == 100) return "Upload completed, waiting...";
	if (uploadProgress == 0) "Starting upload";

	return (
		<div className='relative w-full h-5 p-0 bg-[#ddd] flex items-center justify-center'>
			<div
				className='absolute left-0 m-0 h-full bg-sky-500'
				style={{
					width: `${uploadProgress}%`,
				}}
			/>
			<span className='absolute font-light'>{Math.round(uploadProgress)}%</span>
		</div>
	);
}

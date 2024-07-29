import { ReactNode, useState } from "react";

export default function FileUpload({
	onFileSelect,
	multiple = false,
	type,
	name,
	onCancel,
	defaultFile,
	onDelete,
	PreviewComponenet,
}: {
	defaultFile?: string;
	multiple?: boolean;
	PreviewComponenet: ReactNode;
	onFileSelect: (event: Event) => {};
	onCancel: () => {};
	onDelete: () => {};
	type: string;
	name: string;
}) {
	const [uploading, setUploading] = useState<boolean>(false);
	const [uploadedUrl, setUploadedUrl] = useState<string | undefined>(
		defaultFile
	);
	const [uploadProgress, setUploadProgress] = useState<Number>(0);

	async function fileChange(event) {
		setUploadedUrl("");
		setUploading(true);

		if (onFileSelect) {
			try {
				const temp = await onFileSelect({
					files: event.target.files,
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

	return (
		<div
			className='border rounded-md'
			style={{
				position: "relative",
				justifyContent: "center",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				padding: "0.1em",
				gap: "0.5em",
			}}
		>
			<input type='text' readOnly value={uploadedUrl ?? ""} hidden />
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
					<button
						className='hover:underline'
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
							className='text'
							multiple={multiple}
							type='file'
							accept='jpg,png'
							onChange={fileChange}
						/>
					</button>
				)}
				{uploadedUrl && (
					<button className='hover:underline' onClick={deleteFile}>
						Delete
					</button>
				)}
				{uploading && (
					<button className='hover:underline' onClick={cancelUpload}>
						Cancel
					</button>
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
		items = uploadedUrl?.map((url) => <img src={url} alt='alt' />);
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
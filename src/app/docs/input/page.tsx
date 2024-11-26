import Input from "@/components/Input/Input";

export default function Page() {
	
	return (
		<>
			<div>
				<Input disabled={true}  placeholder='input' />
				<Input color="error" placeholder='input' />
				<Input color="info" placeholder='input' />
			</div>
		</>
	);
}

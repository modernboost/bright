import Button from "@/components/Button/Button";
import Popup from "@/components/Popup/Popup";

export default function Page() {
	return (
		<>
			<div>
				<Button variant='outline'>popup</Button>
				<Popup>
					<div>this is the popup content</div>
				</Popup>
			</div>
		</>
	);
}

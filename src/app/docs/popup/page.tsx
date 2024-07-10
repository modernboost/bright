import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import Popup from "@/components/Popup/Popup";

export default function Page() {
	return (
		<>
			<div>
				<Button>popup</Button>
				<Popup>
					<div>this is the popup content</div>
				</Popup>
			</div>
		</>
	);
}

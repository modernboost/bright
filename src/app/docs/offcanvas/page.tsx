import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import Offcanvas from "@/components/Offcanvas/Offcanvas";
import Popup from "@/components/Popup/Popup";

export default function Page() {
	return (
		<>
			<div>
				<Button>Open offcanvas</Button>
				<Offcanvas title='Offcanvas' position='left'>
					<div>this is the popup content</div>
				</Offcanvas>
			</div>
		</>
	);
}

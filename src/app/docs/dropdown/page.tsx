import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";

export default function Page() {
	return (
		<>
			<div>
				<Button>Dropdown</Button>
				<Dropdown>
					<DropdownItem text={"item1"} />
					<DropdownItem text={"item2"} />
					<DropdownItem text={"item3"} />
					<DropdownItem text={"item4"} />
				</Dropdown>
			</div>
		</>
	);
}

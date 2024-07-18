import Button from "@/components/Button/Button";
import Offcanvas from "@/components/Offcanvas/Offcanvas";

export default function Page() {
	return (
		<>
			<div>
				<Button>Open offcanvas</Button>
				<Offcanvas title='Offcanvas' position='left' items={[]} />
			</div>
		</>
	);
}

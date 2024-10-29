import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({ children }) {
	return (
		<>
			{/* header */}
			<Header />

			{/* body */}
			<div className='flex'>
				{/* body /sidebar */}
				<Sidebar />
				<div className='p-10'>{children}</div>
			</div>
			{/* body /content */}

			{/* footer */}
		</>
	);
}

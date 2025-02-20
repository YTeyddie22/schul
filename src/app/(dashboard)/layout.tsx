import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<Link
					href="/"
					className="flex gap-2 justify-center lg:justify-start items-center">
					<Image src="/logo.png" alt="logo" width={32} height={32} />{" "}
					<span className="hidden lg:block font-bold">TedSchool</span>
				</Link>
				<Menu />
			</div>
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[96%] bg-[#F7F8FA] overflow-scroll flex flex-col">
				<Navbar />
				{children}
			</div>
		</div>
	);
}

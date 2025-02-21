const Announcements = () => {
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold my-4">Events</h1>
				<span className="text-xs text-gray-400">View All</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="rounded-md p-4 bg-tedSkyLight">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Lorem ipsum dolor sit.</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2025-01-01
						</span>
					</div>
					<p className="text-sm text-gray-400 mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat, quaerat dolore
					</p>
				</div>
			</div>
		</div>
	);
};

export default Announcements;

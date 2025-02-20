"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import { useState } from "react";

type DateValue = Date | null;
type Value = DateValue | [DateValue, DateValue];

// Dummy Data
const events = [
	{
		id: 1,
		title: "Lorem Ipsum dolor",
		time: "12:00 PM - 2:00PM",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		id: 2,
		title: "Lorem Ipsum dolor",
		time: "12:00 PM - 2:00PM",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		id: 3,
		title: "Lorem Ipsum dolor",
		time: "12:00 PM - 2:00PM",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
];

function EventCalendar() {
	const [date, setDate] = useState<Value>(new Date());

	return (
		<div className="bg-white p-4 rounded-md">
			<Calendar />
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold my-4">Events</h1>
				<Image
					src="/moreDark.png"
					alt="moreInfo"
					width={20}
					height={20}
				/>
			</div>
			<div className="flex flex-col gap-4">
				{events.map((event) => (
					<div
						className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-tedSky even:border-t-tedPurple"
						key={event.id}>
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-gray-600">
								{event.title}
							</h1>
							<span className="text-xs text-gray-300">
								{event.time}
							</span>
						</div>
						<p className="mt-2 text-gray-400 text-sm">
							{event.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default EventCalendar;

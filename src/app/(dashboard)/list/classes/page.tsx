"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

import { role, classesData } from "@/lib/data";
import Link from "next/link";

const columns = [
    {
        header: "Class Name",
        accessor: "name",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Capacity",
        accessor: "capacity",
        className: "hidden md:table-cell",
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

type ClassesList = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
};

const ClassesListPage = () => {
    const renderRow = (items: ClassesList) => (
        <tr
            key={items.id}
            className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-tedSkyLight">
            <td className="text-lg text-gray-500">{items.name}</td>
            <td className="hidden md:table-cell">{items.grade}</td>
            <td className="hidden md:table-cell">{items.capacity}</td>
            <td className="hidden md:table-cell">{items.supervisor}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${items.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-tedSkyLight">
                            <Image
                                src="/view.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-tedPurpleLight">
                            <Image
                                src="/delete.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">
                    All Classes
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-tedYellow">
                            <Image
                                src="/filter.png"
                                alt="filter"
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-tedYellow">
                            <Image
                                src="/sort.png"
                                alt="sort"
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-tedYellow">
                            <Image
                                src="/plus.png"
                                alt="plus"
                                width={14}
                                height={14}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/**List */}
            <Table columns={columns} renderRow={renderRow} data={classesData} />

            {/**Pagination */}
            <Pagination />
        </div>
    );
};

export default ClassesListPage;

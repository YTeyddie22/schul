"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

import { teachersData } from "@/lib/data";
import Link from "next/link";
import { role } from "@/lib/data";

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Teacher ID",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];
type TeacherList = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    phone: string;
    photo: string;
    subjects: string[];
    classes: string[];
    address: string;
};

const TeacherListPage = () => {
    const renderRow = (items: TeacherList) => (
        <tr
            key={items.id}
            className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-tedSkyLight">
            <td className="flex items-center gap-4 p-4">
                <Image
                    src={items.photo || "/noAvatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover "
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{items.name}</h3>
                    <p className="text-xs text-gray-500">{items.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{items.teacherId}</td>
            <td className="hidden md:table-cell">{items.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{items.classes.join(",")}</td>
            <td className="hidden lg:table-cell">{items.phone}</td>
            <td className="hidden lg:table-cell">{items.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${items.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-tedSkyLight">
                            <Image
                                src="/view.png"
                                alt="view"
                                width={16}
                                height={16}
                            />
                        </button>
                    </Link>

                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-tedPurpleLight">
                            <Image
                                src="/delete.png"
                                alt="delete"
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
                    All Teachers
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
            <Table
                columns={columns}
                renderRow={renderRow}
                data={teachersData}
            />

            {/**Pagination */}
            <Pagination />
        </div>
    );
};

export default TeacherListPage;

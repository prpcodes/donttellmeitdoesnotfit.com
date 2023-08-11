"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { hasVLabel, labels, priorities, statuses, types } from "@/data/data";
import { Task } from "@/data/schema";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
// import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link" />
    ),
    cell: ({ row }) => (
      <a
        href={row.getValue("link")}
        target="_blank"
        className="underline decoration-primary decoration-2 "
      >
        Link
      </a>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "brand",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Brand" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("brand")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "width",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Base With" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("width")} mm
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Length" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("length")} mm
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const status = types.find(
        (label) => label.value === row.getValue("type")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "material",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Material" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("material")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "lubricated",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lubricated" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("lubricated")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "hasVLabel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="V-Label" />
    ),
    cell: ({ row }) => {
      const label = hasVLabel.find(
        (label) => label.value === row.getValue("hasVLabel")
      );

      if (!label) {
        return null;
      }

      return (
        <div className="flex items-center space-x-2">
          {/* 
          {label.value === true && (
            <Image src="/v-label.svg" width={24} height={24} alt="Yes" />
          )} 
          */}
          <span className="max-w-[50px] truncate font-medium">
            <span>{label.label}</span>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "texture",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Texture" />
    ),
    cell: ({ row }) => (
      <div className="truncate ... overflow-hidden">
        {row.getValue("texture")}
      </div>
    ),
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";

import { isVegan, types } from "@/data/data";
import { Task } from "@/data/schema";
import { DataTableColumnHeader } from "@/components/data-table-column-header";

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
      <DataTableColumnHeader column={column} title="With" />
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
    accessorKey: "thickness",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Thickness" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("thickness")} mm
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
      return value.includes(row.getValue("type"));
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue("material"));
    },
  },
  {
    accessorKey: "lubricant",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lubricant" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("lubricant")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "isVegan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vegan" />
    ),
    cell: ({ row }) => {
      const label = isVegan.find(
        (label) => label.value === row.getValue("isVegan")
      );

      if (!label) {
        return null;
      }

      return (
        <div className="flex items-center space-x-2">
          <span className="max-w-[50px] truncate font-medium">
            <span>{label.label}</span>
          </span>
        </div>
      );
    },

    filterFn: (row, id, value) => {
      return value.includes(row.getValue("isVegan"));
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

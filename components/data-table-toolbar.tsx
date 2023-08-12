"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table-view-options";

import { isVegan, materials, types } from "@/data/data";
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-wrap items-center flex-1 gap-2">
        <Input
          placeholder="Filter by brand..."
          value={(table.getColumn("brand")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("brand")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Input
          placeholder="Width..."
          value={table.getColumn("width")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("width")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[120px] lg:w-[150px]"
        />
        <Input
          placeholder="Length..."
          value={table.getColumn("length")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("length")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[100px] lg:w-[150px]"
        />
        {table.getColumn("material") && (
          <DataTableFacetedFilter
            column={table.getColumn("material")}
            title="Material"
            options={materials}
          />
        )}
        {table.getColumn("type") && (
          <DataTableFacetedFilter
            column={table.getColumn("type")}
            title="Type"
            options={types}
          />
        )}
        {table.getColumn("isVegan") && (
          <DataTableFacetedFilter
            column={table.getColumn("isVegan")}
            title="Vegan"
            options={isVegan}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}

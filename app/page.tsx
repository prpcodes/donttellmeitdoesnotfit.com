import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { UserNav } from "@/components/user-nav";
import { taskSchema } from "@/data/schema";
import { ModeToggle } from "@/components/mode-toggle";
import { TutorialDialog } from "@/components/tutorial-dialog";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getCondoms() {
  const data = await fs.readFile(path.join(process.cwd(), "tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const condoms = await getCondoms();

  return (
    <div className="flex flex-col flex-1 w-screen h-screen px-8 pt-8 space-y-4">
      <div className="flex items-start justify-between">
        <div className="max-w-screen-md">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Find Your Condom!
          </h1>
          <p className="[&:not(:first-child)]:mt-6 text-muted-foreground">
            Say goodbye to the guesswork and hello to accurate comfort.
          </p>
          <p className="[&:not(:first-child)]:mt-6 text-muted-foreground">
            Find your ideal condom size without sifting through charts - this
            tool quickly narrows down the best options to fit your needs.
            Don&apos;t know how to measure you penis?
          </p>
          <TutorialDialog />
        </div>
        <div className="hidden sm:flex">
          <ModeToggle />
        </div>
      </div>
      <DataTable data={condoms} columns={columns} />
    </div>
  );
}

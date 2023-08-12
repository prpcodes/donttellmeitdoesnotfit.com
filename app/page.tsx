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
  title: "DonTellMeItDoesNotFit",
  description:
    "Find your ideal condom size without sifting through countless charts.",
  icons:
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍌</text></svg>",
  applicationName: "DonTellMeItDoesNotFit",
  keywords:
    "Condom size selection, Fitting condoms, Find your perfect fit, Condom size calculator, Comfortable protection, Get the right size, Condom size guide, Size-specific condoms, Perfect fit condoms, Proper protection, Size-conscious safety, Comfort and safety, Your size, your safety, Best fit condoms, Condom size recommendations, Confidence in protection, Custom condom options, Size-appropriate safety, Your comfort matters, Condoms for every size, Ensuring the right fit, Avoid discomfort, Secure fit condoms, Maximum comfort protection, Choosing the right condom size, Size-driven safety",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  creator: "PRP.CODES",
  openGraph: {
    url: "https://www.donttellmeitdoesnotfit.com/",
    title: "DonTellMeItDoesNotFit",
    description:
      "Find your ideal condom size without sifting through countless charts.",
    siteName: "DonTellMeItDoesNotFit",
    images: [
      {
        url: "https://www.donttellmeitdoesnotfit.com/banana.png",
      },
    ],
  },
  twitter: {
    card: "app",
    site: "@site",
    creator: "@creator",
    images: "https://www.donttellmeitdoesnotfit.com/banana.png",
  },
};

// Simulate a database read for tasks.
async function getCondoms() {
  const data = await fs.readFile(path.join(process.cwd(), "data.json"));

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
          <p className="mt-6 text-muted-foreground">
            Say goodbye to the guesswork and hello to accurate comfort.
          </p>
          <p className="mt-6 text-muted-foreground">
            Find your ideal condom size without sifting through charts - this
            tool quickly narrows down the best options to fit your needs.
            Don&apos;t know how to measure you penis?
          </p>
          <TutorialDialog />
          <p className="mt-6 text-sm text-muted-foreground">
            The affiliate links below are being used to fund this project.
          </p>
        </div>
        <div className="hidden sm:flex">
          <ModeToggle />
        </div>
      </div>
      <DataTable data={condoms} columns={columns} />
    </div>
  );
}

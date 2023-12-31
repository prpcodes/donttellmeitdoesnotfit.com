import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { taskSchema } from "@/data/schema";
import { ModeToggle } from "@/components/mode-toggle";
import { TutorialDialog } from "@/components/tutorial-dialog";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "DontTellMeItDoesNotFit",
  description:
    "Alright, legends of exceptional proportions, we've heard it all - 'too big for the ordinary'. But guess what? This tool quickly narrows down the best options to fit your needs. It's time to rock the perfect fit and wrap your goods in the comfort they deserve.",
  icons:
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍌</text></svg>",
  applicationName: "DontTellMeItDoesNotFit",
  keywords:
    "Condom size selection, Fitting condoms, Find your perfect fit, Condom size calculator, Comfortable protection, Get the right size, Condom size guide, Size-specific condoms, Perfect fit condoms, Proper protection, Size-conscious safety, Comfort and safety, Your size, your safety, Best fit condoms, Condom size recommendations, Confidence in protection, Custom condom options, Size-appropriate safety, Your comfort matters, Condoms for every size, Ensuring the right fit, Avoid discomfort, Secure fit condoms, Maximum comfort protection, Choosing the right condom size, Size-driven safety",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  creator: "PRP.CODES",
  openGraph: {
    type: "website",
    title: "Don't Tell Me It Does Not Fit",
    description:
      "Alright, legends of exceptional proportions, we've heard it all - 'too big for the ordinary'. But guess what? This tool quickly narrows down the best options to fit your needs. It's time to rock the perfect fit and wrap your goods in the comfort they deserve.",
    siteName: "Don't Tell Me It Does Not Fit",
    url: "https://www.donttellmeitdoesnotfit.com",
    images: [
      {
        url: "https://www.donttellmeitdoesnotfit.com/openGraph.jpg",
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export default async function CondomsPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("condoms").select("*");

  if (error) {
    throw error;
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <div className="max-w-screen-md">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Find Your Condom!
          </h1>
          <p className="mt-6 text-muted-foreground">
            Say goodbye to the guesswork and hello to accurate comfort.
          </p>
          <p className="mt-4 text-muted-foreground">
            Alright, legends of exceptional proportions, we&apos;ve heard it all
            - &apos;too big for the ordinary&apos;. But guess what? This tool
            quickly narrows down the best options to fit your needs.
          </p>
          <p className="mt-6 text-muted-foreground">
            Don&apos;t know how to measure you penis? <TutorialDialog />
          </p>
          <p className="text-sm text-muted-foreground">
            The affiliate links below are being used to fund this project.
          </p>
        </div>
        <div className="hidden sm:flex">
          <ModeToggle />
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </>
  );
}

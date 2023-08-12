"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "./ui/label";

export function TutorialDialog() {
  const [width, setWith] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="p-0 text-base underline decoration-primary text-muted-foreground"
        >
          We got your back!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>How To Measure Your Penis</DialogTitle>
          <p className="text-sm text-muted-foreground">
            You need a soft measuring tape or a piece of string and a ruler to
            measure the string.
          </p>
          <ol className="text-sm text-muted-foreground ml-6 list-decimal [&>li]:mt-2 text-left">
            <li>
              Place the measuring tape or string at the base of your{" "}
              <b>ERECT</b> penis and measure from the bottom to the top, make
              sure your penis is <b>central</b> and <b>straight</b>.
            </li>
            <li>
              Measure all the way around your <b>ERECT</b> penis at the
              mid-point of the shaft, or measure the circumference at the head
              (choose the widest part).
            </li>
            <li>
              Divide your penis circumference by <b>2.25</b> to make up for the
              about 10% to 20% stretch.
            </li>
          </ol>
        </DialogHeader>
        <DialogFooter className="flex-row items-center !justify-center text-sm text-muted-foreground gap-2">
          <Label htmlFor="width">Width:</Label>
          <Input
            className="w-24"
            type="number"
            placeholder="130mm"
            onChange={(e) => setWith(Math.round(Number(e.target.value) / 2.25))}
          />
          <span>÷ 2.25 = {width}mm</span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

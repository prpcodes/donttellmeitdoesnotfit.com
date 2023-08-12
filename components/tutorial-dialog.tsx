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

export function TutorialDialog() {
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
          <DialogDescription>
            <p className="my-2">
              You need a soft measuring tape or a piece of string and a ruler to
              measure the string.
            </p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
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
                Divide your penis circumference by <b>2.25</b> to make up for
                the about 10% to 20% stretch.
              </li>
            </ol>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

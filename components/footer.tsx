export function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-center gap-4 md:flex-row">
      <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
        Built by{" "}
        <a
          href="https://twitter.com/prpcodes"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline"
        >
          prpcodes
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/prpcodes/donttellmeitdoesnotfit.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}

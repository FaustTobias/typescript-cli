import "source-map-support/register";
import { main } from "./main";

main(process.argv.slice(2)).catch(error =>
    console.error("Unhandled exception", error),
);

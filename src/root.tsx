import Button from "./components/button";
import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Button>Hey</Button>
      </body>
    </>
  );
};

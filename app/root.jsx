import { LiveReload } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>X11</title>
      </head>
      <body>
        Hello world
        <LiveReload />
      </body>
    </html>
  );
}
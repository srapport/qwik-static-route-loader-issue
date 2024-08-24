import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return <>
    <Link href="/other?id=bblahblah">Go there</Link>
  </>;
});

export const head: DocumentHead = {
  title: "Route Loader Lab",
  meta: [
    {
      name: "description",
      content: "Route Loader Lab",
    },
  ],
};

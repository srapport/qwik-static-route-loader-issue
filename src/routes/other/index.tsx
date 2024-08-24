import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  const query = requestEvent.url.searchParams;
  console.log("query", query);
  return query.get("id");
});

export default component$(() => {
  const test = useProductDetails();
  return <>Test Value = {test.value}</>;
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

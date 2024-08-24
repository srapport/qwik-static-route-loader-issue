# Qwik City Issue 6820

[Qwik City Issue 6820](https://github.com/QwikDev/qwik/issues/6820)

Route loader logic is dropping query params on static builds, but is working correctly on SSR builds. It is necessary to return the query string consistently in both SSR and Static builds to support hybrid mobile apps. This was working but broke in a recent qwik release.

# 
using the sample repo:

```shell
pnpm i
pnpm build
pnpm serve
```

Hover over the link on the home page and inspect the network results. The query string is dropped.

![image](https://github.com/user-attachments/assets/8d76bc6b-8db0-4df2-be11-cbe68b8a1f6b)

Now, compare this to an SSR execution:

```shell
pnpm dev
```

Hover over the link on the home page and inspect the network results. The query string is preserved.

![image](https://github.com/user-attachments/assets/a5b9dcd0-8218-4372-9cb6-3ba4a40cc60a)

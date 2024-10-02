import Heading from "../../components/heading"   //importing component

export default function Home() {
  return (
    <div>
   <span style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/nextjs.jpeg" alt="Next.js logo" width="80px" height="20px" />
        <h1 style={{ marginLeft: '10px',fontSize:40}}>
          <strong>Next.js</strong>
        </h1>
      </span>
      <br />

      <Heading />       
      <br />

      <p>
        Next.js is a React-based framework designed for building server-side
        rendered (SSR) and static web applications. It offers a variety of
        features to streamline the development of modern web applications. Some
        key aspects of Next.js include:
        <br />
        <br/>
        <strong>1. Server-Side Rendering (SSR):</strong>
        Renders pages on the server before sending them to the browser,
        improving SEO and performance, especially for content-heavy or
        dynamically updated pages.
        <br />
        <strong>2. Static Site Generation (SSG):</strong>
        Allows pre-rendering of pages at build time, which can be ideal for
        performance, especially when the content doesn’t change frequently.
        <br />
        <strong>3. File-based Routing:</strong>
        Routes are created automatically based on the file structure inside the
        pages folder. For example, a pages/about.js file corresponds to the
        /about route.
        <br />
        4.<strong> API Routes:</strong>
        You can easily create API endpoints within the pages/api directory,
        eliminating the need for a separate backend server.
        <br />
        5. Incremental Static Regeneration (ISR): Allows you to update static
        content after the initial build. Pages are re-rendered in the background
        as new requests come in, enabling static sites to have fresh content
        without rebuilding the whole site.
        <br />
        <strong>6. Hybrid Approach:</strong>
        Next.js allows you to mix static generation and server-side rendering on
        a per-page basis. You can decide which pages should be generated
        statically and which ones should be rendered on the server.
        <br />
        <strong>7. Optimized Performance:</strong>
        Features like automatic code-splitting, image optimization, and lazy
        loading help improve the overall performance of Next.js applications.
        <br />
        <strong>8. TypeScript Support:</strong>
        It has built-in TypeScript support, making it easy to write type-safe
        code in Next.js.
        <br />
        <strong>9. API Integrations:</strong>
        Next.js supports GraphQL, REST APIs, and many third-party services out
        of the box.
      </p>
      <br />
    </div>
  );
}

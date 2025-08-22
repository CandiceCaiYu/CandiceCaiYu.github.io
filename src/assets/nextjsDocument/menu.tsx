import Link from "next/link";
import {ReactElement} from "react";

export interface MenuItem {
    key: string;
    label: ReactElement;
    children?: MenuItem[];
}

export const nextjsMenu: MenuItem[] = [
    {
        key: '1',
        label: <Link href={'/nextjs-docs/start'}>Getting Started</Link>,
        children: [
            {key: "11", label: <Link href={'/nextjs-docs/start/installation'}>Installation</Link>},
            {key: "12", label: <Link href={'/nextjs-docs/start/project-structure'}>Project Structure</Link>},
            {
                key: "13",
                label: <Link href={'/nextjs-docs/start/layouts-and-pages'}>Layouts
                    and Pages</Link>
            },
            {
                key: "14",
                label: <Link href={'/nextjs-docs/start/linking-and-navigating'}>Linking
                    and Navigating</Link>
            },
            {
                key: "15",
                label: <Link href={'/nextjs-docs/start/server-and-client-components'}>Server and Client
                    Components</Link>
            },
            {
                key: "17",
                label: <Link href={'/nextjs-docs/start/fetching-data'}>Fetching Data</Link>
            },
        ]
    },
    {
        key: '2',
        label: <Link href={'/nextjs-docs/guides'}>Guides</Link>,
        children: [
            {
                key: "21",
                label: <Link href={'/nextjs-docs/guides/routing'}>Routing</Link>,
                children: [
                    {
                        key: "211",
                        label: <Link href={'/nextjs-docs/guides/routing/defining-routes'}>Defining
                            Routes</Link>
                    },
                    {
                        key: "212",
                        label: <Link href={'/nextjs-docs/guides/routing/pages'}>Pages</Link>
                    },
                    {
                        key: "215",
                        label: <Link href={'/nextjs-docs/guides/routing/error-handling'}>Error
                            Handling</Link>
                    },
                    {
                        key: "216",
                        label: <Link href={'/nextjs-docs/guides/routing/loading-ui-and-streaming'}>Loading
                            UI and Streaming</Link>
                    },
                    {
                        key: "217",
                        label: <Link
                            href={'/nextjs-docs/guides/routing/redirecting'}>Redirecting</Link>
                    },
                    {
                        key: "218",
                        label: <Link href={'/nextjs-docs/guides/routing/route-groups'}>Route
                            Groups</Link>
                    },
                    {
                        key: "219",
                        label: <Link href={'/nextjs-docs/guides/routing/dynamic-routes'}>Dynamic
                            Routes</Link>
                    },
                    {
                        key: "2101",
                        label: <Link href={'/nextjs-docs/guides/routing/parallel-routes'}>Parallel
                            Routes</Link>
                    },
                    {
                        key: "2102", label: <Link
                            href={'/nextjs-docs/guides/routing/intercepting-routes'}>Intercepting
                            Routes</Link>
                    },
                    {
                        key: "2103", label: <Link
                            href={'/nextjs-docs/guides/routing/route-handlers'}>Route Handlers</Link>
                    },
                    {
                        key: "2104", label: <Link
                            href={'/nextjs-docs/guides/routing/middleware'}>Middleware</Link>
                    },
                    {
                        key: "2105",
                        label: <Link
                            href={'/nextjs-docs/guides/routing/internationalization'}>Internationalization</Link>
                    },

                ]
            },
            {
                key: "22",
                label: <Link
                    href={'/nextjs-docs/guides/data-fetching'}>Data Fetching</Link>,
                children: [
                    {
                        key: "221",
                        label: <Link
                            href={'/nextjs-docs/guides/data-fetching/data-fetching-and-caching'}>Data
                            Fetching and Caching</Link>
                    },
                    {
                        key: "222",
                        label: <Link
                            href={'/nextjs-docs/guides/data-fetching/server-action-and-mutations'}>Server
                            Actions and Mutations</Link>
                    },
                    {
                        key: "223",
                        label: <Link
                            href={'/nextjs-docs/guides/data-fetching/incremental-static-regeneration'}>Incremental
                            Static Regeneration(ISR)</Link>
                    },
                ]
            },
            {
                key: "23",
                label: <Link href={'/nextjs-docs/guides/rendering'}>Rendering</Link>,
                children: [
                    {
                        key: "231",
                        label: <Link href={'/nextjs-docs/guides/rendering/server-components'}>Server
                            Components</Link>
                    },
                    {
                        key: "232",
                        label: <Link href={'/nextjs-docs/guides/rendering/client-components'}>Client
                            Components</Link>
                    },
                    {
                        key: "233",
                        label: <Link href={'/nextjs-docs/guides/rendering/composition-patterns'}>Composition
                            Patterns</Link>
                    },
                    {
                        key: "234",
                        label: <Link href={'/nextjs-docs/guides/rendering/partial-prerendering'}>Partial
                            Prerendering</Link>
                    },
                    {
                        key: "235",
                        label: <Link href={'/nextjs-docs/guides/rendering/runtimes'}>Runtimes</Link>
                    },
                ]
            },
            {key: "24", label: <Link href={'/nextjs-docs/guides/caching'}>Caching</Link>},
            {
                key: "25",
                label: <Link href={'/nextjs-docs/guides/styling'}>Styling</Link>,
                children: [
                    {key: "251", label: <Link href={'/nextjs-docs/guides/styling'}>CSS</Link>},
                    {
                        key: "252",
                        label: <Link href={'/nextjs-docs/guides/styling/tailwind-css'}>Tailwind
                            CSS</Link>
                    },
                    {key: "253", label: <Link href={'/nextjs-docs/guides/styling/sass'}>Sass</Link>},
                    {
                        key: "254",
                        label: <Link href={'/nextjs-docs/guides/styling/css-in-js'}>CSS-in-JS</Link>
                    },
                ]
            },

            {
                key: "26",
                label: <Link href={'/nextjs-docs/guides/optimizations'}>Optimizing</Link>,
                children: [
                    {
                        key: "261",
                        label: <Link href={'/nextjs-docs/guides/optimizations/images'}>Images</Link>
                    },
                    {
                        key: "262",
                        label: <Link href={'/nextjs-docs/guides/optimizations/videos'}>Videos</Link>
                    },
                    {
                        key: "263",
                        label: <Link href={'/nextjs-docs/guides/optimizations/fonts'}>Fonts</Link>
                    },
                    {
                        key: "264",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/metadata'}>Metadata</Link>
                    },
                    {
                        key: "265",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/scripts'}>Scripts</Link>
                    },
                    {
                        key: "266",
                        label: <Link href={'/nextjs-docs/guides/optimizations/package-bundling'}>Package
                            Bundling</Link>
                    },
                    {
                        key: "267",
                        label: <Link href={'/nextjs-docs/guides/optimizations/lazy-loading'}>Lazy
                            Loading</Link>
                    },
                    {
                        key: "268",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/analytics'}>Analytics</Link>
                    },
                    {
                        key: "269",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/instrumentation'}>Instrumentation</Link>
                    },
                    {
                        key: "2601",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/openTelemetry'}>OpenTelemetry</Link>
                    },
                    {
                        key: "2602",
                        label: <Link href={'/nextjs-docs/guides/optimizations/static-assets'}>Static
                            Assets</Link>
                    },
                    {
                        key: "2603",
                        label: <Link
                            href={'/nextjs-docs/guides/optimizations/third-party-libraries'}>Third
                            Party Libraries</Link>
                    },
                    {
                        key: "2604",
                        label: <Link href={'/nextjs-docs/guides/optimizations/memory-usage'}>Memory
                            Usage</Link>
                    },
                ]
            },
            {
                key: "27", label: <Link href={'/nextjs-docs/guides/configuring'}>Configuring</Link>, children: [
                    {key: "271", label: <Link href={'/nextjs-docs/guides/configuring/typescript'}>TypeScript</Link>},
                    {key: "272", label: <Link href={'/nextjs-docs/guides/configuring/eslint'}>ESLint</Link>},
                    {
                        key: "273",
                        label: <Link href={'/nextjs-docs/guides/configuring/environment-variables'}>Environment
                            Variables</Link>
                    },
                    {
                        key: "274",
                        label: <Link href={'/nextjs-docs/guides/configuring/absolute-imports-and-module-path-aliases'}>Absolute
                            Imports and Module Path Aliases</Link>
                    },
                    {key: "275", label: <Link href={'/nextjs-docs/guides/configuring/mdx'}>MDX</Link>},
                    {
                        key: "276",
                        label: <Link href={'/nextjs-docs/guides/configuring/src-directory'}>src Directory</Link>
                    },
                    {
                        key: "277",
                        label: <Link href={'/nextjs-docs/guides/configuring/custom-server'}>Custom Server</Link>
                    },
                    {key: "278", label: <Link href={'/nextjs-docs/guides/configuring/draft-mode'}>Draft Mode</Link>},
                    {
                        key: "279",
                        label: <Link href={'/nextjs-docs/guides/configuring/content-security-policy'}>Content Security
                            Policy</Link>
                    },
                    {key: "2701", label: <Link href={'/nextjs-docs/guides/configuring/debugging'}>Debugging</Link>},
                    {
                        key: "2702",
                        label: <Link href={'/nextjs-docs/guides/configuring/progressive-web-applications'}>Progressive
                            Web Applications (PWA)</Link>
                    },
                ]
            },
            {
                key: "28", label: <Link href={'/nextjs-docs/guides/testing'}>Testing</Link>,
                children: [
                    {key: "284", label: <Link href={'/nextjs-docs/guides/testing/cypress'}>Cypress</Link>},
                    {key: "282", label: <Link href={'/nextjs-docs/guides/testing/jest'}>Jest</Link>},
                    {key: "283", label: <Link href={'/nextjs-docs/guides/testing/playwright'}>Playwright</Link>},
                    {key: "281", label: <Link href={'/nextjs-docs/guides/testing/vitest'}>Vitest</Link>},
                ]
            },
            {key: "29", label: <Link href={'/nextjs-docs/guides/authentication'}>Authentication</Link>},
            {
                key: "2901", label: <Link href={'/nextjs-docs/guides/deploying'}>Deploying</Link>
            },
            {
                key: "2902", label: <Link href={'/nextjs-docs/guides/upgrading'}>Upgrading</Link>, children: [
                    {key: "29021", label: <Link href={'/nextjs-docs/guides/upgrading/codemods'}>Codemods</Link>},
                    {key: "29022", label: <Link href={'/nextjs-docs/guides/upgrading/version-15'}>Version 15</Link>},
                    {key: "29023", label: <Link href={'/nextjs-docs/guides/upgrading/version-14'}>Version 14</Link>},
                ]
            },
        ]
    },
    {
        key: '3', label: <Link href={'/nextjs-docs/api-reference'}>API Reference</Link>, children: [
            {
                key: "31", label: <Link href={'/nextjs-docs/api-reference/components'}>Components</Link>, children: [
                    {key: "311", label: <Link href={'/nextjs-docs/api-reference/components/font'}>Font</Link>},
                    {
                        key: "312",
                        label: <Link href={'/nextjs-docs/api-reference/components/form-components'}>Form
                            Components</Link>
                    },
                    {
                        key: "313",
                        label: <Link href={'/nextjs-docs/api-reference/components/image-components'}>Image
                            Components</Link>
                    },
                    {
                        key: "314",
                        label: <Link href={'/nextjs-docs/api-reference/components/link-components'}>Link
                            Components</Link>
                    },
                    {
                        key: "315",
                        label: <Link href={'/nextjs-docs/api-reference/components/script-components'}>Script
                            Components</Link>
                    },
                ]
            },
            {
                key: "32",
                label: <Link href={'/nextjs-docs/api-reference/file-conventions'}>File Conventions</Link>,
                children: [
                    {
                        key: "321",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/default-js'}>default.js</Link>
                    },
                    {
                        key: "322",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/error-js'}>error.js</Link>
                    },
                    {
                        key: "323",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/instrumentation-js'}>instrumentation.js</Link>
                    },
                    {
                        key: "324",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/layout-js'}>layout.js</Link>
                    },
                    {
                        key: "325",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/loading-js'}>loading.js</Link>
                    },
                    {
                        key: "326",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/mdx-components-js'}>mdx-components.js</Link>
                    },
                    {
                        key: "327",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/middleware-js'}>middleware.js</Link>
                    },
                    {
                        key: "328",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/not-found-js'}>not-found.js</Link>
                    },
                    {
                        key: "329",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/page-js'}>page.js</Link>
                    },
                    {
                        key: "3201",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/route-js'}>route.js</Link>
                    },
                    {
                        key: "3202",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/route-segment-config'}>Route
                            Segment Config</Link>
                    },
                    {
                        key: "3203",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/template-js'}>template.js</Link>
                    },
                    {
                        key: "3204",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/metadata-files'}>Metadata
                            Files</Link>,
                        children: [
                            {
                                key: "32041",
                                label: <Link
                                    href={'/nextjs-docs/api-reference/file-conventions/metadata-files/favicon-icon-apple-icon'}>favicon,
                                    icon, and apple-icon</Link>
                            },
                            {
                                key: "32042",
                                label: <Link
                                    href={'/nextjs-docs/api-reference/file-conventions/metadata-files/manifest-json'}>manifest.json</Link>
                            },
                            {
                                key: "32043",
                                label: <Link
                                    href={'/nextjs-docs/api-reference/file-conventions/metadata-files/opengraph-image-twitter-image'}>opengraph-image
                                    and twitter-image</Link>
                            },
                            {
                                key: "32044",
                                label: <Link
                                    href={'/nextjs-docs/api-reference/file-conventions/metadata-files/robots-txt'}>robots.txt</Link>
                            },
                            {
                                key: "32045",
                                label: <Link
                                    href={'/nextjs-docs/api-reference/file-conventions/metadata-files/sitemap-xml'}>sitemap.xml</Link>
                            },
                        ]
                    },
                    {
                        key: "3205",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/dynamic-segments'}>Dynamic
                            Segments</Link>
                    },
                    {
                        key: "3206",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/forbidden-js'}>forbidden.js</Link>
                    },
                    {
                        key: "3207",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/instrumentation-client-js'}>instrumentation-client.js</Link>
                    },
                    {
                        key: "3208",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/intercepting-routes'}>Intercepting
                            Routes</Link>
                    },
                    {
                        key: "3209",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/parallel-routes'}>Parallel
                            Routes</Link>
                    },
                    {
                        key: "32001",
                        label: <Link href={'/nextjs-docs/api-reference/file-conventions/public'}>public</Link>
                    },
                    {key: "32002", label: <Link href={'/nextjs-docs/api-reference/file-conventions/src'}>src</Link>},
                    {
                        key: "32003",
                        label: <Link
                            href={'/nextjs-docs/api-reference/file-conventions/unauthorized-js'}>unauthorized.js</Link>
                    },
                ]
            },
            {
                key: "33", label: <Link href={'/nextjs-docs/api-reference/functions'}>Functions</Link>, children: [
                    {
                        key: "331",
                        label: <Link href={'/nextjs-docs/api-reference/functions/connection'}>connection</Link>
                    },
                    {key: "332", label: <Link href={'/nextjs-docs/api-reference/functions/cookies'}>cookies</Link>},
                    {key: "333", label: <Link href={'/nextjs-docs/api-reference/functions/draftMode'}>draftMode</Link>},
                    {key: "334", label: <Link href={'/nextjs-docs/api-reference/functions/fetch'}>fetch</Link>},
                    {
                        key: "335",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/generateImageMetadata'}>generateImageMetadata</Link>
                    },
                    {
                        key: "336",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/generateMetadata'}>generateMetadata</Link>
                    },
                    {
                        key: "337",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/generateSitemaps'}>generateSitemaps</Link>
                    },
                    {
                        key: "338",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/generateStaticParams'}>generateStaticParams</Link>
                    },
                    {
                        key: "339",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/generateViewport'}>generateViewport</Link>
                    },
                    {key: "3301", label: <Link href={'/nextjs-docs/api-reference/functions/headers'}>headers</Link>},
                    {
                        key: "3302",
                        label: <Link href={'/nextjs-docs/api-reference/functions/ImageResponse'}>ImageResponse</Link>
                    },
                    {
                        key: "3303",
                        label: <Link href={'/nextjs-docs/api-reference/functions/NextRequest'}>NextRequest</Link>
                    },
                    {
                        key: "3304",
                        label: <Link href={'/nextjs-docs/api-reference/functions/NextResponse'}>NextResponse</Link>
                    },
                    {key: "3305", label: <Link href={'/nextjs-docs/api-reference/functions/notFound'}>notFound</Link>},
                    {
                        key: "3306",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/permanentRedirect'}>permanentRedirect</Link>
                    },
                    {key: "3307", label: <Link href={'/nextjs-docs/api-reference/functions/redirect'}>redirect</Link>},
                    {
                        key: "3308",
                        label: <Link href={'/nextjs-docs/api-reference/functions/revalidatePath'}>revalidatePath</Link>
                    },
                    {
                        key: "3309",
                        label: <Link href={'/nextjs-docs/api-reference/functions/unstable_after'}>unstable_after</Link>
                    },
                    {
                        key: "33001",
                        label: <Link href={'/nextjs-docs/api-reference/functions/unstable_cache'}>unstable_cache</Link>
                    },
                    {
                        key: "33002",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/unstable_notStore'}>unstable_notStore</Link>
                    },
                    {
                        key: "33003",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/unstable_rethrow'}>unstable_rethrow</Link>
                    },
                    {
                        key: "33004",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/unstable_redirect'}>unstable_redirect</Link>
                    },
                    {
                        key: "33005",
                        label: <Link href={'/nextjs-docs/api-reference/functions/useParams'}>useParams</Link>
                    },
                    {
                        key: "33006",
                        label: <Link href={'/nextjs-docs/api-reference/functions/usePathname'}>usePathname</Link>
                    },
                    {
                        key: "33007",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/useReportWebVitals'}>useReportWebVitals</Link>
                    },
                    {
                        key: "33008",
                        label: <Link href={'/nextjs-docs/api-reference/functions/useRouter'}>useRouter</Link>
                    },
                    {
                        key: "33009",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/useSearchParams'}>useSearchParams</Link>
                    },
                    {
                        key: "330001",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/useSelectedLayoutSegment'}>useSelectedLayoutSegment</Link>
                    },
                    {
                        key: "330002",
                        label: <Link
                            href={'/nextjs-docs/api-reference/functions/useSelectedLayoutSegments'}>useSelectedLayoutSegments</Link>
                    },
                    {
                        key: "330003",
                        label: <Link href={'/nextjs-docs/api-reference/functions/userAgent'}>userAgent</Link>
                    },
                ]
            },
            {
                key: "34",
                label: <Link href={'/nextjs-docs/api-reference/next-config-options'}>next.config.js Options</Link>,
                children: [
                    {
                        key: "341",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/appDir'}>appDir</Link>
                    },
                    {
                        key: "342",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/assetPrefix'}>assetPrefix</Link>
                    },
                    {
                        key: "343",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/basePath'}>basePath</Link>
                    },
                    {
                        key: "344",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/compress'}>compress</Link>
                    },
                    {
                        key: "345",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/crossOrigin'}>crossOrigin</Link>
                    },
                    {
                        key: "346",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/cssChunking'}>cssChunking</Link>
                    },
                    {
                        key: "347",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/devIndicator'}>devIndicator</Link>
                    },
                    {
                        key: "348",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/distDir'}>distDir</Link>
                    },
                    {key: "349", label: <Link href={'/nextjs-docs/api-reference/next-config-options/env'}>env</Link>},
                    {
                        key: "3401",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/eslint'}>eslint</Link>
                    },
                    {
                        key: "3402",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/expireTime'}>expireTime</Link>
                    },
                    {
                        key: "3403",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/exportPathMap'}>exportPathMap</Link>
                    },
                    {
                        key: "3404",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/generateBuildId'}>generateBuildId</Link>
                    },
                    {
                        key: "3405",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/generateEtags'}>generateEtags</Link>
                    },
                    {
                        key: "3406",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/headers'}>headers</Link>
                    },
                    {
                        key: "3407",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/httpAgentOptions'}>httpAgentOptions</Link>
                    },
                    {
                        key: "3408",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/images'}>images</Link>
                    },
                    {
                        key: "3409",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/cacheHandler'}>cacheHandler</Link>
                    },
                    {
                        key: "34001",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/logging'}>logging</Link>
                    },
                    {
                        key: "34002",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/mdxRs'}>mdxRs</Link>
                    },
                    {
                        key: "34003",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/onDemandEntries'}>onDemandEntries</Link>
                    },
                    {
                        key: "34004",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/optimizePackageImports'}>optimizePackageImports</Link>
                    },
                    {
                        key: "34005",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/output'}>output</Link>
                    },
                    {
                        key: "34006",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/pageExtensions'}>pageExtensions</Link>
                    },
                    {
                        key: "34007",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/poweredByHeader'}>poweredByHeader</Link>
                    },
                    {key: "34008", label: <Link href={'/nextjs-docs/api-reference/next-config-options/ppr'}>ppr</Link>},
                    {
                        key: "34009",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/productionBrowserSourceMaps'}>productionBrowserSourceMaps</Link>
                    },
                    {
                        key: "340001",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/reactCompiler'}>reactCompiler</Link>
                    },
                    {
                        key: "340002",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/reactMaxHeadersLength'}>reactMaxHeadersLength</Link>
                    },
                    {
                        key: "340003",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/reactStrictMode'}>reactStrictMode</Link>
                    },
                    {
                        key: "340004",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/redirects'}>redirects</Link>
                    },
                    {
                        key: "340005",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/rewrites'}>rewrites</Link>
                    },
                    {
                        key: "340006",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/sassOptions'}>sassOptions</Link>
                    },
                    {
                        key: "340007",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/serverActions'}>serverActions</Link>
                    },
                    {
                        key: "340008",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/serverComponentsHmrCache'}>serverComponentsHmrCache</Link>
                    },
                    {
                        key: "340009",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/serverExternalPackages'}>serverExternalPackages</Link>
                    },
                    {
                        key: "3400001",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/staleTimes'}>staleTimes</Link>
                    },
                    {
                        key: "3400002",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/staticGeneration'}>staticGeneration</Link>
                    },
                    {
                        key: "3400003",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/trailingSlash'}>trailingSlash</Link>
                    },
                    {
                        key: "3400004",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/transpilePackages'}>transpilePackages</Link>
                    },
                    {
                        key: "3400005",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/turbo'}>turbo</Link>
                    },
                    {
                        key: "3400006",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/typedRoutes'}>typedRoutes</Link>
                    },
                    {
                        key: "3400007",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/typescript'}>typescript</Link>
                    },
                    {
                        key: "3400008",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/urlImports'}>urlImports</Link>
                    },
                    {
                        key: "3400009",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/useLightningcss'}>useLightningcss</Link>
                    },
                    {
                        key: "34000001",
                        label: <Link href={'/nextjs-docs/api-reference/next-config-options/webpack'}>webpack</Link>
                    },
                    {
                        key: "34000002",
                        label: <Link
                            href={'/nextjs-docs/api-reference/next-config-options/webVitalsAttribution'}>webVitalsAttribution</Link>
                    },
                ]
            },
            {
                key: "35", label: <Link href={'/nextjs-docs/api-reference/cli'}>CLI</Link>, children: [
                    {
                        key: "351",
                        label: <Link href={'/nextjs-docs/api-reference/cli/create-next-app'}>create-next-app</Link>
                    },
                    {key: "352", label: <Link href={'/nextjs-docs/api-reference/cli/next-cli'}>next CLI</Link>},
                ]
            },
            {key: "36", label: <Link href={'/nextjs-docs/api-reference/edge-runtime'}>Edge Runtime</Link>},
            {key: "37", label: <Link href={'/nextjs-docs/architecture/turbopack'}>Turbopack</Link>},
        ]
    },
    {
        key: '4', label: <Link href={'/nextjs-docs/architecture'}>Architecture</Link>, children: [
            {key: "41", label: <Link href={'/nextjs-docs/architecture/accessibility'}>Accessibility</Link>},
            {key: "42", label: <Link href={'/nextjs-docs/architecture/fast-refresh'}>Fast Refresh</Link>},
            {key: "43", label: <Link href={'/nextjs-docs/architecture/nextjs-compiler'}>Next.js Compiler</Link>},
            {key: "44", label: <Link href={'/nextjs-docs/architecture/supported-browsers'}>Supported Browsers</Link>},
        ]
    },
    {
        key: '5', label: <Link href={'/nextjs-docs/community'}>Community</Link>, children: [
            {key: "51", label: <Link href={'/nextjs-docs/community/contribution-guide'}>Contribution Guide</Link>},
            {key: "52", label: <Link href={'/nextjs-docs/community/rspack'}>Rspack</Link>},
        ]
    }

];

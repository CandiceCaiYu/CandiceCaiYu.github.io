import Link from "next/link";
import {ReactNode} from "react";

interface MenuItem {
    key: string;
    label: ReactNode;
    children?: MenuItem[];
}

export const nextjsMenu: MenuItem[] = [
    {
        key: '1',
        label: <Link href={'/nextjs-docs/start'}>Getting Started</Link>,
        children: [
            {key: "11", label: <Link href={'/nextjs-docs/start/installation'}>Installation</Link>},
            {key: "12", label: <Link href={'/nextjs-docs/start/project-structure'}>Project Structure</Link>},
        ]
    },
    {
        key: '2',
        label: <Link href={'/nextjs-docs/building-your-application'}>Building Your Application</Link>,
        children: [
            {
                key: "21",
                label: <Link href={'/nextjs-docs/building-your-application/routing'}>Routing</Link>,
                children: [
                    {
                        key: "211",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/defining-routes'}>Defining
                            Routes</Link>
                    },
                    {
                        key: "212",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/pages'}>Pages</Link>
                    },
                    {
                        key: "213",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/layouts-and-templates'}>Layouts
                            and Templates</Link>
                    },
                    {
                        key: "214",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/linking-and-navigating'}>Linking
                            and Navigating</Link>
                    },
                    {
                        key: "215",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/error-handling'}>Error
                            Handling</Link>
                    },
                    {key: "216",
                        label: <Link href={'/nextjs-docs/building-your-application/routing/loading-ui-and-streaming'}>Loading
                            UI and Streaming</Link>
                    },
                    {key: "217", label: "Redirecting"},
                    {key: "218", label: "Route Groups"},
                    {key: "219", label: "Project Organization"},
                    {key: "2101", label: "Dynamic Routes"},
                    {key: "2102", label: "Parallel Routes"},
                    {key: "2103", label: "Intercepting Routes"},
                    {key: "2104", label: "Route Handlers"},
                    {key: "2105", label: "Middleware"},
                    {key: "2106", label: "Internationalization"},

                ]
            },
            {
                key: "22", label: "Data Fetching", children: [
                    {key: "221", label: "Data Fetching and Caching"},
                    {key: "222", label: "Server Actions and Mutations"},
                    {key: "223", label: "Incremental Static Regeneration(ISR)"},
                ]
            },
            {
                key: "23", label: "Rendering", children: [
                    {key: "231", label: "Server Components"},
                    {key: "232", label: "Client Components"},
                    {key: "233", label: "Composition Patterns"},
                    {key: "234", label: "Partial Prerendering"},
                    {key: "235", label: "Runtime"},
                ]
            },
            {key: "24", label: "Caching"},
            {
                key: "25", label: "Styling", children: [
                    {key: "251", label: "CSS"},
                    {key: "252", label: "Tailwind CSS"},
                    {key: "253", label: "Sass"},
                    {key: "254", label: "CSS-in-JS"},
                ]
            },

            {
                key: "26", label: "Optimizing", children: [
                    {key: "261", label: "Images"},
                    {key: "262", label: "Videos"},
                    {key: "263", label: "Fonts"},
                    {key: "264", label: "Metadata"},
                    {key: "265", label: "Scripts"},
                    {key: "266", label: "Package Bundling"},
                    {key: "267", label: "Lazy Loading"},
                    {key: "268", label: "Analytics"},
                    {key: "269", label: "Instrumentation"},
                    {key: "2601", label: "OpenTelemetry"},
                    {key: "2602", label: "Static Assets"},
                    {key: "2603", label: "Third Party Libraries"},
                    {key: "2604", label: "Memory Usage"},
                ]
            },
            {
                key: "27", label: "Configuring", children: [
                    {key: "271", label: "TypeScript"},
                    {key: "272", label: "ESLint"},
                    {key: "273", label: "Environment Variables"},
                    {key: "274", label: "Absolute Imports and Module Path Aliases"},
                    {key: "275", label: "MDX"},
                    {key: "276", label: "src Directory"},
                    {key: "277", label: "Custom Server"},
                    {key: "278", label: "Draft Mode"},
                    {key: "279", label: "Content Security Policy"},
                    {key: "2701", label: "Debugging"},
                    {key: "2702", label: "Progressive Web Applications(PWA)"},
                ]
            },
            {
                key: "28", label: "Testing", children: [
                    {key: "281", label: "Vitest"},
                    {key: "282", label: "Jest"},
                    {key: "283", label: "Playwright"},
                    {key: "284", label: "Cypress"},
                ]
            },
            {key: "29", label: "Authentication"},
            {
                key: "2901", label: "Deploying", children: [
                    {key: "29011", label: "Production Checklist"},
                    {key: "29012", label: "Static Exports"},
                    {key: "29013", label: "Multi-Zones"},
                ]
            },
            {
                key: "2902", label: "Upgrading", children: [
                    {key: "29021", label: "Codemods"},
                    {key: "29022", label: "Version 15"},
                    {key: "29023", label: "Version 14"},
                    {key: "29024", label: "App Router Migration"},
                    {key: "29025", label: "Migrating from Create React App"},
                    {key: "29026", label: "Migrating from Vite"},
                ]
            },
            {key: "2903", label: "Examples"},
        ]
    },
    {
        key: '3', label: 'API Reference', children: [
            {
                key: "31", label: "Components", children: [
                    {key: "311", label: "Font"},
                    {key: "312", label: "<Form>"},
                    {key: "313", label: "<Image>"},
                    {key: "314", label: "<Link>"},
                    {key: "315", label: "<Script>"},
                ]
            },
            {
                key: "32", label: "File Conventions", children: [
                    {key: "321", label: "default.js"},
                    {key: "322", label: "error.js"},
                    {key: "323", label: "instrumentation.js"},
                    {key: "324", label: "layout.js"},
                    {key: "325", label: "loading.js"},
                    {key: "326", label: "mdx-components.js"},
                    {key: "327", label: "middleware.js"},
                    {key: "328", label: "not-found.js"},
                    {key: "329", label: "page.js"},
                    {key: "3201", label: "route.js"},
                    {key: "3202", label: "Route Segment Config"},
                    {key: "3203", label: "template.js"},
                    {
                        key: "3204", label: "Metadata Files", children: [
                            {key: "32041", label: "favicon, icon, and apple-icon"},
                            {key: "32042", label: "manifest.json"},
                            {key: "32043", label: "opengraph-image and twitter-image"},
                            {key: "32044", label: "robots.txt"},
                            {key: "32045", label: "sitemap.xml"},
                        ]
                    },

                ]
            },
            {
                key: "33", label: "Functions", children: [
                    {key: "331", label: "connection"},
                    {key: "332", label: "cookies"},
                    {key: "333", label: "draftMode"},
                    {key: "334", label: "fetch"},
                    {key: "335", label: "generateImageMetadata"},
                    {key: "336", label: "generateMetadata"},
                    {key: "337", label: "generateSitemaps"},
                    {key: "338", label: "generateStaticParams"},
                    {key: "339", label: "generateViewport"},
                    {key: "3301", label: "headers"},
                    {key: "3302", label: "ImageResponse"},
                    {key: "3303", label: "NextRequest"},
                    {key: "3304", label: "NextResponse"},
                    {key: "3305", label: "notFound"},
                    {key: "3306", label: "permanentRedirect"},
                    {key: "3307", label: "redirect"},
                    {key: "3308", label: "revalidatePath"},
                    {key: "3309", label: "unstable_after"},
                    {key: "33001", label: "unstable_cache"},
                    {key: "33002", label: "unstable_notStore"},
                    {key: "33003", label: "unstable_rethrow"},
                    {key: "33004", label: "unstable_redirect"},
                    {key: "33005", label: "useParams"},
                    {key: "33006", label: "usePathname"},
                    {key: "33007", label: "useReportWebVitals"},
                    {key: "33008", label: "useRouter"},
                    {key: "33009", label: "useSearchParams"},
                    {key: "330001", label: "useSelectedLayoutSegment"},
                    {key: "330002", label: "useSelectedLayoutSegments"},
                    {key: "330003", label: "userAgent"},
                ]
            },
            {
                key: "34", label: "next.config.js Options", children: [
                    {key: "341", label: "appDir"},
                    {key: "342", label: "assetPrefix"},
                    {key: "343", label: "basePath"},
                    {key: "344", label: "compress"},
                    {key: "345", label: "crossOrigin"},
                    {key: "346", label: "cssChunking"},
                    {key: "347", label: "devIndicator"},
                    {key: "348", label: "distDir"},
                    {key: "349", label: "env"},
                    {key: "3401", label: "eslint"},
                    {key: "3402", label: "expireTime"},
                    {key: "3403", label: "exportPathMap"},
                    {key: "3404", label: "generateBuildId"},
                    {key: "3405", label: "generateEtags"},
                    {key: "3406", label: "headers"},
                    {key: "3407", label: "httpAgentOptions"},
                    {key: "3408", label: "images"},
                    {key: "3409", label: "cacheHandler"},
                    {key: "34001", label: "logging"},
                    {key: "34002", label: "mdxRs"},
                    {key: "34003", label: "onDemandEntries"},
                    {key: "34004", label: "optimizePackageImports"},
                    {key: "34005", label: "output"},
                    {key: "34006", label: "pageExtensions"},
                    {key: "34007", label: "poweredByHeader"},
                    {key: "34008", label: "ppr"},
                    {key: "34009", label: "productionBrowserSourceMaps"},
                    {key: "340001", label: "reactCompiler"},
                    {key: "340002", label: "reactMaxHeadersLength"},
                    {key: "340003", label: "reactStrictMode"},
                    {key: "340004", label: "redirects"},
                    {key: "340005", label: "rewrites"},
                    {key: "340006", label: "sassOptions"},
                    {key: "340007", label: "serverActions"},
                    {key: "340008", label: "serverComponentsHmrCache"},
                    {key: "340009", label: "serverExternalPackages"},
                    {key: "3400001", label: "staleTimes"},
                    {key: "3400002", label: "staticGeneration"},
                    {key: "3400003", label: "trailingSlash"},
                    {key: "3400004", label: "transpilePackages"},
                    {key: "3400005", label: "turbo"},
                    {key: "3400006", label: "typedRoutes"},
                    {key: "3400007", label: "typescript"},
                    {key: "3400008", label: "urlImports"},
                    {key: "3400009", label: "useLightningcss"},
                    {key: "34000001", label: "webpack"},
                    {key: "34000002", label: "webVitalsAttribution"},
                ]
            },
            {
                key: "35", label: "CLI", children: [
                    {key: "351", label: "create-next-app"},
                    {key: "352", label: "next CLI"},
                ]
            },
            {key: "36", label: "Edge Runtime"},
        ]
    },
    {
        key: '4', label: 'Architecture', children: [
            {key: "41", label: "Accessibility"},
            {key: "42", label: "Fast Refresh"},
            {key: "43", label: "Next.js Compiler"},
            {key: "44", label: "Supported Browsers"},
            {key: "45", label: "Turbopack"},
        ]
    },
    {
        key: '5', label: 'Community', children: [
            {key: "51", label: "Contribution Guide"},
        ]
    }

];

import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["en"],
  defaultLocale: "en",
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips certain folders
  // such as "api", and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|robots|.*\\..*).*)"],
}

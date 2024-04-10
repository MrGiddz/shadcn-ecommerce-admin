import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  apiRoutes: ['/(api|trpc)(.*)'],
  publicRoutes: ["/api/:path*"],
  debug: false,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

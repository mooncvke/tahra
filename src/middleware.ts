import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fi'],
 
  // Used when no locale matches
  defaultLocale: 'fi'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fi|en)/:path*']
};
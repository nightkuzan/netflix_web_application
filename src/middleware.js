import { NextResponse } from "next/server";
import { i18n } from "@configs/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return;
  }

  const pathnameParts = pathname.split("/");
  const localeInPath = pathnameParts[1];

  if (i18n.locales.includes(localeInPath)) {
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${i18n.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};

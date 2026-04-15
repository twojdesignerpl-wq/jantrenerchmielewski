import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { ADMIN_EMAILS } from "@/lib/admin/config";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Refresh auth token — required by Supabase SSR
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  if (isAdminRoute) {
    const isAllowedAdmin =
      user &&
      (ADMIN_EMAILS as readonly string[]).includes(
        user.email?.toLowerCase() ?? "",
      );

    if (isLoginPage) {
      // Already logged in as admin — redirect to dashboard
      if (isAllowedAdmin) {
        const url = request.nextUrl.clone();
        url.pathname = "/admin";
        return NextResponse.redirect(url);
      }
    } else {
      // Protected admin route — must be authenticated admin
      if (!isAllowedAdmin) {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }
    }

    // Prevent indexing admin routes
    supabaseResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

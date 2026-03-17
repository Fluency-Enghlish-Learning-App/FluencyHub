import { ComponentType, LazyExoticComponent, lazy } from "react";
import MainLayout from "@/shared/layouts/MainLayout";
import LandingLayout from "@/shared/layouts/LandingLayout";
import LandingLayoutV2 from "@/features/landing-v2/layouts/LandingLayoutV2";

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<{ children: React.ReactNode }>;
}

// Lazy load pages
const HomePage = lazy(() => import("@/features/landing-v2/pages/HomePage"));
const CoursesPage = lazy(
  () => import("@/features/landing-v2/pages/CoursesPage"),
);
const ReportSupportPage = lazy(
  () => import("@/features/landing-v2/pages/ReportSupportPage"),
);
const HelpCenterPage = lazy(
  () => import("@/features/info/pages/HelpCenterPage"),
);
const TermsPage = lazy(
  () => import("@/features/landing-v2/pages/TermsOfServicePage"),
);
const PrivacyPage = lazy(
  () => import("@/features/landing-v2/pages/PrivacyPage"),
);
const ContactPage = lazy(() => import("@/features/info/pages/ContactPage"));

const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    layout: LandingLayoutV2,
  },
  {
    path: "/courses",
    element: CoursesPage,
    layout: LandingLayoutV2,
  },
  {
    path: "/support",
    element: ReportSupportPage,
    layout: LandingLayoutV2,
  },
  {
    path: "/help",
    element: HelpCenterPage,
    layout: LandingLayout,
  },
  {
    path: "/terms",
    element: TermsPage,
    layout: LandingLayoutV2,
  },
  {
    path: "/privacy",
    element: PrivacyPage,
    layout: LandingLayoutV2,
  },
  {
    path: "/contact",
    element: ContactPage,
    layout: LandingLayoutV2,
  },
];

export { publicRoutes };

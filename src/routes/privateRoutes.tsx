import AccountLayout from "@/layouts/AccountLayout.tsx";

export default function privateRoutes() {
  return {
    element: <AccountLayout />,
    children: [
      {
        path: "/profile",
        async lazy() {
          const { Profile } = await import("@/pages/profile");
          return { Component: Profile };
        }
      }
    ]
  };
}

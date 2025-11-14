import { useEffect } from "react";

export default function StorefrontRedirect() {
  useEffect(() => {
    const path = window.location.pathname;
    const trimmed = path.replace(/^\/storefront/, ""); // remove initial /storefront
    const target = `https://storefront.swiftree.app/storefront${trimmed}`;

    window.location.href = target;
  }, []);

  return <div>Redirecting...</div>;
}

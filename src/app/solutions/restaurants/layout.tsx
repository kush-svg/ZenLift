import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Restaurant Direct Ordering Menus & Google Maps SEO | ZenLift",
  description: "Drive local walk-ins and save up to 30% Swiggy/Zomato commission. We build beautiful, lightning-fast digital menus, QR review engines, and WhatsApp coupon promo systems in Faridabad & Delhi NCR.",
  openGraph: {
    title: "Restaurant Direct Ordering Menus & Google Maps SEO | ZenLift",
    description: "Drive local walk-ins and save up to 30% Swiggy/Zomato commission. We build beautiful, lightning-fast digital menus, QR review engines, and WhatsApp coupon promo systems in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function RestaurantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

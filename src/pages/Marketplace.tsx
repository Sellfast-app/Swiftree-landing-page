import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  ExternalLink,
  Heart,
  LocateFixed,
  MapPin,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  Store,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Category = {
  label: string;
  icon: string;
};

type Vendor = {
  id: number;
  name: string;
  banner: string;
  rating: number;
  reviews: number;
  eta: string;
  category: string;
  href: string;
};

const categories: Category[] = [
  { label: "Browse All", icon: "🛍️" },
  { label: "Restaurants", icon: "🍽️" },
  { label: "Shops", icon: "🏬" },
  { label: "Beauty & Cosmetics", icon: "🧴" },
  { label: "Pharmacies", icon: "🏥" },
  { label: "Local Markets", icon: "🧺" },
  { label: "Packages", icon: "🎁" },
];

const vendors: Vendor[] = [
  {
    id: 5,
    name: "Item7 Go",
    banner: "/PHOTO-2026-07-24-15-42-25.jpg",
    rating: 4.4,
    reviews: 33,
    eta: "20 - 35 mins",
    category: "Party Rice · Shawarma",
    href: "https://wa.me/2348062183049?text=I%20want%20to%20order%20food%20from%20item%207go",
  },
  {
    id: 1,
    name: "Royal Spoon",
    banner: "/PHOTO-2026-07-24-15-36-22.jpg",
    rating: 4.8,
    reviews: 42,
    eta: "20 - 35 mins",
    category: "Noodles · Shawarma · Spaghetti",
    href: "https://storefront.swiftree.app/storefront/a689d6a9-b240-441e-8bd6-8743c408621e",
  },
  {
    id: 2,
    name: "Crave Corner",
    banner: "/PHOTO-2026-07-24-15-36-43.jpg",
    rating: 4.6,
    reviews: 38,
    eta: "15 - 30 mins",
    category: "Shakes · Pastries · Toasties",
    href: "https://storefront.swiftree.app/storefront/4e371638-d114-423b-8df9-56d1fe8b6ab3",
  },
  {
    id: 3,
    name: "Tommyart's Place",
    banner: "/PHOTO-2026-07-24-15-37-52.jpg",
    rating: 4.7,
    reviews: 51,
    eta: "25 - 40 mins",
    category: "Shawarma · Chicken · Grills",
    href: "https://storefront.swiftree.app/storefront/7244fc3a-5d97-4342-9b1c-0e6b6c29dda2",
  },
  {
    id: 4,
    name: "SM Bites & Blaze",
    banner: "/PHOTO-2026-07-24-15-39-28.jpg",
    rating: 4.5,
    reviews: 29,
    eta: "30 - 45 mins",
    category: "Grills · Pepper Soup · Pasta",
    href: "https://storefront.swiftree.app/storefront/3a94761a-3f8e-4599-86ea-0029ecdc9e46",
  },
  {
    id: 6,
    name: "Phunmite",
    banner: "/WhatsApp Image 2026-07-31 at 08.05.05.jpeg",
    rating: 4.5,
    reviews: 29,
    eta: "30 - 45 mins",
    category: "Cakes · Pastries · Cookies",
    href: "https://storefront.swiftree.app/storefront/f8641d80-7b57-438a-a9e6-257f396a2ce9",
  },
];

const filterOptions = ["Discounts", "Open Now", "Pickup", "Under 30 mins"];
const addressSuggestions = [
  "10 Okpara St, Ojo Lagos 1002101, Lagos Nigeria",
  "Redeem Camp, Lagos-Ibadan Expressway, Ogun Nigeria",
  "9 Ogunlana St, Egbeda, Lagos 102213, Lagos Nigeria",
  "38c Williams Onoh Street, Chevron, Lagos Nigeria",
  "Eti Osa, Lagos Nigeria",
];

const topPicks = vendors.slice(0, 3);

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("Browse All");
  const [showFilters, setShowFilters] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressSearch, setAddressSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const visibleSuggestions = useMemo(() => {
    if (!addressSearch.trim()) return [];
    return addressSuggestions.filter((address) =>
      address.toLowerCase().includes(addressSearch.toLowerCase())
    );
  }, [addressSearch]);

  const filteredVendors = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return vendors;

    return vendors.filter((vendor) =>
      [vendor.name, vendor.category]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [searchQuery]);

  const filteredTopPicks = useMemo(() => {
    if (!searchQuery.trim()) return topPicks;
    const filteredIds = new Set(filteredVendors.map((vendor) => vendor.id));
    return topPicks.filter((vendor) => filteredIds.has(vendor.id));
  }, [filteredVendors, searchQuery]);

  const toggleFavorite = (vendorId: number) => {
    setFavorites((current) =>
      current.includes(vendorId)
        ? current.filter((id) => id !== vendorId)
        : [...current, vendorId]
    );
  };

  return (
    <main className="min-h-screen bg-[#FCFCFC] text-[#142013]">
      <header className="sticky top-0 z-30 border-b border-[#F0F0F0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1640px] items-center gap-3 px-4 py-4 md:px-10">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <img src="/lovable-uploads/logo1.png" alt="Swiftree" className="h-9 w-auto" />
            <span className="hidden text-xs text-[#A0A0A0] sm:block">Marketplace</span>
          </a>

          {/* <button
            type="button"
            onClick={() => setShowAddressModal(true)}
            className="hidden h-12 min-w-[280px] items-center justify-between rounded-lg border border-[#E9E9E9] bg-white px-4 text-sm text-[#3D466C] md:flex"
          >
            <span className="flex min-w-0 items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-[#4FCA6A]" />
              <span className="truncate">9 Ogunlana St, Egbeda...</span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-[#1D2433]" />
          </button> */}

          <div className="ml-auto hidden h-12 w-full max-w-[420px] items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-4 md:flex">
            <Search className="h-5 w-5 shrink-0 text-[#767676]" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#A0A0A0]"
              placeholder="Search stores..."
            />
          </div>

          {/* <Button
            type="button"
            variant="outline"
            onClick={() => setShowFilters(true)}
            className="hidden h-12 border-[#E9E9E9] bg-[#F7F7F7] text-[#3D466C] hover:bg-[#F2F2F2] md:inline-flex"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            All Filters
          </Button> */}

          {/* <Button type="button" variant="outline" className="hidden h-12 w-14 border-[#E9E9E9] md:inline-flex">
            <Heart className="h-5 w-5" />
          </Button>

          <Button type="button" variant="outline" className="h-11 w-11 border-[#E9E9E9] md:h-12 md:w-[72px]">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden text-[#3D466C] md:inline">0</span>
          </Button> */}

          {/* <Button type="button" variant="outline" className="ml-auto h-11 w-11 border-[#E9E9E9] md:hidden">
            <Search className="h-5 w-5" />
          </Button> */}
        </div>
      </header>

      <div className="mx-auto max-w-[1640px] px-4 py-4 md:px-10 md:py-7">
        {/* <nav className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category.label}
              onClick={() => setActiveCategory(category.label)}
              className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${
                activeCategory === category.label
                  ? "border border-[#4FCA6A] bg-white text-[#4FCA6A]"
                  : "bg-[#F4F4F4] text-[#3D466C]"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </nav> */}

        <div className="mt-4 flex h-12 items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-4 md:hidden">
          <Search className="h-5 w-5 shrink-0 text-[#767676]" />
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#A0A0A0]"
            placeholder="Search stores..."
          />
        </div>

        <section className="pt-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-normal md:text-3xl">Swiftree market place - Redemption city network</h1>
              <p className="mt-2 max-w-2xl text-sm text-[#6F756F] md:text-base">
                Browse selected stores currently growing on the Tree.
              </p>
            </div>
            {/* <Button
              type="button"
              variant="outline"
              onClick={() => setShowAddressModal(true)}
              className="hidden border-[#E9E9E9] md:inline-flex"
            >
              <MapPin className="mr-2 h-4 w-4 text-[#4FCA6A]" />
              Change Address
            </Button> */}
          </div>
        </section>

        <VendorSection
          title="Hand Picked For You"
          vendors={filteredTopPicks}
          favorites={favorites}
          onFavorite={toggleFavorite}
        />
        <VendorSection
          title="All Vendors"
          vendors={filteredVendors}
          favorites={favorites}
          onFavorite={toggleFavorite}
        />
      </div>

      {showFilters && <FilterPanel onClose={() => setShowFilters(false)} />}
      {showAddressModal && (
        <AddressModal
          addressSearch={addressSearch}
          suggestions={visibleSuggestions}
          onSearchChange={setAddressSearch}
          onClose={() => setShowAddressModal(false)}
        />
      )}
    </main>
  );
};

const VendorSection = ({
  title,
  vendors,
  favorites,
  onFavorite,
}: {
  title: string;
  vendors: Vendor[];
  favorites: number[];
  onFavorite: (vendorId: number) => void;
}) => (
  <section className="mt-8 border-t border-[#F2F2F2] pt-8 md:mt-12">
    <h2 className="text-lg font-semibold">{title}</h2>
    {vendors.length > 0 ? (
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            isFavorite={favorites.includes(vendor.id)}
            onFavorite={() => onFavorite(vendor.id)}
          />
        ))}
      </div>
    ) : (
      <div className="mt-7 rounded-lg border border-dashed border-[#DDE5DD] bg-white px-5 py-8 text-sm text-[#6F756F]">
        No stores match your search.
      </div>
    )}
  </section>
);

const VendorCard = ({
  vendor,
  isFavorite,
  onFavorite,
}: {
  vendor: Vendor;
  isFavorite: boolean;
  onFavorite: () => void;
}) => (
  <article className="overflow-hidden rounded-lg border border-[#F0F0F0] bg-white">
    <div className="relative mx-4 mt-4 aspect-[4/3] overflow-hidden rounded-lg bg-[#F5F5F5]">
      <img
        src={vendor.banner}
        alt={`${vendor.name} banner`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-white text-[#206730] shadow-sm">
        <Store className="h-7 w-7" />
      </div>
    </div>

    <div className="space-y-4 px-5 py-4">
      <div>
        <h3 className="flex items-center gap-2 text-base font-bold">
          {vendor.name}
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#10A144] text-[10px] text-white">✓</span>
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-[#7C827C]">{vendor.category}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#3D466C]">
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-[#FF9F2D] text-[#FF9F2D]" />
          {vendor.rating.toFixed(1)} <span className="text-[#A0A0A0]">({vendor.reviews})</span>
        </span>
        <span className="flex items-center gap-1">
          <Clock3 className="h-4 w-4 text-[#5967A8]" />
          {vendor.eta}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 border-t border-[#F5F5F5] px-5 py-4">
      <Button asChild className="h-10 flex-1 bg-[#4FCA6A] text-white hover:bg-[#45b85e]">
        <a href={vendor.href}>
          View Storefront
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <Button type="button" variant="outline" onClick={onFavorite} className="h-10 w-10 border-[#E9E9E9]">
        <Heart className={`h-5 w-5 ${isFavorite ? "fill-[#4FCA6A] text-[#4FCA6A]" : "text-[#445044]"}`} />
      </Button>
    </div>
  </article>
);

const FilterPanel = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-40 bg-black/10 md:bg-transparent">
    <aside className="absolute right-0 top-0 h-full w-full max-w-[430px] border-l border-[#F0F0F0] bg-white p-6 shadow-xl md:right-10 md:top-[102px] md:h-auto md:rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Filter</h3>
        <button type="button" onClick={onClose} aria-label="Close filters">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {filterOptions.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-4 text-sm">
            <span className="h-5 w-5 rounded border border-[#E9E9E9]" />
            <span>{option}</span>
          </label>
        ))}
        <button type="button" className="flex w-full items-center justify-between text-sm">
          <span className="flex items-center gap-4">
            <span className="h-5 w-5 rounded border border-[#E9E9E9]" />
            Delivery Fee
          </span>
          <ChevronRight className="h-4 w-4" />
        </button>
        <button type="button" className="flex w-full items-center justify-between text-sm">
          <span className="flex items-center gap-4">
            <span className="h-5 w-5 rounded border border-[#E9E9E9]" />
            Ratings
          </span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-7 flex justify-between">
        <Button type="button" variant="outline" className="border-0 bg-[#F5F5F5] text-[#5E5E5E]">
          Reset
        </Button>
        <Button type="button" onClick={onClose} className="bg-[#4FCA6A] text-white hover:bg-[#45b85e]">
          Apply Filters
        </Button>
      </div>
    </aside>
  </div>
);

const AddressModal = ({
  addressSearch,
  suggestions,
  onSearchChange,
  onClose,
}: {
  addressSearch: string;
  suggestions: string[];
  onSearchChange: (value: string) => void;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#182118]/25 px-4 backdrop-blur-sm">
    <section className="w-full max-w-[760px] overflow-hidden rounded-lg bg-white shadow-2xl">
      <header className="flex items-start justify-between border-b border-[#F2F2F2] px-6 py-5">
        <div>
          <h3 className="text-lg font-bold">Delivery Address</h3>
          <p className="mt-1 text-sm text-[#A0A0A0]">Provide your delivery address to customize your experience</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close address modal">
          <X className="h-5 w-5" />
        </button>
      </header>

      <div className="space-y-7 px-6 py-8">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#28A852]" />
          <Input
            value={addressSearch}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Enter a new address"
            className="h-16 rounded-lg border-[#E0E0E0] pl-14 pr-12 text-lg focus-visible:ring-[#4FCA6A]"
          />
          {addressSearch && (
            <button type="button" onClick={() => onSearchChange("")} aria-label="Clear address search" className="absolute right-5 top-1/2 -translate-y-1/2">
              <X className="h-5 w-5 text-[#28A852]" />
            </button>
          )}
        </div>

        <button type="button" className="flex items-start gap-4 text-left">
          <LocateFixed className="mt-1 h-6 w-6 text-[#4FCA6A]" />
          <span>
            <span className="block text-base font-semibold text-[#28A852]">Use your current location</span>
            <span className="mt-2 block text-sm text-[#A0A0A0]">9 Ogunlana St, Egbeda, Lagos 102213, Lagos, Nigeria</span>
          </span>
        </button>

        {suggestions.length > 0 && (
          <div className="max-h-[240px] space-y-5 overflow-y-auto pr-2">
            {suggestions.map((suggestion, index) => (
              <button key={`${suggestion}-${index}`} type="button" className="flex w-full items-center gap-5 text-left text-lg">
                <MapPin className="h-6 w-6 shrink-0 fill-[#35A75C] text-[#35A75C]" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <footer className="flex flex-col gap-3 border-t border-[#F2F2F2] px-6 py-5 sm:flex-row sm:items-center sm:justify-end">
        <Button type="button" variant="ghost" className="text-[#A0A0A0]">
          <MapPin className="mr-2 h-5 w-5" />
          Save new address
        </Button>
        <Button type="button" className="h-12 bg-[#4FCA6A] px-7 text-white hover:bg-[#45b85e]">
          Login to save address
        </Button>
      </footer>
    </section>
  </div>
);

export default Marketplace;

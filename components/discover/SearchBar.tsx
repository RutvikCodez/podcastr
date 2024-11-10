"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import Search from "@/public/icons/search.svg";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const debounceValue = useDebounce(search, 500);
  useEffect(() => {
    if (debounceValue) {
      router.push(`/discover?search=${debounceValue}`);
    } else if (!debounceValue && pathname === "/discover") {
      router.push("/discover");
    }
  }, [router, pathname, debounceValue]);

  return (
    <div className="relative mt-8 block">
      <Input
        className="text-3 placeholder:text-3 bg-black-1 rounded-accent-1 placeholder:text-gray-1 border-none text-gray-1 py-6 pl-12 focus-visible:ring-offset-orange-1"
        placeholder={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onLoad={() => setSearch("")}
      />
      <Search className="absolute left-4 top-3.5" />
    </div>
  );
};

export default SearchBar;

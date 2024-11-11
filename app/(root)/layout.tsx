import LeftSidebar from "@/components/utils/LeftSidebar";
import MobileNav from "@/components/utils/MobileNav";
import RightSidebar from "@/components/utils/RightSidebar";
import Logo from "@/public/icons/logo.svg";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="bg-black-3 grid grid-cols-[.4fr,1.2fr,.4fr] min-h-screen text-white-1 ">
        <LeftSidebar />
        <section className="flex flex-col px-14 py-8 max-md:p-4">
          <div className="mx-auto flex w-full max-w-5xl flex-col">
            <div className="flex items-center justify-between md:hidden">
              <Logo />
              <MobileNav />
            </div>
            <div className="flex flex-col">
              <Toaster position="top-right" richColors />
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
      {/* <PodcastPlayer /> */}
    </div>
  );
}

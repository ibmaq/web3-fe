import FeedsManager from "@/app/components/FeedsManager";
import HeaderComp from "@/app/components/HeaderComp";
import TopNav from "@/app/components/TopNav";

export default function Home() {
  return (
    <main className="cursor-default">
      <TopNav />
      <div className="p-8 flex flex-col gap-4">
        <HeaderComp />
        <FeedsManager />
      </div>
    </main>
    // <footer className=""></footer>
  );
}

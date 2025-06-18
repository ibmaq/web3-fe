import FeedsManager from "./components/FeedsManager";
import HeaderComp from "./components/HeaderComp";
import TopNav from "./components/TopNav";

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

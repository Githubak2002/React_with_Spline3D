import Spline from "@splinetool/react-spline";

export default function Spline_home() {
  return (
    <main className="h-[75%]">
      <Spline
        className="hidden sm:flex"
        scene="https://prod.spline.design/v7KPZwKX2TvHLjqh/scene.splinecode"
      />

      <Spline
        className="flex sm:hidden"
        scene="https://prod.spline.design/BKKi-Vyykaf1icCt/scene.splinecode"
      />
    </main>
  );
}

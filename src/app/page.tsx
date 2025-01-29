import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <Image
          src="/image.png"
          alt="Next.js logo"
          width={450}
          height={455}
          priority
          style={{ borderRadius: "3%"}}
        />
        <h1 style={{ fontFamily: "sans-serif", fontSize: "2rem", marginTop: "1rem"}}>
          Siro
        </h1>
        </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="/mini-game.svg"
        alt="Mini Game Background"
        layout="fill"
        objectFit="contain"
      />
      <button
        popoverTarget="mini-game-popover"
        className="absolute w-80 h-56"
        style={{ bottom: "20%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="bg-[#fd3c96] w-1/6 h-1/4 blur-3xl animate-pulse absolute"
        popover="auto"
        id="mini-game-popover"
      >
        خوش آمدید
      </div>
    </main>
  );
}

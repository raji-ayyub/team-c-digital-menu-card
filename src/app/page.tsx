import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center">
        {/* Crest Logo (Replace 'your-logo.png' with an actual logo when available) */}
        <div className="flex gap-4">
          <Image className="w-[2rem]" src="/Cropped.png" alt="Crest Logo" width={200} height={150} />
          <h1 className="text-4xl font-bold mt-4">Welcome to Crest</h1>
        </div>
        <p className="text-lg text-gray-700 mt-2">Our digital menu platform is coming soon!</p>

        {/* Construction Illustration (Optional) */}
        <h1 className="text-[3rem] mt-12 mb-[5rem] text-center">🚧</h1>
        <div className="mt-6 px-6 py-3 bg-yellow-200 text-yellow-900 rounded-md">
          🚧 Page Under Construction 🚧
        </div>

        {/* COMPONENTS TEST */}
        <Button variant="primary" size="sm" >hfyhjg</Button>
      </div>
    </main>
  );
}

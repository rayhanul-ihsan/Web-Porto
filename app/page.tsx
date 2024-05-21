import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen realtive">
      <div
        className="w-full h-full flex items-center bg bg-cover bg-center"
        style={{ backgroundImage: "url('/main-bg.webp')" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold mr-1">
            Hello, I’m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block text-justify">
            I have always pursued my dream to become a professional Frontend
            Developer. I always learn day by day rather my dreams come true, and
            always meet every challenge.
            <br />
            My specialties include quickly learning new skills and programming
            languages, problem solving, responsive design principles, and
            website optimization. So far I have JavaScript, TypeScript,
            Bootstrap, React, React Native, Chakra Ui, TailwindCSS under my
            belt. I'm still enthusiastically grabbing onto any other programming
            languages, frameworks, or principles I can integrate into the coding
            web in my head.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 mx-auto">
            <Link
              href="/my-skills"
              className="rounded-[20px] grup relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] grup relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[-1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] grup relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[-1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex z-[20] right-5  flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] grup bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] grup bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] grup bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          width={300}
          height={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto ">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}

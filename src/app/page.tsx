import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { Tile } from "./_components/tile";
// import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Image from "next/image";
import { Game } from "./_components/game";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Re<span className="text-[hsl(280,100%,70%)]">gen</span>esis
        </h1>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl tracking-tight text-[hsl()]">
            I want to be red
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          {/* <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p> */}

          {/* <div>
            <Image
              src="/test_image.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/test_image.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div> */}

          <div>
            <Game />
          </div>

          {/* <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div> */}
        </div>
        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }

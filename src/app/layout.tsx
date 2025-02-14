import type { Metadata } from "next";

import {Inter} from "next/font/google"
import "./globals.css";

import {NuqsAdapter} from "nuqs/adapters/next/app";
import { ConvexClientProvider } from "@/components/convex-client-provider";

import { Toaster } from "@/components/ui/sonner";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

const inter =  Inter ({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Editly",
  description: "Create, edit, and collaborate on documents in real time.",
  icons: {
    icon: "/logo.svg", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster/>
            {children}
        </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

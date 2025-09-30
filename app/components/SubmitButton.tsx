// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Loader2 } from "lucide-react";
// import Image from "next/image";
// import { useFormStatus } from "react-dom";
// import GithubLogo from "@/public/github.svg";
// import GoogleLogo from "@/public/google.svg";
// interface iAppProps {
//   text: string;
//   variant?:
//     | "default"
//     | "destructive"
//     | "outline"
//     | "secondary"
//     | "ghost"
//     | "link"
//     | null
//     | undefined;

//   className?: string;
// }

// export function SubmitButton({ text, variant, className }: iAppProps) {
//   const { pending } = useFormStatus();

//   return (
//     <>
//       {pending ? (
//         <Button disabled variant="outline" className={cn("w-fit", className)}>
//           <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
//         </Button>
//       ) : (
//         <Button
//           variant={variant}
//           type="submit"
//           className={cn("w-fit", className)}
//         >
//           {text}
//         </Button>
//       )}
//     </>
//   );
// }

// type GitHubAuthButtonProps = { onClick?: () => void; };
// export function GitHubAuthButton({ onClick }: GitHubAuthButtonProps) {
//   const { pending } = useFormStatus();
//   return (
//     <>
//       {pending ? (
//         <Button variant="outline" className="w-full" disabled>
//           <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
//         </Button>
//       ) : (
//         <Button type="button" variant="outline" className="w-full" onClick={onClick}>
//           <Image
//             src={GithubLogo}
//             className="size-4 mr-2 dark:invert"
//             alt="Google Logo"
//           />
//           Sign in with GitHub
//         </Button>
//       )}
//     </>
//   );
// }

// type GoogleAuthButtonProps = { onClick?: () => void; };
// export function GoogleAuthButton({ onClick }: GoogleAuthButtonProps) {
//   const { pending } = useFormStatus();
//   return (
//     <>
//       {pending ? (
//         <Button variant="outline" className="w-full" disabled>
//           <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
//         </Button>
//       ) : (
//         <Button type="button" variant="outline" className="w-full" onClick={onClick}>
//           <Image src={GoogleLogo} className="size-4 mr-2" alt="Google Logo" />
//           Sign in with Google
//         </Button>
//       )}
//     </>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import GithubLogo from "@/public/github.svg";
import GoogleLogo from "@/public/google.svg";
import { useTransition } from "react";
import { signIn } from "next-auth/react";
interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;

  className?: string;
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button
          variant={variant}
          type="submit"
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      className="w-full"
      disabled={isPending}
      onClick={() => startTransition(() => {signIn("github")})}
    >
      {isPending ? (
        <>
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
        </>
      ) : (
        <>
          <Image
            src={GithubLogo}
            className="size-4 mr-2 dark:invert"
            alt="GitHub Logo"
          />
          Sign in with GitHub
        </>
      )}
    </Button>
  );
}

export function GoogleAuthButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      className="w-full"
      disabled={isPending}
      onClick={() => startTransition(() => {signIn("google")})}
    >
      {isPending ? (
        <>
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
        </>
      ) : (
        <>
          <Image src={GoogleLogo} className="size-4 mr-2" alt="Google Logo" />
          Sign in with Google
        </>
      )}
    </Button>
  );
}

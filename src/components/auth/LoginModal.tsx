import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  
    const handleLogin = () => {
      signIn("google", {
        callbackUrl: "/dashboard",
        redirect: true,
      });
    };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to quick chat</DialogTitle>
          <DialogDescription>
            Quick chat securely and make new friends
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleLogin} variant={"outline"}>
          <Image
            src="/images/google.png"
            className="mr-4"
            width={25}
            height={25}
            alt="google-logo"
          />
          Continue with google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

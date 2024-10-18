"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/chatSchema";
import { Input } from "../ui/input";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { GROUP_CHAT_URL } from "@/lib/apiEndPoints";

const CreateChat = ({user}:{user: CustomUser}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async(payload: createChatSchemaType) => {
      try {
        setLoading(true);
      const {data} = await axios.post(GROUP_CHAT_URL,payload, {
        headers: {
          Authorization: user?.token
        }
      })

      if(data?.message){
        setLoading(false);
        setOpen(false);
        toast.success(data?.message);

      }

      
      } catch (error) {
        console.log(error)
        if(error instanceof AxiosError){
          toast.error(error.message);
        }
        else{
          toast.error("something went wrong");
        }
      }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Group</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create you new chat?</DialogTitle>
          <DialogDescription>Invite your friends and chat</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <Input placeholder = "Enter chat title" {...register("title")}/>
                <span className="text-red-500">{errors?.title?.message}</span>
            </div>

            <div className="mt-4">
                <Input placeholder = "Enter chat passcode" {...register("passcode")}/>
                <span className="text-red-500">{errors?.title?.message}</span>
            </div>

            <div className="mt-4">
                <Button className="w-full" disabled={loading}>{loading? "loading..." : "submit"}</Button>
            </div>

        </form>

      </DialogContent>
    </Dialog>
  );
};

export default CreateChat;

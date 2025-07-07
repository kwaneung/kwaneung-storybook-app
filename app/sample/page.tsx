"use client";

import { ChevronRightIcon, GitBranchIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-bold">Button Component</span>
      <div className="flex flex-col items-start gap-2">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="secondary" size="icon" className="size-8">
          <ChevronRightIcon />
        </Button>
        <Button variant="outline" size="sm">
          <GitBranchIcon /> New Branch
        </Button>
        <Button size="sm" disabled>
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
    </div>
  );
};

export default Page;

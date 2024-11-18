import { ToolbarMenuItemWrapper } from "../toolbar-menu/toolbar-menu-item-wrapper";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRecoilState } from 'recoil';
import { isUnderlinedState } from '@/state';
import { Underline } from 'lucide-react';

export const IsUnderlined = () => {
    return <UnderlinedPicker />;
};

function UnderlinedPicker() {
  const [isUnderlined, setIsUnderlined] = useRecoilState(isUnderlinedState);

  return (
    <Button
        className={cn(isUnderlined ? " bg-black/20 text-black" : "")}
        onClick={() => setIsUnderlined(isudln => !isudln)}
        variant={"menuItem"}
        size={"xs"}
    >
      <Underline />
    </Button>
);
}
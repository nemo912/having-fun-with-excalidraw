"use client";

import { useRecoilState } from "recoil";
// import { ColorItem } from "./color-item";
import { TextureItem } from "../texture-item";
import { textureState } from "@/state";
import { Separator } from "../separator";

const textures = ["solid", "hachure", "zigzag", "dots", "dashed"];

export const Picker = () => {
    const [activeTexture, setActiveTexture] = useRecoilState(textureState);

    const onClick = (newTexture: string) => {
        setActiveTexture(newTexture);
    };
    return (
        <div className="flex items-center justify-evenly py-1">
            {textures.map((texture, idx) => (
                <TextureItem
                    key={idx}
                    texture={texture}
                    onClick={onClick}
                    size="sm"
                    active={activeTexture === texture}
                />
            ))}

            <Separator className={"w-[1px] h-6"} />

            <TextureItem texture={activeTexture} size="lg" />
        </div>
    );
};

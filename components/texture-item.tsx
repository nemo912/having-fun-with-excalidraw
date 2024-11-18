"use client";

import { cn } from "@/lib/utils";
import rough from 'roughjs';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { backgroundColorState } from '@/state';

interface TextureItemProps {
    texture: string;
    onClick?: (value: string) => void;
    size: "sm" | "lg";
    active?: boolean;
}

export const TextureItem = ({ texture, onClick, size = "sm", active }: TextureItemProps) => {
    const [bgColor, _] = useRecoilState(backgroundColorState);
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        const roughSvg = rough.svg(svgRef.current as SVGSVGElement);
        svgRef.current?.replaceChildren(roughSvg.rectangle(0, 0, 20, 20, { fillStyle: texture, fill: bgColor, stroke: 'none' }));
    });

    return (
        <button
            onClick={onClick ? () => onClick(texture) : undefined}
            style={{}}
            className={cn(
                "rounded-sm transition duration-150 relative",
                size === "sm" ? "w-5 h-5" : "w-7 h-7",
                active !== undefined ? (active ? "color-item-active" : "color-item") : ""
            )}
        >
            <svg className={cn("w-full h-full")} viewBox="0 0 20 20" ref={svgRef}></svg>
        </button>
    );
};

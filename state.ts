"use client";

import { atom, selector } from "recoil";

// Types
import {
    CursorStateType,
    FontFamilyType,
    FontSizeType,
    StrokeStyleType,
    StrokeWidthType,
    TextAlignType,
    ToolType,
} from "./types";

export const backgroundColorState = atom({
    key: "backgroundColor",
    default: "#ebebeb",
});

/* just for my new tool! */
export const textureState = atom({
    key: 'texture',
    default: 'solid',
});

export const strokeColorState = atom({
    key: "strokeColorState",
    default: "#1e1e1e",
});

export const strokeWidthState = atom<StrokeWidthType>({
    key: "strokeWidthState",
    default: "thin",
});

export const StrokeStyleState = atom<StrokeStyleType>({
    key: "strokeStyleState",
    default: "solid",
});

export const toolState = atom<ToolType>({
    key: "toolState",
    default: "select",
});

export const cursorState = atom<CursorStateType>({
    key: "cursorState",
    default: "default",
});

export const toolCursorState = atom<{ tool: ToolType; cursor: CursorStateType }>({
    key: "toolCursorState",
    default: { tool: "select", cursor: "default" },
});

export const fontSizeState = atom<FontSizeType>({
    key: "fontSizeState",
    default: 18,
});

export const fontFamilyState = atom<FontFamilyType>({
    key: "fontFamilyState",
    default: "__Epilogue_063c31, __Epilogue_Fallback_063c31",
});

export const textAlignState = atom<TextAlignType>({
    key: "textAlignState",
    default: "left",
});

/* for underline text */
export const isUnderlinedState = atom({
    key: "underlineState",
    default: false,
});

// export const selectionBounds = selector({
//     key: "SelectionBounds",
//     get: ({get}) => {
//         const layers = get(layerState);
//         const selectedLayers = layer.filter(layer => layer.isSelected)
//         return boundingBox(selece)
//     }
// })

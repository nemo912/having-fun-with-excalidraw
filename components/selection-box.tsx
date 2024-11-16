import { adjustElementCoordinates } from "@/lib/utils";
import { DrawnElementType, Position, XYWH } from "@/types";
import React, { memo, useCallback, useMemo } from "react";

type SelectionBoxProps = {
    selectedElementId: number;
    drawnElements: DrawnElementType[];
    panOffset: { x: number; y: number };
    resizeHandler: (event: React.MouseEvent, position: Position) => void;
    onMouseUp: (event: React.MouseEvent) => void;
};

function boundingBox(layers: DrawnElementType, panOffset: { x: number; y: number }): XYWH | null {
    if (!layers) return null;

    let left, right, top, bottom;

    if (layers.shape === "pencil" && layers.points) {
        // Handle freehand path
        let minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity;

        for (let point of layers.points) {
            minX = Math.min(minX, point.x);
            minY = Math.min(minY, point.y);
            maxX = Math.max(maxX, point.x);
            maxY = Math.max(maxY, point.y);
        }

        left = minX;
        right = maxX;
        top = minY;
        bottom = maxY;
    } else {
        // Handle shapes
        const { x1, x2, y1, y2 } = adjustElementCoordinates(layers);

        left = x1;
        right = x2;
        top = y1;
        bottom = y2;
    }

    return {
        x: left - 5 + panOffset.x,
        y: top - 5 + panOffset.y,
        width: right - left + 10,
        height: bottom - top + 10,
    };
}

export const SelectionBox = memo(
    ({
        selectedElementId,
        drawnElements,
        panOffset,
        resizeHandler,
        onMouseUp,
    }: SelectionBoxProps) => {
        const selectedItem = drawnElements[selectedElementId];

        let bounds = useMemo(() => boundingBox(selectedItem, panOffset), [selectedItem, panOffset]);

        let resizeHandleStyles =
            "bg-white w-2 h-2 absolute z-50 outline-blue-500 outline outline-1 select-none";

        if (!bounds) return null;

        return (
            <>
                <div
                    className="bg-transparent absolute z-50 outline-blue-500 outline outline-1 pointer-events-none "
                    style={{
                        top: bounds.y,
                        left: bounds.x,
                        width: bounds.width,
                        height: bounds.height,
                    }}
                />

                {/* Resize handlers  */}
                {/* Top Left */}
                <div
                    className="bg-white w-2 h-2 absolute z-50 select-none outline-blue-500 outline outline-1 "
                    style={{
                        top: bounds.y - 4,
                        left: bounds.x - 4,
                        cursor: "nwse-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "tl");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Top right */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y - 4,
                        left: bounds.x + bounds.width - 4,
                        cursor: "nesw-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "tr");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Bottom Left */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y + bounds.height - 4,
                        left: bounds.x - 4,
                        cursor: "nesw-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "bl");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Bottom Right */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y + bounds.height - 4,
                        left: bounds.x + bounds.width - 4,
                        cursor: "nwse-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "br");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Top Mid */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y - 4,
                        left: bounds.x + bounds.width / 2 - 4,
                        cursor: "ns-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "tm");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Left Mid */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y + bounds.height / 2 - 4,
                        left: bounds.x - 4,
                        cursor: "ew-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "lm");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Right Mid */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y + bounds.height / 2 - 4,
                        left: bounds.x + bounds.width - 4,
                        cursor: "ew-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "rm");
                    }}
                    onMouseUp={onMouseUp}
                />

                {/* Bottom Mid */}
                <div
                    className={resizeHandleStyles}
                    style={{
                        top: bounds.y + bounds.height - 4,
                        left: bounds.x + bounds.width / 2 - 4,
                        cursor: "ns-resize",
                    }}
                    onMouseDown={(e: React.MouseEvent) => {
                        resizeHandler(e, "bm");
                    }}
                    onMouseUp={onMouseUp}
                />
            </>
        );
    }
);

SelectionBox.displayName = "SelectionBox";

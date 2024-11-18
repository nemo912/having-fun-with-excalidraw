import { ToolbarMenuItemWrapper } from "@/components/toolbar-menu/toolbar-menu-item-wrapper";
import { FontSizePicker } from "./font-size-picker";
import { FontFamilyPicker } from "./font-family-picker";
import { TextAlignPicker } from "./text-align-picker";
import { IsUnderlined } from '../is-underlined';

export const FontTool = () => {
    const items = [
        {
            element: <FontSizePicker />,
            title: "Font size",
        },
        {
            element: <FontFamilyPicker />,
            title: "Font family",
        },
        {
            element: <TextAlignPicker />,
            title: "Text align",
        },
        {
            element: <IsUnderlined />,
            title: "Text Underline",
        },
    ];

    return (
        <>
            {items.map((item) => (
                <ToolbarMenuItemWrapper key={item.title} title={item.title}>
                    {item.element}
                </ToolbarMenuItemWrapper>
            ))}
        </>
    );
};

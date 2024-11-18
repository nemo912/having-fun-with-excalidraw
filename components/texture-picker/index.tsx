import { ToolbarMenuItemWrapper } from "../toolbar-menu/toolbar-menu-item-wrapper";
import { Picker } from "./picker";

export const TexturePicker = () => {
    return (
        <ToolbarMenuItemWrapper title="Texture">
            <Picker />
        </ToolbarMenuItemWrapper>
    );
};

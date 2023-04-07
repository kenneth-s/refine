import { ActionIconProps,  ButtonProps } from "@mantine/core";

export const mapButtonVariantToActionIconVariant = (
    variant?: ButtonProps["variant"],
): ActionIconProps["variant"] | undefined => {
    switch (variant) {
        case "white":
            return "default";
        default:
            return variant;
    }
};

import { FC, HTMLAttributes } from "react"
import { IColors } from "../../types/Colors.type"
import { useTheme } from "@emotion/react"
import { ITheme } from "../../types/Theme.type"

export type IButtonProps = {
    color?: IColors
} & HTMLAttributes<HTMLButtonElement>;

export const Button : FC<IButtonProps> = ({
    color = "primary",
    children: children,
    ...props
}) => {
    const Theme = useTheme() as ITheme;
    
    return(
        <button
            style = {{
                backgroundColor : Theme.colors[color]
            }}
            {...props}
        >
            {children}
        </button>
    )
}
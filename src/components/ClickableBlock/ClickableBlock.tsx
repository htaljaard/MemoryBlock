import { Color } from "@mui/material";
import { FunctionComponent } from "react";

interface ClickableBlockProps {
    color: string;
    onClick: () => void;
}

const ClickableBlock: FunctionComponent<ClickableBlockProps> = ({ color, onClick }: ClickableBlockProps) => {

    function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
        onClick();
    }

    return (

        <>
            <div style={{ width: '100px', height: '100px', backgroundColor: color }} onClick={handleClick}></div>
        </>
    );
}

export default ClickableBlock;
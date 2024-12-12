import { Box, FormControl, Slider, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FunctionComponent, useState } from "react";
import ClickableBlock from "../ClickableBlock/ClickableBlock";

interface GameCanvasProps {

}

const GameCanvas: FunctionComponent<GameCanvasProps> = () => {
    const [difficulty, setDifficulty] = useState(5);
    return (

        <Box>
            <Stack>
                <FormControl>
                    <Typography variant='h4'>Choose your difficulty. ({difficulty})</Typography>
                    <Slider min={5} max={12} onChange={(e, v) => { setDifficulty(v as number) }} />
                </FormControl>
                { }
                <Container>
                    <Stack spacing={1}>
                        {Array.from({ length: difficulty }).map((_, rowIndex) => (
                            <Stack direction="row" spacing={1} key={rowIndex}>
                                {Array.from({ length: difficulty }).map((_, colIndex) => (
                                    <ClickableBlock
                                        key={colIndex}
                                        color="blue"
                                        onClick={() => console.log(`Clicked block at row ${rowIndex + 1}, col ${colIndex + 1}`)}
                                    />
                                ))}
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Stack>

        </Box>
    );
}

export default GameCanvas;
import { useEffect, useState } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularProps {
    value: number;
    stat: string;
}

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number, stat: string },
) {
  return (
    <>
        <Box sx={{ 
                position: 'relative', 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: "100%"
            }}
        >
        <CircularProgress color='error' variant="determinate" {...props} />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            >{`${Math.round(props.value)}`}</Typography>
        </Box>
        </Box>
        <Typography textAlign='center'>{props.stat}</Typography>
    </>
  );
}

export default function CircularStatic(props: CircularProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CircularProgressWithLabel value={progress} stat={props.stat} />;
}
import { Box, LinearProgress, styled, Typography } from "@mui/material";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  overflowY: "scroll",
  width: "100%",
})

type Stat = {
  name: string;
  baseStat: number;
};

interface StatsProps {
  stats: Stat[] | any[];
}

function Stats({stats}: StatsProps) {
  return (
    <Container>
      {stats.map((stat) => (
        <Box key={stat.name}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
            <Typography variant="body2" style={{ textTransform: "capitalize" }}>
              {stat.name}
            </Typography>
            <Typography variant="body2">{stat.baseStat}</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={Math.min(stat.baseStat, 100)} 
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#3b82f6"
              }
            }}
          />
        </Box>
      ))}
    </Container>
  )
}

export default Stats
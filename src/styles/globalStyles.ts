import { typeColors } from "@/utils/typeColors";
import { styled, Typography } from "@mui/material";

export const TypeBox = styled(Typography)<{ typeName: string }>(({ typeName }) => ({
    padding: '0.4em 0.9em',
    borderRadius: '999px',
    color: '#fff',
    backgroundColor: typeColors[typeName] || 'gray',
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: '0.875rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  }));
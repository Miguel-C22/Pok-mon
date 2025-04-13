import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    LinearProgress,
    Stack,
    styled
  } from "@mui/material"
  import { PokemonData } from "@/store"
import { TypeBox } from "@/styles/globalStyles"

  const Container = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    gap: "4em",
    justifyContent: "center",
  })

  const CustomCard = styled(Card)({
    borderRadius: 5,
    boxShadow: '0px 4px 12px rgba(0,0,0,0.5)',
    maxWidth: "300px",
    width: "100%"
  })
  
  interface PokemonProps {
    pokemonData: PokemonData[]
  }
  
  function PokemonDisplay({ pokemonData }: PokemonProps) {
    return (
      <Container>
          {pokemonData.map((pokemon) => (
              <CustomCard>
                <CardMedia
                  component="img"
                  height="100"
                  image={pokemon.regularImg}
                  alt={pokemon.name}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent>
                  <Typography variant="h5" textTransform="capitalize" gutterBottom>
                    {pokemon.displayName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {pokemon.description}
                  </Typography>
  
                  {/* Types */}
                  <Box my={2}>
                    <Typography fontWeight="bold">Types</Typography>
                    <Stack direction="row" spacing={1} mt={1}>
                      {pokemon.types.map((type) => (
                        <TypeBox typeName={type}>
                            {type}                     
                        </TypeBox>
                      ))}
                    </Stack>
                  </Box>
  
                  {/* Abilities */}
                  <Box my={2}>
                    <Typography fontWeight="bold">Abilities</Typography>
                    <Stack direction="row" spacing={1} mt={1}>
                      {pokemon.abilities.map((ability) => (
                        <Chip
                          key={ability}
                          label={ability}
                          size="small"
                          sx={{ textTransform: "capitalize", bgcolor: "#e0f2f1" }}
                        />
                      ))}
                    </Stack>
                  </Box>
  
                  {/* Stats */}
                  <Box>
                    <Typography fontWeight="bold" gutterBottom>
                      Stats
                    </Typography>
                    {pokemon.stats.map((stat) => (
                      <Box key={stat.name} mb={1}>
                        <Typography variant="body2" textTransform="capitalize">
                          {stat.name} ({stat.baseStat})
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={Math.min((stat.baseStat / 100) * 100, 100)}
                          sx={{ height: 8, borderRadius: 5 }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </CustomCard>
          ))}
      </Container>
    )
  }
  
  export default PokemonDisplay
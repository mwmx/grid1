import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ResponsiveGrid() {
  const input = Array.from(Array(9)).map((_, index) => {
    if (index === 4) {
      return (
        <Grid xs={2} sm={4} md={4} key={index}>
          <Item>
            <p>xs=2 (index={index})</p>
            <p>
              Gallia est omnis divisa in partes tres, quarum unam incolunt
              Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra
              Galli appellantur. Hi omnes lingua, institutis, legibus inter se
              differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et
              Sequana dividit. Horum omnium fortissimi sunt Belgae, propterea
              quod a cultu atque humanitate provinciae longissime absunt,
              minimeque ad eos mercatores saepe commeant atque ea quae ad
              effeminandos animos pertinent important, proximique sunt Germanis,
              qui trans Rhenum incolunt, quibuscum continenter bellum gerunt.
              Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt,
              quod fere cotidianis proeliis cum Germanis contendunt, cum aut
              suis finibus eos prohibent aut ipsi in eorum finibus bellum
              gerunt. Eorum una, pars, quam Gallos obtinere dictum est, initium
              capit a flumine Rhodano, continetur Garumna flumine, Oceano,
              finibus Belgarum, attingit etiam ab Sequanis et Helvetiis flumen
              Rhenum, vergit ad septentriones. Belgae ab extremis Galliae
              finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni,
              spectant in septentrionem et orientem solem. Aquitania a Garumna
              flumine ad Pyrenaeos montes et eam partem Oceani quae est ad
              Hispaniam pertinet; spectat inter occasum solis et septentriones.
            </p>
          </Item>
        </Grid>
      );
    }

    if (index === 6 || index === 5) {
      return <Grid xs={2} sm={4} md={4} key={index}></Grid>;
    }

    return (
      <Grid xs={2} sm={4} md={4} key={index}>
        <Item>xs=2 (index={index})</Item>
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {input}
      </Grid>
    </Box>
  );
}

const Demo = ResponsiveGrid;

export { Demo };

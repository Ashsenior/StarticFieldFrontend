import {Grid, Spacer, Text, Image, Link, Button} from "@nextui-org/react";
import styles from "../styles/hero.module.css"


export default function Hero() {
  return (
    <Grid.Container className={styles.main}>
      <Grid xs={12} md={6}>
        <div className={styles.heroText}>
          <Text
            h1
            size={40}
            weight={'semibold'}
            css={{
               margin:'0',
               padding:'0',
              "@xs": {
                fontSize: "20px",
                textAlign: "center",
              },
              "@md": {
                  fontSize: "40px",
                  textAlign: "left",
              },
            }}
          >
            The First Step To Electrifying Your Startup Journey
          </Text>
          <Text
            h1
            size={40}
            weight={'semibold'}
            css={{
               margin:'0',
               padding:'0',
              "@xs": {
                fontSize: "20px",
                textAlign: "center",
              },
              "@md": {
                  fontSize: "40px",
                  textAlign: "left",
              },
            }}
          >
              Starts Here!
          </Text>
          <Spacer x={4} />
            <Text
              h3
              css={{
                textGradient:
                  "to right, #3361AD 5%,#6061AC 10%,#39B8C8 20%,#6AC5AA 5%",
              }}
            >
              Startic Field
            </Text>
          <Button auto rounded css={{fontWeight:"semibold"}}>Join Discord</Button>
        </div>
      </Grid>
      <Grid xs={10} sm={6} md={6} className={styles.heroImage}>
        <Image src="heroCover.png" alt=""></Image>
      </Grid>
    </Grid.Container>
  );
}

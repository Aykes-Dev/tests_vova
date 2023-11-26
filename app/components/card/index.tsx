import { Card, CardActions, CardMedia, CardContent, Link, Typography } from "@mui/material";

export default function ImgMediaCard(props: any) {
    return (
        <Card sx={{ maxWidth: 500 }} key={props.id}>
            <CardMedia
                component="img"
                alt={props.cat.name}
                height="250"
                width="180"
                image={props.cat.image}
                style={{ minHeight: 250, maxHeight: 250, minWidth: 180 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.cat.name}
                </Typography>
                <Typography variant="body2" color="text.secondary"
                    style={{ maxHeight: 150,minHeight: 200, overflow: 'hidden' }}>
                    {props.cat.history}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/cats/${props.cat.id}`} underline="none">Learn More</Link>
            </CardActions>
        </Card>
    );
}
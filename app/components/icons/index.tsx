import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import { Link } from '@mui/material';

export default function Icons() {
    return (
        <Stack direction="row" spacing={3} className={styles.add_cir}>
            <Link className={styles.circle_button} underline='none' href='/cats/create'>+</Link>
        </Stack>
    );
}
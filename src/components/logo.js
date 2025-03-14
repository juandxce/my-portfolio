/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image src={image} alt="startup landing logo" style={{
        maxWidth: '80px'
      }} />
    </Link>
  );
}

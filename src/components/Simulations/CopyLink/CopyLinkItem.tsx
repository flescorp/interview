import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { MdContentCopy } from '@react-icons/all-files/md/MdContentCopy';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { TeamType } from '@/modules/simulataions/type';

interface Props {
  title: string;
  link: string;
  color?: string;
}

const LinkText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function CopyLinkItem({ title, link, color }: Props) {
  const copyClipBoard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert('복사 되었습니다.');
      })
      .catch(() => {
        alert('오류');
      });
  };

  return (
    <Box
      sx={{
        padding: '12px 0',
      }}
    >
      <Typography
        variant="h6"
        component="div"
      >
        {title}
      </Typography>
      <Grid
        container
        alignItems="center"
        sx={{
          height: '40px',
          marginTop: '8px',
          padding: '0 10px',
          borderRadius: '20px',
          background: color,
          cursor: 'pointer',
        }}
        onClick={copyClipBoard}
      >
        <Grid item xs={1}>
          <MdContentCopy fontSize="large" color="#ffffff" />
        </Grid>
        <Grid
          item
          xs={11}
          sx={{
            color: '#fff',
          }}
        >
          <LinkText>{link}</LinkText>
        </Grid>
      </Grid>
    </Box>
  );
}

CopyLinkItem.defaultProps = {
  color: '#514D4D',
};

export default CopyLinkItem;

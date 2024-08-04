import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "../../../../theme";
import { blue } from '@mui/material/colors';

const PracticedButton = ({isPracticed}) => {
  const {t} = useTranslation();

  return (
    <Box
      sx={{
        borderColor: theme.palette.primary.main,
        borderWidth:isPracticed?0:'1px',
        borderStyle:'solid',
        minWidth: "100px",
        minHeight:'30px',
        fontSize: "14px",
        display:"flex",        
        textTransform: "none",
        justifyContent:'center',
        alignItems: "center",
        color: isPracticed?'white':theme.palette.primary.main,
        opacity: 0.68,
        px: 1,
        borderRadius: 1,
        mx:1,
        backgroundColor:isPracticed?blue[500]:'none'
      }}
    >
      {t(isPracticed?'Practiced':'Unpracticed')}
    </Box>
  );
};
PracticedButton.propTypes = {
  isPracticed: PropTypes.bool.isRequired,
};

export default PracticedButton;

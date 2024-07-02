
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "../../../../theme";

const PracticedButton = () => {
  const {t} = useTranslation();

  return (
    <Box
      sx={{
        borderColor: theme.palette.primary.main,
        border:'1px',
        borderStyle:'solid',
        minWidth: "100px",
        minHeight:'30px',
        fontSize: "14px",
        display:"flex",        
        textTransform: "none",
        justifyContent:'center',
        alignItems: "center",
        color: theme.palette.primary.main,
        opacity: 0.68,
        px: 1,
        borderRadius: 1,
        mx:1
      }}
    >
      {t('Practiced')}
    </Box>
  );
};


export default PracticedButton;

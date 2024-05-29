import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabPanel from './TabPanel';
import QuestionTypeContent from './QuestionTypeContent';

const types = [
  { id: 0, title: 'All' },
  { id: 1, title: 'Vocabulary' },
  { id: 2, title: 'Speaking' },
  { id: 3, title: 'Listening' },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const QuestionTypeTabs = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {types.map(type => (
            <Tab key={type.id} label={t(type.title)} {...a11yProps(type.id)} />
          ))}
        </Tabs>
      </Box>
      {types.map(type => (
        <TabPanel value={value} index={type.id} key={type.id}>
          <QuestionTypeContent type={type} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default QuestionTypeTabs;

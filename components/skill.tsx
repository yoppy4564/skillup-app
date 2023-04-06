import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 70 },
      { name: 'Vue.js', level: 50 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 70 },
      { name: 'Python', level: 50 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 50 },
    ],
  },
];

const Skill = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  const selectedSkills = skillsData[tabIndex].skills;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">

    <Card>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Tabs value={tabIndex} onChange={handleChangeTab}>
            {skillsData.map((data) => (
              <Tab key={data.category} label={data.category} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={2}>
          {selectedSkills.map((skill) => (
            <Grid item xs={12} key={skill.name}>
              <Box display="flex" alignItems="center">
                <Typography sx={{ width: '100px' }}>{skill.name}</Typography>
                <Box sx={{ width: '200px', ml: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="caption">0%</Typography>
                    <Typography variant="caption">100%</Typography>
                  </Box>
                  <Box
                    sx={{
                      height: 8,
                      bgcolor: 'grey.300',
                      borderRadius: 999,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        height: 8,
                        bgcolor: 'primary.main',
                        borderRadius: 999,
                        width: `${skill.level}%`,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    </Box>
  );
};

export default Skill;

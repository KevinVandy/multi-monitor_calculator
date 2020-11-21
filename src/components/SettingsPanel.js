import React from 'react';
import {
  styled,
  Typography,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSetup } from '../context/SetupContext';

const StyledAccordion = styled(Accordion)({
  display: 'inline'
});

const StyledAccordionDetails = styled(AccordionDetails)({
  display: 'grid',
  gridGap: '0.5rem',
  padding: '1.5rem',
})

export const SettingsPanel = () => {
  const { scale, setScale, deskWidth, setDeskWidth } = useSetup();

  const handleScaleChange = (e, newValue) => {
    setScale(newValue);
  };

  const handleDeskWidthChange = (e, newValue) => {
    setDeskWidth(newValue);
  };

  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Settings</Typography>
        </AccordionSummary>
      <StyledAccordionDetails>
        <Typography>
          Zoom
          <Slider
            marks={[
              { value: 4, label: '25%' },
              { value: 16, label: '100%' },
              { value: 32, label: '200%' }
            ]}
            max={32}
            min={4}
            onChange={handleScaleChange}
            scale={(x) => ((x * 100) / 16).toFixed() + '%'}
            step={2}
            value={scale}
            valueLabelDisplay="auto"
          />
        </Typography>
        <Typography>
          Desk Width
          <Slider
            marks={[
              { value: 2, label: "2'" },
              { value: 6, label: "6'" },
              { value: 12, label: "12'" }
            ]}
            max={12}
            min={2}
            onChange={handleDeskWidthChange}
            scale={(x) => x + "'"}
            step={0.5}
            value={deskWidth}
            valueLabelDisplay="auto"
          />
        </Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

import React, { Component } from 'react'
import './footer.css'
import logo from '../img/logo.png'
import AvatarMarco from '../img/avatar/marco.jpg'
import AvatarVinicius from '../img/avatar/vinicius.jpeg'
import AvatarWilian from '../img/avatar/wilian.jpeg'

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
    root: {

      border: '1px solid rgba(47, 79, 79, 0.8)',
      color: 'white',
      backgroundColor: 'rgba(47, 79, 79, 0.4)',
      boxShadow: 'none',

      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      border: '1px solid rgba(47, 79, 79, 0.8)',
      marginBottom: 0,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
        
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {
    },
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  
  function CustomizedExpansionPanels() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography><img src={AvatarMarco} className="EBEAvatar"/> Marco Garcia</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Estudante de Engenharia de Software
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography><img src={AvatarVinicius} className="EBEAvatar"/> Vinicius Jacik</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Estudante de Engenharia de Software
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography><img src={AvatarWilian} className="EBEAvatar"/>Wilian Bueno</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Estudante de Engenharia de Software
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

function EBEFooter() {
    return (
        <footer className="pagefooter">
            <div id="footer-Row">

                <img src={logo} id="logo" alt="EBE Logo" />

                <div id="EBETeam">

                    <h5 id="EBETeamTitle">The EBE Team:</h5>

                    <CustomizedExpansionPanels />

                </div>

            </div>


            <div className="copyright">
                © Copyright 2020 Even Better Events
            </div>

        </footer>
    )

}

export default EBEFooter
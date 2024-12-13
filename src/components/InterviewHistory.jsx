import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Divider 
} from '@mui/material';

const InterviewHistory = ({ history }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Interview History
      </Typography>
      <List>
        {history.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography color="textSecondary" variant="subtitle2">
                    You:
                  </Typography>
                }
                secondary={item.userResponse}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography color="textSecondary" variant="subtitle2">
                    Interviewer:
                  </Typography>
                }
                secondary={item.aiResponse}
              />
            </ListItem>
            {index < history.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default InterviewHistory;
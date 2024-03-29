import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Collapse, List } from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const useStyles = makeStyles(theme => ({
    li: {
        display: "block"
    },
    text:{textDecoration: "line-through"}
}));
const DIVSTYLE = { margin: "4px", borderRadius: "10px", backgroundColor: "#b0bec5" }


const TodoItem = ({ content, time, features, removeItem, setItemDone, setItemStarred }) => {
    const { summary, description } = content;
    const { years, months, days, hours, minutes } = time;
    const { index, category, isStarred } = features;
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    } return (
        <div style={DIVSTYLE}>
            <ListItem button classes={{ container: classes.li }} onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText classes={category==="done"? {root: classes.text}: null} primary={`${summary} :  Today at ${hours}:${minutes}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={() => removeItem(index)}>
                        <DeleteIcon />
                    </IconButton>
                    <Button variant="contained" color="primary" onClick={() => setItemDone(index)}>{category === "todo"? "Done!": "Not done"}</Button>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem button onClick={handleClick} classes={{ container: classes.li }}>
                <ListItemText classes={category==="done"? {root: classes.text}: null} primary={`${description} ${days}/${months}/${years}`} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setItemStarred(index)}>
                            <SvgIcon>
                                <path fill={isStarred ? "#FFD700" : "#FFFFFF"} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                            </SvgIcon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Collapse>
        </div>
    );
}

// <React.Fragment>


//  <ListItem button={true}
//     // onClick={(e) => setItemDone(index, e)}
//     >
//         <IconButton onClick={(e) => setItemStarred(index, e)}>
//             <SvgIcon>
//                 <path fill={isStarred ? "#FFD700" : "#FFFFFF"} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
//             </SvgIcon>
//         </IconButton>
//         <ListItemText primary={`${description} ${due}`} />
//         <ListItemSecondaryAction>
//             <IconButton edge="end" aria-label="Delete" onClick={(e) => removeItem(index, e)}>
//                 <DeleteIcon />
//             </IconButton>
//         </ListItemSecondaryAction>
//     </ListItem>
//     <Collapse in={true} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//             <ListItem button className={classes.nested}>
//                 <ListItemIcon>
//                     <StarBorder />
//                     <Typography>dsa</Typography>
//                 </ListItemIcon>
//                 <ListItemText primary="Starred" >dsad</ListItemText>
//             </ListItem>
//         </List>
//     </Collapse>

{/* <ListItem button={true} className={classes.root} divider={true} onClick={(e) => setItemDone(index, e)}>
                <IconButton onClick={(e) => setItemStarred(index, e)}>
                    <SvgIcon>
                        <path fill={isStarred ? "#FFD700" : "#FFFFFF"} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </SvgIcon>
                </IconButton>
                <ListItemText primary={`${description} ${due}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={(e) => removeItem(index, e)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider /> */}
// </React.Fragment >



export default TodoItem

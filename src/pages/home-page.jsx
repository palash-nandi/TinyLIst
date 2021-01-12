import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../components/header";

import { Container, Input, Grid, FormControlLabel, IconButton, InputAdornment, List, ListItem, ListItemText, ListItemIcon, Checkbox, CircularProgress , Dialog} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Trash from '@material-ui/icons/Delete';
import { createTask, listTasks, deleteTasks, updateTask, completeTask, uncompleteTask } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  checkbox: {
    color: '#eb5757 !important'
},
})
const useStylelistinput = makeStyles(theme => ({
  root: {
    "& .MuiGrid-grid-xs-1": {
      [theme.breakpoints.up("md")]: {
        visibility: "hidden"
      }
    },
    "&:hover" : {
      "& .MuiGrid-grid-xs-1": {
          visibility: "inherit"
      }
    }
  }
}));
const HomePage = (props) => {
  const styles = useStyles()
  const dispatch = useDispatch();
  const todolist = useSelector(state => state.todoData.todolist)
  const _editIndx = useSelector(state => state.todoData.editIndex)
  const loading = useSelector(state => state.todoData.loading)
  const [editIndex, setEditIndex] = useState(_editIndx)
  const inpRef = useRef()
  
  const toggleComplete = (e, todo, i) => {

    setEditIndex(i)
    e.stopPropagation()
    if (e.target.checked) {
      // inpRef.current[i].classList.add("inputAnimation");
      //   setTimeout(() => {
      //     inpRef.current[i].classList.remove("inputAnimation");
      //   }, 2000);
        dispatch(completeTask({id: todo.id}))
    } else {
        dispatch(uncompleteTask({id: todo.id}))
    }
}

const createTodoList = (text) => {
  text = text.trim()
  if (text) { 
      dispatch(createTask({task: { description : text}}));
      inpRef.current.value=''
  }
}

const updateTodo = (text, todo, i) => {
  text = text.trim()
  if (text) {
      dispatch(updateTask({data: {task: { description : text}}, id: todo.id}));
  }
}

const deleteTodo = (todo, indx) => { console.log(todo,'sppp',indx)
  setEditIndex(indx)
  dispatch(deleteTasks({id: todo.id}))
}

const [completed, incomplete] = useMemo(() => {
  const completed = [], incomplete = []
  todolist?.forEach(element => {
      if (element?.completed_at) {
          completed.push(element)
      } else {
          incomplete.push(element)
      }
  });
  return [
      completed.sort((a, b) => new Date(a.completed_at).getTime() - new Date(b.completed_at).getTime()), 
      incomplete.sort((a, b) => new Date(b.updated_at ? b.updated_at : b.created_at).getTime() - new Date(a.updated_at ? a.updated_at : a.created_at).getTime())
  ]
}, [todolist])

useEffect(() => {
  dispatch(listTasks())
}, [dispatch])
useEffect(() => {
 setEditIndex()
}, [todolist])

const listinput = useStylelistinput()

    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Header />
            
            {/* <div className="loader"><CircularProgress /></div> */}
            <Container maxWidth="sm">
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70, marginVertical: 15,}}>
                <AddIcon style={{marginRight: 10,color:'#eb5757' }} onClick={() => createTodoList(inpRef.current.value)} />
                <Input inputRef={inpRef} placeholder="Add to list..." style={{width: '92%', borderBottomColor: 'blue' , color:'#eb5757'}}  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      createTodoList(e.target.value)
                    }
                }}/>
              </div>
              {incomplete?.concat(completed)?.map((todo, i) =>
              <Grid justify="center" classes={listinput} container key={todo.id} ref={el => (inpRef.current[i] = el)}>
                <Grid direction="row"
                  justify="center" item xs={11}>
                  <FormControlLabel
                    value="social"
                    control={<Checkbox color="primary" classes={{root: styles.checkbox}} checked={!!todo.completed_at} onChange={e => toggleComplete(e, todo, i)} />}
                    label={todo.description}
                    labelPlacement="social"
                    style={{textDecoration: todo.completed_at ? 'line-through' : ''}}
                  />
                </Grid>
                {loading && editIndex === i? <CircularProgress />:
                <Grid item xs={1} style={{ display: 'flex', alignSelf: 'center', justifyContent: 'flex-end' }} onClick={() => deleteTodo(todo, i)}>
                  <Trash style={{ fontSize: 20 }} />
                </Grid>}
              </Grid>
              )}
            </Container>


          </main>
        </div>
      </div>
    );
  
}



export default HomePage;

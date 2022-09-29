export const Task = (props)=> {
  console.log(props.completed);
  const styles = {
    Active: {
        backgroundColor: 'orange'
    },
    Inactive: {
        backgroundColor: 'fff'
    },
}
  return(
    
            <div className="task" style={props.completed?styles.Active:styles.Inactive}>
              <h1>{props.taskName}</h1>
              <button onClick={()=>props.chngeComplete(props.id)}>complete</button>
              <button onClick={() => props.deleteList(props.id)}>X</button>
            </div>
  );
}